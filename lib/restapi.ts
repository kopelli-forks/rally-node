/**
 @module RestApi

 This module presents a higher-level API for interacting with resources
 in the Rally REST API.
 */
import _ from 'lodash';
import Request from './request';
import callbackify from './util/callbackify';
import refUtils from './util/ref';
import pkgInfo from '../package.json';

const defaultServer = 'https://rally1.rallydev.com';
const defaultApiVersion = 'v2.0';

interface IRequestOptions {
  project?: string | null;
  projectScopeUp?: boolean;
  projectScopeDown?: boolean;
  workspace?: string | null;
  fetch?: string;
}
function optionsToRequestOptions(options: any) {
  const qs: IRequestOptions = {};
  if (options.scope) {
    if (options.scope.project) {
      qs.project = refUtils.getRelative(options.scope.project);
      if (options.scope.hasOwnProperty('up')) {
        qs.projectScopeUp = options.scope.up;
      }
      if (options.scope.hasOwnProperty('down')) {
        qs.projectScopeDown = options.scope.down;
      }
    } else if (options.scope.workspace) {
      qs.workspace = refUtils.getRelative(options.scope.workspace);
    }
  }
  if (_.isArray(options.fetch)) {
    qs.fetch = options.fetch.join(',');
  } else if (_.isString(options.fetch)) {
    qs.fetch = options.fetch;
  }

  return {
    qs: qs
  };
}

/**
 * Configuration options for the REST client.
 */
interface IRestApiOptions {
  /**
   * server for the Rally API (default: https://rally1.rallydev.com)
   */
  server?: string;

  /**
   * the Rally REST API version to use for requests (default: v2.0)
   */
  apiVersion?: string;

  /**
   * the api key to use for requests (default: RALLY_API_KEY env variable)
   */
  apiKey?: string;

  /**
   * default options for the request: https://github.com/mikeal/request
   */
  requestOptions?: object;

  userName?: string;
  user?: string;
  password?: string;
  pass?: string;
}
/**
 The Rally REST API client
 */
export default class RestApi {
  private request: Request;
  /**
   * @param options (optional) - optional config for the REST client
   */
  constructor(options: IRestApiOptions) {
    options = _.merge({
      server: defaultServer,
      apiVersion: defaultApiVersion,
      requestOptions: {
        json: true,
        gzip: true,
        headers: {
          'X-RallyIntegrationLibrary': `${pkgInfo.description} v${pkgInfo.version}`,
          'X-RallyIntegrationName': pkgInfo.description,
          'X-RallyIntegrationVendor': 'Rally Software, Inc.',
          'X-RallyIntegrationVersion': pkgInfo.version
        }
      }
    }, options);

    const apiKey = (options && options.apiKey) || process.env.RALLY_API_KEY;
    if (apiKey) {
      options = _.merge({
        requestOptions: {
          headers: {
            zsessionid: apiKey
          },
          jar: false
        }
      }, options);
    } else {
      options = _.merge({
        requestOptions: {
          auth: {
            user: (options && (options.user || options.userName)) || process.env.RALLY_USERNAME,
            pass: (options && (options.pass || options.password)) || process.env.RALLY_PASSWORD,
            sendImmediately: false
          }
        }
      }, options);
    }

    this.request = new Request(options);
  }

  private collectionPost(options: any, operation: string, callback: any) {
    return this.request.post(
      _.merge(
        {
          url: `${refUtils.getRelative(options.ref)}/${options.collection}/${operation}`,
          json: {CollectionItems: options.data}
        },
        options.requestOptions,
        optionsToRequestOptions(options)
      ),
      callback
    );
  }

