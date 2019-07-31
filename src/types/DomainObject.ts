import { PersistableObject } from "./PersistableObject";

import { Subscription } from "./Subscription";

export abstract class DomainObject extends PersistableObject {
  readonly Subscription!: Subscription;
}
