import { dateTime } from "./types";
/**
 * The base type of all persistable objects.
 */
export declare abstract class PersistableObject {
    /**
     * The creation date of the object. It is automatically assigned when an object is created, and can never be changed.
     */
    readonly CreationDate: dateTime | undefined;
    /**
     * This is the object ID, a globally-unique identifier for the object. It is automatically assigned when the object is created, and can never be changed.
     */
    readonly ObjectID: number | undefined;
    /**
     * This is the UUID, a universally-unique identifier for the object. It is automatically assigned when an object is created, and can never be changed.
     */
    readonly ObjectUUID: string | undefined;
    /**
     * The object version.
     */
    readonly VersionId?: number;
}
