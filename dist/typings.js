"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Workspace = exports.Scope = exports.HierarchicalRequirement = exports.Requirement = exports.TestCase = exports.Task = exports.Defect = exports.DefectSuite = exports.Artifact = exports.ReleaseCumulativeFlow = exports.IterationCumulativeFlow = exports.CumulativeFlowData = exports.TestCaseResult = exports.RevisionHistory = exports.Revision = exports.Iteration = exports.Release = exports.AttachmentContent = exports.Project = exports.Attachment = exports.WorkspaceDomainObject = exports.User = exports.OptionsScope = exports.GetOptions = exports.GetResult = exports.QueryResult = exports.Subscription = exports.DomainObject = exports.PersistableObject = void 0;

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf4 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var PersistableObject = function PersistableObject() {
  (0, _classCallCheck2["default"])(this, PersistableObject);
  (0, _defineProperty2["default"])(this, "CreationDate", void 0);
  (0, _defineProperty2["default"])(this, "ObjectID", void 0);
  (0, _defineProperty2["default"])(this, "ObjectUUID", void 0);
  (0, _defineProperty2["default"])(this, "VersionId", void 0);
};

exports.PersistableObject = PersistableObject;

var DomainObject =
/*#__PURE__*/
function (_PersistableObject) {
  (0, _inherits2["default"])(DomainObject, _PersistableObject);

  function DomainObject() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2["default"])(this, DomainObject);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2["default"])(this, (_getPrototypeOf2 = (0, _getPrototypeOf4["default"])(DomainObject)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "Subscription", void 0);
    return _this;
  }

  return DomainObject;
}(PersistableObject);

exports.DomainObject = DomainObject;

var Subscription =
/*#__PURE__*/
function (_PersistableObject2) {
  (0, _inherits2["default"])(Subscription, _PersistableObject2);

  function Subscription() {
    var _getPrototypeOf3;

    var _this2;

    (0, _classCallCheck2["default"])(this, Subscription);

    for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }

    _this2 = (0, _possibleConstructorReturn2["default"])(this, (_getPrototypeOf3 = (0, _getPrototypeOf4["default"])(Subscription)).call.apply(_getPrototypeOf3, [this].concat(args)));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this2), "ApiKeysEnabled", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this2), "CORSEnabled", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this2), "EmailEnabled", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this2), "ExpirationDate", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this2), "JSONPEnabled", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this2), "MaximumCustomUserFields", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this2), "MaximumProjects", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this2), "Modules", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this2), "Name", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this2), "PasswordExpirationDays", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this2), "PLA", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this2), "PreviousPasswordCount", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this2), "ProjectHierarchyEnabled", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this2), "RevisionHistory", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this2), "SessionTimeoutSeconds", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this2), "SiteId", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this2), "SSOUserExceptions", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this2), "StoryHierarchyEnabled", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this2), "StoryHierarchyType", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this2), "SubscriptionID", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this2), "SubscriptionType", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this2), "WebhooksEnabled", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this2), "Workspaces", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this2), "ZuulID", void 0);
    return _this2;
  }

  return Subscription;
}(PersistableObject);

exports.Subscription = Subscription;

var QueryResult = function QueryResult() {
  (0, _classCallCheck2["default"])(this, QueryResult);
  (0, _defineProperty2["default"])(this, "Errors", void 0);
  (0, _defineProperty2["default"])(this, "Warnings", void 0);
  (0, _defineProperty2["default"])(this, "Result", void 0);
  (0, _defineProperty2["default"])(this, "StartIndex", void 0);
  (0, _defineProperty2["default"])(this, "PageSize", void 0);
  (0, _defineProperty2["default"])(this, "TotalResultCount", void 0);
};

exports.QueryResult = QueryResult;

var GetResult = function GetResult() {
  (0, _classCallCheck2["default"])(this, GetResult);
  (0, _defineProperty2["default"])(this, "Errors", void 0);
  (0, _defineProperty2["default"])(this, "Warnings", void 0);
  (0, _defineProperty2["default"])(this, "Object", void 0);
};

exports.GetResult = GetResult;

