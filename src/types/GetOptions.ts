import { OptionsScope } from "./OptionsScope";
import request from "request";

export class GetOptions {
  /**
   * [required] The ref of the object to get, e.g. /defect/12345
   */
  ref!: string;

  /**
   * The default scoping to use.
   * If not specified, server default will be used.
   */
  scope?: OptionsScope;

  /**
   * The field(s) to include on the returned record
   */
  fetch?: string | string[];

  /**
   * Additional options to be applied to the request:
   * https://github.com/mikeal/request (optional)
   */
  requestOptions?: request.CoreOptions;
}
