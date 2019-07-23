"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _request = _interopRequireDefault(require("request"));

var _lodash = _interopRequireDefault(require("lodash"));

var _callbackify = _interopRequireDefault(require("./util/callbackify"));

var generateError = function generateError(errorMessages) {
  var e = new Error(errorMessages[0]);
  e.errors = errorMessages;
  return e;
};

var Request =
/*#__PURE__*/
function () {
  function Request(options) {
    (0, _classCallCheck2["default"])(this, Request);
    this.wsapiUrl = "".concat(options.server, "/slm/webservice/").concat(options.apiVersion);
    this.jar = _request["default"].jar();
    this._requestOptions = Object.assign({
      jar: this.jar
    }, options.requestOptions);
    this.httpRequest = _request["default"].defaults(this._requestOptions);
    this._hasKey = options.requestOptions && options.requestOptions.headers && options.requestOptions.headers.zsessionid;
  }

  (0, _createClass2["default"])(Request, [{
    key: "getCookies",
    value: function getCookies() {
      var _this$jar;

      return (_this$jar = this.jar).getCookies.apply(_this$jar, arguments);
    }
  }, {
    key: "auth",
    value: function auth() {
      var _this = this;

      return this.doRequest('get', {
        url: '/security/authorize'
      }).then(function (result) {
        _this._token = result.SecurityToken;
      });
    }
  }, {
    key: "doSecuredRequest",
    value: function doSecuredRequest(method, options, callback) {
      var _this2 = this;

      if (this._hasKey) {
        return this.doRequest(method, options, callback);
      }

      var doRequest = function doRequest() {
        var requestOptions = _lodash["default"].merge({}, options, {
          qs: {
            key: _this2._token
          }
        });

        return _this2.doRequest(method, requestOptions);
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
      var _this3 = this;

      var doRequestPromise = new Promise(function (resolve, reject) {
        var requestOptions = _lodash["default"].merge({}, options, {
          url: _this3.wsapiUrl + options.url
        });

        _this3.httpRequest[method](requestOptions, function (err, response, body) {
          if (err) {
            reject(generateError([err]));
          } else if (!response) {
            reject(generateError(["Unable to connect to server: ".concat(_this3.wsapiUrl)]));
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
        });
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