var GetOptions = function GetOptions() {
  (0, _classCallCheck2["default"])(this, GetOptions);
  (0, _defineProperty2["default"])(this, "ref", void 0);
  (0, _defineProperty2["default"])(this, "scope", void 0);
  (0, _defineProperty2["default"])(this, "fetch", void 0);
  (0, _defineProperty2["default"])(this, "requestOptions", void 0);
};

exports.GetOptions = GetOptions;

var OptionsScope = function OptionsScope() {
  (0, _classCallCheck2["default"])(this, OptionsScope);
  (0, _defineProperty2["default"])(this, "workspace", void 0);
};

exports.OptionsScope = OptionsScope;

var User =
/*#__PURE__*/
function (_DomainObject) {
  (0, _inherits2["default"])(User, _DomainObject);

  function User() {
    (0, _classCallCheck2["default"])(this, User);
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf4["default"])(User).apply(this, arguments));
  }

  return User;
}(DomainObject);

exports.User = User;

var WorkspaceDomainObject =
/*#__PURE__*/
function (_DomainObject2) {
  (0, _inherits2["default"])(WorkspaceDomainObject, _DomainObject2);

  function WorkspaceDomainObject() {
    (0, _classCallCheck2["default"])(this, WorkspaceDomainObject);
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf4["default"])(WorkspaceDomainObject).apply(this, arguments));
  }

  return WorkspaceDomainObject;
}(DomainObject);

exports.WorkspaceDomainObject = WorkspaceDomainObject;

var Attachment =
/*#__PURE__*/
function (_WorkspaceDomainObjec) {
  (0, _inherits2["default"])(Attachment, _WorkspaceDomainObjec);

  function Attachment() {
    (0, _classCallCheck2["default"])(this, Attachment);
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf4["default"])(Attachment).apply(this, arguments));
  }

  return Attachment;
}(WorkspaceDomainObject);

exports.Attachment = Attachment;

var Project =
/*#__PURE__*/
function (_WorkspaceDomainObjec2) {
  (0, _inherits2["default"])(Project, _WorkspaceDomainObjec2);

  function Project() {
    (0, _classCallCheck2["default"])(this, Project);
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf4["default"])(Project).apply(this, arguments));
  }

  return Project;
}(WorkspaceDomainObject);

exports.Project = Project;

var AttachmentContent =
/*#__PURE__*/
function (_WorkspaceDomainObjec3) {
  (0, _inherits2["default"])(AttachmentContent, _WorkspaceDomainObjec3);

  function AttachmentContent() {
    (0, _classCallCheck2["default"])(this, AttachmentContent);
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf4["default"])(AttachmentContent).apply(this, arguments));
  }

  return AttachmentContent;
}(WorkspaceDomainObject);

exports.AttachmentContent = AttachmentContent;

var Release =
/*#__PURE__*/
function (_WorkspaceDomainObjec4) {
  (0, _inherits2["default"])(Release, _WorkspaceDomainObjec4);

  function Release() {
    (0, _classCallCheck2["default"])(this, Release);
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf4["default"])(Release).apply(this, arguments));
  }

  return Release;
}(WorkspaceDomainObject);

exports.Release = Release;

var Iteration =
/*#__PURE__*/
function (_WorkspaceDomainObjec5) {
  (0, _inherits2["default"])(Iteration, _WorkspaceDomainObjec5);

  function Iteration() {
    (0, _classCallCheck2["default"])(this, Iteration);
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf4["default"])(Iteration).apply(this, arguments));
  }

  return Iteration;
}(WorkspaceDomainObject);

exports.Iteration = Iteration;

var Revision =
/*#__PURE__*/
function (_WorkspaceDomainObjec6) {
  (0, _inherits2["default"])(Revision, _WorkspaceDomainObjec6);

  function Revision() {
    (0, _classCallCheck2["default"])(this, Revision);
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf4["default"])(Revision).apply(this, arguments));
  }

  return Revision;
}(WorkspaceDomainObject);

exports.Revision = Revision;

var RevisionHistory =
/*#__PURE__*/
function (_WorkspaceDomainObjec7) {
  (0, _inherits2["default"])(RevisionHistory, _WorkspaceDomainObjec7);

  function RevisionHistory() {
    (0, _classCallCheck2["default"])(this, RevisionHistory);
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf4["default"])(RevisionHistory).apply(this, arguments));
  }

  return RevisionHistory;
}(WorkspaceDomainObject);

