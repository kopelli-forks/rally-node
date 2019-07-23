'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _restapi = require('./restapi');

var _restapi2 = _interopRequireDefault(_restapi);

var _query = require('./util/query');

var _ref = require('./util/ref');

var _ref2 = _interopRequireDefault(_ref);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createClient = function createClient(options) {
  return new _restapi2.default(options);
};

var restapi = createClient;
restapi.createClient = createClient;
restapi.debug = process.env.NODE_DEBUG && /rally/.test(process.env.NODE_DEBUG), restapi.util = {
  query: { where: _query.where },
  ref: _ref2.default
};

exports.default = restapi;
module.exports = exports.default;