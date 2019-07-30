import { WorkspaceDomainObject } from "./WorkspaceDomainObject";
import { RevisionHistory } from "./RevisionHistory";
import { long } from "./types";
/**
 * Sizing/Estimate for Portfolio Items.
 */
export declare class PreliminaryEstimate extends WorkspaceDomainObject {
    /**
     * The description of this prelimiary estimate.
     */
    Description?: string;
    /**
     * The name of this prelimary estimate.
     */
    Name: string;
    /**
     * A reference to the revision history (read-only) of this state.
     */
    readonly RevisionHistory?: RevisionHistory;
    /**
     * A non-negative number that provides a quantitative value for the estimate.
     */
    Value?: long;
}
