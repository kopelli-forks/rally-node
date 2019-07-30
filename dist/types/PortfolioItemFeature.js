"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PortfolioItemFeature = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _PortfolioItem2 = require("./PortfolioItem");

var PortfolioItemFeature =
/*#__PURE__*/
function (_PortfolioItem) {
  (0, _inherits2["default"])(PortfolioItemFeature, _PortfolioItem);

  function PortfolioItemFeature() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2["default"])(this, PortfolioItemFeature);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2["default"])(this, (_getPrototypeOf2 = (0, _getPrototypeOf3["default"])(PortfolioItemFeature)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "ExternalContributions", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "LateChildCount", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "Parent", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "Predecessors", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "Release", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "State", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "Successors", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "UserStories", void 0);
    return _this;
  }

  return PortfolioItemFeature;
}(_PortfolioItem2.PortfolioItem);

exports.PortfolioItemFeature = PortfolioItemFeature;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90eXBlcy9Qb3J0Zm9saW9JdGVtRmVhdHVyZS50cyJdLCJuYW1lcyI6WyJQb3J0Zm9saW9JdGVtRmVhdHVyZSIsIlBvcnRmb2xpb0l0ZW0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztJQVFhQSxvQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFBNkJDLDZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUG9ydGZvbGlvSXRlbSB9IGZyb20gXCIuL1BvcnRmb2xpb0l0ZW1cIjtcclxuaW1wb3J0IHsgbG9uZyB9IGZyb20gXCIuL3R5cGVzXCI7XHJcbmltcG9ydCB7IFJlbGVhc2UgfSBmcm9tIFwiLi9SZWxlYXNlXCI7XHJcbmltcG9ydCB7IFN0YXRlIH0gZnJvbSBcIi4vU3RhdGVcIjtcclxuaW1wb3J0IHsgSGllcmFyY2hpY2FsUmVxdWlyZW1lbnQgfSBmcm9tIFwiLi9IaWVyYXJjaGljYWxSZXF1aXJlbWVudFwiO1xyXG5pbXBvcnQgeyBFeHRlcm5hbENvbnRyaWJ1dGlvbiB9IGZyb20gXCIuL0V4dGVybmFsQ29udHJpYnV0aW9uXCI7XHJcbmltcG9ydCB7IFBvcnRmb2xpb0l0ZW1FcGljIH0gZnJvbSBcIi4vUG9ydGZvbGlvSXRlbUVwaWNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBQb3J0Zm9saW9JdGVtRmVhdHVyZSBleHRlbmRzIFBvcnRmb2xpb0l0ZW0ge1xyXG4gIC8qKlxyXG4gICAqIFRoZSBFeHRlcm5hbCBDb250cmlidXRpb24gY29sbGVjdGlvbiBvZiBhIEZlYXR1cmUgKHJlYWQtb25seSBjb2xsZWN0aW9uKS5cclxuICAgKi9cclxuICByZWFkb25seSBFeHRlcm5hbENvbnRyaWJ1dGlvbnM/OiBFeHRlcm5hbENvbnRyaWJ1dGlvbltdO1xyXG5cclxuICAvKipcclxuICAgKiBUaGUgY291bnQgb2YgbGVhZiBjaGlsZHJlbiB3aG8gYXJlIHNjaGVkdWxlZCBpbiBhIHJlbGVhc2Ugb3IgaXRlcmF0aW9uIHRoYXQncyBsYXRlciB0aGFuIHRoaXMgaXRlbSdzIHJlbGVhc2UuXHJcbiAgICovXHJcbiAgcmVhZG9ubHkgTGF0ZUNoaWxkQ291bnQ/OiBsb25nO1xyXG5cclxuICAvKipcclxuICAgKiBUaGUgSW5pdGlhdGl2ZSBwYXJlbnQgb2YgdGhpcyBGZWF0dXJlLlxyXG4gICAqL1xyXG4gIFBhcmVudD86IFBvcnRmb2xpb0l0ZW1FcGljO1xyXG5cclxuICAvKipcclxuICAgKiBUaGUgZmVhdHVyZSBwcmVkZWNlc3NvcnMgb2YgdGhpcyBmZWF0dXJlLlxyXG4gICAqL1xyXG4gIFByZWRlY2Vzc29ycz86IFBvcnRmb2xpb0l0ZW1GZWF0dXJlW107XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSByZWxlYXNlIG9mIHRoaXMgRmVhdHVyZXMuXHJcbiAgICovXHJcbiAgUmVsZWFzZT86IFJlbGVhc2U7XHJcblxyXG4gIC8qKlxyXG4gICAqIEthbmJhbiBzdGF0ZSBmb3IgdGhpcyBwb3J0Zm9saW8gaXRlbS5cclxuICAgKi9cclxuICBTdGF0ZT86IFN0YXRlO1xyXG5cclxuICAvKipcclxuICAgKiBUaGUgZmVhdHVyZSBzdWNlc3NvcnMgb2YgdGhpcyBmZWF0dXJlLlxyXG4gICAqL1xyXG4gIFN1Y2Nlc3NvcnM/OiBQb3J0Zm9saW9JdGVtRmVhdHVyZVtdO1xyXG5cclxuICAvKipcclxuICAgKiBUaGUgSGllcmFyY2hpY2FsIFJlcXVpcmVtZW50IGNvbGxlY3Rpb24gb2YgYSBGZWF0dXJlIChyZWFkLW9ubHkgY29sbGVjdGlvbikuXHJcbiAgICovXHJcbiAgcmVhZG9ubHkgVXNlclN0b3JpZXM/OiBIaWVyYXJjaGljYWxSZXF1aXJlbWVudFtdO1xyXG59XHJcbiJdfQ==