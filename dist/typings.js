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