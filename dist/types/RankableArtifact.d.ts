import { Artifact } from "./Artifact";
export declare abstract class RankableArtifact extends Artifact {
    /**
     * Alphanumeric rank value
     */
    readonly DragAndDropRank?: string;
}