exports.RevisionHistory = RevisionHistory;

var TestCaseResult =
/*#__PURE__*/
function (_WorkspaceDomainObjec8) {
  (0, _inherits2["default"])(TestCaseResult, _WorkspaceDomainObjec8);

  function TestCaseResult() {
    (0, _classCallCheck2["default"])(this, TestCaseResult);
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf4["default"])(TestCaseResult).apply(this, arguments));
  }

  return TestCaseResult;
}(WorkspaceDomainObject);

exports.TestCaseResult = TestCaseResult;

var CumulativeFlowData =
/*#__PURE__*/
function (_WorkspaceDomainObjec9) {
  (0, _inherits2["default"])(CumulativeFlowData, _WorkspaceDomainObjec9);

  function CumulativeFlowData() {
    (0, _classCallCheck2["default"])(this, CumulativeFlowData);
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf4["default"])(CumulativeFlowData).apply(this, arguments));
  }

  return CumulativeFlowData;
}(WorkspaceDomainObject);

exports.CumulativeFlowData = CumulativeFlowData;

var IterationCumulativeFlow =
/*#__PURE__*/
function (_CumulativeFlowData) {
  (0, _inherits2["default"])(IterationCumulativeFlow, _CumulativeFlowData);

  function IterationCumulativeFlow() {
    (0, _classCallCheck2["default"])(this, IterationCumulativeFlow);
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf4["default"])(IterationCumulativeFlow).apply(this, arguments));
  }

  return IterationCumulativeFlow;
}(CumulativeFlowData);

exports.IterationCumulativeFlow = IterationCumulativeFlow;

var ReleaseCumulativeFlow =
/*#__PURE__*/
function (_CumulativeFlowData2) {
  (0, _inherits2["default"])(ReleaseCumulativeFlow, _CumulativeFlowData2);

  function ReleaseCumulativeFlow() {
    (0, _classCallCheck2["default"])(this, ReleaseCumulativeFlow);
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf4["default"])(ReleaseCumulativeFlow).apply(this, arguments));
  }

  return ReleaseCumulativeFlow;
}(CumulativeFlowData);

exports.ReleaseCumulativeFlow = ReleaseCumulativeFlow;

var Artifact =
/*#__PURE__*/
function (_WorkspaceDomainObjec10) {
  (0, _inherits2["default"])(Artifact, _WorkspaceDomainObjec10);

  function Artifact() {
    (0, _classCallCheck2["default"])(this, Artifact);
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf4["default"])(Artifact).apply(this, arguments));
  }

  return Artifact;
}(WorkspaceDomainObject);

exports.Artifact = Artifact;

var DefectSuite =
/*#__PURE__*/
function (_Artifact) {
  (0, _inherits2["default"])(DefectSuite, _Artifact);

  function DefectSuite() {
    (0, _classCallCheck2["default"])(this, DefectSuite);
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf4["default"])(DefectSuite).apply(this, arguments));
  }

  return DefectSuite;
}(Artifact);

exports.DefectSuite = DefectSuite;

var Defect =
/*#__PURE__*/
function (_Artifact2) {
  (0, _inherits2["default"])(Defect, _Artifact2);

  function Defect() {
    (0, _classCallCheck2["default"])(this, Defect);
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf4["default"])(Defect).apply(this, arguments));
  }

  return Defect;
}(Artifact);

exports.Defect = Defect;

var Task =
/*#__PURE__*/
function (_Artifact3) {
  (0, _inherits2["default"])(Task, _Artifact3);

  function Task() {
    (0, _classCallCheck2["default"])(this, Task);
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf4["default"])(Task).apply(this, arguments));
  }

  return Task;
}(Artifact);

exports.Task = Task;

var TestCase =
/*#__PURE__*/
function (_Artifact4) {
  (0, _inherits2["default"])(TestCase, _Artifact4);

  function TestCase() {
    (0, _classCallCheck2["default"])(this, TestCase);
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf4["default"])(TestCase).apply(this, arguments));
  }

  return TestCase;
}(Artifact);

exports.TestCase = TestCase;

