import { WorkspaceDomainObject } from "./WorkspaceDomainObject";
export declare class Tag extends WorkspaceDomainObject {
    /**
     * Flag indicating that this tag has been archived
     */
    Archived?: boolean;
    /**
     * The tag name
     */
    Name: string;
}
