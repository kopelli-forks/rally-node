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

var _callbackify = require("./util/callbackify");

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

      (0, _callbackify.callbackify)(securedRequestPromise, callback);
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
      (0, _callbackify.callbackify)(doRequestPromise, callback);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZXF1ZXN0LnRzIl0sIm5hbWVzIjpbImdlbmVyYXRlRXJyb3IiLCJlcnJvck1lc3NhZ2VzIiwiZSIsIlJlcXVlc3RFcnJvciIsImVycm9ycyIsIlJlcXVlc3QiLCJvcHRpb25zIiwid3NhcGlVcmwiLCJzZXJ2ZXIiLCJhcGlWZXJzaW9uIiwiamFyIiwicmVxdWVzdCIsIl9yZXF1ZXN0T3B0aW9ucyIsIk9iamVjdCIsImFzc2lnbiIsInJlcXVlc3RPcHRpb25zIiwiaHR0cFJlcXVlc3QiLCJkZWZhdWx0cyIsIl9oYXNLZXkiLCJoZWFkZXJzIiwienNlc3Npb25pZCIsImRvUmVxdWVzdCIsInVybCIsInRoZW4iLCJyZXN1bHQiLCJfdG9rZW4iLCJTZWN1cml0eVRva2VuIiwibWV0aG9kIiwiY2FsbGJhY2siLCJfIiwibWVyZ2UiLCJxcyIsImtleSIsInNlY3VyZWRSZXF1ZXN0UHJvbWlzZSIsImF1dGgiLCJkb1JlcXVlc3RQcm9taXNlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJyZXF1ZXN0Q2FsbGJhY2siLCJlcnIiLCJyZXNwb25zZSIsImJvZHkiLCJpc09iamVjdCIsInN0YXR1c0NvZGUiLCJ2YWx1ZXMiLCJFcnJvcnMiLCJsZW5ndGgiLCJnZXQiLCJwb3N0IiwicHV0IiwiZGVsIiwiZG9TZWN1cmVkUmVxdWVzdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBR0EsSUFBTUEsYUFBNEMsR0FBRyxTQUEvQ0EsYUFBK0MsQ0FBQ0MsYUFBRCxFQUE2QjtBQUNoRixNQUFNQyxDQUFDLEdBQUcsSUFBSUMsMEJBQUosQ0FBaUJGLGFBQWEsQ0FBQyxDQUFELENBQTlCLENBQVY7QUFDQUMsRUFBQUEsQ0FBQyxDQUFDRSxNQUFGLEdBQVdILGFBQVg7QUFDQSxTQUFPQyxDQUFQO0FBQ0QsQ0FKRDs7SUFnQnFCRyxPOzs7QUFPbkIsbUJBQVlDLE9BQVosRUFBaUQ7QUFBQTtBQUFBO0FBQUE7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QU8sS0FBS1AsU0FBTCxDQUFrQixLQUFsQixFQUF5QmYsT0FBekIsRUFBa0NzQixRQUFsQyxDQUFQO0FBQ0Q7Ozt5QkFDT3RCLE8sRUFBNkJzQixRLEVBQW9DO0FBQ3ZFLGFBQU8sS0FBS3dCLGdCQUFMLENBQXlCLE1BQXpCLEVBQWlDOUMsT0FBakMsRUFBMENzQixRQUExQyxDQUFQO0FBQ0Q7Ozt3QkFDTXRCLE8sRUFBNkJzQixRLEVBQW9DO0FBQ3RFLGFBQU8sS0FBS3dCLGdCQUFMLENBQXlCLEtBQXpCLEVBQWdDOUMsT0FBaEMsRUFBeUNzQixRQUF6QyxDQUFQO0FBQ0Q7Ozt3QkFDTXRCLE8sRUFBNkJzQixRLEVBQW9DO0FBQ3RFLGFBQU8sS0FBS3dCLGdCQUFMLENBQXlCLEtBQXpCLEVBQWdDOUMsT0FBaEMsRUFBeUNzQixRQUF6QyxDQUFQO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcmVxdWVzdCBmcm9tICdyZXF1ZXN0JztcclxuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IHsgY2FsbGJhY2tpZnkgfSBmcm9tICcuL3V0aWwvY2FsbGJhY2tpZnknO1xyXG5pbXBvcnQgeyBjYWxsYmFjayB9IGZyb20gJy4vdXRpbC9jYWxsYmFjayc7XHJcbmltcG9ydCB7IFJlcXVlc3RFcnJvciB9IGZyb20gJy4vUmVxdWVzdEVycm9yJztcclxuaW1wb3J0IHsgU2VjdXJlZCB9IGZyb20gJy4vdHlwZXMvU2VjdXJlZCc7XHJcblxyXG5jb25zdCBnZW5lcmF0ZUVycm9yOiAoeDogc3RyaW5nW10pID0+IFJlcXVlc3RFcnJvciA9IChlcnJvck1lc3NhZ2VzOiBzdHJpbmdbXSkgPT4ge1xyXG4gIGNvbnN0IGUgPSBuZXcgUmVxdWVzdEVycm9yKGVycm9yTWVzc2FnZXNbMF0pO1xyXG4gIGUuZXJyb3JzID0gZXJyb3JNZXNzYWdlcztcclxuICByZXR1cm4gZTtcclxufVxyXG5cclxuaW50ZXJmYWNlIElSZXF1ZXN0Q29uc3RydWN0b3JPcHRpb25zIHtcclxuICByZXF1ZXN0T3B0aW9ucz86IHtcclxuICAgIGhlYWRlcnM/OiB7XHJcbiAgICAgIHpzZXNzaW9uaWQ6IHN0cmluZztcclxuICAgIH07XHJcbiAgfTtcclxuICBzZXJ2ZXI/OiBzdHJpbmc7XHJcbiAgYXBpVmVyc2lvbj86IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVxdWVzdCB7XHJcbiAgcHJpdmF0ZSB3c2FwaVVybDogc3RyaW5nO1xyXG4gIHByaXZhdGUgamFyOiByZXF1ZXN0LkNvb2tpZUphcjtcclxuICBwcml2YXRlIF9yZXF1ZXN0T3B0aW9uczogcmVxdWVzdC5Db3JlT3B0aW9ucztcclxuICBwcml2YXRlIGh0dHBSZXF1ZXN0OiByZXF1ZXN0LlJlcXVlc3RBUEk8cmVxdWVzdC5SZXF1ZXN0LCByZXF1ZXN0LkNvcmVPcHRpb25zLCByZXF1ZXN0LlJlcXVpcmVkVXJpVXJsPjtcclxuICBwcml2YXRlIF9oYXNLZXk6IGFueTtcclxuICBwcml2YXRlIF90b2tlbjogc3RyaW5nIHwgdW5kZWZpbmVkO1xyXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnM6IElSZXF1ZXN0Q29uc3RydWN0b3JPcHRpb25zKSB7XHJcbiAgICB0aGlzLndzYXBpVXJsID0gYCR7b3B0aW9ucy5zZXJ2ZXJ9L3NsbS93ZWJzZXJ2aWNlLyR7b3B0aW9ucy5hcGlWZXJzaW9ufWA7XHJcbiAgICB0aGlzLmphciA9IHJlcXVlc3QuamFyKCk7XHJcbiAgICB0aGlzLl9yZXF1ZXN0T3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oeyBqYXI6IHRoaXMuamFyIH0sIG9wdGlvbnMucmVxdWVzdE9wdGlvbnMpO1xyXG4gICAgdGhpcy5odHRwUmVxdWVzdCA9IHJlcXVlc3QuZGVmYXVsdHModGhpcy5fcmVxdWVzdE9wdGlvbnMpO1xyXG4gICAgdGhpcy5faGFzS2V5ID0gb3B0aW9ucy5yZXF1ZXN0T3B0aW9ucyAmJlxyXG4gICAgICAgIG9wdGlvbnMucmVxdWVzdE9wdGlvbnMuaGVhZGVycyAmJlxyXG4gICAgICAgIG9wdGlvbnMucmVxdWVzdE9wdGlvbnMuaGVhZGVycy56c2Vzc2lvbmlkO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBhdXRoPFQ+KCk6IFByb21pc2U8VD4ge1xyXG4gICAgcmV0dXJuIHRoaXMuZG9SZXF1ZXN0PFQ+KCdnZXQnLCB7XHJcbiAgICAgIHVybDogJy9zZWN1cml0eS9hdXRob3JpemUnXHJcbiAgICB9KS50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgdGhpcy5fdG9rZW4gPSAoKHJlc3VsdCBhcyB1bmtub3duKSBhcyBTZWN1cmVkKS5TZWN1cml0eVRva2VuO1xyXG4gICAgfSkgYXMgUHJvbWlzZTxUPjtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZG9TZWN1cmVkUmVxdWVzdDxUPihtZXRob2Q6IHN0cmluZywgb3B0aW9uczogcmVxdWVzdC5VcmxPcHRpb25zLCBjYWxsYmFjaz86IGNhbGxiYWNrPFQ+KTogUHJvbWlzZTxUPiB7XHJcbiAgICBpZiAodGhpcy5faGFzS2V5KSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmRvUmVxdWVzdChtZXRob2QsIG9wdGlvbnMsIGNhbGxiYWNrKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBkb1JlcXVlc3Q6IDxUPigpID0+IFByb21pc2U8VD4gPSA8VD4oKSA9PiB7XHJcbiAgICAgIGNvbnN0IHJlcXVlc3RPcHRpb25zID0gXy5tZXJnZShcclxuICAgICAgICB7fSxcclxuICAgICAgICBvcHRpb25zLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHFzOiB7XHJcbiAgICAgICAgICAgIGtleTogdGhpcy5fdG9rZW5cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICk7XHJcbiAgICAgIHJldHVybiB0aGlzLmRvUmVxdWVzdDxUPihtZXRob2QsIHJlcXVlc3RPcHRpb25zKTtcclxuICAgIH07XHJcblxyXG4gICAgbGV0IHNlY3VyZWRSZXF1ZXN0UHJvbWlzZTogUHJvbWlzZTxUPjtcclxuICAgIGlmICh0aGlzLl90b2tlbikge1xyXG4gICAgICBzZWN1cmVkUmVxdWVzdFByb21pc2UgPSBkb1JlcXVlc3Q8VD4oKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNlY3VyZWRSZXF1ZXN0UHJvbWlzZSA9IHRoaXMuYXV0aDxUPigpLnRoZW4oZG9SZXF1ZXN0KSBhcyBQcm9taXNlPFQ+O1xyXG4gICAgfVxyXG4gICAgY2FsbGJhY2tpZnkoc2VjdXJlZFJlcXVlc3RQcm9taXNlLCBjYWxsYmFjayk7XHJcbiAgICByZXR1cm4gc2VjdXJlZFJlcXVlc3RQcm9taXNlO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBkb1JlcXVlc3Q8VD4obWV0aG9kOiBzdHJpbmcsIG9wdGlvbnM6IHJlcXVlc3QuVXJsT3B0aW9ucywgY2FsbGJhY2s/OiBjYWxsYmFjazxUPik6IFByb21pc2U8VD4ge1xyXG4gICAgY29uc3QgZG9SZXF1ZXN0UHJvbWlzZSA9IG5ldyBQcm9taXNlPFQ+KChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgY29uc3QgcmVxdWVzdE9wdGlvbnMgPSBfLm1lcmdlKHt9LCBvcHRpb25zLCB7XHJcbiAgICAgICAgdXJsOiB0aGlzLndzYXBpVXJsICsgb3B0aW9ucy51cmxcclxuICAgICAgfSk7XHJcbiAgICAgIGNvbnN0IHJlcXVlc3RDYWxsYmFjazogcmVxdWVzdC5SZXF1ZXN0Q2FsbGJhY2sgPSAoZXJyLCByZXNwb25zZSwgYm9keSkgPT4ge1xyXG4gICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgIHJlamVjdChnZW5lcmF0ZUVycm9yKFtlcnJdKSk7XHJcbiAgICAgICAgfSBlbHNlIGlmICghcmVzcG9uc2UpIHtcclxuICAgICAgICAgIHJlamVjdChnZW5lcmF0ZUVycm9yKFtgVW5hYmxlIHRvIGNvbm5lY3QgdG8gc2VydmVyOiAke3RoaXMud3NhcGlVcmx9YF0pKTtcclxuICAgICAgICB9IGVsc2UgaWYgKCFib2R5IHx8ICFfLmlzT2JqZWN0KGJvZHkpKSB7XHJcbiAgICAgICAgICByZWplY3QoZ2VuZXJhdGVFcnJvcihbYCR7b3B0aW9ucy51cmx9OiAke3Jlc3BvbnNlLnN0YXR1c0NvZGV9ISBib2R5PSR7Ym9keX1gXSkpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBjb25zdCByZXN1bHQgPSBfLnZhbHVlcyhib2R5KVswXSBhcyBhbnk7XHJcbiAgICAgICAgICBpZiAocmVzdWx0LkVycm9ycy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgcmVqZWN0KGdlbmVyYXRlRXJyb3IocmVzdWx0LkVycm9ycykpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfTtcclxuICAgICAgc3dpdGNoIChtZXRob2QpIHtcclxuICAgICAgICBjYXNlICdnZXQnOlxyXG4gICAgICAgICAgcmV0dXJuIHRoaXMuaHR0cFJlcXVlc3QuZ2V0KHJlcXVlc3RPcHRpb25zLCByZXF1ZXN0Q2FsbGJhY2spO1xyXG4gICAgICAgIGNhc2UgJ3Bvc3QnOlxyXG4gICAgICAgICAgcmV0dXJuIHRoaXMuaHR0cFJlcXVlc3QucG9zdChyZXF1ZXN0T3B0aW9ucywgcmVxdWVzdENhbGxiYWNrKTtcclxuICAgICAgICBjYXNlICdwdXQnOlxyXG4gICAgICAgICAgcmV0dXJuIHRoaXMuaHR0cFJlcXVlc3QucHV0KHJlcXVlc3RPcHRpb25zLCByZXF1ZXN0Q2FsbGJhY2spO1xyXG4gICAgICAgIGNhc2UgJ2RlbCc6XHJcbiAgICAgICAgICByZXR1cm4gdGhpcy5odHRwUmVxdWVzdC5kZWwocmVxdWVzdE9wdGlvbnMsIHJlcXVlc3RDYWxsYmFjayk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGNhbGxiYWNraWZ5KGRvUmVxdWVzdFByb21pc2UsIGNhbGxiYWNrKTtcclxuICAgIHJldHVybiBkb1JlcXVlc3RQcm9taXNlO1xyXG4gIH1cclxuXHJcbiAgZ2V0PFQ+KG9wdGlvbnM6IHJlcXVlc3QuVXJsT3B0aW9ucywgY2FsbGJhY2s/OiBjYWxsYmFjazxUPik6IFByb21pc2U8VD4ge1xyXG4gICAgcmV0dXJuIHRoaXMuZG9SZXF1ZXN0PFQ+KCdnZXQnLCBvcHRpb25zLCBjYWxsYmFjayk7XHJcbiAgfVxyXG4gIHBvc3Q8VD4ob3B0aW9uczogcmVxdWVzdC5VcmxPcHRpb25zLCBjYWxsYmFjaz86IGNhbGxiYWNrPFQ+KTogUHJvbWlzZTxUPiB7XHJcbiAgICByZXR1cm4gdGhpcy5kb1NlY3VyZWRSZXF1ZXN0PFQ+KCdwb3N0Jywgb3B0aW9ucywgY2FsbGJhY2spO1xyXG4gIH1cclxuICBwdXQ8VD4ob3B0aW9uczogcmVxdWVzdC5VcmxPcHRpb25zLCBjYWxsYmFjaz86IGNhbGxiYWNrPFQ+KTogUHJvbWlzZTxUPiB7XHJcbiAgICByZXR1cm4gdGhpcy5kb1NlY3VyZWRSZXF1ZXN0PFQ+KCdwdXQnLCBvcHRpb25zLCBjYWxsYmFjayk7XHJcbiAgfVxyXG4gIGRlbDxUPihvcHRpb25zOiByZXF1ZXN0LlVybE9wdGlvbnMsIGNhbGxiYWNrPzogY2FsbGJhY2s8VD4pOiBQcm9taXNlPFQ+IHtcclxuICAgIHJldHVybiB0aGlzLmRvU2VjdXJlZFJlcXVlc3Q8VD4oJ2RlbCcsIG9wdGlvbnMsIGNhbGxiYWNrKTtcclxuICB9XHJcbn0iXX0=