var Requirement =
/*#__PURE__*/
function (_Artifact5) {
  (0, _inherits2["default"])(Requirement, _Artifact5);

  function Requirement() {
    (0, _classCallCheck2["default"])(this, Requirement);
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf4["default"])(Requirement).apply(this, arguments));
  }

  return Requirement;
}(Artifact);

exports.Requirement = Requirement;

var HierarchicalRequirement =
/*#__PURE__*/
function (_Requirement) {
  (0, _inherits2["default"])(HierarchicalRequirement, _Requirement);

  function HierarchicalRequirement() {
    (0, _classCallCheck2["default"])(this, HierarchicalRequirement);
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf4["default"])(HierarchicalRequirement).apply(this, arguments));
  }

  return HierarchicalRequirement;
}(Requirement);

exports.HierarchicalRequirement = HierarchicalRequirement;

var Scope =
/*#__PURE__*/
function (_DomainObject3) {
  (0, _inherits2["default"])(Scope, _DomainObject3);

  function Scope() {
    (0, _classCallCheck2["default"])(this, Scope);
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf4["default"])(Scope).apply(this, arguments));
  }

  return Scope;
}(DomainObject);

exports.Scope = Scope;

var Workspace =
/*#__PURE__*/
function (_OptionsScope) {
  (0, _inherits2["default"])(Workspace, _OptionsScope);

  function Workspace() {
    (0, _classCallCheck2["default"])(this, Workspace);
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf4["default"])(Workspace).apply(this, arguments));
  }

  return Workspace;
}(OptionsScope);

