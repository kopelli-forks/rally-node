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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsL3F1ZXJ5LnRzIl0sIm5hbWVzIjpbIlF1ZXJ5IiwibGVmdCIsIm9wIiwicmlnaHQiLCJ0b1F1ZXJ5U3RyaW5nIiwicmVmVXRpbHMiLCJpc1JlZiIsImdldFJlbGF0aXZlIiwiXyIsImlzU3RyaW5nIiwiaW5kZXhPZiIsIndoZXJlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBRUE7Ozs7O0lBTXFCQSxLOzs7QUFLbkIsaUJBQVlDLElBQVosRUFBa0NDLEVBQWxDLEVBQThDQyxLQUE5QyxFQUFxRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ25FLFNBQUtGLElBQUwsR0FBWUEsSUFBWjtBQUNBLFNBQUtDLEVBQUwsR0FBVUEsRUFBVjtBQUNBLFNBQUtDLEtBQUwsR0FBYUEsS0FBYjtBQUNEOzs7O29DQUV1QjtBQUN0QixVQUFJRixJQUFJLEdBQUcsS0FBS0EsSUFBaEI7QUFDQSxVQUFJRSxLQUFLLEdBQUcsS0FBS0EsS0FBakI7O0FBQ0EsVUFBS0YsSUFBRCxDQUFnQkcsYUFBcEIsRUFBbUM7QUFDakNILFFBQUFBLElBQUksR0FBSUEsSUFBRCxDQUFnQkcsYUFBaEIsRUFBUDtBQUNEOztBQUVELFVBQUlELEtBQUssS0FBSyxJQUFkLEVBQW9CO0FBQ2xCQSxRQUFBQSxLQUFLLEdBQUcsTUFBUjtBQUNELE9BRkQsTUFFTyxJQUFLQSxLQUFELENBQWlCQyxhQUFyQixFQUFvQztBQUN6Q0QsUUFBQUEsS0FBSyxHQUFJQSxLQUFELENBQWlCQyxhQUFqQixFQUFSO0FBQ0QsT0FGTSxNQUVBLElBQUlDLGdCQUFTQyxLQUFULENBQWVILEtBQWYsQ0FBSixFQUEyQjtBQUNoQ0EsUUFBQUEsS0FBSyxHQUFHRSxnQkFBU0UsV0FBVCxDQUFxQkosS0FBckIsQ0FBUjtBQUNELE9BRk0sTUFFQSxJQUFJSyxtQkFBRUMsUUFBRixDQUFXTixLQUFYLEtBQXFCQSxLQUFLLENBQUNPLE9BQU4sQ0FBYyxHQUFkLEtBQXNCLENBQS9DLEVBQWtEO0FBQ3ZEUCxRQUFBQSxLQUFLLGVBQU9BLEtBQVAsT0FBTDtBQUNEOztBQUVELHdCQUFXRixJQUFYLGNBQW1CLEtBQUtDLEVBQXhCLGNBQThCQyxLQUE5QjtBQUNEOzs7d0JBRUdGLEksRUFBc0JDLEUsRUFBWUMsSyxFQUE4QjtBQUNsRSxhQUFPLElBQUlILEtBQUosQ0FBVSxJQUFWLEVBQWdCLEtBQWhCLEVBQXdCQyxJQUFJLFlBQVlELEtBQWpCLEdBQTBCQyxJQUExQixHQUFpQyxJQUFJRCxLQUFKLENBQVVDLElBQVYsRUFBZ0JDLEVBQWhCLEVBQW9CQyxLQUFwQixDQUF4RCxDQUFQO0FBQ0Q7Ozt1QkFFRUYsSSxFQUFzQkMsRSxFQUFZQyxLLEVBQThCO0FBQ2pFLGFBQU8sSUFBSUgsS0FBSixDQUFVLElBQVYsRUFBZ0IsSUFBaEIsRUFBdUJDLElBQUksWUFBWUQsS0FBakIsR0FBMEJDLElBQTFCLEdBQWlDLElBQUlELEtBQUosQ0FBVUMsSUFBVixFQUFnQkMsRUFBaEIsRUFBb0JDLEtBQXBCLENBQXZELENBQVA7QUFDRDs7Ozs7OztBQUdJLFNBQVNRLEtBQVQsQ0FBZVYsSUFBZixFQUFxQ0MsRUFBckMsRUFBaURDLEtBQWpELEVBQStFO0FBQ3BGLFNBQU8sSUFBSUgsS0FBSixDQUFVQyxJQUFWLEVBQWdCQyxFQUFoQixFQUFvQkMsS0FBcEIsQ0FBUDtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IHJlZlV0aWxzIGZyb20gJy4vcmVmJztcclxuXHJcbi8qKlxyXG4gQG1vZHVsZSBRdWVyeVxyXG5cclxuIFRoaXMgbW9kdWxlIGNvbnRhaW5zIHV0aWxpdHkgbWV0aG9kcyBmb3Igd29ya2luZyB3aXRoIHRoZSBSYWxseSBxdWVyeSBzeW50YXhcclxuICovXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBRdWVyeSB7XHJcbiAgcHJpdmF0ZSBsZWZ0OiBzdHJpbmcgfCBRdWVyeTtcclxuICBwcml2YXRlIG9wOiBzdHJpbmc7XHJcbiAgcHJpdmF0ZSByaWdodDogc3RyaW5nIHwgbnVsbCB8IFF1ZXJ5O1xyXG5cclxuICBjb25zdHJ1Y3RvcihsZWZ0OiBzdHJpbmcgfCBRdWVyeSwgb3A6IHN0cmluZywgcmlnaHQ6IHN0cmluZyB8IFF1ZXJ5KSB7XHJcbiAgICB0aGlzLmxlZnQgPSBsZWZ0O1xyXG4gICAgdGhpcy5vcCA9IG9wO1xyXG4gICAgdGhpcy5yaWdodCA9IHJpZ2h0O1xyXG4gIH1cclxuXHJcbiAgdG9RdWVyeVN0cmluZygpOiBzdHJpbmcge1xyXG4gICAgbGV0IGxlZnQgPSB0aGlzLmxlZnQ7XHJcbiAgICBsZXQgcmlnaHQgPSB0aGlzLnJpZ2h0O1xyXG4gICAgaWYgKChsZWZ0IGFzIFF1ZXJ5KS50b1F1ZXJ5U3RyaW5nKSB7XHJcbiAgICAgIGxlZnQgPSAobGVmdCBhcyBRdWVyeSkudG9RdWVyeVN0cmluZygpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChyaWdodCA9PT0gbnVsbCkge1xyXG4gICAgICByaWdodCA9ICdudWxsJztcclxuICAgIH0gZWxzZSBpZiAoKHJpZ2h0IGFzIFF1ZXJ5KS50b1F1ZXJ5U3RyaW5nKSB7XHJcbiAgICAgIHJpZ2h0ID0gKHJpZ2h0IGFzIFF1ZXJ5KS50b1F1ZXJ5U3RyaW5nKCk7XHJcbiAgICB9IGVsc2UgaWYgKHJlZlV0aWxzLmlzUmVmKHJpZ2h0KSkge1xyXG4gICAgICByaWdodCA9IHJlZlV0aWxzLmdldFJlbGF0aXZlKHJpZ2h0KTtcclxuICAgIH0gZWxzZSBpZiAoXy5pc1N0cmluZyhyaWdodCkgJiYgcmlnaHQuaW5kZXhPZignICcpID49IDApIHtcclxuICAgICAgcmlnaHQgPSBgXCIke3JpZ2h0fVwiYDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gYCgke2xlZnR9ICR7dGhpcy5vcH0gJHtyaWdodH0pYDtcclxuICB9XHJcblxyXG4gIGFuZChsZWZ0OiBzdHJpbmcgfCBRdWVyeSwgb3A6IHN0cmluZywgcmlnaHQ6IHN0cmluZyB8IFF1ZXJ5KTogUXVlcnkge1xyXG4gICAgcmV0dXJuIG5ldyBRdWVyeSh0aGlzLCAnQU5EJywgKGxlZnQgaW5zdGFuY2VvZiBRdWVyeSkgPyBsZWZ0IDogbmV3IFF1ZXJ5KGxlZnQsIG9wLCByaWdodCkpO1xyXG4gIH1cclxuXHJcbiAgb3IobGVmdDogc3RyaW5nIHwgUXVlcnksIG9wOiBzdHJpbmcsIHJpZ2h0OiBzdHJpbmcgfCBRdWVyeSk6IFF1ZXJ5IHtcclxuICAgIHJldHVybiBuZXcgUXVlcnkodGhpcywgJ09SJywgKGxlZnQgaW5zdGFuY2VvZiBRdWVyeSkgPyBsZWZ0IDogbmV3IFF1ZXJ5KGxlZnQsIG9wLCByaWdodCkpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHdoZXJlKGxlZnQ6IHN0cmluZyB8IFF1ZXJ5LCBvcDogc3RyaW5nLCByaWdodDogc3RyaW5nIHwgUXVlcnkpOiBRdWVyeSB7XHJcbiAgcmV0dXJuIG5ldyBRdWVyeShsZWZ0LCBvcCwgcmlnaHQpO1xyXG59XHJcbiJdfQ==