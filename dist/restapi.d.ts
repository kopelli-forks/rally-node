import { callback } from "./util/callback";
import { GetResult } from "./types/GetResult";
import { QueryOptions } from './types/QueryOptions';
import { QueryResult } from "./types/QueryResult";
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
    private request;
    /**
     * @param options (optional) - optional config for the REST client
     */
    constructor(options?: IRestApiOptions);
    private collectionPost;
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
    create(options: any, callback: any): Promise<any>;
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
    update(options: any, callback: any): Promise<any>;
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
    del(options: any, callback: any): Promise<any>;
    /**
     * Get an object
     * @param options [required] The get options
     * @param cb [optional] A callback when the operation completes
     */
    get<T>(options: any, cb?: callback<GetResult<T>>): Promise<GetResult<T>>;
    /**
     Query for objects
     @param options - The query options
     @param callback - A callback to be called when the operation completes
     */
    query<T>(options: QueryOptions, callback?: callback<T>): Promise<QueryResult<T>>;
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
    add(options: any, callback: any): Promise<any>;
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
    remove(options: any, callback: any): Promise<any>;
}
export {};
