export default function(promise: Promise<any>, callback: any) {
  if (typeof callback === 'function') {
    promise.then(obj => callback(null, obj), err => callback(err, null));
  }
}