  /**
   Create a new object
   @param {object} options - The create options (required)
   - @member {string} type - The type to be created, e.g. defect, hierarchicalrequirement, etc. (required)
   - @member {object} data - Key/value pairs of data with which to populate the new object (required)
   - @member {object} scope - the default scoping to use.  if not specified server default will be used.
   - @member {ref} scope.workspace - the workspace
   - @member {string/string[]} fetch - the fields to include on the returned record
   - @member {object} requestOptions - Additional options to be applied to the request: https://github.com/mikeal/request (optional)
   @param {function} callback - A callback to be called when the operation completes
   - @param {string[]} errors - Any errors which occurred
   - @param {object} result - the operation result
   @return {promise}
   */
  create(options: any, callback: any) {
    const postBody: any = {};
    postBody[options.type] = options.data;
    return this.request.post(
      _.merge(
        {
          url: `/${options.type}/create`,
          json: postBody
        },
        options.requestOptions,
        optionsToRequestOptions(options)
      ),
      callback
    );
  }

  /**
   Update an object
   @param {object} options - The update options (required)
   - @member {string} ref - The ref of the object to update, e.g. /defect/12345 (required)
   - @member {object} data - Key/value pairs of data with which to update object (required)
   - @member {object} scope - the default scoping to use.  if not specified server default will be used.
   - @member {ref} scope.workspace - the workspace
   - @member {string/string[]} fetch - the fields to include on the returned record
   - @member {object} requestOptions - Additional options to be applied to the request: https://github.com/mikeal/request (optional)
   @param {function} callback - A callback to be called when the operation completes
   - @param {string[]} errors - Any errors which occurred
   - @param {object} result - the operation result
   @return {promise}
   */
  update(options: any, callback: any) {
    const postBody: any = {};
    postBody[refUtils.getType(options.ref)] = options.data;
    return this.request.put(
      _.merge(
        {
          url: refUtils.getRelative(options.ref),
          json: postBody
        },
        options.requestOptions,
        optionsToRequestOptions(options)
      ),
      callback
    );
  }

  /**
   Delete an object
   @param {object} options - The delete options (required)
   - @member {string} ref - The ref of the object to delete, e.g. /defect/1234
   - @member {object} scope - the default scoping to use.  if not specified server default will be used.
   - @member {ref} scope.workspace - the workspace
   - @member {object} requestOptions - Additional options to be applied to the request: https://github.com/mikeal/request (optional)
   @param {function} callback - A callback to be called when the operation completes
   - @param {string[]} errors - Any errors which occurred
   - @param {object} result - the operation result
   @return {promise}
   */
  del(options: any, callback: any) {
    return this.request.del(
      _.merge(
        {
          url: refUtils.getRelative(options.ref)
        },
        options.requestOptions,
        optionsToRequestOptions(options)
      ),
      callback
    );
  }

  /**
   Get an object
   @param {object} options - The get options (required)
   - @member {string} ref - The ref of the object to get, e.g. /defect/12345 (required)
   - @member {object} scope - the default scoping to use.  if not specified server default will be used.
   - @member {ref} scope.workspace - the workspace
   - @member {string/string[]} fetch - the fields to include on the returned record
   - @member {object} requestOptions - Additional options to be applied to the request: https://github.com/mikeal/request (optional)
   @param {function} callback - A callback to be called when the operation completes
   - @param {string[]} errors - Any errors which occurred
   - @param {object} result - the operation result
   @return {promise}
   */
  get(options: any, callback: any) {
    const getPromise = this.request.get(
      _.merge(
        {
          url: refUtils.getRelative(options.ref)
        },
        options.requestOptions,
        optionsToRequestOptions(options)
      )
    ).then(function(result) {
      return {
        Errors: result.Errors,
        Warnings: result.Warnings,
        Object: _.omit(result, ['Errors', 'Warnings'])
      };
    });

    callbackify(getPromise, callback);
    return getPromise;
  }

