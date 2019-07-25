"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

function _default(promise, cb) {
  if (typeof cb === 'function') {
    promise.then(function (obj) {
      return cb(null, obj);
    }, function (err) {
      return cb(err, null);
    });
  }
}

module.exports = exports.default;