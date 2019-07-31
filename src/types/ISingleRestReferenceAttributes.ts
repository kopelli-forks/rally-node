import { IAPIBaseAttributes } from "./IAPIBaseAttributes";

export interface ISingleRestReferenceAttributes extends IAPIBaseAttributes {
  readonly _refObjectName: string;
  readonly _refObjectUUID: string;
}
