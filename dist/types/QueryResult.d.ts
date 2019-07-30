export declare class QueryResult<T> {
    Errors: string[];
    Warnings: string[];
    Results: T[];
    StartIndex: number;
    PageSize: number;
    TotalResultCount: number;
}