exports.Workspace = Workspace;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy90eXBpbmdzLnRzIl0sIm5hbWVzIjpbIlBlcnNpc3RhYmxlT2JqZWN0IiwiRG9tYWluT2JqZWN0IiwiU3Vic2NyaXB0aW9uIiwiUXVlcnlSZXN1bHQiLCJHZXRSZXN1bHQiLCJHZXRPcHRpb25zIiwiT3B0aW9uc1Njb3BlIiwiVXNlciIsIldvcmtzcGFjZURvbWFpbk9iamVjdCIsIkF0dGFjaG1lbnQiLCJQcm9qZWN0IiwiQXR0YWNobWVudENvbnRlbnQiLCJSZWxlYXNlIiwiSXRlcmF0aW9uIiwiUmV2aXNpb24iLCJSZXZpc2lvbkhpc3RvcnkiLCJUZXN0Q2FzZVJlc3VsdCIsIkN1bXVsYXRpdmVGbG93RGF0YSIsIkl0ZXJhdGlvbkN1bXVsYXRpdmVGbG93IiwiUmVsZWFzZUN1bXVsYXRpdmVGbG93IiwiQXJ0aWZhY3QiLCJEZWZlY3RTdWl0ZSIsIkRlZmVjdCIsIlRhc2siLCJUZXN0Q2FzZSIsIlJlcXVpcmVtZW50IiwiSGllcmFyY2hpY2FsUmVxdWlyZW1lbnQiLCJTY29wZSIsIldvcmtzcGFjZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBR3NCQSxpQjs7Ozs7Ozs7OztJQU9BQyxZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBQXFCRCxpQjs7OztJQUk5QkUsWTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBQXFCRixpQjs7OztJQXVDckJHLFc7Ozs7Ozs7Ozs7OztJQVNBQyxTOzs7Ozs7Ozs7SUFNQUMsVTs7Ozs7Ozs7OztJQXdCQUMsWTs7Ozs7OztJQU9BQyxJOzs7Ozs7Ozs7OztFQUFhTixZOzs7O0lBR0pPLHFCOzs7Ozs7Ozs7OztFQUE4QlAsWTs7OztJQUd2Q1EsVTs7Ozs7Ozs7Ozs7RUFBbUJELHFCOzs7O0lBR25CRSxPOzs7Ozs7Ozs7OztFQUFnQkYscUI7Ozs7SUFHaEJHLGlCOzs7Ozs7Ozs7OztFQUEwQkgscUI7Ozs7SUFHMUJJLE87Ozs7Ozs7Ozs7O0VBQWdCSixxQjs7OztJQUdoQkssUzs7Ozs7Ozs7Ozs7RUFBa0JMLHFCOzs7O0lBR2xCTSxROzs7Ozs7Ozs7OztFQUFpQk4scUI7Ozs7SUFHakJPLGU7Ozs7Ozs7Ozs7O0VBQXdCUCxxQjs7OztJQUd4QlEsYzs7Ozs7Ozs7Ozs7RUFBdUJSLHFCOzs7O0lBR2RTLGtCOzs7Ozs7Ozs7OztFQUEyQlQscUI7Ozs7SUFHcENVLHVCOzs7Ozs7Ozs7OztFQUFnQ0Qsa0I7Ozs7SUFHaENFLHFCOzs7Ozs7Ozs7OztFQUE4QkYsa0I7Ozs7SUFHckJHLFE7Ozs7Ozs7Ozs7O0VBQWlCWixxQjs7OztJQUcxQmEsVzs7Ozs7Ozs7Ozs7RUFBb0JELFE7Ozs7SUFHcEJFLE07Ozs7Ozs7Ozs7O0VBQWVGLFE7Ozs7SUFHZkcsSTs7Ozs7Ozs7Ozs7RUFBYUgsUTs7OztJQUdiSSxROzs7Ozs7Ozs7OztFQUFpQkosUTs7OztJQUdSSyxXOzs7Ozs7Ozs7OztFQUFvQkwsUTs7OztJQUc3Qk0sdUI7Ozs7Ozs7Ozs7O0VBQWdDRCxXOzs7O0lBR3ZCRSxLOzs7Ozs7Ozs7OztFQUFjMUIsWTs7OztJQUd2QjJCLFM7Ozs7Ozs7Ozs7O0VBQWtCdEIsWSIsInNvdXJjZXNDb250ZW50IjpbInR5cGUgbG9uZyA9IG51bWJlcjtcclxudHlwZSBkYXRlVGltZSA9IERhdGU7XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgUGVyc2lzdGFibGVPYmplY3Qge1xyXG4gIHJlYWRvbmx5IENyZWF0aW9uRGF0ZTogZGF0ZVRpbWUgfCB1bmRlZmluZWQ7XHJcbiAgcmVhZG9ubHkgT2JqZWN0SUQ6IG51bWJlciB8IHVuZGVmaW5lZDtcclxuICByZWFkb25seSBPYmplY3RVVUlEOiBzdHJpbmcgfCB1bmRlZmluZWQ7XHJcbiAgcmVhZG9ubHkgVmVyc2lvbklkPzogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgRG9tYWluT2JqZWN0IGV4dGVuZHMgUGVyc2lzdGFibGVPYmplY3Qge1xyXG4gIHJlYWRvbmx5IFN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uIHwgdW5kZWZpbmVkO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU3Vic2NyaXB0aW9uIGV4dGVuZHMgUGVyc2lzdGFibGVPYmplY3Qge1xyXG4gIHJlYWRvbmx5IEFwaUtleXNFbmFibGVkPzogYm9vbGVhbjtcclxuICByZWFkb25seSBDT1JTRW5hYmxlZD86IGJvb2xlYW47XHJcbiAgcmVhZG9ubHkgRW1haWxFbmFibGVkPzogYm9vbGVhbjtcclxuICByZWFkb25seSBFeHBpcmF0aW9uRGF0ZT86IGRhdGVUaW1lO1xyXG4gIHJlYWRvbmx5IEpTT05QRW5hYmxlZD86IGJvb2xlYW47XHJcbiAgcmVhZG9ubHkgTWF4aW11bUN1c3RvbVVzZXJGaWVsZHM6IGxvbmcgfCB1bmRlZmluZWQ7XHJcbiAgcmVhZG9ubHkgTWF4aW11bVByb2plY3RzOiBsb25nIHwgdW5kZWZpbmVkO1xyXG4gIHJlYWRvbmx5IE1vZHVsZXM/OiBzdHJpbmc7XHJcbiAgcmVhZG9ubHkgTmFtZTogc3RyaW5nIHwgdW5kZWZpbmVkO1xyXG4gIHJlYWRvbmx5IFBhc3N3b3JkRXhwaXJhdGlvbkRheXM/OiBsb25nO1xyXG4gIHJlYWRvbmx5IFBMQT86IGJvb2xlYW47XHJcbiAgcmVhZG9ubHkgUHJldmlvdXNQYXNzd29yZENvdW50OiBsb25nIHwgdW5kZWZpbmVkO1xyXG4gIHJlYWRvbmx5IFByb2plY3RIaWVyYXJjaHlFbmFibGVkPzogYm9vbGVhbjtcclxuICByZWFkb25seSBSZXZpc2lvbkhpc3Rvcnk/OiBSZXZpc2lvbkhpc3Rvcnk7XHJcbiAgcmVhZG9ubHkgU2Vzc2lvblRpbWVvdXRTZWNvbmRzPzogbG9uZztcclxuICByZWFkb25seSBTaXRlSWQ6IHN0cmluZyB8IHVuZGVmaW5lZDtcclxuICByZWFkb25seSBTU09Vc2VyRXhjZXB0aW9ucz86IFVzZXJbXTtcclxuICByZWFkb25seSBTdG9yeUhpZXJhcmNoeUVuYWJsZWQ/OiBib29sZWFuO1xyXG4gIHJlYWRvbmx5IFN0b3J5SGllcmFyY2h5VHlwZTogJ05vbmUnIHwgJ0xpbWl0ZWQnIHwgJ1VubGltaXRlZCcgfCB1bmRlZmluZWQ7XHJcbiAgcmVhZG9ubHkgU3Vic2NyaXB0aW9uSUQ6IG51bWJlciB8IHVuZGVmaW5lZDtcclxuICByZWFkb25seSBTdWJzY3JpcHRpb25UeXBlOiAnQ0UyMDE0JyB8ICdFeHByZXNzX0VkaXRpb24nIHwgJ0VudGVycHJpc2UnIHwgJ1VubGltaXRlZCcgfCB1bmRlZmluZWRcclxuICByZWFkb25seSBXZWJob29rc0VuYWJsZWQ/OiBib29sZWFuXHJcbiAgcmVhZG9ubHkgV29ya3NwYWNlcz86IFdvcmtzcGFjZVtdO1xyXG4gIHJlYWRvbmx5IFp1dWxJRD86IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJQVBJQmFzZUF0dHJpYnV0ZXMge1xyXG4gIHJlYWRvbmx5IF9yYWxseUFQSU1ham9yOiBzdHJpbmc7XHJcbiAgcmVhZG9ubHkgX3JhbGx5QVBJTWlub3I6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJQVBJQXR0cmlidXRlcyBleHRlbmRzIElBUElCYXNlQXR0cmlidXRlcyB7XHJcbiAgcmVhZG9ubHkgX3JlZjogc3RyaW5nO1xyXG4gIHJlYWRvbmx5IF9yZWZPYmplY3ROYW1lOiBzdHJpbmc7XHJcbiAgcmVhZG9ubHkgX3JlZk9iamVjdFVVSUQ6IHN0cmluZztcclxuICByZWFkb25seSBfdHlwZTogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgUXVlcnlSZXN1bHQ8VD4ge1xyXG4gIEVycm9yczogc3RyaW5nW10gfCB1bmRlZmluZWQ7XHJcbiAgV2FybmluZ3M6IHN0cmluZ1tdIHwgdW5kZWZpbmVkO1xyXG4gIFJlc3VsdDogVFtdIHwgdW5kZWZpbmVkO1xyXG4gIFN0YXJ0SW5kZXg6IG51bWJlciB8IHVuZGVmaW5lZDtcclxuICBQYWdlU2l6ZTogbnVtYmVyIHwgdW5kZWZpbmVkO1xyXG4gIFRvdGFsUmVzdWx0Q291bnQ6IG51bWJlciB8IHVuZGVmaW5lZDtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEdldFJlc3VsdDxUPiB7XHJcbiAgRXJyb3JzITogc3RyaW5nW107XHJcbiAgV2FybmluZ3MhOiBzdHJpbmdbXTtcclxuICBPYmplY3QhOiBUO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgR2V0T3B0aW9ucyB7XHJcbiAgLyoqXHJcbiAgICogW3JlcXVpcmVkXSBUaGUgcmVmIG9mIHRoZSBvYmplY3QgdG8gZ2V0LCBlLmcuIC9kZWZlY3QvMTIzNDVcclxuICAgKi9cclxuICByZWYhOiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSBkZWZhdWx0IHNjb3BpbmcgdG8gdXNlLlxyXG4gICAqIElmIG5vdCBzcGVjaWZpZWQsIHNlcnZlciBkZWZhdWx0IHdpbGwgYmUgdXNlZC5cclxuICAgKi9cclxuICBzY29wZT86IE9wdGlvbnNTY29wZTtcclxuXHJcbiAgLyoqXHJcbiAgICogVGhlIGZpZWxkKHMpIHRvIGluY2x1ZGUgb24gdGhlIHJldHVybmVkIHJlY29yZFxyXG4gICAqL1xyXG4gIGZldGNoPzogc3RyaW5nIHwgc3RyaW5nW107XHJcblxyXG4gIC8qKlxyXG4gICAqIEFkZGl0aW9uYWwgb3B0aW9ucyB0byBiZSBhcHBsaWVkIHRvIHRoZSByZXF1ZXN0OlxyXG4gICAqIGh0dHBzOi8vZ2l0aHViLmNvbS9taWtlYWwvcmVxdWVzdCAob3B0aW9uYWwpXHJcbiAgICovXHJcbiAgcmVxdWVzdE9wdGlvbnM/OiBhbnk7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBPcHRpb25zU2NvcGUge1xyXG4gIC8qKlxyXG4gICAqIFRoZSB3b3Jrc3BhY2VcclxuICAgKi9cclxuICB3b3Jrc3BhY2UhOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBVc2VyIGV4dGVuZHMgRG9tYWluT2JqZWN0IHtcclxufVxyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFdvcmtzcGFjZURvbWFpbk9iamVjdCBleHRlbmRzIERvbWFpbk9iamVjdCB7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBBdHRhY2htZW50IGV4dGVuZHMgV29ya3NwYWNlRG9tYWluT2JqZWN0IHtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFByb2plY3QgZXh0ZW5kcyBXb3Jrc3BhY2VEb21haW5PYmplY3Qge1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQXR0YWNobWVudENvbnRlbnQgZXh0ZW5kcyBXb3Jrc3BhY2VEb21haW5PYmplY3Qge1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgUmVsZWFzZSBleHRlbmRzIFdvcmtzcGFjZURvbWFpbk9iamVjdCB7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBJdGVyYXRpb24gZXh0ZW5kcyBXb3Jrc3BhY2VEb21haW5PYmplY3Qge1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgUmV2aXNpb24gZXh0ZW5kcyBXb3Jrc3BhY2VEb21haW5PYmplY3Qge1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgUmV2aXNpb25IaXN0b3J5IGV4dGVuZHMgV29ya3NwYWNlRG9tYWluT2JqZWN0IHtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFRlc3RDYXNlUmVzdWx0IGV4dGVuZHMgV29ya3NwYWNlRG9tYWluT2JqZWN0IHtcclxufVxyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEN1bXVsYXRpdmVGbG93RGF0YSBleHRlbmRzIFdvcmtzcGFjZURvbWFpbk9iamVjdCB7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBJdGVyYXRpb25DdW11bGF0aXZlRmxvdyBleHRlbmRzIEN1bXVsYXRpdmVGbG93RGF0YSB7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBSZWxlYXNlQ3VtdWxhdGl2ZUZsb3cgZXh0ZW5kcyBDdW11bGF0aXZlRmxvd0RhdGEge1xyXG59XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQXJ0aWZhY3QgZXh0ZW5kcyBXb3Jrc3BhY2VEb21haW5PYmplY3Qge1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRGVmZWN0U3VpdGUgZXh0ZW5kcyBBcnRpZmFjdCB7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBEZWZlY3QgZXh0ZW5kcyBBcnRpZmFjdCB7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBUYXNrIGV4dGVuZHMgQXJ0aWZhY3Qge1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVGVzdENhc2UgZXh0ZW5kcyBBcnRpZmFjdCB7XHJcbn1cclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBSZXF1aXJlbWVudCBleHRlbmRzIEFydGlmYWN0IHtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEhpZXJhcmNoaWNhbFJlcXVpcmVtZW50IGV4dGVuZHMgUmVxdWlyZW1lbnQge1xyXG59XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgU2NvcGUgZXh0ZW5kcyBEb21haW5PYmplY3Qge1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgV29ya3NwYWNlIGV4dGVuZHMgT3B0aW9uc1Njb3BlIHtcclxufSJdfQ==