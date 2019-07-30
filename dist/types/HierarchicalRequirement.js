"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HierarchicalRequirement = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _Requirement2 = require("./Requirement");

var HierarchicalRequirement =
/*#__PURE__*/
function (_Requirement) {
  (0, _inherits2["default"])(HierarchicalRequirement, _Requirement);

  function HierarchicalRequirement() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2["default"])(this, HierarchicalRequirement);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2["default"])(this, (_getPrototypeOf2 = (0, _getPrototypeOf3["default"])(HierarchicalRequirement)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "AcceptedDate", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "Blocked", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "BlockedReason", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "Children", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "Defects", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "DefectStatus", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "DirectChildCount", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "DragAndDropRank", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "Feature", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "HasParent", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "InProgressDate", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "Iteration", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "Parent", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "PlanEstimate", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "PortfolioItem", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "Predecessors", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "Recycled", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "Release", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "Risks", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "Successors", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "TaskActualTotal", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "TaskEstimateTotal", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "TaskRemainingTotal", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "Tasks", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "TaskStatus", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "TestCases", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "TestCaseStatus", void 0);
    return _this;
  }

  return HierarchicalRequirement;
}(_Requirement2.Requirement);

exports.HierarchicalRequirement = HierarchicalRequirement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90eXBlcy9IaWVyYXJjaGljYWxSZXF1aXJlbWVudC50cyJdLCJuYW1lcyI6WyJIaWVyYXJjaGljYWxSZXF1aXJlbWVudCIsIlJlcXVpcmVtZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7SUFrQmFBLHVCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFBZ0NDLHlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmVxdWlyZW1lbnQgfSBmcm9tIFwiLi9SZXF1aXJlbWVudFwiO1xyXG5cclxuaW1wb3J0IHsgRGVmZWN0IH0gZnJvbSBcIi4vRGVmZWN0XCI7XHJcblxyXG5pbXBvcnQgeyBQb3J0Zm9saW9JdGVtRmVhdHVyZSB9IGZyb20gXCIuL1BvcnRmb2xpb0l0ZW1GZWF0dXJlXCI7XHJcblxyXG5pbXBvcnQgeyBkYXRlVGltZSwgZG91YmxlIH0gZnJvbSBcIi4vdHlwZXNcIjtcclxuXHJcbmltcG9ydCB7IEl0ZXJhdGlvbiB9IGZyb20gXCIuL0l0ZXJhdGlvblwiO1xyXG5cclxuaW1wb3J0IHsgUmVsZWFzZSB9IGZyb20gXCIuL1JlbGVhc2VcIjtcclxuXHJcbmltcG9ydCB7IFJpc2sgfSBmcm9tIFwiLi9SaXNrXCI7XHJcblxyXG5pbXBvcnQgeyBUYXNrIH0gZnJvbSBcIi4vVGFza1wiO1xyXG5cclxuaW1wb3J0IHsgVGVzdENhc2UgfSBmcm9tIFwiLi9UZXN0Q2FzZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEhpZXJhcmNoaWNhbFJlcXVpcmVtZW50IGV4dGVuZHMgUmVxdWlyZW1lbnQge1xyXG4gIC8qKlxyXG4gICAqIFRoZSBkYXRlIHRoYXQgdGhpcyBhcnRpZmFjdCdzIHNjaGVkdWxlIHN0YXRlIHdhcyBzZXQgdG8gYWNjZXB0ZWQuIFRoaXMgaXMgYXV0b21hdGljYWxseSBzZXQuXHJcbiAgICovXHJcbiAgcmVhZG9ubHkgQWNjZXB0ZWREYXRlPzogRGF0ZTtcclxuXHJcbiAgLyoqXHJcbiAgICogRmxhdCB0byBkZXRlcm1pbmUgaWYgdGhpcyBhcnRpZmljYXQgaXMgYmxvY2tlZC5cclxuICAgKi9cclxuICBCbG9ja2VkPzogYm9vbGVhbjtcclxuXHJcbiAgLyoqXHJcbiAgICogVGhlIHJlYXNvbiB0aGlzIGFydGlmYWN0IGlzIGJsb2NrZWQuXHJcbiAgICovXHJcbiAgQmxvY2tlZFJlYXNvbj86IHN0cmluZztcclxuXHJcbiAgLy8gVE9ETzogQWRkIEJsb2NrZXJcclxuXHJcbiAgLyoqXHJcbiAgICogVGhlIGNoaWxkcmVuIG9mIHRoZSByZXF1aXJlbWVudCAocmVhZC1vbmx5IGNvbGxlY3Rpb24pXHJcbiAgICovXHJcbiAgcmVhZG9ubHkgQ2hpbGRyZW4/OiBIaWVyYXJjaGljYWxSZXF1aXJlbWVudFtdO1xyXG5cclxuICAvKipcclxuICAgKiBUaGUgRGVmZWN0cyBhc3NvY2lhdGVkIHdpdGggdGhpcyBhcnRpZmN0XHJcbiAgICovXHJcbiAgcmVhZG9ubHkgRGVmZWN0cz86IERlZmVjdFtdO1xyXG5cclxuICAvKipcclxuICAgKiBUaGUgc3RhdHVzIG9mIHRoZSBEZWZlY3RzIGFzc29jaWF0ZWQgd2l0aCB0aGlzIGFydGlmYWN0XHJcbiAgICovXHJcbiAgcmVhZG9ubHkgRGVmZWN0U3RhdHVzITogXCJOT05FXCIgfCBcIlNPTUVfQ0xPU0VEXCIgfCBcIk5PTkVfQ0xPU0VEXCIgfCBcIkFMTF9DTE9TRURcIlxyXG5cclxuICAvKipcclxuICAgKiBJbmRpY2F0ZXMgdGhlIGRpcmVjdCBjaGlsZHJlbiBjb3VudCBmb3IgYSBIaWVyYXJjaGljYWwgUmVxdWlyZW1lbnQuXHJcbiAgICovXHJcbiAgcmVhZG9ubHkgRGlyZWN0Q2hpbGRDb3VudD86IG51bWJlclxyXG5cclxuICAvKipcclxuICAgKiBBbHBoYW51bWVyaWMgcmFuayB2YWx1ZVxyXG4gICAqL1xyXG4gIHJlYWRvbmx5IERyYWdBbmREcm9wUmFuaz86IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogVGhlIGZlYXR1cmUgb2YgdGhpcyBIaWVyYXJjaGljYWwgUmVxdWlyZW1lbnRcclxuICAgKi9cclxuICByZWFkb25seSBGZWF0dXJlPzogUG9ydGZvbGlvSXRlbUZlYXR1cmU7XHJcblxyXG4gIC8qKlxyXG4gICAqIEluZGljYXRlcyB3aGV0aGVyIHRoaXMgSGllcmFyY2hpY2FsIFJlcXVpcmVtZW50IGhhcyBhIHBhcmVudC5cclxuICAgKi9cclxuICByZWFkb25seSBIYXNQYXJlbnQ/OiBib29sZWFuO1xyXG5cclxuICAvKipcclxuICAgKiBUaGUgZGF0ZSB0aGlzIHJlcXVpcmVtZW50IHdlbnQgaW4tcHJvZ3Jlc3MuXHJcbiAgICovXHJcbiAgcmVhZG9ubHkgSW5Qcm9ncmVzc0RhdGU/OiBkYXRlVGltZTtcclxuXHJcbiAgLyoqXHJcbiAgICogVGhlIGl0ZXJhdGlvbiB0aGF0IHRoaXMgYXJ0aWZhY3QgaXMgc2NoZWR1bGVkIGluLlxyXG4gICAqL1xyXG4gIEl0ZXJhdGlvbj86IEl0ZXJhdGlvbjtcclxuXHJcbiAgLyoqXHJcbiAgICogVGhlIHBhcmVudCBvZiB0aGlzIHJlcXVpcmVtZW50LlxyXG4gICAqL1xyXG4gIFBhcmVudD86IEhpZXJhcmNoaWNhbFJlcXVpcmVtZW50O1xyXG5cclxuICAvKipcclxuICAgKiBQbGFuIGVzdGltYXRlIG9mIHRoaXMgYXJ0aWZhY3RcclxuICAgKi9cclxuICBQbGFuRXN0aW1hdGU/OiBkb3VibGU7XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSBGZWF0dXJlIHBhcmVudCBvZiB0aGlzIEhpZXJhcmNoaWNhbCBSZXF1aXJlbWVudFxyXG4gICAqL1xyXG4gIFBvcnRmb2xpb0l0ZW0/OiBQb3J0Zm9saW9JdGVtRmVhdHVyZTtcclxuXHJcbiAgLyoqXHJcbiAgICogVGVtcG9yYWwgcHJlZGVjZXNzb3JzIG9mIHRoaXMgcmVxdWlyZW1lbnQuIFByZWRlY2Vzc29ycyBtdXN0IGJlIGNvbXBsZXRlZCBiZWZvcmUgdGhpcyByZXF1aXJlbWVudCBjYW4gYmUgd29ya2VkIG9uLlxyXG4gICAqL1xyXG4gIFByZWRlY2Vzc29ycz86IEhpZXJhcmNoaWNhbFJlcXVpcmVtZW50W107XHJcblxyXG4gIC8qKlxyXG4gICAqIE1vdmVkIHRvIFJlY3ljbGUgQmluXHJcbiAgICovXHJcbiAgUmVjeWNsZWQ/OiBib29sZWFuO1xyXG5cclxuICAvKipcclxuICAgKiBUaGUgcmVsZWFzZSB0aGF0IHRoaXMgYXJ0aWZhY3QgaXMgc2NoZWR1bGVkIGluLlxyXG4gICAqL1xyXG4gIFJlbGVhc2U/OiBSZWxlYXNlO1xyXG5cclxuICAvKipcclxuICAgKiBUaGUgcmlza3MgYWZmZWN0aW5nIHRoaXMgd29yayBpdGVtXHJcbiAgICovXHJcbiAgUmlza3M/OiBSaXNrW107XHJcblxyXG4gIC8qKlxyXG4gICAqIFRlbXBvcmFsIHN1Y2Nlc3NvcnMgb2YgdGhpcyByZXF1aXJlbWVudC4gU3VjY2Vzc29ycyBjYW5ub3QgYmUgY29tcGxldGVkIGJlZm9yZSB0aGlzIHJlcXVpcmVtZW50IGlzIGNvbXBsZXRlZC5cclxuICAgKi9cclxuICBTdWNjZXNzb3JzPzogSGllcmFyY2hpY2FsUmVxdWlyZW1lbnRbXTtcclxuXHJcbiAgLyoqXHJcbiAgICogVGFzayBhY3R1YWwgdG90YWwgb2YgdGhpcyBhcnRpZmFjdC5cclxuICAgKi9cclxuICByZWFkb25seSBUYXNrQWN0dWFsVG90YWw/OiBkb3VibGU7XHJcblxyXG4gIC8qKlxyXG4gICAqIFRhc2sgZXN0aW1hdGUgdG90YWwgb2YgdGhpcyBhcnRpZmFjdFxyXG4gICAqL1xyXG4gIHJlYWRvbmx5IFRhc2tFc3RpbWF0ZVRvdGFsPzogZG91YmxlO1xyXG5cclxuICAvKipcclxuICAgKiBUYXNrIHJlYW1haW5pbmcgdG90YWwgb2YgdGhpcyBhcnRpZmFjdCAoVG8gRG8pXHJcbiAgICovXHJcbiAgcmVhZG9ubHkgVGFza1JlbWFpbmluZ1RvdGFsPzogZG91YmxlO1xyXG5cclxuICAvKipcclxuICAgKiBUYXNrcyBhc3NvY2lhdGVkIHdpdGggY29tcGxldGluZy5cclxuICAgKi9cclxuICByZWFkb25seSBUYXNrcz86IFRhc2tbXTtcclxuXHJcbiAgLyoqXHJcbiAgICogVGhlIHN0YXR1cyBvZiB0aGUgVGFza3MgYXNzb2NpYXRlZCB3aXRoIHRoaXMgYXJ0aWZhY3QuXHJcbiAgICovXHJcbiAgcmVhZG9ubHkgVGFza1N0YXR1cyE6IFwiTk9ORVwiIHwgXCJERUZJTkVEXCIgfCBcIklOX1BST0dSRVNTX0JMT0NLRURcIiB8IFwiSU5fUFJPR1JFU1NcIiB8IFwiQ09NUExFVEVEX0JMT0NLRURcIiB8IFwiQ09NUExFVEVEXCJcclxuXHJcbiAgLyoqXHJcbiAgICogVGhlIFRlc3QgQ2FzZXMgYXNzb2NpYXRlZCB3aXRoIHRoaXMgYXJ0aWZhY3QuXHJcbiAgICovXHJcbiAgcmVhZG9ubHkgVGVzdENhc2VzPzogVGVzdENhc2VbXTtcclxuXHJcbiAgLyoqXHJcbiAgICogVGhlIHN0YXR1cyBvZiB0aGUgVGVzdENhc2VzIGFzc29jaWF0ZWQgd2l0aCB0aGUgYXJ0aWZhY3QsXHJcbiAgICovXHJcbiAgcmVhZG9ubHkgVGVzdENhc2VTdGF0dXMhOiBcIk5PTkVcIiB8IFwiTk9ORV9SVU5cIiB8IFwiU09NRV9SVU5fTk9ORV9QQVNTSU5HXCIgfCBcIlNPTUVfUlVOX1NPTUVfTk9UX1BBU1NJTkdcIiB8IFwiU09NRV9SVU5fQUxMX1BBU1NJTkdcIiB8IFwiQUxMX1JVTl9OT05FX1BBU1NJTkdcIiB8IFwiQUxMX1JVTl9TT01FX05PVF9QQVNTSU5HXCIgfCBcIkFMTF9SVU5fQUxMX1BBU1NJTkdcIlxyXG59XHJcbiJdfQ==