"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Subscription = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _PersistableObject2 = require("./PersistableObject");

var Subscription =
/*#__PURE__*/
function (_PersistableObject) {
  (0, _inherits2["default"])(Subscription, _PersistableObject);

  function Subscription() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2["default"])(this, Subscription);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2["default"])(this, (_getPrototypeOf2 = (0, _getPrototypeOf3["default"])(Subscription)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "ApiKeysEnabled", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "CORSEnabled", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "EmailEnabled", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "ExpirationDate", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "JSONPEnabled", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "MaximumCustomUserFields", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "MaximumProjects", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "Modules", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "Name", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "PasswordExpirationDays", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "PLA", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "PreviousPasswordCount", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "ProjectHierarchyEnabled", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "RevisionHistory", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "SessionTimeoutSeconds", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "SiteId", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "SSOUserExceptions", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "StoryHierarchyEnabled", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "StoryHierarchyType", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "SubscriptionID", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "SubscriptionType", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "WebhooksEnabled", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "Workspaces", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "ZuulID", void 0);
    return _this;
  }

  return Subscription;
}(_PersistableObject2.PersistableObject);

exports.Subscription = Subscription;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90eXBlcy9TdWJzY3JpcHRpb24udHMiXSwibmFtZXMiOlsiU3Vic2NyaXB0aW9uIiwiUGVyc2lzdGFibGVPYmplY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztJQVVhQSxZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFBcUJDLHFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGVyc2lzdGFibGVPYmplY3QgfSBmcm9tIFwiLi9QZXJzaXN0YWJsZU9iamVjdFwiO1xyXG5cclxuaW1wb3J0IHsgZGF0ZVRpbWUsIGxvbmcgfSBmcm9tIFwiLi90eXBlc1wiO1xyXG5cclxuaW1wb3J0IHsgUmV2aXNpb25IaXN0b3J5IH0gZnJvbSBcIi4vUmV2aXNpb25IaXN0b3J5XCI7XHJcblxyXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSBcIi4vVXNlclwiO1xyXG5cclxuaW1wb3J0IHsgV29ya3NwYWNlIH0gZnJvbSBcIi4vV29ya3NwYWNlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgU3Vic2NyaXB0aW9uIGV4dGVuZHMgUGVyc2lzdGFibGVPYmplY3Qge1xyXG4gIHJlYWRvbmx5IEFwaUtleXNFbmFibGVkPzogYm9vbGVhbjtcclxuICByZWFkb25seSBDT1JTRW5hYmxlZD86IGJvb2xlYW47XHJcbiAgcmVhZG9ubHkgRW1haWxFbmFibGVkPzogYm9vbGVhbjtcclxuICByZWFkb25seSBFeHBpcmF0aW9uRGF0ZT86IGRhdGVUaW1lO1xyXG4gIHJlYWRvbmx5IEpTT05QRW5hYmxlZD86IGJvb2xlYW47XHJcbiAgcmVhZG9ubHkgTWF4aW11bUN1c3RvbVVzZXJGaWVsZHM6IGxvbmcgfCB1bmRlZmluZWQ7XHJcbiAgcmVhZG9ubHkgTWF4aW11bVByb2plY3RzOiBsb25nIHwgdW5kZWZpbmVkO1xyXG4gIHJlYWRvbmx5IE1vZHVsZXM/OiBzdHJpbmc7XHJcbiAgcmVhZG9ubHkgTmFtZTogc3RyaW5nIHwgdW5kZWZpbmVkO1xyXG4gIHJlYWRvbmx5IFBhc3N3b3JkRXhwaXJhdGlvbkRheXM/OiBsb25nO1xyXG4gIHJlYWRvbmx5IFBMQT86IGJvb2xlYW47XHJcbiAgcmVhZG9ubHkgUHJldmlvdXNQYXNzd29yZENvdW50OiBsb25nIHwgdW5kZWZpbmVkO1xyXG4gIHJlYWRvbmx5IFByb2plY3RIaWVyYXJjaHlFbmFibGVkPzogYm9vbGVhbjtcclxuICByZWFkb25seSBSZXZpc2lvbkhpc3Rvcnk/OiBSZXZpc2lvbkhpc3Rvcnk7XHJcbiAgcmVhZG9ubHkgU2Vzc2lvblRpbWVvdXRTZWNvbmRzPzogbG9uZztcclxuICByZWFkb25seSBTaXRlSWQ6IHN0cmluZyB8IHVuZGVmaW5lZDtcclxuICByZWFkb25seSBTU09Vc2VyRXhjZXB0aW9ucz86IFVzZXJbXTtcclxuICByZWFkb25seSBTdG9yeUhpZXJhcmNoeUVuYWJsZWQ/OiBib29sZWFuO1xyXG4gIHJlYWRvbmx5IFN0b3J5SGllcmFyY2h5VHlwZTogJ05vbmUnIHwgJ0xpbWl0ZWQnIHwgJ1VubGltaXRlZCcgfCB1bmRlZmluZWQ7XHJcbiAgcmVhZG9ubHkgU3Vic2NyaXB0aW9uSUQ6IG51bWJlciB8IHVuZGVmaW5lZDtcclxuICByZWFkb25seSBTdWJzY3JpcHRpb25UeXBlOiAnQ0UyMDE0JyB8ICdFeHByZXNzX0VkaXRpb24nIHwgJ0VudGVycHJpc2UnIHwgJ1VubGltaXRlZCcgfCB1bmRlZmluZWRcclxuICByZWFkb25seSBXZWJob29rc0VuYWJsZWQ/OiBib29sZWFuXHJcbiAgcmVhZG9ubHkgV29ya3NwYWNlcz86IFdvcmtzcGFjZVtdO1xyXG4gIHJlYWRvbmx5IFp1dWxJRD86IHN0cmluZztcclxufVxyXG4iXX0=