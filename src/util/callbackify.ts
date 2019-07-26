import { callback } from "./callback";

export default function<T>(promise: Promise<T>, cb?: callback<T>): void {
  if (typeof cb === 'function') {
    promise.then(obj => cb(null, obj), err => cb(err, null));
  }
}
