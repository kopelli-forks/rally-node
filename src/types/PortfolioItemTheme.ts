import { PortfolioItem } from "./PortfolioItem";
import { PortfolioItemEpic } from "./PortfolioItemEpic";
import { State } from "./State";

export class PortfolioItemTheme extends PortfolioItem {
  /**
   * The Epic collection of a Theme (read-only collection).
   */
  readonly Children?: PortfolioItemEpic[];

  /**
   * The Theme predecessors of this Theme.
   */
  Predecessors?: PortfolioItemTheme[];

  /**
   * Kanban state for this portfolio item.
   */
  State?: State;

  /**
   * The Theme successors of this Theme.
   */
  Successors?: PortfolioItemTheme[];
}