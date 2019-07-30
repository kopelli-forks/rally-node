"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PortfolioItemEpic = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _PortfolioItem2 = require("./PortfolioItem");

var PortfolioItemEpic =
/*#__PURE__*/
function (_PortfolioItem) {
  (0, _inherits2["default"])(PortfolioItemEpic, _PortfolioItem);

  function PortfolioItemEpic() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2["default"])(this, PortfolioItemEpic);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2["default"])(this, (_getPrototypeOf2 = (0, _getPrototypeOf3["default"])(PortfolioItemEpic)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "Children", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "Parent", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "Predecessors", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "State", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "Successors", void 0);
    return _this;
  }

  return PortfolioItemEpic;
}(_PortfolioItem2.PortfolioItem);

exports.PortfolioItemEpic = PortfolioItemEpic;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90eXBlcy9Qb3J0Zm9saW9JdGVtRXBpYy50cyJdLCJuYW1lcyI6WyJQb3J0Zm9saW9JdGVtRXBpYyIsIlBvcnRmb2xpb0l0ZW0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztJQUthQSxpQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFBMEJDLDZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUG9ydGZvbGlvSXRlbSB9IGZyb20gXCIuL1BvcnRmb2xpb0l0ZW1cIjtcclxuaW1wb3J0IHsgUG9ydGZvbGlvSXRlbUZlYXR1cmUgfSBmcm9tIFwiLi9Qb3J0Zm9saW9JdGVtRmVhdHVyZVwiO1xyXG5pbXBvcnQgeyBTdGF0ZSB9IGZyb20gXCIuL1N0YXRlXCI7XHJcbmltcG9ydCB7IFBvcnRmb2xpb0l0ZW1UaGVtZSB9IGZyb20gXCIuL1BvcnRmb2xpb0l0ZW1UaGVtZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBvcnRmb2xpb0l0ZW1FcGljIGV4dGVuZHMgUG9ydGZvbGlvSXRlbSB7XHJcbiAgLyoqXHJcbiAgICogVGhlIEZlYXR1cmUgY29sbGVjdGlvbiBvZiBhIEluaXRpYXRpdmUgKHJlYWQtb25seSBjb2xsZWN0aW9uKS5cclxuICAgKi9cclxuICByZWFkb25seSBDaGlsZHJlbj86IFBvcnRmb2xpb0l0ZW1GZWF0dXJlW107XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSBUaGVtZSBwYXJlbnQgb2YgdGhpcyBFcGljLlxyXG4gICAqL1xyXG4gIFBhcmVudD86IFBvcnRmb2xpb0l0ZW1UaGVtZTtcclxuXHJcbiAgLyoqXHJcbiAgICogVGhlIGluaXRpYXRpdmUgcHJlZGVjZXNzb3JzIG9mIHRoaXMgaW5pdGlhdGl2ZS5cclxuICAgKi9cclxuICBQcmVkZWNlc3NvcnM/OiBQb3J0Zm9saW9JdGVtRXBpY1tdO1xyXG5cclxuICAvKipcclxuICAgKiBLYW5iYW4gc3RhdGUgZm9yIHRoaXMgcG9ydGZvbGlvIGl0ZW0uXHJcbiAgICovXHJcbiAgU3RhdGU/OiBTdGF0ZTtcclxuXHJcbiAgLyoqXHJcbiAgICogVGhlIGluaXRpYXRpdmUgc3VjY2Vzc29ycyBvZiB0aGlzIGluaXRpYXRpdmVcclxuICAgKi9cclxuICBTdWNjZXNzb3JzPzogUG9ydGZvbGlvSXRlbUVwaWNbXTtcclxufSJdfQ==