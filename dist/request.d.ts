import request from 'request';
import { callback } from './util/callback';
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
    private wsapiUrl;
    private jar;
    private _requestOptions;
    private httpRequest;
    private _hasKey;
    private _token;
    constructor(options: IRequestConstructorOptions);
    private auth;
    private doSecuredRequest;
    private doRequest;
    get<T>(options: request.UrlOptions, callback?: callback<T>): Promise<T>;
    post<T>(options: request.UrlOptions, callback?: callback<T>): Promise<T>;
    put<T>(options: request.UrlOptions, callback?: callback<T>): Promise<T>;
    del<T>(options: request.UrlOptions, callback?: callback<T>): Promise<T>;
}
export {};
