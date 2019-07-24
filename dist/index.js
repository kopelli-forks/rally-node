"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.rally = void 0;

var _restapi = _interopRequireDefault(require("./restapi"));

var _query = require("./util/query");

var _ref = _interopRequireDefault(require("./util/ref"));

var createClient = function createClient(options) {
  return new _restapi["default"](options);
};

var nodeDebug = process.env.NODE_DEBUG || '';
var debug = nodeDebug !== '' && /rally/.test(nodeDebug);
var rally = {
  createClient: createClient,
  debug: debug,
  util: {
    query: {
      where: _query.where
    },
    ref: _ref["default"]
  }
};
exports.rally = rally;