import { Requirement } from "./Requirement";

import { Defect } from "./Defect";

import { PortfolioItemFeature } from "./PortfolioItemFeature";

import { dateTime, double } from "./types";

import { Iteration } from "./Iteration";

import { Release } from "./Release";

import { Risk } from "./Risk";

import { Task } from "./Task";

import { TestCase } from "./TestCase";

export class HierarchicalRequirement extends Requirement {
  /**
   * The date that this artifact's schedule state was set to accepted. This is automatically set.
   */
  readonly AcceptedDate?: Date;

  /**
   * Flat to determine if this artificat is blocked.
   */
  Blocked?: boolean;

  /**
   * The reason this artifact is blocked.
   */
  BlockedReason?: string;

  // TODO: Add Blocker

  /**
   * The children of the requirement (read-only collection)
   */
  readonly Children?: HierarchicalRequirement[];

  /**
   * The Defects associated with this artifct
   */
  readonly Defects?: Defect[];

  /**
   * The status of the Defects associated with this artifact
   */
  readonly DefectStatus!: "NONE" | "SOME_CLOSED" | "NONE_CLOSED" | "ALL_CLOSED"

  /**
   * Indicates the direct children count for a Hierarchical Requirement.
   */
  readonly DirectChildCount?: number

  /**
   * Alphanumeric rank value
   */
  readonly DragAndDropRank?: string;

  /**
   * The feature of this Hierarchical Requirement
   */
  readonly Feature?: PortfolioItemFeature;

  /**
   * Indicates whether this Hierarchical Requirement has a parent.
   */
  readonly HasParent?: boolean;

  /**
   * The date this requirement went in-progress.
   */
  readonly InProgressDate?: dateTime;

  /**
   * The iteration that this artifact is scheduled in.
   */
  Iteration?: Iteration;

  /**
   * The parent of this requirement.
   */
  Parent?: HierarchicalRequirement;

  /**
   * Plan estimate of this artifact
   */
  PlanEstimate?: double;

  /**
   * The Feature parent of this Hierarchical Requirement
   */
  PortfolioItem?: PortfolioItemFeature;

  /**
   * Temporal predecessors of this requirement. Predecessors must be completed before this requirement can be worked on.
   */
  Predecessors?: HierarchicalRequirement[];

  /**
   * Moved to Recycle Bin
   */
  Recycled?: boolean;

  /**
   * The release that this artifact is scheduled in.
   */
  Release?: Release;

  /**
   * The risks affecting this work item
   */
  Risks?: Risk[];

  /**
   * Temporal successors of this requirement. Successors cannot be completed before this requirement is completed.
   */
  Successors?: HierarchicalRequirement[];

  /**
   * Task actual total of this artifact.
   */
  readonly TaskActualTotal?: double;

  /**
   * Task estimate total of this artifact
   */
  readonly TaskEstimateTotal?: double;

  /**
   * Task reamaining total of this artifact (To Do)
   */
  readonly TaskRemainingTotal?: double;

  /**
   * Tasks associated with completing.
   */
  readonly Tasks?: Task[];

  /**
   * The status of the Tasks associated with this artifact.
   */
  readonly TaskStatus!: "NONE" | "DEFINED" | "IN_PROGRESS_BLOCKED" | "IN_PROGRESS" | "COMPLETED_BLOCKED" | "COMPLETED"

  /**
   * The Test Cases associated with this artifact.
   */
  readonly TestCases?: TestCase[];

  /**
   * The status of the TestCases associated with the artifact,
   */
  readonly TestCaseStatus!: "NONE" | "NONE_RUN" | "SOME_RUN_NONE_PASSING" | "SOME_RUN_SOME_NOT_PASSING" | "SOME_RUN_ALL_PASSING" | "ALL_RUN_NONE_PASSING" | "ALL_RUN_SOME_NOT_PASSING" | "ALL_RUN_ALL_PASSING"
}
