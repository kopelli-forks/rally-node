import { RankableArtifact } from "./RankableArtifact";
import { long, double, dateTime } from "./types";
import { Attachment } from "./Attachment";
import { User } from "./User";
import { Risk } from "./Risk";
import { State } from "./State";
import { PreliminaryEstimate } from "./PreliminaryEstimate";
export declare abstract class PortfolioItem extends RankableArtifact {
    /**
     * Count of accepted leaf user stories (stories without children) associated with this Portfolio Item.
     */
    readonly AcceptedLeafStoryCount?: long;
    /**
     * Sum of the plan estimates of all accepted leaf user stories (stories without children) associated with this Portfolio Item.
     */
    readonly AcceptedLeafStoryPlanEstimateTotal?: double;
    /**
     * The actual end date for this portfolio item.
     */
    readonly ActualEndDate?: dateTime;
    /**
     * The actual start date for this portfolio item.
     */
    readonly ActualStartDate?: dateTime;
    /**
     * The value indicating if a Portfolio Item has been archived.
     */
    Archived?: boolean;
    /**
     * Attachments associated with this portfolio item.
     */
    Attachments?: Attachment[];
    /**
     * Flag to determine if this artifact is blocked.
     */
    Blocked?: boolean;
    /**
     * The reason this artifact is blocked.
     */
    BlockedReason?: string;
    /**
     * All users who have contributed or have been an owner of this Portfolio Item or any associated work item.
     */
    readonly Collaborators?: User[];
    /**
     * The number of direct children (User Stories or Portfolio Items) for this Portfolio Item.
     */
    readonly DirectChildrenCount?: long;
    /**
     * Alphanumeric rank value.
     */
    readonly DragAndDropRank?: string;
    /**
     * What Investment Category this Portfolio Item belongs to.
     */
    InvestmentCategory?: "" | "Short Term Growth" | "Strategic Growth" | "Cost Savings" | "Maintenance";
    /**
     * The WSJF Job Size for a Portfolio Item (minimum value is 1).
     */
    JobSize?: long;
    /**
     * Count of all leaf user stories (stories without children) associated with this Portfolio Item
     */
    readonly LeafStoryCount?: long;
    /**
     * Sum of the plan estimates of all leaf user stories (stories without children) associated with this Portfolio Item.
     */
    readonly LeafStoryPlanEstimateTotal?: double;
    /**
     * Percentage of leaf user stories (stories without children) associated with this Portfolio Item that have been accepted.
     */
    readonly PercentDoneByStoryCount?: double;
    /**
     * Percentage of the plan estimates for accepted leaf user stories (i.e. stories without children) that are associated with this Portfolio Item.
     */
    readonly PercentDoneByStoryPlanEstimate?: double;
    /**
     * The planned end date for this portfolio item.
     */
    PlannedEndDate?: dateTime;
    /**
     * The planned start date for this portfolio item.
     */
    PlannedStartDate?: dateTime;
    /**
     * Type Definition Name
     */
    readonly PortfolioItemTypeName?: string;
    /**
     * The Preliminary Estimate for a Portfolio Item.
     */
    PreliminaryEstimate?: PreliminaryEstimate;
    /**
     * The Value of the Prelimiary Estimate for a Portfolio Item.
     */
    readonly PreliminaryEstimateValue?: long;
    /**
     * Moved to Recycle Bin
     */
    readonly Recycled?: boolean;
    /**
     * The Refined Estimate for a Portfolio Item.
     */
    RefinedEstimate?: long;
    /**
     * The Risks affecting this work item.
     */
    Risks?: Risk[];
    /**
     * A non-negative integer representing risk.
     */
    RiskScore?: long;
    /**
     * The WSJF Reduced Risk/Opportunity Enablement Value for a Portfolio Item (minimum value is 1).
     */
    RROEValue?: long;
    /**
     * Kanban state for this Portfolio Item.
     */
    State?: State;
    /**
     * The timestamp of the last state change.
     */
    StateChangedDate?: dateTime;
    /**
     * The WSJF Time Criticality for a Portfolio Item (minimum value is 1).
     */
    TimeCriticality?: long;
    /**
     * Count of un-estimated leaf user stories (stories without children) associated with this Portfolio Item.
     */
    readonly UnEstimatedLeafStoryCount?: long;
    /**
     * The WSJF User and/or Business Value for a Portfolio Item (minimum value is 1)
     */
    UserBusinessValue?: long;
    /**
     * A non-negative integer representing value.
     */
    ValueScore?: long;
    /**
     * The WSJF Score for a Portfolio Item.
     */
    WSJFScore?: double;
}
