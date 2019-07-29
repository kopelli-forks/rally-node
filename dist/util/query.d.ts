/**
 @module Query

 This module contains utility methods for working with the Rally query syntax
 */
export default class Query {
    private left;
    private op;
    private right;
    constructor(left: string | Query, op: string, right: string | Query);
    toQueryString(): string;
    and(left: string | Query, op: string, right: string | Query): Query;
    or(left: string | Query, op: string, right: string | Query): Query;
}
export declare function where(left: string | Query, op: string, right: string | Query): Query;