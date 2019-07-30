import { PortfolioItem } from "./PortfolioItem";
import { long } from "./types";
import { Release } from "./Release";
import { State } from "./State";
import { HierarchicalRequirement } from "./HierarchicalRequirement";
import { ExternalContribution } from "./ExternalContribution";
import { PortfolioItemEpic } from "./PortfolioItemEpic";
export declare class PortfolioItemFeature extends PortfolioItem {
    /**
     * The External Contribution collection of a Feature (read-only collection).
     */
    readonly ExternalContributions?: ExternalContribution[];
    /**
     * The count of leaf children who are scheduled in a release or iteration that's later than this item's release.
     */
    readonly LateChildCount?: long;
    /**
     * The Initiative parent of this Feature.
     */
    Parent?: PortfolioItemEpic;
    /**
     * The feature predecessors of this feature.
     */
    Predecessors?: PortfolioItemFeature[];
    /**
     * The release of this Features.
     */
    Release?: Release;
    /**
     * Kanban state for this portfolio item.
     */
    State?: State;
    /**
     * The feature sucessors of this feature.
     */
    Successors?: PortfolioItemFeature[];
    /**
     * The Hierarchical Requirement collection of a Feature (read-only collection).
     */
    readonly UserStories?: HierarchicalRequirement[];
}
