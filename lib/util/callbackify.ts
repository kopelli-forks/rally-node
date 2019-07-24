export default function(promise: Promise<any>, callback?: (err: any, obj: any) => void): void {
  if (typeof callback === 'function') {
    promise.then(obj => callback(null, obj), err => callback(err, null));
  }
}
