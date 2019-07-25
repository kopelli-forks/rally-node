import request from 'request';
import _ from 'lodash';
import callbackify from './util/callbackify';
import { callback } from './util/callback';
import { RequestError } from './RequestError';

const generateError: (x: string[]) => RequestError = (errorMessages: string[]) => {
  const e = new RequestError(errorMessages[0]);
  e.errors = errorMessages;
  return e;
}

interface IRequestConstructorOptions {
  requestOptions?: {
    headers?: {
      zsessionid: string;
    };
  };
  server?: string;
  apiVersion?: string;
}

export default class Request {
  private wsapiUrl: string;
  private jar: request.CookieJar;
  private _requestOptions: request.CoreOptions;
  private httpRequest: request.RequestAPI<request.Request, request.CoreOptions, request.RequiredUriUrl>;
  private _hasKey: any;
  private _token: any;
  constructor(options: IRequestConstructorOptions) {
    this.wsapiUrl = `${options.server}/slm/webservice/${options.apiVersion}`;
    this.jar = request.jar();
    this._requestOptions = Object.assign({ jar: this.jar }, options.requestOptions);
    this.httpRequest = request.defaults(this._requestOptions);
    this._hasKey = options.requestOptions &&
        options.requestOptions.headers &&
        options.requestOptions.headers.zsessionid;
  }

  private auth(): Promise<any> {
    return this.doRequest('get', {
      url: '/security/authorize'
    }).then((result) => {
      this._token = result.SecurityToken;
    });
  }

  private doSecuredRequest(method: string, options: request.UrlOptions, callback?: callback<any>): Promise<any> {
    if (this._hasKey) {
      return this.doRequest(method, options, callback);
    }

    const doRequest: () => Promise<any> = () => {
      const requestOptions = _.merge(
        {},
        options,
        {
          qs: {
            key: this._token
          }
        }
      );
      return this.doRequest(method, requestOptions);
    };

    let securedRequestPromise;
    if (this._token) {
      securedRequestPromise = doRequest();
    } else {
      securedRequestPromise = this.auth().then(doRequest);
    }
    callbackify(securedRequestPromise, callback);
    return securedRequestPromise;
  }

  private doRequest(method: string, options: request.UrlOptions, callback?: callback<any>): Promise<any> {
    const doRequestPromise = new Promise<any>((resolve, reject) => {
      const requestOptions = _.merge({}, options, {
        url: this.wsapiUrl + options.url
      });
      const requestCallback: request.RequestCallback = (err, response, body) => {
        if (err) {
          reject(generateError([err]));
        } else if (!response) {
          reject(generateError([`Unable to connect to server: ${this.wsapiUrl}`]));
        } else if (!body || !_.isObject(body)) {
          reject(generateError([`${options.url}: ${response.statusCode}! body=${body}`]));
        } else {
          const result = _.values(body)[0] as any;
          if (result.Errors.length) {
            reject(generateError(result.Errors));
          } else {
            resolve(result);
          }
        }
      };
      switch (method) {
        case 'get':
          return this.httpRequest.get(requestOptions, requestCallback);
        case 'post':
          return this.httpRequest.post(requestOptions, requestCallback);
        case 'put':
          return this.httpRequest.put(requestOptions, requestCallback);
        case 'del':
          return this.httpRequest.del(requestOptions, requestCallback);
      }
    });

    callbackify(doRequestPromise, callback);
    return doRequestPromise;
  }

  get<T>(options: request.UrlOptions, callback?: callback<T>): Promise<T> {
    return this.doRequest('get', options, callback);
  }
  post<T>(options: request.UrlOptions, callback?: callback<T>): Promise<T> {
    return this.doSecuredRequest('post', options, callback);
  }
  put<T>(options: request.UrlOptions, callback?: callback<T>): Promise<T> {
    return this.doSecuredRequest('put', options, callback);
  }
  del<T>(options: request.UrlOptions, callback?: callback<T>): Promise<T> {
    return this.doSecuredRequest('del', options, callback);
  }
}
