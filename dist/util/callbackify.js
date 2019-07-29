"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.callbackify = callbackify;

function callbackify(promise, cb) {
  if (typeof cb === 'function') {
    promise.then(function (obj) {
      return cb(null, obj);
    }, function (err) {
      return cb(err, null);
    });
  }
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsL2NhbGxiYWNraWZ5LnRzIl0sIm5hbWVzIjpbImNhbGxiYWNraWZ5IiwicHJvbWlzZSIsImNiIiwidGhlbiIsIm9iaiIsImVyciJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUVPLFNBQVNBLFdBQVQsQ0FBd0JDLE9BQXhCLEVBQTZDQyxFQUE3QyxFQUFxRTtBQUMxRSxNQUFJLE9BQU9BLEVBQVAsS0FBYyxVQUFsQixFQUE4QjtBQUM1QkQsSUFBQUEsT0FBTyxDQUFDRSxJQUFSLENBQWEsVUFBQUMsR0FBRztBQUFBLGFBQUlGLEVBQUUsQ0FBQyxJQUFELEVBQU9FLEdBQVAsQ0FBTjtBQUFBLEtBQWhCLEVBQW1DLFVBQUFDLEdBQUc7QUFBQSxhQUFJSCxFQUFFLENBQUNHLEdBQUQsRUFBTSxJQUFOLENBQU47QUFBQSxLQUF0QztBQUNEO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjYWxsYmFjayB9IGZyb20gXCIuL2NhbGxiYWNrXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2FsbGJhY2tpZnk8VT4ocHJvbWlzZTogUHJvbWlzZTxVPiwgY2I/OiBjYWxsYmFjazxVPik6IHZvaWQge1xyXG4gIGlmICh0eXBlb2YgY2IgPT09ICdmdW5jdGlvbicpIHtcclxuICAgIHByb21pc2UudGhlbihvYmogPT4gY2IobnVsbCwgb2JqKSwgZXJyID0+IGNiKGVyciwgbnVsbCkpO1xyXG4gIH1cclxufVxyXG4iXX0=