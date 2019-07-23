"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _restapi = _interopRequireDefault(require("./restapi"));

var _query = require("./util/query");

var _ref = _interopRequireDefault(require("./util/ref"));

var createClient = function createClient(options) {
  return new _restapi["default"](options);
};

var restapi = createClient;
restapi.createClient = createClient;
restapi.debug = process.env.NODE_DEBUG && /rally/.test(process.env.NODE_DEBUG), restapi.util = {
  query: {
    where: _query.where
  },
  ref: _ref["default"]
};
var _default = restapi;
exports["default"] = _default;
module.exports = exports.default;