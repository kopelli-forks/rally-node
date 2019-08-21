import { PersistableObject } from "./PersistableObject";
import { Subscription } from "./Subscription";
export declare abstract class DomainObject extends PersistableObject {
    readonly Subscription: Subscription;
}
