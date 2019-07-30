import { PortfolioItem } from "./PortfolioItem";
import { PortfolioItemFeature } from "./PortfolioItemFeature";
import { State } from "./State";
import { PortfolioItemTheme } from "./PortfolioItemTheme";
export declare class PortfolioItemEpic extends PortfolioItem {
    /**
     * The Feature collection of a Initiative (read-only collection).
     */
    readonly Children?: PortfolioItemFeature[];
    /**
     * The Theme parent of this Epic.
     */
    Parent?: PortfolioItemTheme;
    /**
     * The initiative predecessors of this initiative.
     */
    Predecessors?: PortfolioItemEpic[];
    /**
     * Kanban state for this portfolio item.
     */
    State?: State;
    /**
     * The initiative successors of this initiative
     */
    Successors?: PortfolioItemEpic[];
}