  /**
   Query for objects
   @param {object} options - The query options (required)
   - @member {string} ref - The ref of the collection to query, e.g. /defect/12345/tasks (required if type not specified)
   - @member {string} type - The type to query, e.g. defect, hierarchicalrequirement (required if ref not specified)
   - @member {object} scope - the default scoping to use.  if not specified server default will be used.
   - @member {ref} scope.workspace - the workspace
   - @member {ref} scope.project - the project, or null to include entire workspace
   - @member {ref} scope.up - true to include parent project data, false otherwise
   - @member {ref} scope.down - true to include child project data, false otherwise
   - @member {int} start - the 1 based start index
   - @member {int} pageSize - the page size, 1 - 200 (default=200)
   - @member {int} limit - the maximum number of records to return
   - @member {string/string[]} fetch - the fields to include on each returned record
   - @member {string/string[]} order - the order by which to sort the results
   - @member {string/query} query - a query to filter the result set
   - @member {object} requestOptions - Additional options to be applied to the request: https://github.com/mikeal/request (optional)
   @param {function} callback - A callback to be called when the operation completes
   - @param {string[]} errors - Any errors which occurred
   - @param {object} result - the operation result
   @return {promise}
   */
  query(options: any, callback: any) {
    const self = this;
    options = _.merge({
      start: 1,
      pageSize: 200
    }, options);

    const requestOptions = _.merge({
      url: refUtils.getRelative(options.ref) || `/${options.type}`,
      qs: {
        start: options.start,
        pagesize: options.limit ? Math.min(options.pageSize, options.limit) : options.pageSize
      }
    }, options.requestOptions, optionsToRequestOptions(options));
    if (_.isArray(options.order)) {
      requestOptions.qs.order = options.order.join(',');
    } else if (_.isString(options.order)) {
      requestOptions.qs.order = options.order;
    }
    if (options.query) {
      requestOptions.qs.query = (options.query.toQueryString &&
          options.query.toQueryString()) || options.query;
    }

    let results: any[] = [];

    function loadRemainingPages(result: any): any {
      const pageResults = result.Results;
      results = results.concat(pageResults);
      if (options.limit && result.StartIndex + options.pageSize <= Math.min(options.limit || options.pageSize, result.TotalResultCount)) {
        return self.request.get(_.merge(requestOptions, {
          qs: {
            start: result.StartIndex + options.pageSize
          }
        })).then(loadRemainingPages);
      } else {
        result.Results = results.slice(0, options.limit || results.length);
        result.StartIndex = options.start;
        result.PageSize = results.length;
        return result;
      }
    }

    const queryPromise = this.request.get(requestOptions).then(loadRemainingPages);

    callbackify(queryPromise, callback);
    return queryPromise;
  }

  /**
   Adds items to a collection
   @param {object} options - The add options (required)
   - @member {string} ref - The ref of the collection to update, e.g. /user/12345 (required)
   - @member {string} collection - The name of the collection to update, e.g. 'TeamMemberships (required)
   - @member {object} data - [{_ref: objectRef}, {Name:"Joe"}], things to be added to the collection (required)
   - @member {string/string[]} fetch - the fields to include on the returned records
   - @member {object} scope - the default scoping to use.  if not specified server default will be used.
   - @member {ref} scope.workspace - the workspace
   - @member {object} requestOptions - Additional options to be applied to the request: https://github.com/mikeal/request (optional)
   @param {function} callback - A callback to be called when the operation completes
   - @param {string[]} errors - Any errors which occurred
   - @param {object} result - the operation result
   @return {promise}
   */
  add(options: any, callback: any) {
    return this.collectionPost(options, 'add', callback);
  }

  /**
   Remove items from a collection
   @param {object} options - The remove options (required)
   - @member {string} ref - The ref of the collection to update, e.g. /user/12345 (required)
   - @member {string} collection - The name of the collection to update, e.g. 'TeamMemberships (required)
   - @member {object} data - [{_ref: objectRef}], where the objectRefs are to be removed from the collection (required)
   - @member {string/string[]} fetch - the fields to include on the returned records
   - @member {object} scope - the default scoping to use.  if not specified server default will be used.
   - @member {ref} scope.workspace - the workspace
   - @member {object} requestOptions - Additional options to be applied to the request: https://github.com/mikeal/request (optional)
   @param {function} callback - A callback to be called when the operation completes
   - @param {string[]} errors - Any errors which occurred
   - @param {object} result - the operation result
   @return {promise}
   */
  remove(options: any, callback: any) {
    return this.collectionPost(options, 'remove', callback);
  }
}
