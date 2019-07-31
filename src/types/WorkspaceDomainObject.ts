import { DomainObject } from "./DomainObject";
import { Workspace } from "./Workspace";

export abstract class WorkspaceDomainObject extends DomainObject {
  Workspace?: Workspace;
}
