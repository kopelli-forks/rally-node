import request from "request";
import Query from "./util/query";
declare type long = number;
declare type dateTime = Date;
export declare abstract class PersistableObject {
    readonly CreationDate: dateTime | undefined;
    readonly ObjectID: number | undefined;
    readonly ObjectUUID: string | undefined;
    readonly VersionId?: number;
}
export declare abstract class DomainObject extends PersistableObject {
    readonly Subscription: Subscription | undefined;
}
export declare class Subscription extends PersistableObject {
    readonly ApiKeysEnabled?: boolean;
    readonly CORSEnabled?: boolean;
    readonly EmailEnabled?: boolean;
    readonly ExpirationDate?: dateTime;
    readonly JSONPEnabled?: boolean;
    readonly MaximumCustomUserFields: long | undefined;
    readonly MaximumProjects: long | undefined;
    readonly Modules?: string;
    readonly Name: string | undefined;
    readonly PasswordExpirationDays?: long;
    readonly PLA?: boolean;
    readonly PreviousPasswordCount: long | undefined;
    readonly ProjectHierarchyEnabled?: boolean;
    readonly RevisionHistory?: RevisionHistory;
    readonly SessionTimeoutSeconds?: long;
    readonly SiteId: string | undefined;
    readonly SSOUserExceptions?: User[];
    readonly StoryHierarchyEnabled?: boolean;
    readonly StoryHierarchyType: 'None' | 'Limited' | 'Unlimited' | undefined;
    readonly SubscriptionID: number | undefined;
    readonly SubscriptionType: 'CE2014' | 'Express_Edition' | 'Enterprise' | 'Unlimited' | undefined;
    readonly WebhooksEnabled?: boolean;
    readonly Workspaces?: Workspace[];
    readonly ZuulID?: string;
}
export interface IAPIBaseAttributes {
    readonly _rallyAPIMajor: string;
    readonly _rallyAPIMinor: string;
}
export interface IAPIAttributes extends IAPIBaseAttributes {
    readonly _ref: string;
    readonly _refObjectName: string;
    readonly _refObjectUUID: string;
    readonly _type: string;
}
export declare class QueryResult<T> {
    Errors: string[];
    Warnings: string[];
    Results: T[];
    StartIndex: number;
    PageSize: number;
    TotalResultCount: number;
}
export declare class GetResult<T> {
    Errors: string[];
    Warnings: string[];
    Object: T;
}
export declare class Secured {
    SecurityToken: string;
}
export declare class GetOptions {
    /**
     * [required] The ref of the object to get, e.g. /defect/12345
     */
    ref: string;
    /**
     * The default scoping to use.
     * If not specified, server default will be used.
     */
    scope?: OptionsScope;
    /**
     * The field(s) to include on the returned record
     */
    fetch?: string | string[];
    /**
     * Additional options to be applied to the request:
     * https://github.com/mikeal/request (optional)
     */
    requestOptions?: request.CoreOptions;
}
export declare class OptionsScope {
    /**
     * The workspace
     */
    workspace: string;
}
export declare class User extends DomainObject {
}
export declare abstract class WorkspaceDomainObject extends DomainObject {
}
export declare class Attachment extends WorkspaceDomainObject {
}
export declare class Project extends WorkspaceDomainObject {
}
export declare class AttachmentContent extends WorkspaceDomainObject {
}
export declare class Release extends WorkspaceDomainObject {
}
export declare class Iteration extends WorkspaceDomainObject {
}
export declare class Revision extends WorkspaceDomainObject {
}
export declare class RevisionHistory extends WorkspaceDomainObject {
}
export declare class TestCaseResult extends WorkspaceDomainObject {
}
export declare abstract class CumulativeFlowData extends WorkspaceDomainObject {
}
export declare class IterationCumulativeFlow extends CumulativeFlowData {
}
export declare class ReleaseCumulativeFlow extends CumulativeFlowData {
}
export declare abstract class Artifact extends WorkspaceDomainObject {
}
export declare class DefectSuite extends Artifact {
}
export declare class Defect extends Artifact {
}
export declare class Task extends Artifact {
}
export declare class TestCase extends Artifact {
}
export declare abstract class Requirement extends Artifact {
}
export declare class HierarchicalRequirement extends Requirement {
}
export declare abstract class Scope extends DomainObject {
}
export declare class Workspace extends OptionsScope {
}
export declare class QueryOptions {
    /**
     * The ref of the collection to query, e.g. /defect/12345/tasks (required if type not specified)
     */
    ref?: string;
    /**
     * The type to query, e.g. defect, hierarchicalrequirement (required if ref not specified)
     */
    type?: string;
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
    };
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
export {};
