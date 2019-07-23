"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.where = where;
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _lodash = _interopRequireDefault(require("lodash"));

var _ref = _interopRequireDefault(require("./ref"));

/**
 @module Query

 This module contains utility methods for working with the Rally query syntax
 */
var Query =
/*#__PURE__*/
function () {
  function Query(left, op, right) {
    (0, _classCallCheck2["default"])(this, Query);
    this.left = left;
    this.op = op;
    this.right = right;
  }

  (0, _createClass2["default"])(Query, [{
    key: "toQueryString",
    value: function toQueryString() {
      var left = this.left;
      var right = this.right;

      if (left.toQueryString) {
        left = left.toQueryString();
      }

      if (right === null) {
        right = 'null';
      } else if (right.toQueryString) {
        right = right.toQueryString();
      } else if (_ref["default"].isRef(right)) {
        right = _ref["default"].getRelative(right);
      } else if (_lodash["default"].isString(right) && right.indexOf(' ') >= 0) {
        right = "\"".concat(right, "\"");
      }

      return "(".concat(left, " ").concat(this.op, " ").concat(right, ")");
    }
  }, {
    key: "and",
    value: function and(left, op, right) {
      return new Query(this, 'AND', left instanceof Query ? left : new Query(left, op, right));
    }
  }, {
    key: "or",
    value: function or(left, op, right) {
      return new Query(this, 'OR', left instanceof Query ? left : new Query(left, op, right));
    }
  }]);
  return Query;
}();

exports["default"] = Query;

function where(left, op, right) {
  return new Query(left, op, right);
}