import { WorkspaceDomainObject } from "./WorkspaceDomainObject";
import { long } from "./types";
import { RevisionHistory } from "./RevisionHistory";
/**
 * Provides a State.
 */
export declare class State extends WorkspaceDomainObject {
    /**
     * Is this state the accepted state?
     */
    AcceptedMarker?: boolean;
    /**
     * The state description.
     */
    Description?: string;
    /**
     * Is enabled indicator for a State.
     */
    Enabled?: boolean;
    /**
     * Is this state the in progress state?
     */
    InProgressMarker?: boolean;
    /**
     * Name of the state.
     */
    Name: string;
    /**
     * Order index for this State.
     */
    OrderIndex?: long;
    /**
     * A reference to the revision history (read-only) of this state.
     */
    readonly RevisionHistory?: RevisionHistory;
    /**
     * Work in progress limit for a State
     */
    WIPLimit?: long;
}
