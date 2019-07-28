"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _request = _interopRequireDefault(require("request"));

var _lodash = _interopRequireDefault(require("lodash"));

var _callbackify = _interopRequireDefault(require("./util/callbackify"));

var _RequestError = require("./RequestError");

var generateError = function generateError(errorMessages) {
  var e = new _RequestError.RequestError(errorMessages[0]);
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

        var requestCallback = function requestCallback(err, response, body) {
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
        };

        switch (method) {
          case 'get':
            return _this3.httpRequest.get(requestOptions, requestCallback);

          case 'post':
            return _this3.httpRequest.post(requestOptions, requestCallback);

          case 'put':
            return _this3.httpRequest.put(requestOptions, requestCallback);

          case 'del':
            return _this3.httpRequest.del(requestOptions, requestCallback);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZXF1ZXN0LnRzIl0sIm5hbWVzIjpbImdlbmVyYXRlRXJyb3IiLCJlcnJvck1lc3NhZ2VzIiwiZSIsIlJlcXVlc3RFcnJvciIsImVycm9ycyIsIlJlcXVlc3QiLCJvcHRpb25zIiwid3NhcGlVcmwiLCJzZXJ2ZXIiLCJhcGlWZXJzaW9uIiwiamFyIiwicmVxdWVzdCIsIl9yZXF1ZXN0T3B0aW9ucyIsIk9iamVjdCIsImFzc2lnbiIsInJlcXVlc3RPcHRpb25zIiwiaHR0cFJlcXVlc3QiLCJkZWZhdWx0cyIsIl9oYXNLZXkiLCJoZWFkZXJzIiwienNlc3Npb25pZCIsImRvUmVxdWVzdCIsInVybCIsInRoZW4iLCJyZXN1bHQiLCJfdG9rZW4iLCJTZWN1cml0eVRva2VuIiwibWV0aG9kIiwiY2FsbGJhY2siLCJfIiwibWVyZ2UiLCJxcyIsImtleSIsInNlY3VyZWRSZXF1ZXN0UHJvbWlzZSIsImF1dGgiLCJkb1JlcXVlc3RQcm9taXNlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJyZXF1ZXN0Q2FsbGJhY2siLCJlcnIiLCJyZXNwb25zZSIsImJvZHkiLCJpc09iamVjdCIsInN0YXR1c0NvZGUiLCJ2YWx1ZXMiLCJFcnJvcnMiLCJsZW5ndGgiLCJnZXQiLCJwb3N0IiwicHV0IiwiZGVsIiwiZG9TZWN1cmVkUmVxdWVzdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBRUEsSUFBTUEsYUFBNEMsR0FBRyxTQUEvQ0EsYUFBK0MsQ0FBQ0MsYUFBRCxFQUE2QjtBQUNoRixNQUFNQyxDQUFDLEdBQUcsSUFBSUMsMEJBQUosQ0FBaUJGLGFBQWEsQ0FBQyxDQUFELENBQTlCLENBQVY7QUFDQUMsRUFBQUEsQ0FBQyxDQUFDRSxNQUFGLEdBQVdILGFBQVg7QUFDQSxTQUFPQyxDQUFQO0FBQ0QsQ0FKRDs7SUFnQnFCRyxPOzs7QUFPbkIsbUJBQVlDLE9BQVosRUFBaUQ7QUFBQTtBQUFBO0FBQUE7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QUtQLFNBQUwsQ0FBZSxLQUFmLEVBQXNCZixPQUF0QixFQUErQnNCLFFBQS9CLENBQVA7QUFDRDs7O3lCQUNPdEIsTyxFQUE2QnNCLFEsRUFBb0M7QUFDdkUsYUFBTyxLQUFLd0IsZ0JBQUwsQ0FBc0IsTUFBdEIsRUFBOEI5QyxPQUE5QixFQUF1Q3NCLFFBQXZDLENBQVA7QUFDRDs7O3dCQUNNdEIsTyxFQUE2QnNCLFEsRUFBb0M7QUFDdEUsYUFBTyxLQUFLd0IsZ0JBQUwsQ0FBc0IsS0FBdEIsRUFBNkI5QyxPQUE3QixFQUFzQ3NCLFFBQXRDLENBQVA7QUFDRDs7O3dCQUNNdEIsTyxFQUE2QnNCLFEsRUFBb0M7QUFDdEUsYUFBTyxLQUFLd0IsZ0JBQUwsQ0FBc0IsS0FBdEIsRUFBNkI5QyxPQUE3QixFQUFzQ3NCLFFBQXRDLENBQVA7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCByZXF1ZXN0IGZyb20gJ3JlcXVlc3QnO1xyXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgY2FsbGJhY2tpZnkgZnJvbSAnLi91dGlsL2NhbGxiYWNraWZ5JztcclxuaW1wb3J0IHsgY2FsbGJhY2sgfSBmcm9tICcuL3V0aWwvY2FsbGJhY2snO1xyXG5pbXBvcnQgeyBSZXF1ZXN0RXJyb3IgfSBmcm9tICcuL1JlcXVlc3RFcnJvcic7XHJcblxyXG5jb25zdCBnZW5lcmF0ZUVycm9yOiAoeDogc3RyaW5nW10pID0+IFJlcXVlc3RFcnJvciA9IChlcnJvck1lc3NhZ2VzOiBzdHJpbmdbXSkgPT4ge1xyXG4gIGNvbnN0IGUgPSBuZXcgUmVxdWVzdEVycm9yKGVycm9yTWVzc2FnZXNbMF0pO1xyXG4gIGUuZXJyb3JzID0gZXJyb3JNZXNzYWdlcztcclxuICByZXR1cm4gZTtcclxufVxyXG5cclxuaW50ZXJmYWNlIElSZXF1ZXN0Q29uc3RydWN0b3JPcHRpb25zIHtcclxuICByZXF1ZXN0T3B0aW9ucz86IHtcclxuICAgIGhlYWRlcnM/OiB7XHJcbiAgICAgIHpzZXNzaW9uaWQ6IHN0cmluZztcclxuICAgIH07XHJcbiAgfTtcclxuICBzZXJ2ZXI/OiBzdHJpbmc7XHJcbiAgYXBpVmVyc2lvbj86IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVxdWVzdCB7XHJcbiAgcHJpdmF0ZSB3c2FwaVVybDogc3RyaW5nO1xyXG4gIHByaXZhdGUgamFyOiByZXF1ZXN0LkNvb2tpZUphcjtcclxuICBwcml2YXRlIF9yZXF1ZXN0T3B0aW9uczogcmVxdWVzdC5Db3JlT3B0aW9ucztcclxuICBwcml2YXRlIGh0dHBSZXF1ZXN0OiByZXF1ZXN0LlJlcXVlc3RBUEk8cmVxdWVzdC5SZXF1ZXN0LCByZXF1ZXN0LkNvcmVPcHRpb25zLCByZXF1ZXN0LlJlcXVpcmVkVXJpVXJsPjtcclxuICBwcml2YXRlIF9oYXNLZXk6IGFueTtcclxuICBwcml2YXRlIF90b2tlbjogYW55O1xyXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnM6IElSZXF1ZXN0Q29uc3RydWN0b3JPcHRpb25zKSB7XHJcbiAgICB0aGlzLndzYXBpVXJsID0gYCR7b3B0aW9ucy5zZXJ2ZXJ9L3NsbS93ZWJzZXJ2aWNlLyR7b3B0aW9ucy5hcGlWZXJzaW9ufWA7XHJcbiAgICB0aGlzLmphciA9IHJlcXVlc3QuamFyKCk7XHJcbiAgICB0aGlzLl9yZXF1ZXN0T3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oeyBqYXI6IHRoaXMuamFyIH0sIG9wdGlvbnMucmVxdWVzdE9wdGlvbnMpO1xyXG4gICAgdGhpcy5odHRwUmVxdWVzdCA9IHJlcXVlc3QuZGVmYXVsdHModGhpcy5fcmVxdWVzdE9wdGlvbnMpO1xyXG4gICAgdGhpcy5faGFzS2V5ID0gb3B0aW9ucy5yZXF1ZXN0T3B0aW9ucyAmJlxyXG4gICAgICAgIG9wdGlvbnMucmVxdWVzdE9wdGlvbnMuaGVhZGVycyAmJlxyXG4gICAgICAgIG9wdGlvbnMucmVxdWVzdE9wdGlvbnMuaGVhZGVycy56c2Vzc2lvbmlkO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBhdXRoKCk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm4gdGhpcy5kb1JlcXVlc3QoJ2dldCcsIHtcclxuICAgICAgdXJsOiAnL3NlY3VyaXR5L2F1dGhvcml6ZSdcclxuICAgIH0pLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICB0aGlzLl90b2tlbiA9IHJlc3VsdC5TZWN1cml0eVRva2VuO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGRvU2VjdXJlZFJlcXVlc3QobWV0aG9kOiBzdHJpbmcsIG9wdGlvbnM6IHJlcXVlc3QuVXJsT3B0aW9ucywgY2FsbGJhY2s/OiBjYWxsYmFjazxhbnk+KTogUHJvbWlzZTxhbnk+IHtcclxuICAgIGlmICh0aGlzLl9oYXNLZXkpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuZG9SZXF1ZXN0KG1ldGhvZCwgb3B0aW9ucywgY2FsbGJhY2spO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGRvUmVxdWVzdDogKCkgPT4gUHJvbWlzZTxhbnk+ID0gKCkgPT4ge1xyXG4gICAgICBjb25zdCByZXF1ZXN0T3B0aW9ucyA9IF8ubWVyZ2UoXHJcbiAgICAgICAge30sXHJcbiAgICAgICAgb3B0aW9ucyxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBxczoge1xyXG4gICAgICAgICAgICBrZXk6IHRoaXMuX3Rva2VuXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICApO1xyXG4gICAgICByZXR1cm4gdGhpcy5kb1JlcXVlc3QobWV0aG9kLCByZXF1ZXN0T3B0aW9ucyk7XHJcbiAgICB9O1xyXG5cclxuICAgIGxldCBzZWN1cmVkUmVxdWVzdFByb21pc2U7XHJcbiAgICBpZiAodGhpcy5fdG9rZW4pIHtcclxuICAgICAgc2VjdXJlZFJlcXVlc3RQcm9taXNlID0gZG9SZXF1ZXN0KCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZWN1cmVkUmVxdWVzdFByb21pc2UgPSB0aGlzLmF1dGgoKS50aGVuKGRvUmVxdWVzdCk7XHJcbiAgICB9XHJcbiAgICBjYWxsYmFja2lmeShzZWN1cmVkUmVxdWVzdFByb21pc2UsIGNhbGxiYWNrKTtcclxuICAgIHJldHVybiBzZWN1cmVkUmVxdWVzdFByb21pc2U7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGRvUmVxdWVzdChtZXRob2Q6IHN0cmluZywgb3B0aW9uczogcmVxdWVzdC5VcmxPcHRpb25zLCBjYWxsYmFjaz86IGNhbGxiYWNrPGFueT4pOiBQcm9taXNlPGFueT4ge1xyXG4gICAgY29uc3QgZG9SZXF1ZXN0UHJvbWlzZSA9IG5ldyBQcm9taXNlPGFueT4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICBjb25zdCByZXF1ZXN0T3B0aW9ucyA9IF8ubWVyZ2Uoe30sIG9wdGlvbnMsIHtcclxuICAgICAgICB1cmw6IHRoaXMud3NhcGlVcmwgKyBvcHRpb25zLnVybFxyXG4gICAgICB9KTtcclxuICAgICAgY29uc3QgcmVxdWVzdENhbGxiYWNrOiByZXF1ZXN0LlJlcXVlc3RDYWxsYmFjayA9IChlcnIsIHJlc3BvbnNlLCBib2R5KSA9PiB7XHJcbiAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgcmVqZWN0KGdlbmVyYXRlRXJyb3IoW2Vycl0pKTtcclxuICAgICAgICB9IGVsc2UgaWYgKCFyZXNwb25zZSkge1xyXG4gICAgICAgICAgcmVqZWN0KGdlbmVyYXRlRXJyb3IoW2BVbmFibGUgdG8gY29ubmVjdCB0byBzZXJ2ZXI6ICR7dGhpcy53c2FwaVVybH1gXSkpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoIWJvZHkgfHwgIV8uaXNPYmplY3QoYm9keSkpIHtcclxuICAgICAgICAgIHJlamVjdChnZW5lcmF0ZUVycm9yKFtgJHtvcHRpb25zLnVybH06ICR7cmVzcG9uc2Uuc3RhdHVzQ29kZX0hIGJvZHk9JHtib2R5fWBdKSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IF8udmFsdWVzKGJvZHkpWzBdIGFzIGFueTtcclxuICAgICAgICAgIGlmIChyZXN1bHQuRXJyb3JzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICByZWplY3QoZ2VuZXJhdGVFcnJvcihyZXN1bHQuRXJyb3JzKSk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9O1xyXG4gICAgICBzd2l0Y2ggKG1ldGhvZCkge1xyXG4gICAgICAgIGNhc2UgJ2dldCc6XHJcbiAgICAgICAgICByZXR1cm4gdGhpcy5odHRwUmVxdWVzdC5nZXQocmVxdWVzdE9wdGlvbnMsIHJlcXVlc3RDYWxsYmFjayk7XHJcbiAgICAgICAgY2FzZSAncG9zdCc6XHJcbiAgICAgICAgICByZXR1cm4gdGhpcy5odHRwUmVxdWVzdC5wb3N0KHJlcXVlc3RPcHRpb25zLCByZXF1ZXN0Q2FsbGJhY2spO1xyXG4gICAgICAgIGNhc2UgJ3B1dCc6XHJcbiAgICAgICAgICByZXR1cm4gdGhpcy5odHRwUmVxdWVzdC5wdXQocmVxdWVzdE9wdGlvbnMsIHJlcXVlc3RDYWxsYmFjayk7XHJcbiAgICAgICAgY2FzZSAnZGVsJzpcclxuICAgICAgICAgIHJldHVybiB0aGlzLmh0dHBSZXF1ZXN0LmRlbChyZXF1ZXN0T3B0aW9ucywgcmVxdWVzdENhbGxiYWNrKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgY2FsbGJhY2tpZnkoZG9SZXF1ZXN0UHJvbWlzZSwgY2FsbGJhY2spO1xyXG4gICAgcmV0dXJuIGRvUmVxdWVzdFByb21pc2U7XHJcbiAgfVxyXG5cclxuICBnZXQ8VD4ob3B0aW9uczogcmVxdWVzdC5VcmxPcHRpb25zLCBjYWxsYmFjaz86IGNhbGxiYWNrPFQ+KTogUHJvbWlzZTxUPiB7XHJcbiAgICByZXR1cm4gdGhpcy5kb1JlcXVlc3QoJ2dldCcsIG9wdGlvbnMsIGNhbGxiYWNrKTtcclxuICB9XHJcbiAgcG9zdDxUPihvcHRpb25zOiByZXF1ZXN0LlVybE9wdGlvbnMsIGNhbGxiYWNrPzogY2FsbGJhY2s8VD4pOiBQcm9taXNlPFQ+IHtcclxuICAgIHJldHVybiB0aGlzLmRvU2VjdXJlZFJlcXVlc3QoJ3Bvc3QnLCBvcHRpb25zLCBjYWxsYmFjayk7XHJcbiAgfVxyXG4gIHB1dDxUPihvcHRpb25zOiByZXF1ZXN0LlVybE9wdGlvbnMsIGNhbGxiYWNrPzogY2FsbGJhY2s8VD4pOiBQcm9taXNlPFQ+IHtcclxuICAgIHJldHVybiB0aGlzLmRvU2VjdXJlZFJlcXVlc3QoJ3B1dCcsIG9wdGlvbnMsIGNhbGxiYWNrKTtcclxuICB9XHJcbiAgZGVsPFQ+KG9wdGlvbnM6IHJlcXVlc3QuVXJsT3B0aW9ucywgY2FsbGJhY2s/OiBjYWxsYmFjazxUPik6IFByb21pc2U8VD4ge1xyXG4gICAgcmV0dXJuIHRoaXMuZG9TZWN1cmVkUmVxdWVzdCgnZGVsJywgb3B0aW9ucywgY2FsbGJhY2spO1xyXG4gIH1cclxufSJdfQ==