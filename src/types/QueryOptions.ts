import request from "request";
import Query from "../util/query";

export class QueryOptions {
  /**
   * The ref of the collection to query, e.g. /defect/12345/tasks (required if type not specified)
   */
  ref?: string;

  /**
   * The type to query, e.g. defect, hierarchicalrequirement (required if ref not specified)
   */
  type?: string; //TODO: make this enum/string values
  
  /**
   * the default scoping to use.  if not specified server default will be used.
   */
  scope?: {
    /**
     * the workspace
     */
    workspace?: string;

    /**
     * the project, or null to include entire workspace
     */
    project?: string;

    /**
     * true to include parent project data, false otherwise
     */
    up?: boolean;

    /**
     * true to include child project data, false otherwise
     */
    down?: boolean;
  }

  /**
   * the 1 based start index
   */
  start?: number;

  /**
   * the page size, 1 - 200 (default=200)
   */
  pageSize?: number;

  /**
   * the maximum number of records to return
   */
  limit?: number;

  /**
   * the fields to include on each returned record
   */
  fetch?: string | string[];

  /**
   * the order by which to sort the results
   */
  order?: string | string[];

  /**
   * a query to filter the result set
   */
  query?: string | Query;

  /**
   * Additional options to be applied to the request: https://github.com/mikeal/request (optional)
   */
  requestOptions?: request.CoreOptions;
}