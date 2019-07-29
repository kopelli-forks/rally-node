"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.QueryOptions = exports.Workspace = exports.Scope = exports.HierarchicalRequirement = exports.Requirement = exports.TestCase = exports.Task = exports.Defect = exports.DefectSuite = exports.Artifact = exports.ReleaseCumulativeFlow = exports.IterationCumulativeFlow = exports.CumulativeFlowData = exports.TestCaseResult = exports.RevisionHistory = exports.Revision = exports.Iteration = exports.Release = exports.AttachmentContent = exports.Project = exports.Attachment = exports.WorkspaceDomainObject = exports.User = exports.OptionsScope = exports.GetOptions = exports.Secured = exports.GetResult = exports.QueryResult = exports.Subscription = exports.DomainObject = exports.PersistableObject = void 0;

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

var Secured = function Secured() {
  (0, _classCallCheck2["default"])(this, Secured);
  (0, _defineProperty2["default"])(this, "SecurityToken", void 0);
};

exports.Secured = Secured;

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

var QueryOptions = function QueryOptions() {
  (0, _classCallCheck2["default"])(this, QueryOptions);
  (0, _defineProperty2["default"])(this, "ref", void 0);
  (0, _defineProperty2["default"])(this, "type", void 0);
  (0, _defineProperty2["default"])(this, "scope", void 0);
  (0, _defineProperty2["default"])(this, "start", void 0);
  (0, _defineProperty2["default"])(this, "pageSize", void 0);
  (0, _defineProperty2["default"])(this, "limit", void 0);
  (0, _defineProperty2["default"])(this, "fetch", void 0);
  (0, _defineProperty2["default"])(this, "order", void 0);
  (0, _defineProperty2["default"])(this, "query", void 0);
  (0, _defineProperty2["default"])(this, "requestOptions", void 0);
};

