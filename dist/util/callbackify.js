"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

function _default(promise, callback) {
  if (typeof callback === 'function') {
    promise.then(function (obj) {
      return callback(null, obj);
    }, function (err) {
      return callback(err, null);
    });
  }
}

module.exports = exports.default;