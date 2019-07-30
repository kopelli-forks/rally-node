"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PortfolioItem = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _RankableArtifact2 = require("./RankableArtifact");

var PortfolioItem =
/*#__PURE__*/
function (_RankableArtifact) {
  (0, _inherits2["default"])(PortfolioItem, _RankableArtifact);

  function PortfolioItem() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2["default"])(this, PortfolioItem);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2["default"])(this, (_getPrototypeOf2 = (0, _getPrototypeOf3["default"])(PortfolioItem)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "AcceptedLeafStoryCount", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "AcceptedLeafStoryPlanEstimateTotal", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "ActualEndDate", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "ActualStartDate", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "Archived", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "Attachments", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "Blocked", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "BlockedReason", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "Collaborators", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "DirectChildrenCount", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "DragAndDropRank", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "InvestmentCategory", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "JobSize", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "LeafStoryCount", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "LeafStoryPlanEstimateTotal", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "PercentDoneByStoryCount", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "PercentDoneByStoryPlanEstimate", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "PlannedEndDate", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "PlannedStartDate", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "PortfolioItemTypeName", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "PreliminaryEstimate", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "PreliminaryEstimateValue", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "Recycled", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "RefinedEstimate", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "Risks", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "RiskScore", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "RROEValue", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "State", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "StateChangedDate", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "TimeCriticality", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "UnEstimatedLeafStoryCount", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "UserBusinessValue", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "ValueScore", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "WSJFScore", void 0);
    return _this;
  }

  return PortfolioItem;
}(_RankableArtifact2.RankableArtifact);

