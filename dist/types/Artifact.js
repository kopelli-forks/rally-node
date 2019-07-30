"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Artifact = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _WorkspaceDomainObject = require("./WorkspaceDomainObject");

var Artifact =
/*#__PURE__*/
function (_WorkspaceDomainObjec) {
  (0, _inherits2["default"])(Artifact, _WorkspaceDomainObjec);

  function Artifact() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2["default"])(this, Artifact);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2["default"])(this, (_getPrototypeOf2 = (0, _getPrototypeOf3["default"])(Artifact)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "Changesets", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "Connections", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "CreatedBy", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "Description", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "Discussion", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "DisplayColor", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "Expedite", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "FormattedID", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "LastUpdateDate", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "LatestDiscussionAgeInMinutes", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "Milestones", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "Name", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "Notes", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "Owner", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "Project", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "Ready", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "RevisionHistory", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "Tags", void 0);
    return _this;
  }

  return Artifact;
}(_WorkspaceDomainObject.WorkspaceDomainObject);

exports.Artifact = Artifact;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90eXBlcy9BcnRpZmFjdC50cyJdLCJuYW1lcyI6WyJBcnRpZmFjdCIsIldvcmtzcGFjZURvbWFpbk9iamVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0lBV3NCQSxROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFBaUJDLDRDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgV29ya3NwYWNlRG9tYWluT2JqZWN0IH0gZnJvbSBcIi4vV29ya3NwYWNlRG9tYWluT2JqZWN0XCI7XHJcbmltcG9ydCB7IFVzZXIgfSBmcm9tIFwiLi9Vc2VyXCI7XHJcbmltcG9ydCB7IGRhdGVUaW1lLCBsb25nIH0gZnJvbSBcIi4vdHlwZXNcIjtcclxuaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gXCIuL1Byb2plY3RcIjtcclxuaW1wb3J0IHsgUmV2aXNpb25IaXN0b3J5IH0gZnJvbSBcIi4vUmV2aXNpb25IaXN0b3J5XCI7XHJcbmltcG9ydCB7IENoYW5nZXNldCB9IGZyb20gXCIuL0NoYW5nZXNldFwiO1xyXG5pbXBvcnQgeyBDb25uZWN0aW9uIH0gZnJvbSBcIi4vQ29ubmVjdGlvblwiO1xyXG5pbXBvcnQgeyBDb252ZXJzYXRpb25Qb3N0IH0gZnJvbSBcIi4vQ29udmVyc2F0aW9uUG9zdFwiO1xyXG5pbXBvcnQgeyBNaWxlc3RvbmUgfSBmcm9tIFwiLi9NaWxlc3RvbmVcIjtcclxuaW1wb3J0IHsgVGFnIH0gZnJvbSBcIi4vVGFnXCI7XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQXJ0aWZhY3QgZXh0ZW5kcyBXb3Jrc3BhY2VEb21haW5PYmplY3Qge1xyXG4gIC8qKlxyXG4gICAqIENoYW5nZXNldHMgYXNzb2NpYXRlZCB3aXRoIHRoaXMgYXJ0aWZhY3QuXHJcbiAgICovXHJcbiAgQ2hhbmdlc2V0cz86IENoYW5nZXNldFtdO1xyXG5cclxuICAvKipcclxuICAgKiBDb25uZWN0aW9ucyBhc3NvY2lhdGVkIHdpdGggdGhpcyBhcnRpZmFjdC5cclxuICAgKi9cclxuICByZWFkb25seSBDb25uZWN0aW9ucz86IENvbm5lY3Rpb25bXTtcclxuXHJcbiAgLyoqXHJcbiAgICogVXNlciB3aG8gY3JlYXRlZCB0aGUgYXJ0aWZhY3QuXHJcbiAgICovXHJcbiAgcmVhZG9ubHkgQ3JlYXRlZEJ5PzogVXNlcjtcclxuXHJcbiAgLyoqXHJcbiAgICogQXJ0aWZhY3QgZGVzY3JpcHRpb24sIHdoaWNoIGlzIGEgcmljaC10ZXh0IGZpZWxkLlxyXG4gICAqL1xyXG4gIERlc2NyaXB0aW9uPzogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBUaGUgZGlzY3Vzc2lvbnMgZm9yIHRoaXMgYXJ0aWZhY3QuXHJcbiAgICovXHJcbiAgcmVhZG9ubHkgRGlzY3Vzc2lvbj86IENvbnZlcnNhdGlvblBvc3RbXTtcclxuXHJcbiAgLyoqXHJcbiAgICogRGlzcGxheSBjb2xvciBmb3IgYXJ0aWZhY3RzLlxyXG4gICAqL1xyXG4gIERpc3BsYXlDb2xvcj86IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogV2hldGhlciBvciBub3QgdGhpcyBBcnRpZmFjdCBpcyBleHBlZGl0ZWQuXHJcbiAgICovXHJcbiAgRXhwZWRpdGU/OiBib29sZWFuO1xyXG5cclxuICAvKipcclxuICAgKiBUaGUgZm9ybWF0dGVkIElEIGZvciBhbiBvYmplY3QuIFRoaXMgaXMgYXV0b21hdGljYWxseSBhc3NpZ25lZCB3aGVuIGFuIG9iamVjdCBpcyBjcmVhdGVkIGFuZCBjYW4gbmV2ZXIgYmUgY2hhbmdlZC5cclxuICAgKiBJbiBxdWVyaWVzLCBvbmx5IGluY2x1ZGUgdGhlIGludGVnZXIgcG9ydGlvbiBhbmQgb21pdCB0aGUgcHJlZml4LlxyXG4gICAqL1xyXG4gIHJlYWRvbmx5IEZvcm1hdHRlZElEITogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBUaGUgbGFzdCB1cGRhdGUgZGF0ZSBvZiBhbiBvYmplY3QuIEl0IGlzIGF1dG9tYXRpY2FsbHkgYXNzaWduZWQgd2hlbiBhbiBvYmplY3QgaXMgY3JlYXRlZCBvciB1cGRhdGVkLlxyXG4gICAqL1xyXG4gIHJlYWRvbmx5IExhc3RVcGRhdGVEYXRlITogZGF0ZVRpbWU7XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSBhZ2UgaW4gbWludXRlcyBvZiB0aGUgbGF0ZXN0IGRpc2N1c3Npb24gb24gdGhpcyBEZWZlY3QuXHJcbiAgICovXHJcbiAgcmVhZG9ubHkgTGF0ZXN0RGlzY3Vzc2lvbkFnZUluTWludXRlcz86IGxvbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSBtaWxlc3RvbmVzIGFzc29jaWF0ZWQgd2l0aCB0aGlzIGFydGlmYWN0LlxyXG4gICAqL1xyXG4gIE1pbGVzdG9uZXM/OiBNaWxlc3RvbmVbXTtcclxuXHJcbiAgLyoqXHJcbiAgICogVGhlIG5hbWUgb2YgdGhlIGFydGlmYWN0LlxyXG4gICAqL1xyXG4gIE5hbWUhOiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIEFydGlmYWN0IG5vdGVzLCB3aGljaCBpcyBhIHJpY2gtdGV4dCBmaWVsZC5cclxuICAgKi9cclxuICBOb3Rlcz86IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogQXJ0aWZhY3Qgb3duZXIsIGEgcmVmZXJlbmNlIHRvIHRoZSB1c2VyLlxyXG4gICAqL1xyXG4gIE93bmVyPzogVXNlcjtcclxuXHJcbiAgLyoqXHJcbiAgICogVGhlIHByb2plY3QgdGhpcyBhcnRpZmFjdCBpcyBhc3NvY2lhdGVkIHdpdGguXHJcbiAgICovXHJcbiAgUHJvamVjdCE6IFByb2plY3Q7XHJcblxyXG4gIC8qKlxyXG4gICAqIFdoZXRoZXIgb3Igbm90IHRoaXMgQXJ0aWZhY3QgaXMgcmVhZHlcclxuICAgKi9cclxuICBSZWFkeT86IGJvb2xlYW47XHJcblxyXG4gIC8qKlxyXG4gICAqIEEgcmVmZXJlbmNlIHRvIHRoZSByZXZpc2lvbiBoaXN0b3J5IChyZWFkLW9ubHkpIG9mIHRoZSBhcnRpZmFjdC5cclxuICAgKi9cclxuICByZWFkb25seSBSZXZpc2lvbkhpc3Rvcnk/OiBSZXZpc2lvbkhpc3Rvcnk7XHJcblxyXG4gIC8qKlxyXG4gICAqIFRhZ3MgZm9yIEFydGlmYWN0XHJcbiAgICovXHJcbiAgVGFncz86IFRhZ1tdO1xyXG59XHJcbiJdfQ==