"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.where = where;
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

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
    (0, _defineProperty2["default"])(this, "left", void 0);
    (0, _defineProperty2["default"])(this, "op", void 0);
    (0, _defineProperty2["default"])(this, "right", void 0);
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
    value: function and(left) {
      var op = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
      var right = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
      return new Query(this, 'AND', left instanceof Query ? left : new Query(left, op, right));
    }
  }, {
    key: "or",
    value: function or(left) {
      var op = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
      var right = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
      return new Query(this, 'OR', left instanceof Query ? left : new Query(left, op, right));
    }
  }]);
  return Query;
}();

exports["default"] = Query;

function where(left, op, right) {
  return new Query(left, op, right);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsL3F1ZXJ5LnRzIl0sIm5hbWVzIjpbIlF1ZXJ5IiwibGVmdCIsIm9wIiwicmlnaHQiLCJ0b1F1ZXJ5U3RyaW5nIiwicmVmVXRpbHMiLCJpc1JlZiIsImdldFJlbGF0aXZlIiwiXyIsImlzU3RyaW5nIiwiaW5kZXhPZiIsIndoZXJlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBRUE7Ozs7O0lBTXFCQSxLOzs7QUFLbkIsaUJBQVlDLElBQVosRUFBa0NDLEVBQWxDLEVBQThDQyxLQUE5QyxFQUFxRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ25FLFNBQUtGLElBQUwsR0FBWUEsSUFBWjtBQUNBLFNBQUtDLEVBQUwsR0FBVUEsRUFBVjtBQUNBLFNBQUtDLEtBQUwsR0FBYUEsS0FBYjtBQUNEOzs7O29DQUV1QjtBQUN0QixVQUFJRixJQUFJLEdBQUcsS0FBS0EsSUFBaEI7QUFDQSxVQUFJRSxLQUFLLEdBQUcsS0FBS0EsS0FBakI7O0FBQ0EsVUFBS0YsSUFBRCxDQUFnQkcsYUFBcEIsRUFBbUM7QUFDakNILFFBQUFBLElBQUksR0FBSUEsSUFBRCxDQUFnQkcsYUFBaEIsRUFBUDtBQUNEOztBQUVELFVBQUlELEtBQUssS0FBSyxJQUFkLEVBQW9CO0FBQ2xCQSxRQUFBQSxLQUFLLEdBQUcsTUFBUjtBQUNELE9BRkQsTUFFTyxJQUFLQSxLQUFELENBQWlCQyxhQUFyQixFQUFvQztBQUN6Q0QsUUFBQUEsS0FBSyxHQUFJQSxLQUFELENBQWlCQyxhQUFqQixFQUFSO0FBQ0QsT0FGTSxNQUVBLElBQUlDLGdCQUFTQyxLQUFULENBQWVILEtBQWYsQ0FBSixFQUEyQjtBQUNoQ0EsUUFBQUEsS0FBSyxHQUFHRSxnQkFBU0UsV0FBVCxDQUFxQkosS0FBckIsQ0FBUjtBQUNELE9BRk0sTUFFQSxJQUFJSyxtQkFBRUMsUUFBRixDQUFXTixLQUFYLEtBQXFCQSxLQUFLLENBQUNPLE9BQU4sQ0FBYyxHQUFkLEtBQXNCLENBQS9DLEVBQWtEO0FBQ3ZEUCxRQUFBQSxLQUFLLGVBQU9BLEtBQVAsT0FBTDtBQUNEOztBQUVELHdCQUFXRixJQUFYLGNBQW1CLEtBQUtDLEVBQXhCLGNBQThCQyxLQUE5QjtBQUNEOzs7d0JBSUdGLEksRUFBMEU7QUFBQSxVQUFwREMsRUFBb0QsdUVBQXZDLEVBQXVDO0FBQUEsVUFBbkNDLEtBQW1DLHVFQUFYLEVBQVc7QUFDNUUsYUFBTyxJQUFJSCxLQUFKLENBQVUsSUFBVixFQUFnQixLQUFoQixFQUF3QkMsSUFBSSxZQUFZRCxLQUFqQixHQUEwQkMsSUFBMUIsR0FBaUMsSUFBSUQsS0FBSixDQUFVQyxJQUFWLEVBQWdCQyxFQUFoQixFQUFvQkMsS0FBcEIsQ0FBeEQsQ0FBUDtBQUNEOzs7dUJBSUVGLEksRUFBMEU7QUFBQSxVQUFwREMsRUFBb0QsdUVBQXZDLEVBQXVDO0FBQUEsVUFBbkNDLEtBQW1DLHVFQUFYLEVBQVc7QUFDM0UsYUFBTyxJQUFJSCxLQUFKLENBQVUsSUFBVixFQUFnQixJQUFoQixFQUF1QkMsSUFBSSxZQUFZRCxLQUFqQixHQUEwQkMsSUFBMUIsR0FBaUMsSUFBSUQsS0FBSixDQUFVQyxJQUFWLEVBQWdCQyxFQUFoQixFQUFvQkMsS0FBcEIsQ0FBdkQsQ0FBUDtBQUNEOzs7Ozs7O0FBR0ksU0FBU1EsS0FBVCxDQUFlVixJQUFmLEVBQXFDQyxFQUFyQyxFQUFpREMsS0FBakQsRUFBK0U7QUFDcEYsU0FBTyxJQUFJSCxLQUFKLENBQVVDLElBQVYsRUFBZ0JDLEVBQWhCLEVBQW9CQyxLQUFwQixDQUFQO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgcmVmVXRpbHMgZnJvbSAnLi9yZWYnO1xyXG5cclxuLyoqXHJcbiBAbW9kdWxlIFF1ZXJ5XHJcblxyXG4gVGhpcyBtb2R1bGUgY29udGFpbnMgdXRpbGl0eSBtZXRob2RzIGZvciB3b3JraW5nIHdpdGggdGhlIFJhbGx5IHF1ZXJ5IHN5bnRheFxyXG4gKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFF1ZXJ5IHtcclxuICBwcml2YXRlIGxlZnQ6IHN0cmluZyB8IFF1ZXJ5O1xyXG4gIHByaXZhdGUgb3A6IHN0cmluZztcclxuICBwcml2YXRlIHJpZ2h0OiBzdHJpbmcgfCBudWxsIHwgUXVlcnk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGxlZnQ6IHN0cmluZyB8IFF1ZXJ5LCBvcDogc3RyaW5nLCByaWdodDogc3RyaW5nIHwgUXVlcnkpIHtcclxuICAgIHRoaXMubGVmdCA9IGxlZnQ7XHJcbiAgICB0aGlzLm9wID0gb3A7XHJcbiAgICB0aGlzLnJpZ2h0ID0gcmlnaHQ7XHJcbiAgfVxyXG5cclxuICB0b1F1ZXJ5U3RyaW5nKCk6IHN0cmluZyB7XHJcbiAgICBsZXQgbGVmdCA9IHRoaXMubGVmdDtcclxuICAgIGxldCByaWdodCA9IHRoaXMucmlnaHQ7XHJcbiAgICBpZiAoKGxlZnQgYXMgUXVlcnkpLnRvUXVlcnlTdHJpbmcpIHtcclxuICAgICAgbGVmdCA9IChsZWZ0IGFzIFF1ZXJ5KS50b1F1ZXJ5U3RyaW5nKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHJpZ2h0ID09PSBudWxsKSB7XHJcbiAgICAgIHJpZ2h0ID0gJ251bGwnO1xyXG4gICAgfSBlbHNlIGlmICgocmlnaHQgYXMgUXVlcnkpLnRvUXVlcnlTdHJpbmcpIHtcclxuICAgICAgcmlnaHQgPSAocmlnaHQgYXMgUXVlcnkpLnRvUXVlcnlTdHJpbmcoKTtcclxuICAgIH0gZWxzZSBpZiAocmVmVXRpbHMuaXNSZWYocmlnaHQpKSB7XHJcbiAgICAgIHJpZ2h0ID0gcmVmVXRpbHMuZ2V0UmVsYXRpdmUocmlnaHQpO1xyXG4gICAgfSBlbHNlIGlmIChfLmlzU3RyaW5nKHJpZ2h0KSAmJiByaWdodC5pbmRleE9mKCcgJykgPj0gMCkge1xyXG4gICAgICByaWdodCA9IGBcIiR7cmlnaHR9XCJgO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBgKCR7bGVmdH0gJHt0aGlzLm9wfSAke3JpZ2h0fSlgO1xyXG4gIH1cclxuXHJcbiAgYW5kKGxlZnQ6IFF1ZXJ5KTogUXVlcnk7XHJcbiAgYW5kKGxlZnQ6IHN0cmluZywgb3A6IHN0cmluZywgcmlnaHQ6IHN0cmluZyB8IFF1ZXJ5KTogUXVlcnk7XHJcbiAgYW5kKGxlZnQ6IHN0cmluZyB8IFF1ZXJ5LCBvcDogc3RyaW5nID0gXCJcIiwgcmlnaHQ6IHN0cmluZyB8IFF1ZXJ5ID0gXCJcIik6IFF1ZXJ5IHtcclxuICAgIHJldHVybiBuZXcgUXVlcnkodGhpcywgJ0FORCcsIChsZWZ0IGluc3RhbmNlb2YgUXVlcnkpID8gbGVmdCA6IG5ldyBRdWVyeShsZWZ0LCBvcCwgcmlnaHQpKTtcclxuICB9XHJcblxyXG4gIG9yKGxlZnQ6IFF1ZXJ5KTogUXVlcnk7XHJcbiAgb3IobGVmdDogc3RyaW5nLCBvcDogc3RyaW5nLCByaWdodDogc3RyaW5nIHwgUXVlcnkpOiBRdWVyeTtcclxuICBvcihsZWZ0OiBzdHJpbmcgfCBRdWVyeSwgb3A6IHN0cmluZyA9IFwiXCIsIHJpZ2h0OiBzdHJpbmcgfCBRdWVyeSA9IFwiXCIpOiBRdWVyeSB7XHJcbiAgICByZXR1cm4gbmV3IFF1ZXJ5KHRoaXMsICdPUicsIChsZWZ0IGluc3RhbmNlb2YgUXVlcnkpID8gbGVmdCA6IG5ldyBRdWVyeShsZWZ0LCBvcCwgcmlnaHQpKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB3aGVyZShsZWZ0OiBzdHJpbmcgfCBRdWVyeSwgb3A6IHN0cmluZywgcmlnaHQ6IHN0cmluZyB8IFF1ZXJ5KTogUXVlcnkge1xyXG4gIHJldHVybiBuZXcgUXVlcnkobGVmdCwgb3AsIHJpZ2h0KTtcclxufVxyXG4iXX0=