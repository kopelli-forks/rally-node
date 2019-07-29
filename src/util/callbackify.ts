import { callback } from "./callback";

export function callbackify<U>(promise: Promise<U>, cb?: callback<U>): void {
  if (typeof cb === 'function') {
    promise.then(obj => cb(null, obj), err => cb(err, null));
  }
}