exports.QueryOptions = QueryOptions;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy90eXBpbmdzLnRzIl0sIm5hbWVzIjpbIlBlcnNpc3RhYmxlT2JqZWN0IiwiRG9tYWluT2JqZWN0IiwiU3Vic2NyaXB0aW9uIiwiUXVlcnlSZXN1bHQiLCJHZXRSZXN1bHQiLCJTZWN1cmVkIiwiR2V0T3B0aW9ucyIsIk9wdGlvbnNTY29wZSIsIlVzZXIiLCJXb3Jrc3BhY2VEb21haW5PYmplY3QiLCJBdHRhY2htZW50IiwiUHJvamVjdCIsIkF0dGFjaG1lbnRDb250ZW50IiwiUmVsZWFzZSIsIkl0ZXJhdGlvbiIsIlJldmlzaW9uIiwiUmV2aXNpb25IaXN0b3J5IiwiVGVzdENhc2VSZXN1bHQiLCJDdW11bGF0aXZlRmxvd0RhdGEiLCJJdGVyYXRpb25DdW11bGF0aXZlRmxvdyIsIlJlbGVhc2VDdW11bGF0aXZlRmxvdyIsIkFydGlmYWN0IiwiRGVmZWN0U3VpdGUiLCJEZWZlY3QiLCJUYXNrIiwiVGVzdENhc2UiLCJSZXF1aXJlbWVudCIsIkhpZXJhcmNoaWNhbFJlcXVpcmVtZW50IiwiU2NvcGUiLCJXb3Jrc3BhY2UiLCJRdWVyeU9wdGlvbnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQU1zQkEsaUI7Ozs7Ozs7Ozs7SUFPQUMsWTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQUFxQkQsaUI7Ozs7SUFJOUJFLFk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQUFxQkYsaUI7Ozs7SUF1Q3JCRyxXOzs7Ozs7Ozs7Ozs7SUFTQUMsUzs7Ozs7Ozs7O0lBTUFDLE87Ozs7Ozs7SUFJQUMsVTs7Ozs7Ozs7OztJQXdCQUMsWTs7Ozs7OztJQU9BQyxJOzs7Ozs7Ozs7OztFQUFhUCxZOzs7O0lBR0pRLHFCOzs7Ozs7Ozs7OztFQUE4QlIsWTs7OztJQUd2Q1MsVTs7Ozs7Ozs7Ozs7RUFBbUJELHFCOzs7O0lBR25CRSxPOzs7Ozs7Ozs7OztFQUFnQkYscUI7Ozs7SUFHaEJHLGlCOzs7Ozs7Ozs7OztFQUEwQkgscUI7Ozs7SUFHMUJJLE87Ozs7Ozs7Ozs7O0VBQWdCSixxQjs7OztJQUdoQkssUzs7Ozs7Ozs7Ozs7RUFBa0JMLHFCOzs7O0lBR2xCTSxROzs7Ozs7Ozs7OztFQUFpQk4scUI7Ozs7SUFHakJPLGU7Ozs7Ozs7Ozs7O0VBQXdCUCxxQjs7OztJQUd4QlEsYzs7Ozs7Ozs7Ozs7RUFBdUJSLHFCOzs7O0lBR2RTLGtCOzs7Ozs7Ozs7OztFQUEyQlQscUI7Ozs7SUFHcENVLHVCOzs7Ozs7Ozs7OztFQUFnQ0Qsa0I7Ozs7SUFHaENFLHFCOzs7Ozs7Ozs7OztFQUE4QkYsa0I7Ozs7SUFHckJHLFE7Ozs7Ozs7Ozs7O0VBQWlCWixxQjs7OztJQUcxQmEsVzs7Ozs7Ozs7Ozs7RUFBb0JELFE7Ozs7SUFHcEJFLE07Ozs7Ozs7Ozs7O0VBQWVGLFE7Ozs7SUFHZkcsSTs7Ozs7Ozs7Ozs7RUFBYUgsUTs7OztJQUdiSSxROzs7Ozs7Ozs7OztFQUFpQkosUTs7OztJQUdSSyxXOzs7Ozs7Ozs7OztFQUFvQkwsUTs7OztJQUc3Qk0sdUI7Ozs7Ozs7Ozs7O0VBQWdDRCxXOzs7O0lBR3ZCRSxLOzs7Ozs7Ozs7OztFQUFjM0IsWTs7OztJQUd2QjRCLFM7Ozs7Ozs7Ozs7O0VBQWtCdEIsWTs7OztJQUdsQnVCLFkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcmVxdWVzdCBmcm9tIFwicmVxdWVzdFwiO1xyXG5pbXBvcnQgUXVlcnkgZnJvbSBcIi4vdXRpbC9xdWVyeVwiO1xyXG5cclxudHlwZSBsb25nID0gbnVtYmVyO1xyXG50eXBlIGRhdGVUaW1lID0gRGF0ZTtcclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBQZXJzaXN0YWJsZU9iamVjdCB7XHJcbiAgcmVhZG9ubHkgQ3JlYXRpb25EYXRlOiBkYXRlVGltZSB8IHVuZGVmaW5lZDtcclxuICByZWFkb25seSBPYmplY3RJRDogbnVtYmVyIHwgdW5kZWZpbmVkO1xyXG4gIHJlYWRvbmx5IE9iamVjdFVVSUQ6IHN0cmluZyB8IHVuZGVmaW5lZDtcclxuICByZWFkb25seSBWZXJzaW9uSWQ/OiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBEb21haW5PYmplY3QgZXh0ZW5kcyBQZXJzaXN0YWJsZU9iamVjdCB7XHJcbiAgcmVhZG9ubHkgU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb24gfCB1bmRlZmluZWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBTdWJzY3JpcHRpb24gZXh0ZW5kcyBQZXJzaXN0YWJsZU9iamVjdCB7XHJcbiAgcmVhZG9ubHkgQXBpS2V5c0VuYWJsZWQ/OiBib29sZWFuO1xyXG4gIHJlYWRvbmx5IENPUlNFbmFibGVkPzogYm9vbGVhbjtcclxuICByZWFkb25seSBFbWFpbEVuYWJsZWQ/OiBib29sZWFuO1xyXG4gIHJlYWRvbmx5IEV4cGlyYXRpb25EYXRlPzogZGF0ZVRpbWU7XHJcbiAgcmVhZG9ubHkgSlNPTlBFbmFibGVkPzogYm9vbGVhbjtcclxuICByZWFkb25seSBNYXhpbXVtQ3VzdG9tVXNlckZpZWxkczogbG9uZyB8IHVuZGVmaW5lZDtcclxuICByZWFkb25seSBNYXhpbXVtUHJvamVjdHM6IGxvbmcgfCB1bmRlZmluZWQ7XHJcbiAgcmVhZG9ubHkgTW9kdWxlcz86IHN0cmluZztcclxuICByZWFkb25seSBOYW1lOiBzdHJpbmcgfCB1bmRlZmluZWQ7XHJcbiAgcmVhZG9ubHkgUGFzc3dvcmRFeHBpcmF0aW9uRGF5cz86IGxvbmc7XHJcbiAgcmVhZG9ubHkgUExBPzogYm9vbGVhbjtcclxuICByZWFkb25seSBQcmV2aW91c1Bhc3N3b3JkQ291bnQ6IGxvbmcgfCB1bmRlZmluZWQ7XHJcbiAgcmVhZG9ubHkgUHJvamVjdEhpZXJhcmNoeUVuYWJsZWQ/OiBib29sZWFuO1xyXG4gIHJlYWRvbmx5IFJldmlzaW9uSGlzdG9yeT86IFJldmlzaW9uSGlzdG9yeTtcclxuICByZWFkb25seSBTZXNzaW9uVGltZW91dFNlY29uZHM/OiBsb25nO1xyXG4gIHJlYWRvbmx5IFNpdGVJZDogc3RyaW5nIHwgdW5kZWZpbmVkO1xyXG4gIHJlYWRvbmx5IFNTT1VzZXJFeGNlcHRpb25zPzogVXNlcltdO1xyXG4gIHJlYWRvbmx5IFN0b3J5SGllcmFyY2h5RW5hYmxlZD86IGJvb2xlYW47XHJcbiAgcmVhZG9ubHkgU3RvcnlIaWVyYXJjaHlUeXBlOiAnTm9uZScgfCAnTGltaXRlZCcgfCAnVW5saW1pdGVkJyB8IHVuZGVmaW5lZDtcclxuICByZWFkb25seSBTdWJzY3JpcHRpb25JRDogbnVtYmVyIHwgdW5kZWZpbmVkO1xyXG4gIHJlYWRvbmx5IFN1YnNjcmlwdGlvblR5cGU6ICdDRTIwMTQnIHwgJ0V4cHJlc3NfRWRpdGlvbicgfCAnRW50ZXJwcmlzZScgfCAnVW5saW1pdGVkJyB8IHVuZGVmaW5lZFxyXG4gIHJlYWRvbmx5IFdlYmhvb2tzRW5hYmxlZD86IGJvb2xlYW5cclxuICByZWFkb25seSBXb3Jrc3BhY2VzPzogV29ya3NwYWNlW107XHJcbiAgcmVhZG9ubHkgWnV1bElEPzogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElBUElCYXNlQXR0cmlidXRlcyB7XHJcbiAgcmVhZG9ubHkgX3JhbGx5QVBJTWFqb3I6IHN0cmluZztcclxuICByZWFkb25seSBfcmFsbHlBUElNaW5vcjogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElBUElBdHRyaWJ1dGVzIGV4dGVuZHMgSUFQSUJhc2VBdHRyaWJ1dGVzIHtcclxuICByZWFkb25seSBfcmVmOiBzdHJpbmc7XHJcbiAgcmVhZG9ubHkgX3JlZk9iamVjdE5hbWU6IHN0cmluZztcclxuICByZWFkb25seSBfcmVmT2JqZWN0VVVJRDogc3RyaW5nO1xyXG4gIHJlYWRvbmx5IF90eXBlOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBRdWVyeVJlc3VsdDxUPiB7XHJcbiAgRXJyb3JzITogc3RyaW5nW107XHJcbiAgV2FybmluZ3MhOiBzdHJpbmdbXTtcclxuICBSZXN1bHQhOiBUW107XHJcbiAgU3RhcnRJbmRleCE6IG51bWJlcjtcclxuICBQYWdlU2l6ZSE6IG51bWJlcjtcclxuICBUb3RhbFJlc3VsdENvdW50ITogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgR2V0UmVzdWx0PFQ+IHtcclxuICBFcnJvcnMhOiBzdHJpbmdbXTtcclxuICBXYXJuaW5ncyE6IHN0cmluZ1tdO1xyXG4gIE9iamVjdCE6IFQ7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBTZWN1cmVkIHtcclxuICBTZWN1cml0eVRva2VuITogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgR2V0T3B0aW9ucyB7XHJcbiAgLyoqXHJcbiAgICogW3JlcXVpcmVkXSBUaGUgcmVmIG9mIHRoZSBvYmplY3QgdG8gZ2V0LCBlLmcuIC9kZWZlY3QvMTIzNDVcclxuICAgKi9cclxuICByZWYhOiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSBkZWZhdWx0IHNjb3BpbmcgdG8gdXNlLlxyXG4gICAqIElmIG5vdCBzcGVjaWZpZWQsIHNlcnZlciBkZWZhdWx0IHdpbGwgYmUgdXNlZC5cclxuICAgKi9cclxuICBzY29wZT86IE9wdGlvbnNTY29wZTtcclxuXHJcbiAgLyoqXHJcbiAgICogVGhlIGZpZWxkKHMpIHRvIGluY2x1ZGUgb24gdGhlIHJldHVybmVkIHJlY29yZFxyXG4gICAqL1xyXG4gIGZldGNoPzogc3RyaW5nIHwgc3RyaW5nW107XHJcblxyXG4gIC8qKlxyXG4gICAqIEFkZGl0aW9uYWwgb3B0aW9ucyB0byBiZSBhcHBsaWVkIHRvIHRoZSByZXF1ZXN0OlxyXG4gICAqIGh0dHBzOi8vZ2l0aHViLmNvbS9taWtlYWwvcmVxdWVzdCAob3B0aW9uYWwpXHJcbiAgICovXHJcbiAgcmVxdWVzdE9wdGlvbnM/OiByZXF1ZXN0LkNvcmVPcHRpb25zO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgT3B0aW9uc1Njb3BlIHtcclxuICAvKipcclxuICAgKiBUaGUgd29ya3NwYWNlXHJcbiAgICovXHJcbiAgd29ya3NwYWNlITogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVXNlciBleHRlbmRzIERvbWFpbk9iamVjdCB7XHJcbn1cclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBXb3Jrc3BhY2VEb21haW5PYmplY3QgZXh0ZW5kcyBEb21haW5PYmplY3Qge1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQXR0YWNobWVudCBleHRlbmRzIFdvcmtzcGFjZURvbWFpbk9iamVjdCB7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBQcm9qZWN0IGV4dGVuZHMgV29ya3NwYWNlRG9tYWluT2JqZWN0IHtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEF0dGFjaG1lbnRDb250ZW50IGV4dGVuZHMgV29ya3NwYWNlRG9tYWluT2JqZWN0IHtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFJlbGVhc2UgZXh0ZW5kcyBXb3Jrc3BhY2VEb21haW5PYmplY3Qge1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgSXRlcmF0aW9uIGV4dGVuZHMgV29ya3NwYWNlRG9tYWluT2JqZWN0IHtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFJldmlzaW9uIGV4dGVuZHMgV29ya3NwYWNlRG9tYWluT2JqZWN0IHtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFJldmlzaW9uSGlzdG9yeSBleHRlbmRzIFdvcmtzcGFjZURvbWFpbk9iamVjdCB7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBUZXN0Q2FzZVJlc3VsdCBleHRlbmRzIFdvcmtzcGFjZURvbWFpbk9iamVjdCB7XHJcbn1cclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBDdW11bGF0aXZlRmxvd0RhdGEgZXh0ZW5kcyBXb3Jrc3BhY2VEb21haW5PYmplY3Qge1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgSXRlcmF0aW9uQ3VtdWxhdGl2ZUZsb3cgZXh0ZW5kcyBDdW11bGF0aXZlRmxvd0RhdGEge1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgUmVsZWFzZUN1bXVsYXRpdmVGbG93IGV4dGVuZHMgQ3VtdWxhdGl2ZUZsb3dEYXRhIHtcclxufVxyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEFydGlmYWN0IGV4dGVuZHMgV29ya3NwYWNlRG9tYWluT2JqZWN0IHtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIERlZmVjdFN1aXRlIGV4dGVuZHMgQXJ0aWZhY3Qge1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRGVmZWN0IGV4dGVuZHMgQXJ0aWZhY3Qge1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVGFzayBleHRlbmRzIEFydGlmYWN0IHtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFRlc3RDYXNlIGV4dGVuZHMgQXJ0aWZhY3Qge1xyXG59XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgUmVxdWlyZW1lbnQgZXh0ZW5kcyBBcnRpZmFjdCB7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBIaWVyYXJjaGljYWxSZXF1aXJlbWVudCBleHRlbmRzIFJlcXVpcmVtZW50IHtcclxufVxyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFNjb3BlIGV4dGVuZHMgRG9tYWluT2JqZWN0IHtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFdvcmtzcGFjZSBleHRlbmRzIE9wdGlvbnNTY29wZSB7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBRdWVyeU9wdGlvbnMge1xyXG4gIC8qKlxyXG4gICAqIFRoZSByZWYgb2YgdGhlIGNvbGxlY3Rpb24gdG8gcXVlcnksIGUuZy4gL2RlZmVjdC8xMjM0NS90YXNrcyAocmVxdWlyZWQgaWYgdHlwZSBub3Qgc3BlY2lmaWVkKVxyXG4gICAqL1xyXG4gIHJlZj86IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogVGhlIHR5cGUgdG8gcXVlcnksIGUuZy4gZGVmZWN0LCBoaWVyYXJjaGljYWxyZXF1aXJlbWVudCAocmVxdWlyZWQgaWYgcmVmIG5vdCBzcGVjaWZpZWQpXHJcbiAgICovXHJcbiAgdHlwZT86IHN0cmluZzsgLy9UT0RPOiBtYWtlIHRoaXMgZW51bS9zdHJpbmcgdmFsdWVzXHJcbiAgXHJcbiAgLyoqXHJcbiAgICogdGhlIGRlZmF1bHQgc2NvcGluZyB0byB1c2UuICBpZiBub3Qgc3BlY2lmaWVkIHNlcnZlciBkZWZhdWx0IHdpbGwgYmUgdXNlZC5cclxuICAgKi9cclxuICBzY29wZT86IHtcclxuICAgIC8qKlxyXG4gICAgICogdGhlIHdvcmtzcGFjZVxyXG4gICAgICovXHJcbiAgICB3b3Jrc3BhY2U/OiBzdHJpbmc7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiB0aGUgcHJvamVjdCwgb3IgbnVsbCB0byBpbmNsdWRlIGVudGlyZSB3b3Jrc3BhY2VcclxuICAgICAqL1xyXG4gICAgcHJvamVjdD86IHN0cmluZztcclxuXHJcbiAgICAvKipcclxuICAgICAqIHRydWUgdG8gaW5jbHVkZSBwYXJlbnQgcHJvamVjdCBkYXRhLCBmYWxzZSBvdGhlcndpc2VcclxuICAgICAqL1xyXG4gICAgdXA/OiBib29sZWFuO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogdHJ1ZSB0byBpbmNsdWRlIGNoaWxkIHByb2plY3QgZGF0YSwgZmFsc2Ugb3RoZXJ3aXNlXHJcbiAgICAgKi9cclxuICAgIGRvd24/OiBib29sZWFuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogdGhlIDEgYmFzZWQgc3RhcnQgaW5kZXhcclxuICAgKi9cclxuICBzdGFydD86IG51bWJlcjtcclxuXHJcbiAgLyoqXHJcbiAgICogdGhlIHBhZ2Ugc2l6ZSwgMSAtIDIwMCAoZGVmYXVsdD0yMDApXHJcbiAgICovXHJcbiAgcGFnZVNpemU/OiBudW1iZXI7XHJcblxyXG4gIC8qKlxyXG4gICAqIHRoZSBtYXhpbXVtIG51bWJlciBvZiByZWNvcmRzIHRvIHJldHVyblxyXG4gICAqL1xyXG4gIGxpbWl0PzogbnVtYmVyO1xyXG5cclxuICAvKipcclxuICAgKiB0aGUgZmllbGRzIHRvIGluY2x1ZGUgb24gZWFjaCByZXR1cm5lZCByZWNvcmRcclxuICAgKi9cclxuICBmZXRjaD86IHN0cmluZyB8IHN0cmluZ1tdO1xyXG5cclxuICAvKipcclxuICAgKiB0aGUgb3JkZXIgYnkgd2hpY2ggdG8gc29ydCB0aGUgcmVzdWx0c1xyXG4gICAqL1xyXG4gIG9yZGVyPzogc3RyaW5nIHwgc3RyaW5nW107XHJcblxyXG4gIC8qKlxyXG4gICAqIGEgcXVlcnkgdG8gZmlsdGVyIHRoZSByZXN1bHQgc2V0XHJcbiAgICovXHJcbiAgcXVlcnk/OiBzdHJpbmcgfCBRdWVyeTtcclxuXHJcbiAgLyoqXHJcbiAgICogQWRkaXRpb25hbCBvcHRpb25zIHRvIGJlIGFwcGxpZWQgdG8gdGhlIHJlcXVlc3Q6IGh0dHBzOi8vZ2l0aHViLmNvbS9taWtlYWwvcmVxdWVzdCAob3B0aW9uYWwpXHJcbiAgICovXHJcbiAgcmVxdWVzdE9wdGlvbnM/OiByZXF1ZXN0LkNvcmVPcHRpb25zO1xyXG59Il19