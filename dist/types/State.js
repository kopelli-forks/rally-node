"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.State = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _WorkspaceDomainObject = require("./WorkspaceDomainObject");

/**
 * Provides a State.
 */
var State =
/*#__PURE__*/
function (_WorkspaceDomainObjec) {
  (0, _inherits2["default"])(State, _WorkspaceDomainObjec);

  function State() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2["default"])(this, State);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2["default"])(this, (_getPrototypeOf2 = (0, _getPrototypeOf3["default"])(State)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "AcceptedMarker", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "Description", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "Enabled", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "InProgressMarker", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "Name", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "OrderIndex", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "RevisionHistory", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "WIPLimit", void 0);
    return _this;
  }

  return State;
}(_WorkspaceDomainObject.WorkspaceDomainObject);

exports.State = State;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90eXBlcy9TdGF0ZS50cyJdLCJuYW1lcyI6WyJTdGF0ZSIsIldvcmtzcGFjZURvbWFpbk9iamVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBSUE7OztJQUdhQSxLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQUFjQyw0QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFdvcmtzcGFjZURvbWFpbk9iamVjdCB9IGZyb20gXCIuL1dvcmtzcGFjZURvbWFpbk9iamVjdFwiO1xyXG5pbXBvcnQgeyBsb25nIH0gZnJvbSBcIi4vdHlwZXNcIjtcclxuaW1wb3J0IHsgUmV2aXNpb25IaXN0b3J5IH0gZnJvbSBcIi4vUmV2aXNpb25IaXN0b3J5XCI7XHJcblxyXG4vKipcclxuICogUHJvdmlkZXMgYSBTdGF0ZS5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBTdGF0ZSBleHRlbmRzIFdvcmtzcGFjZURvbWFpbk9iamVjdCB7XHJcbiAgLyoqXHJcbiAgICogSXMgdGhpcyBzdGF0ZSB0aGUgYWNjZXB0ZWQgc3RhdGU/XHJcbiAgICovXHJcbiAgQWNjZXB0ZWRNYXJrZXI/OiBib29sZWFuO1xyXG5cclxuICAvKipcclxuICAgKiBUaGUgc3RhdGUgZGVzY3JpcHRpb24uXHJcbiAgICovXHJcbiAgRGVzY3JpcHRpb24/OiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIElzIGVuYWJsZWQgaW5kaWNhdG9yIGZvciBhIFN0YXRlLlxyXG4gICAqL1xyXG4gIEVuYWJsZWQ/OiBib29sZWFuO1xyXG5cclxuICAvKipcclxuICAgKiBJcyB0aGlzIHN0YXRlIHRoZSBpbiBwcm9ncmVzcyBzdGF0ZT9cclxuICAgKi9cclxuICBJblByb2dyZXNzTWFya2VyPzogYm9vbGVhbjtcclxuXHJcbiAgLyoqXHJcbiAgICogTmFtZSBvZiB0aGUgc3RhdGUuXHJcbiAgICovXHJcbiAgTmFtZSE6IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogT3JkZXIgaW5kZXggZm9yIHRoaXMgU3RhdGUuXHJcbiAgICovXHJcbiAgT3JkZXJJbmRleD86IGxvbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIEEgcmVmZXJlbmNlIHRvIHRoZSByZXZpc2lvbiBoaXN0b3J5IChyZWFkLW9ubHkpIG9mIHRoaXMgc3RhdGUuXHJcbiAgICovXHJcbiAgcmVhZG9ubHkgUmV2aXNpb25IaXN0b3J5PzogUmV2aXNpb25IaXN0b3J5O1xyXG5cclxuICAvL1RPRE86IFR5cGVEZWY6IFR5cGVEZWZpbml0aW9uXHJcblxyXG4gIC8qKlxyXG4gICAqIFdvcmsgaW4gcHJvZ3Jlc3MgbGltaXQgZm9yIGEgU3RhdGVcclxuICAgKi9cclxuICBXSVBMaW1pdD86IGxvbmc7XHJcbn0iXX0=