exports.PortfolioItem = PortfolioItem;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90eXBlcy9Qb3J0Zm9saW9JdGVtLnRzIl0sIm5hbWVzIjpbIlBvcnRmb2xpb0l0ZW0iLCJSYW5rYWJsZUFydGlmYWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7SUFRc0JBLGE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFBc0JDLG1DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmFua2FibGVBcnRpZmFjdCB9IGZyb20gXCIuL1JhbmthYmxlQXJ0aWZhY3RcIjtcclxuaW1wb3J0IHsgbG9uZywgZG91YmxlLCBkYXRlVGltZSB9IGZyb20gXCIuL3R5cGVzXCI7XHJcbmltcG9ydCB7IEF0dGFjaG1lbnQgfSBmcm9tIFwiLi9BdHRhY2htZW50XCI7XHJcbmltcG9ydCB7IFVzZXIgfSBmcm9tIFwiLi9Vc2VyXCI7XHJcbmltcG9ydCB7IFJpc2sgfSBmcm9tIFwiLi9SaXNrXCI7XHJcbmltcG9ydCB7IFN0YXRlIH0gZnJvbSBcIi4vU3RhdGVcIjtcclxuaW1wb3J0IHsgUHJlbGltaW5hcnlFc3RpbWF0ZSB9IGZyb20gXCIuL1ByZWxpbWluYXJ5RXN0aW1hdGVcIjtcclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBQb3J0Zm9saW9JdGVtIGV4dGVuZHMgUmFua2FibGVBcnRpZmFjdCB7XHJcbiAgLyoqXHJcbiAgICogQ291bnQgb2YgYWNjZXB0ZWQgbGVhZiB1c2VyIHN0b3JpZXMgKHN0b3JpZXMgd2l0aG91dCBjaGlsZHJlbikgYXNzb2NpYXRlZCB3aXRoIHRoaXMgUG9ydGZvbGlvIEl0ZW0uXHJcbiAgICovXHJcbiAgcmVhZG9ubHkgQWNjZXB0ZWRMZWFmU3RvcnlDb3VudD86IGxvbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIFN1bSBvZiB0aGUgcGxhbiBlc3RpbWF0ZXMgb2YgYWxsIGFjY2VwdGVkIGxlYWYgdXNlciBzdG9yaWVzIChzdG9yaWVzIHdpdGhvdXQgY2hpbGRyZW4pIGFzc29jaWF0ZWQgd2l0aCB0aGlzIFBvcnRmb2xpbyBJdGVtLlxyXG4gICAqL1xyXG4gIHJlYWRvbmx5IEFjY2VwdGVkTGVhZlN0b3J5UGxhbkVzdGltYXRlVG90YWw/OiBkb3VibGU7XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSBhY3R1YWwgZW5kIGRhdGUgZm9yIHRoaXMgcG9ydGZvbGlvIGl0ZW0uXHJcbiAgICovXHJcbiAgcmVhZG9ubHkgQWN0dWFsRW5kRGF0ZT86IGRhdGVUaW1lO1xyXG5cclxuICAvKipcclxuICAgKiBUaGUgYWN0dWFsIHN0YXJ0IGRhdGUgZm9yIHRoaXMgcG9ydGZvbGlvIGl0ZW0uXHJcbiAgICovXHJcbiAgcmVhZG9ubHkgQWN0dWFsU3RhcnREYXRlPzogZGF0ZVRpbWU7XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSB2YWx1ZSBpbmRpY2F0aW5nIGlmIGEgUG9ydGZvbGlvIEl0ZW0gaGFzIGJlZW4gYXJjaGl2ZWQuXHJcbiAgICovXHJcbiAgQXJjaGl2ZWQ/OiBib29sZWFuO1xyXG5cclxuICAvKipcclxuICAgKiBBdHRhY2htZW50cyBhc3NvY2lhdGVkIHdpdGggdGhpcyBwb3J0Zm9saW8gaXRlbS5cclxuICAgKi9cclxuICBBdHRhY2htZW50cz86IEF0dGFjaG1lbnRbXTtcclxuXHJcbiAgLyoqXHJcbiAgICogRmxhZyB0byBkZXRlcm1pbmUgaWYgdGhpcyBhcnRpZmFjdCBpcyBibG9ja2VkLlxyXG4gICAqL1xyXG4gIEJsb2NrZWQ/OiBib29sZWFuO1xyXG5cclxuICAvKipcclxuICAgKiBUaGUgcmVhc29uIHRoaXMgYXJ0aWZhY3QgaXMgYmxvY2tlZC5cclxuICAgKi9cclxuICBCbG9ja2VkUmVhc29uPzogc3RyaW5nO1xyXG5cclxuICAvL1RPRE86IEFkZCBCbG9ja2VyXHJcblxyXG4gIC8qKlxyXG4gICAqIEFsbCB1c2VycyB3aG8gaGF2ZSBjb250cmlidXRlZCBvciBoYXZlIGJlZW4gYW4gb3duZXIgb2YgdGhpcyBQb3J0Zm9saW8gSXRlbSBvciBhbnkgYXNzb2NpYXRlZCB3b3JrIGl0ZW0uXHJcbiAgICovXHJcbiAgcmVhZG9ubHkgQ29sbGFib3JhdG9ycz86IFVzZXJbXTtcclxuXHJcbiAgLyoqXHJcbiAgICogVGhlIG51bWJlciBvZiBkaXJlY3QgY2hpbGRyZW4gKFVzZXIgU3RvcmllcyBvciBQb3J0Zm9saW8gSXRlbXMpIGZvciB0aGlzIFBvcnRmb2xpbyBJdGVtLlxyXG4gICAqL1xyXG4gIHJlYWRvbmx5IERpcmVjdENoaWxkcmVuQ291bnQ/OiBsb25nO1xyXG5cclxuICAvKipcclxuICAgKiBBbHBoYW51bWVyaWMgcmFuayB2YWx1ZS5cclxuICAgKi9cclxuICByZWFkb25seSBEcmFnQW5kRHJvcFJhbms/OiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIFdoYXQgSW52ZXN0bWVudCBDYXRlZ29yeSB0aGlzIFBvcnRmb2xpbyBJdGVtIGJlbG9uZ3MgdG8uXHJcbiAgICovXHJcbiAgSW52ZXN0bWVudENhdGVnb3J5PzogXCJcIiB8IFwiU2hvcnQgVGVybSBHcm93dGhcIiB8IFwiU3RyYXRlZ2ljIEdyb3d0aFwiIHwgXCJDb3N0IFNhdmluZ3NcIiB8IFwiTWFpbnRlbmFuY2VcIjtcclxuXHJcbiAgLy9UT0RPOiBTdXBwb3J0IEludmVzdG1lbnRzXHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSBXU0pGIEpvYiBTaXplIGZvciBhIFBvcnRmb2xpbyBJdGVtIChtaW5pbXVtIHZhbHVlIGlzIDEpLlxyXG4gICAqL1xyXG4gIEpvYlNpemU/OiBsb25nO1xyXG5cclxuICAvKipcclxuICAgKiBDb3VudCBvZiBhbGwgbGVhZiB1c2VyIHN0b3JpZXMgKHN0b3JpZXMgd2l0aG91dCBjaGlsZHJlbikgYXNzb2NpYXRlZCB3aXRoIHRoaXMgUG9ydGZvbGlvIEl0ZW1cclxuICAgKi9cclxuICByZWFkb25seSBMZWFmU3RvcnlDb3VudD86IGxvbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIFN1bSBvZiB0aGUgcGxhbiBlc3RpbWF0ZXMgb2YgYWxsIGxlYWYgdXNlciBzdG9yaWVzIChzdG9yaWVzIHdpdGhvdXQgY2hpbGRyZW4pIGFzc29jaWF0ZWQgd2l0aCB0aGlzIFBvcnRmb2xpbyBJdGVtLlxyXG4gICAqL1xyXG4gIHJlYWRvbmx5IExlYWZTdG9yeVBsYW5Fc3RpbWF0ZVRvdGFsPzogZG91YmxlO1xyXG5cclxuICAvKipcclxuICAgKiBQZXJjZW50YWdlIG9mIGxlYWYgdXNlciBzdG9yaWVzIChzdG9yaWVzIHdpdGhvdXQgY2hpbGRyZW4pIGFzc29jaWF0ZWQgd2l0aCB0aGlzIFBvcnRmb2xpbyBJdGVtIHRoYXQgaGF2ZSBiZWVuIGFjY2VwdGVkLlxyXG4gICAqL1xyXG4gIHJlYWRvbmx5IFBlcmNlbnREb25lQnlTdG9yeUNvdW50PzogZG91YmxlO1xyXG5cclxuICAvKipcclxuICAgKiBQZXJjZW50YWdlIG9mIHRoZSBwbGFuIGVzdGltYXRlcyBmb3IgYWNjZXB0ZWQgbGVhZiB1c2VyIHN0b3JpZXMgKGkuZS4gc3RvcmllcyB3aXRob3V0IGNoaWxkcmVuKSB0aGF0IGFyZSBhc3NvY2lhdGVkIHdpdGggdGhpcyBQb3J0Zm9saW8gSXRlbS5cclxuICAgKi9cclxuICByZWFkb25seSBQZXJjZW50RG9uZUJ5U3RvcnlQbGFuRXN0aW1hdGU/OiBkb3VibGU7XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSBwbGFubmVkIGVuZCBkYXRlIGZvciB0aGlzIHBvcnRmb2xpbyBpdGVtLlxyXG4gICAqL1xyXG4gIFBsYW5uZWRFbmREYXRlPzogZGF0ZVRpbWU7XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSBwbGFubmVkIHN0YXJ0IGRhdGUgZm9yIHRoaXMgcG9ydGZvbGlvIGl0ZW0uXHJcbiAgICovXHJcbiAgUGxhbm5lZFN0YXJ0RGF0ZT86IGRhdGVUaW1lO1xyXG5cclxuICAvLyBUT0RPOiBQb3J0Zm9saW9JdGVtVHlwZTogVHlwZURlZmluaXRpb25cclxuXHJcbiAgLyoqXHJcbiAgICogVHlwZSBEZWZpbml0aW9uIE5hbWVcclxuICAgKi9cclxuICByZWFkb25seSBQb3J0Zm9saW9JdGVtVHlwZU5hbWU/OiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSBQcmVsaW1pbmFyeSBFc3RpbWF0ZSBmb3IgYSBQb3J0Zm9saW8gSXRlbS5cclxuICAgKi9cclxuICBQcmVsaW1pbmFyeUVzdGltYXRlPzogUHJlbGltaW5hcnlFc3RpbWF0ZTtcclxuXHJcbiAgLyoqXHJcbiAgICogVGhlIFZhbHVlIG9mIHRoZSBQcmVsaW1pYXJ5IEVzdGltYXRlIGZvciBhIFBvcnRmb2xpbyBJdGVtLlxyXG4gICAqL1xyXG4gIHJlYWRvbmx5IFByZWxpbWluYXJ5RXN0aW1hdGVWYWx1ZT86IGxvbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIE1vdmVkIHRvIFJlY3ljbGUgQmluXHJcbiAgICovXHJcbiAgcmVhZG9ubHkgUmVjeWNsZWQ/OiBib29sZWFuO1xyXG5cclxuICAvKipcclxuICAgKiBUaGUgUmVmaW5lZCBFc3RpbWF0ZSBmb3IgYSBQb3J0Zm9saW8gSXRlbS5cclxuICAgKi9cclxuICBSZWZpbmVkRXN0aW1hdGU/OiBsb25nO1xyXG5cclxuICAvKipcclxuICAgKiBUaGUgUmlza3MgYWZmZWN0aW5nIHRoaXMgd29yayBpdGVtLlxyXG4gICAqL1xyXG4gIFJpc2tzPzogUmlza1tdO1xyXG5cclxuICAvKipcclxuICAgKiBBIG5vbi1uZWdhdGl2ZSBpbnRlZ2VyIHJlcHJlc2VudGluZyByaXNrLlxyXG4gICAqL1xyXG4gIFJpc2tTY29yZT86IGxvbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSBXU0pGIFJlZHVjZWQgUmlzay9PcHBvcnR1bml0eSBFbmFibGVtZW50IFZhbHVlIGZvciBhIFBvcnRmb2xpbyBJdGVtIChtaW5pbXVtIHZhbHVlIGlzIDEpLlxyXG4gICAqL1xyXG4gIFJST0VWYWx1ZT86IGxvbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIEthbmJhbiBzdGF0ZSBmb3IgdGhpcyBQb3J0Zm9saW8gSXRlbS5cclxuICAgKi9cclxuICBTdGF0ZT86IFN0YXRlO1xyXG5cclxuICAvKipcclxuICAgKiBUaGUgdGltZXN0YW1wIG9mIHRoZSBsYXN0IHN0YXRlIGNoYW5nZS5cclxuICAgKi9cclxuICBTdGF0ZUNoYW5nZWREYXRlPzogZGF0ZVRpbWU7XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSBXU0pGIFRpbWUgQ3JpdGljYWxpdHkgZm9yIGEgUG9ydGZvbGlvIEl0ZW0gKG1pbmltdW0gdmFsdWUgaXMgMSkuXHJcbiAgICovXHJcbiAgVGltZUNyaXRpY2FsaXR5PzogbG9uZztcclxuXHJcbiAgLyoqXHJcbiAgICogQ291bnQgb2YgdW4tZXN0aW1hdGVkIGxlYWYgdXNlciBzdG9yaWVzIChzdG9yaWVzIHdpdGhvdXQgY2hpbGRyZW4pIGFzc29jaWF0ZWQgd2l0aCB0aGlzIFBvcnRmb2xpbyBJdGVtLlxyXG4gICAqL1xyXG4gIHJlYWRvbmx5IFVuRXN0aW1hdGVkTGVhZlN0b3J5Q291bnQ/OiBsb25nO1xyXG5cclxuICAvKipcclxuICAgKiBUaGUgV1NKRiBVc2VyIGFuZC9vciBCdXNpbmVzcyBWYWx1ZSBmb3IgYSBQb3J0Zm9saW8gSXRlbSAobWluaW11bSB2YWx1ZSBpcyAxKVxyXG4gICAqL1xyXG4gIFVzZXJCdXNpbmVzc1ZhbHVlPzogbG9uZztcclxuXHJcbiAgLyoqXHJcbiAgICogQSBub24tbmVnYXRpdmUgaW50ZWdlciByZXByZXNlbnRpbmcgdmFsdWUuXHJcbiAgICovXHJcbiAgVmFsdWVTY29yZT86IGxvbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSBXU0pGIFNjb3JlIGZvciBhIFBvcnRmb2xpbyBJdGVtLlxyXG4gICAqL1xyXG4gIFdTSkZTY29yZT86IGRvdWJsZTtcclxufVxyXG4iXX0=