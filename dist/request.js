'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _request = require('request');

var _request2 = _interopRequireDefault(_request);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _callbackify = require('./util/callbackify');

var _callbackify2 = _interopRequireDefault(_callbackify);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var generateError = function generateError(errorMessages) {
  var e = new Error(errorMessages[0]);
  e.errors = errorMessages;
  return e;
};

var Request = function () {
  function Request(options) {
    (0, _classCallCheck3.default)(this, Request);

    this.wsapiUrl = options.server + '/slm/webservice/' + options.apiVersion;
    this.jar = _request2.default.jar();
    this._requestOptions = (0, _assign2.default)({ jar: this.jar }, options.requestOptions);
    this.httpRequest = _request2.default.defaults(this._requestOptions);
    this._hasKey = options.requestOptions && options.requestOptions.headers && options.requestOptions.headers.zsessionid;
  }

  (0, _createClass3.default)(Request, [{
    key: 'getCookies',
    value: function getCookies() {
      var _jar;

      return (_jar = this.jar).getCookies.apply(_jar, arguments);
    }
  }, {
    key: 'auth',
    value: function auth() {
      var _this = this;

      return this.doRequest('get', {
        url: '/security/authorize'
      }).then(function (result) {
        _this._token = result.SecurityToken;
      });
    }
  }, {
    key: 'doSecuredRequest',
    value: function doSecuredRequest(method, options, callback) {
      var _this2 = this;

      if (this._hasKey) {
        return this.doRequest(method, options, callback);
      }

      var doRequest = function doRequest() {
        var requestOptions = _lodash2.default.merge({}, options, {
          qs: {
            key: _this2._token
          }
        });
        return _this2.doRequest(method, requestOptions);
      };

      var securedRequestPromise = void 0;
      if (this._token) {
        securedRequestPromise = doRequest();
      } else {
        securedRequestPromise = this.auth().then(doRequest);
      }
      (0, _callbackify2.default)(securedRequestPromise, callback);
      return securedRequestPromise;
    }
  }, {
    key: 'doRequest',
    value: function doRequest(method, options, callback) {
      var _this3 = this;

      var doRequestPromise = new _promise2.default(function (resolve, reject) {
        var requestOptions = _lodash2.default.merge({}, options, {
          url: _this3.wsapiUrl + options.url
        });
        _this3.httpRequest[method](requestOptions, function (err, response, body) {
          if (err) {
            reject(generateError([err]));
          } else if (!response) {
            reject(generateError(['Unable to connect to server: ' + _this3.wsapiUrl]));
          } else if (!body || !_lodash2.default.isObject(body)) {
            reject(generateError([options.url + ': ' + response.statusCode + '! body=' + body]));
          } else {
            var result = _lodash2.default.values(body)[0];
            if (result.Errors.length) {
              reject(generateError(result.Errors));
            } else {
              resolve(result);
            }
          }
        });
      });

      (0, _callbackify2.default)(doRequestPromise, callback);
      return doRequestPromise;
    }
  }, {
    key: 'get',
    value: function get(options, callback) {
      return this.doRequest('get', options, callback);
    }
  }, {
    key: 'post',
    value: function post(options, callback) {
      return this.doSecuredRequest('post', options, callback);
    }
  }, {
    key: 'put',
    value: function put(options, callback) {
      return this.doSecuredRequest('put', options, callback);
    }
  }, {
    key: 'del',
    value: function del(options, callback) {
      return this.doSecuredRequest('del', options, callback);
    }
  }]);
  return Request;
}();

exports.default = Request;
module.exports = exports.default;