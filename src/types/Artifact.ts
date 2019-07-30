import { WorkspaceDomainObject } from "./WorkspaceDomainObject";
import { User } from "./User";
import { dateTime, long } from "./types";
import { Project } from "./Project";
import { RevisionHistory } from "./RevisionHistory";
import { Changeset } from "./Changeset";
import { Connection } from "./Connection";
import { ConversationPost } from "./ConversationPost";
import { Milestone } from "./Milestone";
import { Tag } from "./Tag";

export abstract class Artifact extends WorkspaceDomainObject {
  /**
   * Changesets associated with this artifact.
   */
  Changesets?: Changeset[];

  /**
   * Connections associated with this artifact.
   */
  readonly Connections?: Connection[];

  /**
   * User who created the artifact.
   */
  readonly CreatedBy?: User;

  /**
   * Artifact description, which is a rich-text field.
   */
  Description?: string;

  /**
   * The discussions for this artifact.
   */
  readonly Discussion?: ConversationPost[];

  /**
   * Display color for artifacts.
   */
  DisplayColor?: string;

  /**
   * Whether or not this Artifact is expedited.
   */
  Expedite?: boolean;

  /**
   * The formatted ID for an object. This is automatically assigned when an object is created and can never be changed.
   * In queries, only include the integer portion and omit the prefix.
   */
  readonly FormattedID!: string;

  /**
   * The last update date of an object. It is automatically assigned when an object is created or updated.
   */
  readonly LastUpdateDate!: dateTime;

  /**
   * The age in minutes of the latest discussion on this Defect.
   */
  readonly LatestDiscussionAgeInMinutes?: long;

  /**
   * The milestones associated with this artifact.
   */
  Milestones?: Milestone[];

  /**
   * The name of the artifact.
   */
  Name!: string;

  /**
   * Artifact notes, which is a rich-text field.
   */
  Notes?: string;

  /**
   * Artifact owner, a reference to the user.
   */
  Owner?: User;

  /**
   * The project this artifact is associated with.
   */
  Project!: Project;

  /**
   * Whether or not this Artifact is ready
   */
  Ready?: boolean;

  /**
   * A reference to the revision history (read-only) of the artifact.
   */
  readonly RevisionHistory?: RevisionHistory;

  /**
   * Tags for Artifact
   */
  Tags?: Tag[];
}
