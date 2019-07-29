import { callback } from "./callback";
export declare function callbackify<U>(promise: Promise<U>, cb?: callback<U>): void;
