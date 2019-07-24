"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _wrapNativeSuper2 = _interopRequireDefault(require("@babel/runtime/helpers/wrapNativeSuper"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _request = _interopRequireDefault(require("request"));

var _lodash = _interopRequireDefault(require("lodash"));

var _callbackify = _interopRequireDefault(require("./util/callbackify"));

var RequestError =
/*#__PURE__*/
function (_Error) {
  (0, _inherits2["default"])(RequestError, _Error);

  function RequestError() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2["default"])(this, RequestError);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2["default"])(this, (_getPrototypeOf2 = (0, _getPrototypeOf3["default"])(RequestError)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "errors", void 0);
    return _this;
  }

  return RequestError;
}((0, _wrapNativeSuper2["default"])(Error));

var generateError = function generateError(errorMessages) {
  var e = new RequestError(errorMessages[0]);
  e.errors = errorMessages;
  return e;
};

var Request =
/*#__PURE__*/
function () {
  function Request(options) {
    (0, _classCallCheck2["default"])(this, Request);
    (0, _defineProperty2["default"])(this, "wsapiUrl", void 0);
    (0, _defineProperty2["default"])(this, "jar", void 0);
    (0, _defineProperty2["default"])(this, "_requestOptions", void 0);
    (0, _defineProperty2["default"])(this, "httpRequest", void 0);
    (0, _defineProperty2["default"])(this, "_hasKey", void 0);
    (0, _defineProperty2["default"])(this, "_token", void 0);
    this.wsapiUrl = "".concat(options.server, "/slm/webservice/").concat(options.apiVersion);
    this.jar = _request["default"].jar();
    this._requestOptions = Object.assign({
      jar: this.jar
    }, options.requestOptions);
    this.httpRequest = _request["default"].defaults(this._requestOptions);
    this._hasKey = options.requestOptions && options.requestOptions.headers && options.requestOptions.headers.zsessionid;
  }

  (0, _createClass2["default"])(Request, [{
    key: "auth",
    value: function auth() {
      var _this2 = this;

      return this.doRequest('get', {
        url: '/security/authorize'
      }).then(function (result) {
        _this2._token = result.SecurityToken;
      });
    }
  }, {
    key: "doSecuredRequest",
    value: function doSecuredRequest(method, options, callback) {
      var _this3 = this;

      if (this._hasKey) {
        return this.doRequest(method, options, callback);
      }

      var doRequest = function doRequest() {
        var requestOptions = _lodash["default"].merge({}, options, {
          qs: {
            key: _this3._token
          }
        });

        return _this3.doRequest(method, requestOptions);
      };

      var securedRequestPromise;

      if (this._token) {
        securedRequestPromise = doRequest();
      } else {
        securedRequestPromise = this.auth().then(doRequest);
      }

      (0, _callbackify["default"])(securedRequestPromise, callback);
      return securedRequestPromise;
    }
  }, {
    key: "doRequest",
    value: function doRequest(method, options, callback) {
      var _this4 = this;

      var doRequestPromise = new Promise(function (resolve, reject) {
        var requestOptions = _lodash["default"].merge({}, options, {
          url: _this4.wsapiUrl + options.url
        });

        var requestCallback = function requestCallback(err, response, body) {
          if (err) {
            reject(generateError([err]));
          } else if (!response) {
            reject(generateError(["Unable to connect to server: ".concat(_this4.wsapiUrl)]));
          } else if (!body || !_lodash["default"].isObject(body)) {
            reject(generateError(["".concat(options.url, ": ").concat(response.statusCode, "! body=").concat(body)]));
          } else {
            var result = _lodash["default"].values(body)[0];

            if (result.Errors.length) {
              reject(generateError(result.Errors));
            } else {
              resolve(result);
            }
          }
        };

        switch (method) {
          case 'get':
            return _this4.httpRequest.get(requestOptions, requestCallback);

          case 'post':
            return _this4.httpRequest.post(requestOptions, requestCallback);

          case 'put':
            return _this4.httpRequest.put(requestOptions, requestCallback);

          case 'del':
            return _this4.httpRequest.del(requestOptions, requestCallback);
        }
      });
      (0, _callbackify["default"])(doRequestPromise, callback);
      return doRequestPromise;
    }
  }, {
    key: "get",
    value: function get(options, callback) {
      return this.doRequest('get', options, callback);
    }
  }, {
    key: "post",
    value: function post(options, callback) {
      return this.doSecuredRequest('post', options, callback);
    }
  }, {
    key: "put",
    value: function put(options, callback) {
      return this.doSecuredRequest('put', options, callback);
    }
  }, {
    key: "del",
    value: function del(options, callback) {
      return this.doSecuredRequest('del', options, callback);
    }
  }]);
  return Request;
}();

exports["default"] = Request;
module.exports = exports.default;