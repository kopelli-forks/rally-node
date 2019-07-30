import { IAPIBaseAttributes } from "./IAPIBaseAttributes";

export interface IAPIAttributes extends IAPIBaseAttributes {
  readonly _ref: string;
  readonly _refObjectName: string;
  readonly _refObjectUUID: string;
  readonly _type: string;
}
