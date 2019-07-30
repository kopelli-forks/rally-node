import { Artifact } from "./Artifact";

export abstract class RankableArtifact extends Artifact {
  /**
   * Alphanumeric rank value
   */
  readonly DragAndDropRank?: string;
}
