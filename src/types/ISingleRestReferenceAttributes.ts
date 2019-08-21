import { IAPIBaseAttributes } from "./IAPIBaseAttributes";

export class ISingleRestReferenceAttributes extends IAPIBaseAttributes {
  readonly _refObjectName!: string;
  readonly _refObjectUUID!: string;
}
