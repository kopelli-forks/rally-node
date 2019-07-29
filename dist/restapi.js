"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _lodash = _interopRequireDefault(require("lodash"));

var _request = _interopRequireDefault(require("./request"));

var _callbackify = require("./util/callbackify");

var _ref = _interopRequireDefault(require("./util/ref"));

var _package = _interopRequireDefault(require("../package.json"));

/**
 @module RestApi

 This module presents a higher-level API for interacting with resources
 in the Rally REST API.
 */
var defaultServer = 'https://rally1.rallydev.com';
var defaultApiVersion = 'v2.0';

function optionsToRequestOptions(options) {
  var qs = {};

  if (options.scope) {
    if (options.scope.project) {
      qs.project = _ref["default"].getRelative(options.scope.project);

      if (options.scope.hasOwnProperty('up')) {
        qs.projectScopeUp = options.scope.up;
      }

      if (options.scope.hasOwnProperty('down')) {
        qs.projectScopeDown = options.scope.down;
      }
    } else if (options.scope.workspace) {
      qs.workspace = _ref["default"].getRelative(options.scope.workspace);
    }
  }

  if (_lodash["default"].isArray(options.fetch)) {
    qs.fetch = options.fetch.join(',');
  } else if (_lodash["default"].isString(options.fetch)) {
    qs.fetch = options.fetch;
  }

  return {
    qs: qs
  };
}
/**
 * Configuration options for the REST client.
 */


/**
 The Rally REST API client
 */
var RestApi =
/*#__PURE__*/
function () {
  /**
   * @param options (optional) - optional config for the REST client
   */
  function RestApi(options) {
    (0, _classCallCheck2["default"])(this, RestApi);
    (0, _defineProperty2["default"])(this, "request", void 0);
    options = _lodash["default"].merge({
      server: defaultServer,
      apiVersion: defaultApiVersion,
      requestOptions: {
        json: true,
        gzip: true,
        headers: {
          'X-RallyIntegrationLibrary': "".concat(_package["default"].description, " v").concat(_package["default"].version),
          'X-RallyIntegrationName': _package["default"].description,
          'X-RallyIntegrationVendor': 'Rally Software, Inc.',
          'X-RallyIntegrationVersion': _package["default"].version
        }
      }
    }, options);
    var apiKey = options && options.apiKey || process.env.RALLY_API_KEY;

    if (apiKey) {
      options = _lodash["default"].merge({
        requestOptions: {
          headers: {
            zsessionid: apiKey
          },
          jar: false
        }
      }, options);
    } else {
      options = _lodash["default"].merge({
        requestOptions: {
          auth: {
            user: options && (options.user || options.userName) || process.env.RALLY_USERNAME,
            pass: options && (options.pass || options.password) || process.env.RALLY_PASSWORD,
            sendImmediately: false
          }
        }
      }, options);
    }

    this.request = new _request["default"](options);
  }

  (0, _createClass2["default"])(RestApi, [{
    key: "collectionPost",
    value: function collectionPost(options, operation, callback) {
      return this.request.post(_lodash["default"].merge({
        url: "".concat(_ref["default"].getRelative(options.ref), "/").concat(options.collection, "/").concat(operation),
        json: {
          CollectionItems: options.data
        }
      }, options.requestOptions, optionsToRequestOptions(options)), callback);
    }
    /**
     Create a new object
     @param {object} options - The create options (required)
     - @member {string} type - The type to be created, e.g. defect, hierarchicalrequirement, etc. (required)
     - @member {object} data - Key/value pairs of data with which to populate the new object (required)
     - @member {object} scope - the default scoping to use.  if not specified server default will be used.
     - @member {ref} scope.workspace - the workspace
     - @member {string/string[]} fetch - the fields to include on the returned record
     - @member {object} requestOptions - Additional options to be applied to the request: https://github.com/mikeal/request (optional)
     @param {function} callback - A callback to be called when the operation completes
     - @param {string[]} errors - Any errors which occurred
     - @param {object} result - the operation result
     @return {promise}
     */

  }, {
    key: "create",
    value: function create(options, callback) {
      var postBody = {};
      postBody[options.type] = options.data;
      return this.request.post(_lodash["default"].merge({
        url: "/".concat(options.type, "/create"),
        json: postBody
      }, options.requestOptions, optionsToRequestOptions(options)), callback);
    }
    /**
     Update an object
     @param {object} options - The update options (required)
     - @member {string} ref - The ref of the object to update, e.g. /defect/12345 (required)
     - @member {object} data - Key/value pairs of data with which to update object (required)
     - @member {object} scope - the default scoping to use.  if not specified server default will be used.
     - @member {ref} scope.workspace - the workspace
     - @member {string/string[]} fetch - the fields to include on the returned record
     - @member {object} requestOptions - Additional options to be applied to the request: https://github.com/mikeal/request (optional)
     @param {function} callback - A callback to be called when the operation completes
     - @param {string[]} errors - Any errors which occurred
     - @param {object} result - the operation result
     @return {promise}
     */

  }, {
    key: "update",
    value: function update(options, callback) {
      var postBody = {};
      postBody[_ref["default"].getType(options.ref)] = options.data;
      return this.request.put(_lodash["default"].merge({
        url: _ref["default"].getRelative(options.ref),
        json: postBody
      }, options.requestOptions, optionsToRequestOptions(options)), callback);
    }
    /**
     Delete an object
     @param {object} options - The delete options (required)
     - @member {string} ref - The ref of the object to delete, e.g. /defect/1234
     - @member {object} scope - the default scoping to use.  if not specified server default will be used.
     - @member {ref} scope.workspace - the workspace
     - @member {object} requestOptions - Additional options to be applied to the request: https://github.com/mikeal/request (optional)
     @param {function} callback - A callback to be called when the operation completes
     - @param {string[]} errors - Any errors which occurred
     - @param {object} result - the operation result
     @return {promise}
     */

  }, {
    key: "del",
    value: function del(options, callback) {
      return this.request.del(_lodash["default"].merge({
        url: _ref["default"].getRelative(options.ref)
      }, options.requestOptions, optionsToRequestOptions(options)), callback);
    }
    /**
     * Get an object
     * @param options [required] The get options
     * @param cb [optional] A callback when the operation completes
     */

  }, {
    key: "get",
    value: function get(options, cb) {
      var getPromise = this.request.get(_lodash["default"].merge({
        url: _ref["default"].getRelative(options.ref)
      }, options.requestOptions, optionsToRequestOptions(options))).then(function (result) {
        return {
          Errors: result.Errors,
          Warnings: result.Warnings,
          Object: _lodash["default"].omit(result, ['Errors', 'Warnings'])
        };
      });
      (0, _callbackify.callbackify)(getPromise, cb);
      return getPromise;
    }
    /**
     Query for objects
     @param options - The query options
     @param callback - A callback to be called when the operation completes
     */

  }, {
    key: "query",
    value: function query(options, callback) {
      var self = this;
      var pageSizeDefault = 200;
      options = _lodash["default"].merge({
        start: 1,
        pageSize: pageSizeDefault
      }, options);

      var requestOptions = _lodash["default"].merge({
        url: _ref["default"].getRelative(options.ref) || "/".concat(options.type),
        qs: {
          start: options.start,
          pagesize: options.limit ? Math.min(options.pageSize || pageSizeDefault, options.limit) : options.pageSize
        }
      }, options.requestOptions, optionsToRequestOptions(options));

      if (_lodash["default"].isArray(options.order)) {
        requestOptions.qs.order = options.order.join(',');
      } else if (_lodash["default"].isString(options.order)) {
        requestOptions.qs.order = options.order;
      }

      if (options.query) {
        requestOptions.qs.query = options.query && options.query.toQueryString() || options.query;
      }

      var results = [];

      function loadRemainingPages(result) {
        var pageResults = result.Results;
        results = results.concat(pageResults);

        if (options.limit && result.StartIndex + options.pageSize <= Math.min(options.limit || options.pageSize || pageSizeDefault, result.TotalResultCount)) {
          return self.request.get(_lodash["default"].merge(requestOptions, {
            qs: {
              start: result.StartIndex + options.pageSize
            }
          })).then(loadRemainingPages);
        } else {
          result.Results = results.slice(0, options.limit || results.length);
          result.StartIndex = options.start;
          result.PageSize = results.length;
          return Promise.resolve(result);
        }
      }

      var queryPromise = this.request.get(requestOptions).then(loadRemainingPages); //callbackify(queryPromise, callback);

      return queryPromise;
    }
    /**
     Adds items to a collection
     @param {object} options - The add options (required)
     - @member {string} ref - The ref of the collection to update, e.g. /user/12345 (required)
     - @member {string} collection - The name of the collection to update, e.g. 'TeamMemberships (required)
     - @member {object} data - [{_ref: objectRef}, {Name:"Joe"}], things to be added to the collection (required)
     - @member {string/string[]} fetch - the fields to include on the returned records
     - @member {object} scope - the default scoping to use.  if not specified server default will be used.
     - @member {ref} scope.workspace - the workspace
     - @member {object} requestOptions - Additional options to be applied to the request: https://github.com/mikeal/request (optional)
     @param {function} callback - A callback to be called when the operation completes
     - @param {string[]} errors - Any errors which occurred
     - @param {object} result - the operation result
     @return {promise}
     */

  }, {
    key: "add",
    value: function add(options, callback) {
      return this.collectionPost(options, 'add', callback);
    }
    /**
     Remove items from a collection
     @param {object} options - The remove options (required)
     - @member {string} ref - The ref of the collection to update, e.g. /user/12345 (required)
     - @member {string} collection - The name of the collection to update, e.g. 'TeamMemberships (required)
     - @member {object} data - [{_ref: objectRef}], where the objectRefs are to be removed from the collection (required)
     - @member {string/string[]} fetch - the fields to include on the returned records
     - @member {object} scope - the default scoping to use.  if not specified server default will be used.
     - @member {ref} scope.workspace - the workspace
     - @member {object} requestOptions - Additional options to be applied to the request: https://github.com/mikeal/request (optional)
     @param {function} callback - A callback to be called when the operation completes
     - @param {string[]} errors - Any errors which occurred
     - @param {object} result - the operation result
     @return {promise}
     */

  }, {
    key: "remove",
    value: function remove(options, callback) {
      return this.collectionPost(options, 'remove', callback);
    }
  }]);
  return RestApi;
}();

exports["default"] = RestApi;
module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZXN0YXBpLnRzIl0sIm5hbWVzIjpbImRlZmF1bHRTZXJ2ZXIiLCJkZWZhdWx0QXBpVmVyc2lvbiIsIm9wdGlvbnNUb1JlcXVlc3RPcHRpb25zIiwib3B0aW9ucyIsInFzIiwic2NvcGUiLCJwcm9qZWN0IiwicmVmVXRpbHMiLCJnZXRSZWxhdGl2ZSIsImhhc093blByb3BlcnR5IiwicHJvamVjdFNjb3BlVXAiLCJ1cCIsInByb2plY3RTY29wZURvd24iLCJkb3duIiwid29ya3NwYWNlIiwiXyIsImlzQXJyYXkiLCJmZXRjaCIsImpvaW4iLCJpc1N0cmluZyIsIlJlc3RBcGkiLCJtZXJnZSIsInNlcnZlciIsImFwaVZlcnNpb24iLCJyZXF1ZXN0T3B0aW9ucyIsImpzb24iLCJnemlwIiwiaGVhZGVycyIsInBrZ0luZm8iLCJkZXNjcmlwdGlvbiIsInZlcnNpb24iLCJhcGlLZXkiLCJwcm9jZXNzIiwiZW52IiwiUkFMTFlfQVBJX0tFWSIsInpzZXNzaW9uaWQiLCJqYXIiLCJhdXRoIiwidXNlciIsInVzZXJOYW1lIiwiUkFMTFlfVVNFUk5BTUUiLCJwYXNzIiwicGFzc3dvcmQiLCJSQUxMWV9QQVNTV09SRCIsInNlbmRJbW1lZGlhdGVseSIsInJlcXVlc3QiLCJSZXF1ZXN0Iiwib3BlcmF0aW9uIiwiY2FsbGJhY2siLCJwb3N0IiwidXJsIiwicmVmIiwiY29sbGVjdGlvbiIsIkNvbGxlY3Rpb25JdGVtcyIsImRhdGEiLCJwb3N0Qm9keSIsInR5cGUiLCJnZXRUeXBlIiwicHV0IiwiZGVsIiwiY2IiLCJnZXRQcm9taXNlIiwiZ2V0IiwidGhlbiIsInJlc3VsdCIsIkVycm9ycyIsIldhcm5pbmdzIiwiT2JqZWN0Iiwib21pdCIsInNlbGYiLCJwYWdlU2l6ZURlZmF1bHQiLCJzdGFydCIsInBhZ2VTaXplIiwicGFnZXNpemUiLCJsaW1pdCIsIk1hdGgiLCJtaW4iLCJvcmRlciIsInF1ZXJ5IiwidG9RdWVyeVN0cmluZyIsInJlc3VsdHMiLCJsb2FkUmVtYWluaW5nUGFnZXMiLCJwYWdlUmVzdWx0cyIsIlJlc3VsdHMiLCJjb25jYXQiLCJTdGFydEluZGV4IiwiVG90YWxSZXN1bHRDb3VudCIsInNsaWNlIiwibGVuZ3RoIiwiUGFnZVNpemUiLCJQcm9taXNlIiwicmVzb2x2ZSIsInF1ZXJ5UHJvbWlzZSIsImNvbGxlY3Rpb25Qb3N0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFNQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFYQTs7Ozs7O0FBZ0JBLElBQU1BLGFBQWEsR0FBRyw2QkFBdEI7QUFDQSxJQUFNQyxpQkFBaUIsR0FBRyxNQUExQjs7QUFVQSxTQUFTQyx1QkFBVCxDQUFpQ0MsT0FBakMsRUFBb0U7QUFDbEUsTUFBTUMsRUFBbUIsR0FBRyxFQUE1Qjs7QUFDQSxNQUFJRCxPQUFPLENBQUNFLEtBQVosRUFBbUI7QUFDakIsUUFBSUYsT0FBTyxDQUFDRSxLQUFSLENBQWNDLE9BQWxCLEVBQTJCO0FBQ3pCRixNQUFBQSxFQUFFLENBQUNFLE9BQUgsR0FBYUMsZ0JBQVNDLFdBQVQsQ0FBcUJMLE9BQU8sQ0FBQ0UsS0FBUixDQUFjQyxPQUFuQyxDQUFiOztBQUNBLFVBQUlILE9BQU8sQ0FBQ0UsS0FBUixDQUFjSSxjQUFkLENBQTZCLElBQTdCLENBQUosRUFBd0M7QUFDdENMLFFBQUFBLEVBQUUsQ0FBQ00sY0FBSCxHQUFvQlAsT0FBTyxDQUFDRSxLQUFSLENBQWNNLEVBQWxDO0FBQ0Q7O0FBQ0QsVUFBSVIsT0FBTyxDQUFDRSxLQUFSLENBQWNJLGNBQWQsQ0FBNkIsTUFBN0IsQ0FBSixFQUEwQztBQUN4Q0wsUUFBQUEsRUFBRSxDQUFDUSxnQkFBSCxHQUFzQlQsT0FBTyxDQUFDRSxLQUFSLENBQWNRLElBQXBDO0FBQ0Q7QUFDRixLQVJELE1BUU8sSUFBSVYsT0FBTyxDQUFDRSxLQUFSLENBQWNTLFNBQWxCLEVBQTZCO0FBQ2xDVixNQUFBQSxFQUFFLENBQUNVLFNBQUgsR0FBZVAsZ0JBQVNDLFdBQVQsQ0FBcUJMLE9BQU8sQ0FBQ0UsS0FBUixDQUFjUyxTQUFuQyxDQUFmO0FBQ0Q7QUFDRjs7QUFDRCxNQUFJQyxtQkFBRUMsT0FBRixDQUFVYixPQUFPLENBQUNjLEtBQWxCLENBQUosRUFBOEI7QUFDNUJiLElBQUFBLEVBQUUsQ0FBQ2EsS0FBSCxHQUFXZCxPQUFPLENBQUNjLEtBQVIsQ0FBY0MsSUFBZCxDQUFtQixHQUFuQixDQUFYO0FBQ0QsR0FGRCxNQUVPLElBQUlILG1CQUFFSSxRQUFGLENBQVdoQixPQUFPLENBQUNjLEtBQW5CLENBQUosRUFBK0I7QUFDcENiLElBQUFBLEVBQUUsQ0FBQ2EsS0FBSCxHQUFXZCxPQUFPLENBQUNjLEtBQW5CO0FBQ0Q7O0FBRUQsU0FBTztBQUNMYixJQUFBQSxFQUFFLEVBQUVBO0FBREMsR0FBUDtBQUdEO0FBRUQ7Ozs7O0FBNkJBOzs7SUFHcUJnQixPOzs7QUFFbkI7OztBQUdBLG1CQUFZakIsT0FBWixFQUF1QztBQUFBO0FBQUE7QUFDckNBLElBQUFBLE9BQU8sR0FBR1ksbUJBQUVNLEtBQUYsQ0FBUTtBQUNoQkMsTUFBQUEsTUFBTSxFQUFFdEIsYUFEUTtBQUVoQnVCLE1BQUFBLFVBQVUsRUFBRXRCLGlCQUZJO0FBR2hCdUIsTUFBQUEsY0FBYyxFQUFFO0FBQ2RDLFFBQUFBLElBQUksRUFBRSxJQURRO0FBRWRDLFFBQUFBLElBQUksRUFBRSxJQUZRO0FBR2RDLFFBQUFBLE9BQU8sRUFBRTtBQUNQLGlEQUFnQ0Msb0JBQVFDLFdBQXhDLGVBQXdERCxvQkFBUUUsT0FBaEUsQ0FETztBQUVQLG9DQUEwQkYsb0JBQVFDLFdBRjNCO0FBR1Asc0NBQTRCLHNCQUhyQjtBQUlQLHVDQUE2QkQsb0JBQVFFO0FBSjlCO0FBSEs7QUFIQSxLQUFSLEVBYVAzQixPQWJPLENBQVY7QUFlQSxRQUFNNEIsTUFBTSxHQUFJNUIsT0FBTyxJQUFJQSxPQUFPLENBQUM0QixNQUFwQixJQUErQkMsT0FBTyxDQUFDQyxHQUFSLENBQVlDLGFBQTFEOztBQUNBLFFBQUlILE1BQUosRUFBWTtBQUNWNUIsTUFBQUEsT0FBTyxHQUFHWSxtQkFBRU0sS0FBRixDQUFRO0FBQ2hCRyxRQUFBQSxjQUFjLEVBQUU7QUFDZEcsVUFBQUEsT0FBTyxFQUFFO0FBQ1BRLFlBQUFBLFVBQVUsRUFBRUo7QUFETCxXQURLO0FBSWRLLFVBQUFBLEdBQUcsRUFBRTtBQUpTO0FBREEsT0FBUixFQU9QakMsT0FQTyxDQUFWO0FBUUQsS0FURCxNQVNPO0FBQ0xBLE1BQUFBLE9BQU8sR0FBR1ksbUJBQUVNLEtBQUYsQ0FBUTtBQUNoQkcsUUFBQUEsY0FBYyxFQUFFO0FBQ2RhLFVBQUFBLElBQUksRUFBRTtBQUNKQyxZQUFBQSxJQUFJLEVBQUduQyxPQUFPLEtBQUtBLE9BQU8sQ0FBQ21DLElBQVIsSUFBZ0JuQyxPQUFPLENBQUNvQyxRQUE3QixDQUFSLElBQW1EUCxPQUFPLENBQUNDLEdBQVIsQ0FBWU8sY0FEakU7QUFFSkMsWUFBQUEsSUFBSSxFQUFHdEMsT0FBTyxLQUFLQSxPQUFPLENBQUNzQyxJQUFSLElBQWdCdEMsT0FBTyxDQUFDdUMsUUFBN0IsQ0FBUixJQUFtRFYsT0FBTyxDQUFDQyxHQUFSLENBQVlVLGNBRmpFO0FBR0pDLFlBQUFBLGVBQWUsRUFBRTtBQUhiO0FBRFE7QUFEQSxPQUFSLEVBUVB6QyxPQVJPLENBQVY7QUFTRDs7QUFFRCxTQUFLMEMsT0FBTCxHQUFlLElBQUlDLG1CQUFKLENBQVkzQyxPQUFaLENBQWY7QUFDRDs7OzttQ0FFc0JBLE8sRUFBYzRDLFMsRUFBbUJDLFEsRUFBNkI7QUFDbkYsYUFBTyxLQUFLSCxPQUFMLENBQWFJLElBQWIsQ0FDTGxDLG1CQUFFTSxLQUFGLENBQ0U7QUFDRTZCLFFBQUFBLEdBQUcsWUFBSzNDLGdCQUFTQyxXQUFULENBQXFCTCxPQUFPLENBQUNnRCxHQUE3QixDQUFMLGNBQTBDaEQsT0FBTyxDQUFDaUQsVUFBbEQsY0FBZ0VMLFNBQWhFLENBREw7QUFFRXRCLFFBQUFBLElBQUksRUFBRTtBQUFDNEIsVUFBQUEsZUFBZSxFQUFFbEQsT0FBTyxDQUFDbUQ7QUFBMUI7QUFGUixPQURGLEVBS0VuRCxPQUFPLENBQUNxQixjQUxWLEVBTUV0Qix1QkFBdUIsQ0FBQ0MsT0FBRCxDQU56QixDQURLLEVBU0w2QyxRQVRLLENBQVA7QUFXRDtBQUVEOzs7Ozs7Ozs7Ozs7Ozs7OzsyQkFjTzdDLE8sRUFBYzZDLFEsRUFBNkI7QUFDaEQsVUFBTU8sUUFBYSxHQUFHLEVBQXRCO0FBQ0FBLE1BQUFBLFFBQVEsQ0FBQ3BELE9BQU8sQ0FBQ3FELElBQVQsQ0FBUixHQUF5QnJELE9BQU8sQ0FBQ21ELElBQWpDO0FBQ0EsYUFBTyxLQUFLVCxPQUFMLENBQWFJLElBQWIsQ0FDTGxDLG1CQUFFTSxLQUFGLENBQ0U7QUFDRTZCLFFBQUFBLEdBQUcsYUFBTS9DLE9BQU8sQ0FBQ3FELElBQWQsWUFETDtBQUVFL0IsUUFBQUEsSUFBSSxFQUFFOEI7QUFGUixPQURGLEVBS0VwRCxPQUFPLENBQUNxQixjQUxWLEVBTUV0Qix1QkFBdUIsQ0FBQ0MsT0FBRCxDQU56QixDQURLLEVBU0w2QyxRQVRLLENBQVA7QUFXRDtBQUVEOzs7Ozs7Ozs7Ozs7Ozs7OzsyQkFjTzdDLE8sRUFBYzZDLFEsRUFBNkI7QUFDaEQsVUFBTU8sUUFBYSxHQUFHLEVBQXRCO0FBQ0FBLE1BQUFBLFFBQVEsQ0FBQ2hELGdCQUFTa0QsT0FBVCxDQUFpQnRELE9BQU8sQ0FBQ2dELEdBQXpCLENBQUQsQ0FBUixHQUEwQ2hELE9BQU8sQ0FBQ21ELElBQWxEO0FBQ0EsYUFBTyxLQUFLVCxPQUFMLENBQWFhLEdBQWIsQ0FDTDNDLG1CQUFFTSxLQUFGLENBQ0U7QUFDRTZCLFFBQUFBLEdBQUcsRUFBRTNDLGdCQUFTQyxXQUFULENBQXFCTCxPQUFPLENBQUNnRCxHQUE3QixDQURQO0FBRUUxQixRQUFBQSxJQUFJLEVBQUU4QjtBQUZSLE9BREYsRUFLRXBELE9BQU8sQ0FBQ3FCLGNBTFYsRUFNRXRCLHVCQUF1QixDQUFDQyxPQUFELENBTnpCLENBREssRUFTTDZDLFFBVEssQ0FBUDtBQVdEO0FBRUQ7Ozs7Ozs7Ozs7Ozs7Ozt3QkFZSTdDLE8sRUFBYzZDLFEsRUFBNkI7QUFDN0MsYUFBTyxLQUFLSCxPQUFMLENBQWFjLEdBQWIsQ0FDTDVDLG1CQUFFTSxLQUFGLENBQ0U7QUFDRTZCLFFBQUFBLEdBQUcsRUFBRTNDLGdCQUFTQyxXQUFULENBQXFCTCxPQUFPLENBQUNnRCxHQUE3QjtBQURQLE9BREYsRUFJRWhELE9BQU8sQ0FBQ3FCLGNBSlYsRUFLRXRCLHVCQUF1QixDQUFDQyxPQUFELENBTHpCLENBREssRUFRTDZDLFFBUkssQ0FBUDtBQVVEO0FBRUQ7Ozs7Ozs7O3dCQUtPN0MsTyxFQUFjeUQsRSxFQUFvRDtBQUN2RSxVQUFNQyxVQUFVLEdBQUcsS0FBS2hCLE9BQUwsQ0FBYWlCLEdBQWIsQ0FDakIvQyxtQkFBRU0sS0FBRixDQUNFO0FBQ0U2QixRQUFBQSxHQUFHLEVBQUUzQyxnQkFBU0MsV0FBVCxDQUFxQkwsT0FBTyxDQUFDZ0QsR0FBN0I7QUFEUCxPQURGLEVBSUVoRCxPQUFPLENBQUNxQixjQUpWLEVBS0V0Qix1QkFBdUIsQ0FBQ0MsT0FBRCxDQUx6QixDQURpQixFQVFqQjRELElBUmlCLENBUVosVUFBU0MsTUFBVCxFQUFpQjtBQUN0QixlQUFPO0FBQ0xDLFVBQUFBLE1BQU0sRUFBRUQsTUFBTSxDQUFDQyxNQURWO0FBRUxDLFVBQUFBLFFBQVEsRUFBRUYsTUFBTSxDQUFDRSxRQUZaO0FBR0xDLFVBQUFBLE1BQU0sRUFBR3BELG1CQUFFcUQsSUFBRixDQUFPSixNQUFQLEVBQWUsQ0FBQyxRQUFELEVBQVcsVUFBWCxDQUFmO0FBSEosU0FBUDtBQUtELE9BZGtCLENBQW5CO0FBZ0JBLG9DQUFZSCxVQUFaLEVBQXdCRCxFQUF4QjtBQUNBLGFBQU9DLFVBQVA7QUFDRDtBQUVEOzs7Ozs7OzswQkFLUzFELE8sRUFBdUI2QyxRLEVBQWlEO0FBQy9FLFVBQU1xQixJQUFJLEdBQUcsSUFBYjtBQUNBLFVBQU1DLGVBQWUsR0FBRyxHQUF4QjtBQUNBbkUsTUFBQUEsT0FBTyxHQUFHWSxtQkFBRU0sS0FBRixDQUFRO0FBQ2hCa0QsUUFBQUEsS0FBSyxFQUFFLENBRFM7QUFFaEJDLFFBQUFBLFFBQVEsRUFBRUY7QUFGTSxPQUFSLEVBR1BuRSxPQUhPLENBQVY7O0FBS0EsVUFBTXFCLGNBQWMsR0FBR1QsbUJBQUVNLEtBQUYsQ0FBUTtBQUM3QjZCLFFBQUFBLEdBQUcsRUFBRTNDLGdCQUFTQyxXQUFULENBQXFCTCxPQUFPLENBQUNnRCxHQUE3QixnQkFBeUNoRCxPQUFPLENBQUNxRCxJQUFqRCxDQUR3QjtBQUU3QnBELFFBQUFBLEVBQUUsRUFBRTtBQUNGbUUsVUFBQUEsS0FBSyxFQUFFcEUsT0FBTyxDQUFDb0UsS0FEYjtBQUVGRSxVQUFBQSxRQUFRLEVBQUV0RSxPQUFPLENBQUN1RSxLQUFSLEdBQWdCQyxJQUFJLENBQUNDLEdBQUwsQ0FBU3pFLE9BQU8sQ0FBQ3FFLFFBQVIsSUFBb0JGLGVBQTdCLEVBQThDbkUsT0FBTyxDQUFDdUUsS0FBdEQsQ0FBaEIsR0FBK0V2RSxPQUFPLENBQUNxRTtBQUYvRjtBQUZ5QixPQUFSLEVBTXBCckUsT0FBTyxDQUFDcUIsY0FOWSxFQU1JdEIsdUJBQXVCLENBQUNDLE9BQUQsQ0FOM0IsQ0FBdkI7O0FBT0EsVUFBSVksbUJBQUVDLE9BQUYsQ0FBVWIsT0FBTyxDQUFDMEUsS0FBbEIsQ0FBSixFQUE4QjtBQUM1QnJELFFBQUFBLGNBQWMsQ0FBQ3BCLEVBQWYsQ0FBa0J5RSxLQUFsQixHQUEwQjFFLE9BQU8sQ0FBQzBFLEtBQVIsQ0FBYzNELElBQWQsQ0FBbUIsR0FBbkIsQ0FBMUI7QUFDRCxPQUZELE1BRU8sSUFBSUgsbUJBQUVJLFFBQUYsQ0FBV2hCLE9BQU8sQ0FBQzBFLEtBQW5CLENBQUosRUFBK0I7QUFDcENyRCxRQUFBQSxjQUFjLENBQUNwQixFQUFmLENBQWtCeUUsS0FBbEIsR0FBMEIxRSxPQUFPLENBQUMwRSxLQUFsQztBQUNEOztBQUNELFVBQUkxRSxPQUFPLENBQUMyRSxLQUFaLEVBQW1CO0FBQ2pCdEQsUUFBQUEsY0FBYyxDQUFDcEIsRUFBZixDQUFrQjBFLEtBQWxCLEdBQTRCM0UsT0FBTyxDQUFDMkUsS0FBVCxJQUN0QjNFLE9BQU8sQ0FBQzJFLEtBQVQsQ0FBeUJDLGFBQXpCLEVBRHNCLElBQ3VCNUUsT0FBTyxDQUFDMkUsS0FEekQ7QUFFRDs7QUFFRCxVQUFJRSxPQUFZLEdBQUcsRUFBbkI7O0FBRUEsZUFBU0Msa0JBQVQsQ0FBNEJqQixNQUE1QixFQUFrRTtBQUNoRSxZQUFNa0IsV0FBVyxHQUFHbEIsTUFBTSxDQUFDbUIsT0FBM0I7QUFDQUgsUUFBQUEsT0FBTyxHQUFHQSxPQUFPLENBQUNJLE1BQVIsQ0FBZUYsV0FBZixDQUFWOztBQUNBLFlBQUkvRSxPQUFPLENBQUN1RSxLQUFSLElBQWlCVixNQUFNLENBQUNxQixVQUFQLEdBQW9CbEYsT0FBTyxDQUFDcUUsUUFBNUIsSUFBd0NHLElBQUksQ0FBQ0MsR0FBTCxDQUFTekUsT0FBTyxDQUFDdUUsS0FBUixJQUFpQnZFLE9BQU8sQ0FBQ3FFLFFBQXpCLElBQXFDRixlQUE5QyxFQUErRE4sTUFBTSxDQUFDc0IsZ0JBQXRFLENBQTdELEVBQXNKO0FBQ3BKLGlCQUFPakIsSUFBSSxDQUFDeEIsT0FBTCxDQUFhaUIsR0FBYixDQUFvQi9DLG1CQUFFTSxLQUFGLENBQVFHLGNBQVIsRUFBd0I7QUFDakRwQixZQUFBQSxFQUFFLEVBQUU7QUFDRm1FLGNBQUFBLEtBQUssRUFBRVAsTUFBTSxDQUFDcUIsVUFBUCxHQUFvQmxGLE9BQU8sQ0FBQ3FFO0FBRGpDO0FBRDZDLFdBQXhCLENBQXBCLEVBSW1CVCxJQUpuQixDQUl3QmtCLGtCQUp4QixDQUFQO0FBS0QsU0FORCxNQU1PO0FBQ0xqQixVQUFBQSxNQUFNLENBQUNtQixPQUFQLEdBQWlCSCxPQUFPLENBQUNPLEtBQVIsQ0FBYyxDQUFkLEVBQWlCcEYsT0FBTyxDQUFDdUUsS0FBUixJQUFpQk0sT0FBTyxDQUFDUSxNQUExQyxDQUFqQjtBQUNBeEIsVUFBQUEsTUFBTSxDQUFDcUIsVUFBUCxHQUFvQmxGLE9BQU8sQ0FBQ29FLEtBQTVCO0FBQ0FQLFVBQUFBLE1BQU0sQ0FBQ3lCLFFBQVAsR0FBa0JULE9BQU8sQ0FBQ1EsTUFBMUI7QUFDQSxpQkFBT0UsT0FBTyxDQUFDQyxPQUFSLENBQWdCM0IsTUFBaEIsQ0FBUDtBQUNEO0FBQ0Y7O0FBRUQsVUFBTTRCLFlBQVksR0FBRyxLQUFLL0MsT0FBTCxDQUFhaUIsR0FBYixDQUFvQnRDLGNBQXBCLEVBQW9DdUMsSUFBcEMsQ0FBeUNrQixrQkFBekMsQ0FBckIsQ0E1QytFLENBOEMvRTs7QUFDQSxhQUFPVyxZQUFQO0FBQ0Q7QUFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7O3dCQWVJekYsTyxFQUFjNkMsUSxFQUE2QjtBQUM3QyxhQUFPLEtBQUs2QyxjQUFMLENBQW9CMUYsT0FBcEIsRUFBNkIsS0FBN0IsRUFBb0M2QyxRQUFwQyxDQUFQO0FBQ0Q7QUFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7OzJCQWVPN0MsTyxFQUFjNkMsUSxFQUE2QjtBQUNoRCxhQUFPLEtBQUs2QyxjQUFMLENBQW9CMUYsT0FBcEIsRUFBNkIsUUFBN0IsRUFBdUM2QyxRQUF2QyxDQUFQO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuIEBtb2R1bGUgUmVzdEFwaVxyXG5cclxuIFRoaXMgbW9kdWxlIHByZXNlbnRzIGEgaGlnaGVyLWxldmVsIEFQSSBmb3IgaW50ZXJhY3Rpbmcgd2l0aCByZXNvdXJjZXNcclxuIGluIHRoZSBSYWxseSBSRVNUIEFQSS5cclxuICovXHJcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCBSZXF1ZXN0IGZyb20gJy4vcmVxdWVzdCc7XHJcbmltcG9ydCB7IGNhbGxiYWNraWZ5IH0gZnJvbSAnLi91dGlsL2NhbGxiYWNraWZ5JztcclxuaW1wb3J0IHsgY2FsbGJhY2sgfSBmcm9tIFwiLi91dGlsL2NhbGxiYWNrXCI7XHJcbmltcG9ydCByZWZVdGlscyBmcm9tICcuL3V0aWwvcmVmJztcclxuaW1wb3J0IHBrZ0luZm8gZnJvbSAnLi4vcGFja2FnZS5qc29uJztcclxuaW1wb3J0IHsgR2V0UmVzdWx0LCBRdWVyeU9wdGlvbnMsIFF1ZXJ5UmVzdWx0IH0gZnJvbSAnLi90eXBpbmdzJztcclxuaW1wb3J0IFF1ZXJ5IGZyb20gJy4vdXRpbC9xdWVyeSc7XHJcbmltcG9ydCByZXF1ZXN0IGZyb20gJ3JlcXVlc3QnO1xyXG5cclxuY29uc3QgZGVmYXVsdFNlcnZlciA9ICdodHRwczovL3JhbGx5MS5yYWxseWRldi5jb20nO1xyXG5jb25zdCBkZWZhdWx0QXBpVmVyc2lvbiA9ICd2Mi4wJztcclxuXHJcbmludGVyZmFjZSBJUmVxdWVzdE9wdGlvbnMge1xyXG4gIHByb2plY3Q/OiBzdHJpbmcgfCBudWxsO1xyXG4gIHByb2plY3RTY29wZVVwPzogYm9vbGVhbjtcclxuICBwcm9qZWN0U2NvcGVEb3duPzogYm9vbGVhbjtcclxuICB3b3Jrc3BhY2U/OiBzdHJpbmcgfCBudWxsO1xyXG4gIGZldGNoPzogc3RyaW5nO1xyXG59XHJcblxyXG5mdW5jdGlvbiBvcHRpb25zVG9SZXF1ZXN0T3B0aW9ucyhvcHRpb25zOiBhbnkpOiByZXF1ZXN0LkNvcmVPcHRpb25zIHtcclxuICBjb25zdCBxczogSVJlcXVlc3RPcHRpb25zID0ge307XHJcbiAgaWYgKG9wdGlvbnMuc2NvcGUpIHtcclxuICAgIGlmIChvcHRpb25zLnNjb3BlLnByb2plY3QpIHtcclxuICAgICAgcXMucHJvamVjdCA9IHJlZlV0aWxzLmdldFJlbGF0aXZlKG9wdGlvbnMuc2NvcGUucHJvamVjdCk7XHJcbiAgICAgIGlmIChvcHRpb25zLnNjb3BlLmhhc093blByb3BlcnR5KCd1cCcpKSB7XHJcbiAgICAgICAgcXMucHJvamVjdFNjb3BlVXAgPSBvcHRpb25zLnNjb3BlLnVwO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChvcHRpb25zLnNjb3BlLmhhc093blByb3BlcnR5KCdkb3duJykpIHtcclxuICAgICAgICBxcy5wcm9qZWN0U2NvcGVEb3duID0gb3B0aW9ucy5zY29wZS5kb3duO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2UgaWYgKG9wdGlvbnMuc2NvcGUud29ya3NwYWNlKSB7XHJcbiAgICAgIHFzLndvcmtzcGFjZSA9IHJlZlV0aWxzLmdldFJlbGF0aXZlKG9wdGlvbnMuc2NvcGUud29ya3NwYWNlKTtcclxuICAgIH1cclxuICB9XHJcbiAgaWYgKF8uaXNBcnJheShvcHRpb25zLmZldGNoKSkge1xyXG4gICAgcXMuZmV0Y2ggPSBvcHRpb25zLmZldGNoLmpvaW4oJywnKTtcclxuICB9IGVsc2UgaWYgKF8uaXNTdHJpbmcob3B0aW9ucy5mZXRjaCkpIHtcclxuICAgIHFzLmZldGNoID0gb3B0aW9ucy5mZXRjaDtcclxuICB9XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBxczogcXNcclxuICB9O1xyXG59XHJcblxyXG4vKipcclxuICogQ29uZmlndXJhdGlvbiBvcHRpb25zIGZvciB0aGUgUkVTVCBjbGllbnQuXHJcbiAqL1xyXG5pbnRlcmZhY2UgSVJlc3RBcGlPcHRpb25zIHtcclxuICAvKipcclxuICAgKiBzZXJ2ZXIgZm9yIHRoZSBSYWxseSBBUEkgKGRlZmF1bHQ6IGh0dHBzOi8vcmFsbHkxLnJhbGx5ZGV2LmNvbSlcclxuICAgKi9cclxuICBzZXJ2ZXI/OiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIHRoZSBSYWxseSBSRVNUIEFQSSB2ZXJzaW9uIHRvIHVzZSBmb3IgcmVxdWVzdHMgKGRlZmF1bHQ6IHYyLjApXHJcbiAgICovXHJcbiAgYXBpVmVyc2lvbj86IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogdGhlIGFwaSBrZXkgdG8gdXNlIGZvciByZXF1ZXN0cyAoZGVmYXVsdDogUkFMTFlfQVBJX0tFWSBlbnYgdmFyaWFibGUpXHJcbiAgICovXHJcbiAgYXBpS2V5Pzogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBkZWZhdWx0IG9wdGlvbnMgZm9yIHRoZSByZXF1ZXN0OiBodHRwczovL2dpdGh1Yi5jb20vbWlrZWFsL3JlcXVlc3RcclxuICAgKi9cclxuICByZXF1ZXN0T3B0aW9ucz86IG9iamVjdDtcclxuXHJcbiAgdXNlck5hbWU/OiBzdHJpbmc7XHJcbiAgdXNlcj86IHN0cmluZztcclxuICBwYXNzd29yZD86IHN0cmluZztcclxuICBwYXNzPzogc3RyaW5nO1xyXG59XHJcbi8qKlxyXG4gVGhlIFJhbGx5IFJFU1QgQVBJIGNsaWVudFxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVzdEFwaSB7XHJcbiAgcHJpdmF0ZSByZXF1ZXN0OiBSZXF1ZXN0O1xyXG4gIC8qKlxyXG4gICAqIEBwYXJhbSBvcHRpb25zIChvcHRpb25hbCkgLSBvcHRpb25hbCBjb25maWcgZm9yIHRoZSBSRVNUIGNsaWVudFxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnM/OiBJUmVzdEFwaU9wdGlvbnMpIHtcclxuICAgIG9wdGlvbnMgPSBfLm1lcmdlKHtcclxuICAgICAgc2VydmVyOiBkZWZhdWx0U2VydmVyLFxyXG4gICAgICBhcGlWZXJzaW9uOiBkZWZhdWx0QXBpVmVyc2lvbixcclxuICAgICAgcmVxdWVzdE9wdGlvbnM6IHtcclxuICAgICAgICBqc29uOiB0cnVlLFxyXG4gICAgICAgIGd6aXA6IHRydWUsXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgJ1gtUmFsbHlJbnRlZ3JhdGlvbkxpYnJhcnknOiBgJHtwa2dJbmZvLmRlc2NyaXB0aW9ufSB2JHtwa2dJbmZvLnZlcnNpb259YCxcclxuICAgICAgICAgICdYLVJhbGx5SW50ZWdyYXRpb25OYW1lJzogcGtnSW5mby5kZXNjcmlwdGlvbixcclxuICAgICAgICAgICdYLVJhbGx5SW50ZWdyYXRpb25WZW5kb3InOiAnUmFsbHkgU29mdHdhcmUsIEluYy4nLFxyXG4gICAgICAgICAgJ1gtUmFsbHlJbnRlZ3JhdGlvblZlcnNpb24nOiBwa2dJbmZvLnZlcnNpb25cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sIG9wdGlvbnMpO1xyXG5cclxuICAgIGNvbnN0IGFwaUtleSA9IChvcHRpb25zICYmIG9wdGlvbnMuYXBpS2V5KSB8fCBwcm9jZXNzLmVudi5SQUxMWV9BUElfS0VZO1xyXG4gICAgaWYgKGFwaUtleSkge1xyXG4gICAgICBvcHRpb25zID0gXy5tZXJnZSh7XHJcbiAgICAgICAgcmVxdWVzdE9wdGlvbnM6IHtcclxuICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgenNlc3Npb25pZDogYXBpS2V5XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgamFyOiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgICAgfSwgb3B0aW9ucyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBvcHRpb25zID0gXy5tZXJnZSh7XHJcbiAgICAgICAgcmVxdWVzdE9wdGlvbnM6IHtcclxuICAgICAgICAgIGF1dGg6IHtcclxuICAgICAgICAgICAgdXNlcjogKG9wdGlvbnMgJiYgKG9wdGlvbnMudXNlciB8fCBvcHRpb25zLnVzZXJOYW1lKSkgfHwgcHJvY2Vzcy5lbnYuUkFMTFlfVVNFUk5BTUUsXHJcbiAgICAgICAgICAgIHBhc3M6IChvcHRpb25zICYmIChvcHRpb25zLnBhc3MgfHwgb3B0aW9ucy5wYXNzd29yZCkpIHx8IHByb2Nlc3MuZW52LlJBTExZX1BBU1NXT1JELFxyXG4gICAgICAgICAgICBzZW5kSW1tZWRpYXRlbHk6IGZhbHNlXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9LCBvcHRpb25zKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnJlcXVlc3QgPSBuZXcgUmVxdWVzdChvcHRpb25zKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY29sbGVjdGlvblBvc3Qob3B0aW9uczogYW55LCBvcGVyYXRpb246IHN0cmluZywgY2FsbGJhY2s6IGFueSk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0LnBvc3QoXHJcbiAgICAgIF8ubWVyZ2UoXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdXJsOiBgJHtyZWZVdGlscy5nZXRSZWxhdGl2ZShvcHRpb25zLnJlZil9LyR7b3B0aW9ucy5jb2xsZWN0aW9ufS8ke29wZXJhdGlvbn1gLFxyXG4gICAgICAgICAganNvbjoge0NvbGxlY3Rpb25JdGVtczogb3B0aW9ucy5kYXRhfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgb3B0aW9ucy5yZXF1ZXN0T3B0aW9ucyxcclxuICAgICAgICBvcHRpb25zVG9SZXF1ZXN0T3B0aW9ucyhvcHRpb25zKVxyXG4gICAgICApLFxyXG4gICAgICBjYWxsYmFja1xyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICBDcmVhdGUgYSBuZXcgb2JqZWN0XHJcbiAgIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zIC0gVGhlIGNyZWF0ZSBvcHRpb25zIChyZXF1aXJlZClcclxuICAgLSBAbWVtYmVyIHtzdHJpbmd9IHR5cGUgLSBUaGUgdHlwZSB0byBiZSBjcmVhdGVkLCBlLmcuIGRlZmVjdCwgaGllcmFyY2hpY2FscmVxdWlyZW1lbnQsIGV0Yy4gKHJlcXVpcmVkKVxyXG4gICAtIEBtZW1iZXIge29iamVjdH0gZGF0YSAtIEtleS92YWx1ZSBwYWlycyBvZiBkYXRhIHdpdGggd2hpY2ggdG8gcG9wdWxhdGUgdGhlIG5ldyBvYmplY3QgKHJlcXVpcmVkKVxyXG4gICAtIEBtZW1iZXIge29iamVjdH0gc2NvcGUgLSB0aGUgZGVmYXVsdCBzY29waW5nIHRvIHVzZS4gIGlmIG5vdCBzcGVjaWZpZWQgc2VydmVyIGRlZmF1bHQgd2lsbCBiZSB1c2VkLlxyXG4gICAtIEBtZW1iZXIge3JlZn0gc2NvcGUud29ya3NwYWNlIC0gdGhlIHdvcmtzcGFjZVxyXG4gICAtIEBtZW1iZXIge3N0cmluZy9zdHJpbmdbXX0gZmV0Y2ggLSB0aGUgZmllbGRzIHRvIGluY2x1ZGUgb24gdGhlIHJldHVybmVkIHJlY29yZFxyXG4gICAtIEBtZW1iZXIge29iamVjdH0gcmVxdWVzdE9wdGlvbnMgLSBBZGRpdGlvbmFsIG9wdGlvbnMgdG8gYmUgYXBwbGllZCB0byB0aGUgcmVxdWVzdDogaHR0cHM6Ly9naXRodWIuY29tL21pa2VhbC9yZXF1ZXN0IChvcHRpb25hbClcclxuICAgQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2sgLSBBIGNhbGxiYWNrIHRvIGJlIGNhbGxlZCB3aGVuIHRoZSBvcGVyYXRpb24gY29tcGxldGVzXHJcbiAgIC0gQHBhcmFtIHtzdHJpbmdbXX0gZXJyb3JzIC0gQW55IGVycm9ycyB3aGljaCBvY2N1cnJlZFxyXG4gICAtIEBwYXJhbSB7b2JqZWN0fSByZXN1bHQgLSB0aGUgb3BlcmF0aW9uIHJlc3VsdFxyXG4gICBAcmV0dXJuIHtwcm9taXNlfVxyXG4gICAqL1xyXG4gIGNyZWF0ZShvcHRpb25zOiBhbnksIGNhbGxiYWNrOiBhbnkpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgY29uc3QgcG9zdEJvZHk6IGFueSA9IHt9O1xyXG4gICAgcG9zdEJvZHlbb3B0aW9ucy50eXBlXSA9IG9wdGlvbnMuZGF0YTtcclxuICAgIHJldHVybiB0aGlzLnJlcXVlc3QucG9zdChcclxuICAgICAgXy5tZXJnZShcclxuICAgICAgICB7XHJcbiAgICAgICAgICB1cmw6IGAvJHtvcHRpb25zLnR5cGV9L2NyZWF0ZWAsXHJcbiAgICAgICAgICBqc29uOiBwb3N0Qm9keVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgb3B0aW9ucy5yZXF1ZXN0T3B0aW9ucyxcclxuICAgICAgICBvcHRpb25zVG9SZXF1ZXN0T3B0aW9ucyhvcHRpb25zKVxyXG4gICAgICApLFxyXG4gICAgICBjYWxsYmFja1xyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICBVcGRhdGUgYW4gb2JqZWN0XHJcbiAgIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zIC0gVGhlIHVwZGF0ZSBvcHRpb25zIChyZXF1aXJlZClcclxuICAgLSBAbWVtYmVyIHtzdHJpbmd9IHJlZiAtIFRoZSByZWYgb2YgdGhlIG9iamVjdCB0byB1cGRhdGUsIGUuZy4gL2RlZmVjdC8xMjM0NSAocmVxdWlyZWQpXHJcbiAgIC0gQG1lbWJlciB7b2JqZWN0fSBkYXRhIC0gS2V5L3ZhbHVlIHBhaXJzIG9mIGRhdGEgd2l0aCB3aGljaCB0byB1cGRhdGUgb2JqZWN0IChyZXF1aXJlZClcclxuICAgLSBAbWVtYmVyIHtvYmplY3R9IHNjb3BlIC0gdGhlIGRlZmF1bHQgc2NvcGluZyB0byB1c2UuICBpZiBub3Qgc3BlY2lmaWVkIHNlcnZlciBkZWZhdWx0IHdpbGwgYmUgdXNlZC5cclxuICAgLSBAbWVtYmVyIHtyZWZ9IHNjb3BlLndvcmtzcGFjZSAtIHRoZSB3b3Jrc3BhY2VcclxuICAgLSBAbWVtYmVyIHtzdHJpbmcvc3RyaW5nW119IGZldGNoIC0gdGhlIGZpZWxkcyB0byBpbmNsdWRlIG9uIHRoZSByZXR1cm5lZCByZWNvcmRcclxuICAgLSBAbWVtYmVyIHtvYmplY3R9IHJlcXVlc3RPcHRpb25zIC0gQWRkaXRpb25hbCBvcHRpb25zIHRvIGJlIGFwcGxpZWQgdG8gdGhlIHJlcXVlc3Q6IGh0dHBzOi8vZ2l0aHViLmNvbS9taWtlYWwvcmVxdWVzdCAob3B0aW9uYWwpXHJcbiAgIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrIC0gQSBjYWxsYmFjayB0byBiZSBjYWxsZWQgd2hlbiB0aGUgb3BlcmF0aW9uIGNvbXBsZXRlc1xyXG4gICAtIEBwYXJhbSB7c3RyaW5nW119IGVycm9ycyAtIEFueSBlcnJvcnMgd2hpY2ggb2NjdXJyZWRcclxuICAgLSBAcGFyYW0ge29iamVjdH0gcmVzdWx0IC0gdGhlIG9wZXJhdGlvbiByZXN1bHRcclxuICAgQHJldHVybiB7cHJvbWlzZX1cclxuICAgKi9cclxuICB1cGRhdGUob3B0aW9uczogYW55LCBjYWxsYmFjazogYW55KTogUHJvbWlzZTxhbnk+IHtcclxuICAgIGNvbnN0IHBvc3RCb2R5OiBhbnkgPSB7fTtcclxuICAgIHBvc3RCb2R5W3JlZlV0aWxzLmdldFR5cGUob3B0aW9ucy5yZWYpXSA9IG9wdGlvbnMuZGF0YTtcclxuICAgIHJldHVybiB0aGlzLnJlcXVlc3QucHV0KFxyXG4gICAgICBfLm1lcmdlKFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHVybDogcmVmVXRpbHMuZ2V0UmVsYXRpdmUob3B0aW9ucy5yZWYpLFxyXG4gICAgICAgICAganNvbjogcG9zdEJvZHlcclxuICAgICAgICB9LFxyXG4gICAgICAgIG9wdGlvbnMucmVxdWVzdE9wdGlvbnMsXHJcbiAgICAgICAgb3B0aW9uc1RvUmVxdWVzdE9wdGlvbnMob3B0aW9ucylcclxuICAgICAgKSxcclxuICAgICAgY2FsbGJhY2tcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgRGVsZXRlIGFuIG9iamVjdFxyXG4gICBAcGFyYW0ge29iamVjdH0gb3B0aW9ucyAtIFRoZSBkZWxldGUgb3B0aW9ucyAocmVxdWlyZWQpXHJcbiAgIC0gQG1lbWJlciB7c3RyaW5nfSByZWYgLSBUaGUgcmVmIG9mIHRoZSBvYmplY3QgdG8gZGVsZXRlLCBlLmcuIC9kZWZlY3QvMTIzNFxyXG4gICAtIEBtZW1iZXIge29iamVjdH0gc2NvcGUgLSB0aGUgZGVmYXVsdCBzY29waW5nIHRvIHVzZS4gIGlmIG5vdCBzcGVjaWZpZWQgc2VydmVyIGRlZmF1bHQgd2lsbCBiZSB1c2VkLlxyXG4gICAtIEBtZW1iZXIge3JlZn0gc2NvcGUud29ya3NwYWNlIC0gdGhlIHdvcmtzcGFjZVxyXG4gICAtIEBtZW1iZXIge29iamVjdH0gcmVxdWVzdE9wdGlvbnMgLSBBZGRpdGlvbmFsIG9wdGlvbnMgdG8gYmUgYXBwbGllZCB0byB0aGUgcmVxdWVzdDogaHR0cHM6Ly9naXRodWIuY29tL21pa2VhbC9yZXF1ZXN0IChvcHRpb25hbClcclxuICAgQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2sgLSBBIGNhbGxiYWNrIHRvIGJlIGNhbGxlZCB3aGVuIHRoZSBvcGVyYXRpb24gY29tcGxldGVzXHJcbiAgIC0gQHBhcmFtIHtzdHJpbmdbXX0gZXJyb3JzIC0gQW55IGVycm9ycyB3aGljaCBvY2N1cnJlZFxyXG4gICAtIEBwYXJhbSB7b2JqZWN0fSByZXN1bHQgLSB0aGUgb3BlcmF0aW9uIHJlc3VsdFxyXG4gICBAcmV0dXJuIHtwcm9taXNlfVxyXG4gICAqL1xyXG4gIGRlbChvcHRpb25zOiBhbnksIGNhbGxiYWNrOiBhbnkpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdC5kZWwoXHJcbiAgICAgIF8ubWVyZ2UoXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdXJsOiByZWZVdGlscy5nZXRSZWxhdGl2ZShvcHRpb25zLnJlZilcclxuICAgICAgICB9LFxyXG4gICAgICAgIG9wdGlvbnMucmVxdWVzdE9wdGlvbnMsXHJcbiAgICAgICAgb3B0aW9uc1RvUmVxdWVzdE9wdGlvbnMob3B0aW9ucylcclxuICAgICAgKSxcclxuICAgICAgY2FsbGJhY2tcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBHZXQgYW4gb2JqZWN0XHJcbiAgICogQHBhcmFtIG9wdGlvbnMgW3JlcXVpcmVkXSBUaGUgZ2V0IG9wdGlvbnNcclxuICAgKiBAcGFyYW0gY2IgW29wdGlvbmFsXSBBIGNhbGxiYWNrIHdoZW4gdGhlIG9wZXJhdGlvbiBjb21wbGV0ZXNcclxuICAgKi9cclxuICBnZXQ8VD4ob3B0aW9uczogYW55LCBjYj86IGNhbGxiYWNrPEdldFJlc3VsdDxUPj4pOiBQcm9taXNlPEdldFJlc3VsdDxUPj4ge1xyXG4gICAgY29uc3QgZ2V0UHJvbWlzZSA9IHRoaXMucmVxdWVzdC5nZXQ8R2V0UmVzdWx0PFQ+PihcclxuICAgICAgXy5tZXJnZShcclxuICAgICAgICB7XHJcbiAgICAgICAgICB1cmw6IHJlZlV0aWxzLmdldFJlbGF0aXZlKG9wdGlvbnMucmVmKVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgb3B0aW9ucy5yZXF1ZXN0T3B0aW9ucyxcclxuICAgICAgICBvcHRpb25zVG9SZXF1ZXN0T3B0aW9ucyhvcHRpb25zKVxyXG4gICAgICApXHJcbiAgICApLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgRXJyb3JzOiByZXN1bHQuRXJyb3JzLFxyXG4gICAgICAgIFdhcm5pbmdzOiByZXN1bHQuV2FybmluZ3MsXHJcbiAgICAgICAgT2JqZWN0OiAoXy5vbWl0KHJlc3VsdCwgWydFcnJvcnMnLCAnV2FybmluZ3MnXSkgYXMgdW5rbm93bikgYXMgVFxyXG4gICAgICB9O1xyXG4gICAgfSk7XHJcblxyXG4gICAgY2FsbGJhY2tpZnkoZ2V0UHJvbWlzZSwgY2IpO1xyXG4gICAgcmV0dXJuIGdldFByb21pc2U7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgUXVlcnkgZm9yIG9iamVjdHNcclxuICAgQHBhcmFtIG9wdGlvbnMgLSBUaGUgcXVlcnkgb3B0aW9uc1xyXG4gICBAcGFyYW0gY2FsbGJhY2sgLSBBIGNhbGxiYWNrIHRvIGJlIGNhbGxlZCB3aGVuIHRoZSBvcGVyYXRpb24gY29tcGxldGVzXHJcbiAgICovXHJcbiAgcXVlcnk8VD4ob3B0aW9uczogUXVlcnlPcHRpb25zLCBjYWxsYmFjaz86IGNhbGxiYWNrPFQ+KTogUHJvbWlzZTxRdWVyeVJlc3VsdDxUPj4ge1xyXG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7XHJcbiAgICBjb25zdCBwYWdlU2l6ZURlZmF1bHQgPSAyMDA7XHJcbiAgICBvcHRpb25zID0gXy5tZXJnZSh7XHJcbiAgICAgIHN0YXJ0OiAxLFxyXG4gICAgICBwYWdlU2l6ZTogcGFnZVNpemVEZWZhdWx0XHJcbiAgICB9LCBvcHRpb25zKTtcclxuXHJcbiAgICBjb25zdCByZXF1ZXN0T3B0aW9ucyA9IF8ubWVyZ2Uoe1xyXG4gICAgICB1cmw6IHJlZlV0aWxzLmdldFJlbGF0aXZlKG9wdGlvbnMucmVmKSB8fCBgLyR7b3B0aW9ucy50eXBlfWAsXHJcbiAgICAgIHFzOiB7XHJcbiAgICAgICAgc3RhcnQ6IG9wdGlvbnMuc3RhcnQsXHJcbiAgICAgICAgcGFnZXNpemU6IG9wdGlvbnMubGltaXQgPyBNYXRoLm1pbihvcHRpb25zLnBhZ2VTaXplIHx8IHBhZ2VTaXplRGVmYXVsdCwgb3B0aW9ucy5saW1pdCkgOiBvcHRpb25zLnBhZ2VTaXplXHJcbiAgICAgIH1cclxuICAgIH0sIG9wdGlvbnMucmVxdWVzdE9wdGlvbnMsIG9wdGlvbnNUb1JlcXVlc3RPcHRpb25zKG9wdGlvbnMpKSBhcyByZXF1ZXN0LlVybE9wdGlvbnMgJiByZXF1ZXN0LkNvcmVPcHRpb25zO1xyXG4gICAgaWYgKF8uaXNBcnJheShvcHRpb25zLm9yZGVyKSkge1xyXG4gICAgICByZXF1ZXN0T3B0aW9ucy5xcy5vcmRlciA9IG9wdGlvbnMub3JkZXIuam9pbignLCcpO1xyXG4gICAgfSBlbHNlIGlmIChfLmlzU3RyaW5nKG9wdGlvbnMub3JkZXIpKSB7XHJcbiAgICAgIHJlcXVlc3RPcHRpb25zLnFzLm9yZGVyID0gb3B0aW9ucy5vcmRlcjtcclxuICAgIH1cclxuICAgIGlmIChvcHRpb25zLnF1ZXJ5KSB7XHJcbiAgICAgIHJlcXVlc3RPcHRpb25zLnFzLnF1ZXJ5ID0gKChvcHRpb25zLnF1ZXJ5IGFzIFF1ZXJ5KSAmJlxyXG4gICAgICAgICAgKG9wdGlvbnMucXVlcnkgYXMgUXVlcnkpLnRvUXVlcnlTdHJpbmcoKSkgfHwgb3B0aW9ucy5xdWVyeTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgcmVzdWx0czogVFtdID0gW107XHJcblxyXG4gICAgZnVuY3Rpb24gbG9hZFJlbWFpbmluZ1BhZ2VzKHJlc3VsdDogYW55KTogUHJvbWlzZTxRdWVyeVJlc3VsdDxUPj4ge1xyXG4gICAgICBjb25zdCBwYWdlUmVzdWx0cyA9IHJlc3VsdC5SZXN1bHRzO1xyXG4gICAgICByZXN1bHRzID0gcmVzdWx0cy5jb25jYXQocGFnZVJlc3VsdHMpO1xyXG4gICAgICBpZiAob3B0aW9ucy5saW1pdCAmJiByZXN1bHQuU3RhcnRJbmRleCArIG9wdGlvbnMucGFnZVNpemUgPD0gTWF0aC5taW4ob3B0aW9ucy5saW1pdCB8fCBvcHRpb25zLnBhZ2VTaXplIHx8IHBhZ2VTaXplRGVmYXVsdCwgcmVzdWx0LlRvdGFsUmVzdWx0Q291bnQpKSB7XHJcbiAgICAgICAgcmV0dXJuIHNlbGYucmVxdWVzdC5nZXQ8VD4oXy5tZXJnZShyZXF1ZXN0T3B0aW9ucywge1xyXG4gICAgICAgICAgcXM6IHtcclxuICAgICAgICAgICAgc3RhcnQ6IHJlc3VsdC5TdGFydEluZGV4ICsgb3B0aW9ucy5wYWdlU2l6ZVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pIGFzIHJlcXVlc3QuVXJsT3B0aW9ucykudGhlbihsb2FkUmVtYWluaW5nUGFnZXMpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJlc3VsdC5SZXN1bHRzID0gcmVzdWx0cy5zbGljZSgwLCBvcHRpb25zLmxpbWl0IHx8IHJlc3VsdHMubGVuZ3RoKTtcclxuICAgICAgICByZXN1bHQuU3RhcnRJbmRleCA9IG9wdGlvbnMuc3RhcnQ7XHJcbiAgICAgICAgcmVzdWx0LlBhZ2VTaXplID0gcmVzdWx0cy5sZW5ndGg7XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShyZXN1bHQpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcXVlcnlQcm9taXNlID0gdGhpcy5yZXF1ZXN0LmdldDxUPihyZXF1ZXN0T3B0aW9ucykudGhlbihsb2FkUmVtYWluaW5nUGFnZXMpO1xyXG5cclxuICAgIC8vY2FsbGJhY2tpZnkocXVlcnlQcm9taXNlLCBjYWxsYmFjayk7XHJcbiAgICByZXR1cm4gcXVlcnlQcm9taXNlO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgIEFkZHMgaXRlbXMgdG8gYSBjb2xsZWN0aW9uXHJcbiAgIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zIC0gVGhlIGFkZCBvcHRpb25zIChyZXF1aXJlZClcclxuICAgLSBAbWVtYmVyIHtzdHJpbmd9IHJlZiAtIFRoZSByZWYgb2YgdGhlIGNvbGxlY3Rpb24gdG8gdXBkYXRlLCBlLmcuIC91c2VyLzEyMzQ1IChyZXF1aXJlZClcclxuICAgLSBAbWVtYmVyIHtzdHJpbmd9IGNvbGxlY3Rpb24gLSBUaGUgbmFtZSBvZiB0aGUgY29sbGVjdGlvbiB0byB1cGRhdGUsIGUuZy4gJ1RlYW1NZW1iZXJzaGlwcyAocmVxdWlyZWQpXHJcbiAgIC0gQG1lbWJlciB7b2JqZWN0fSBkYXRhIC0gW3tfcmVmOiBvYmplY3RSZWZ9LCB7TmFtZTpcIkpvZVwifV0sIHRoaW5ncyB0byBiZSBhZGRlZCB0byB0aGUgY29sbGVjdGlvbiAocmVxdWlyZWQpXHJcbiAgIC0gQG1lbWJlciB7c3RyaW5nL3N0cmluZ1tdfSBmZXRjaCAtIHRoZSBmaWVsZHMgdG8gaW5jbHVkZSBvbiB0aGUgcmV0dXJuZWQgcmVjb3Jkc1xyXG4gICAtIEBtZW1iZXIge29iamVjdH0gc2NvcGUgLSB0aGUgZGVmYXVsdCBzY29waW5nIHRvIHVzZS4gIGlmIG5vdCBzcGVjaWZpZWQgc2VydmVyIGRlZmF1bHQgd2lsbCBiZSB1c2VkLlxyXG4gICAtIEBtZW1iZXIge3JlZn0gc2NvcGUud29ya3NwYWNlIC0gdGhlIHdvcmtzcGFjZVxyXG4gICAtIEBtZW1iZXIge29iamVjdH0gcmVxdWVzdE9wdGlvbnMgLSBBZGRpdGlvbmFsIG9wdGlvbnMgdG8gYmUgYXBwbGllZCB0byB0aGUgcmVxdWVzdDogaHR0cHM6Ly9naXRodWIuY29tL21pa2VhbC9yZXF1ZXN0IChvcHRpb25hbClcclxuICAgQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2sgLSBBIGNhbGxiYWNrIHRvIGJlIGNhbGxlZCB3aGVuIHRoZSBvcGVyYXRpb24gY29tcGxldGVzXHJcbiAgIC0gQHBhcmFtIHtzdHJpbmdbXX0gZXJyb3JzIC0gQW55IGVycm9ycyB3aGljaCBvY2N1cnJlZFxyXG4gICAtIEBwYXJhbSB7b2JqZWN0fSByZXN1bHQgLSB0aGUgb3BlcmF0aW9uIHJlc3VsdFxyXG4gICBAcmV0dXJuIHtwcm9taXNlfVxyXG4gICAqL1xyXG4gIGFkZChvcHRpb25zOiBhbnksIGNhbGxiYWNrOiBhbnkpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuIHRoaXMuY29sbGVjdGlvblBvc3Qob3B0aW9ucywgJ2FkZCcsIGNhbGxiYWNrKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICBSZW1vdmUgaXRlbXMgZnJvbSBhIGNvbGxlY3Rpb25cclxuICAgQHBhcmFtIHtvYmplY3R9IG9wdGlvbnMgLSBUaGUgcmVtb3ZlIG9wdGlvbnMgKHJlcXVpcmVkKVxyXG4gICAtIEBtZW1iZXIge3N0cmluZ30gcmVmIC0gVGhlIHJlZiBvZiB0aGUgY29sbGVjdGlvbiB0byB1cGRhdGUsIGUuZy4gL3VzZXIvMTIzNDUgKHJlcXVpcmVkKVxyXG4gICAtIEBtZW1iZXIge3N0cmluZ30gY29sbGVjdGlvbiAtIFRoZSBuYW1lIG9mIHRoZSBjb2xsZWN0aW9uIHRvIHVwZGF0ZSwgZS5nLiAnVGVhbU1lbWJlcnNoaXBzIChyZXF1aXJlZClcclxuICAgLSBAbWVtYmVyIHtvYmplY3R9IGRhdGEgLSBbe19yZWY6IG9iamVjdFJlZn1dLCB3aGVyZSB0aGUgb2JqZWN0UmVmcyBhcmUgdG8gYmUgcmVtb3ZlZCBmcm9tIHRoZSBjb2xsZWN0aW9uIChyZXF1aXJlZClcclxuICAgLSBAbWVtYmVyIHtzdHJpbmcvc3RyaW5nW119IGZldGNoIC0gdGhlIGZpZWxkcyB0byBpbmNsdWRlIG9uIHRoZSByZXR1cm5lZCByZWNvcmRzXHJcbiAgIC0gQG1lbWJlciB7b2JqZWN0fSBzY29wZSAtIHRoZSBkZWZhdWx0IHNjb3BpbmcgdG8gdXNlLiAgaWYgbm90IHNwZWNpZmllZCBzZXJ2ZXIgZGVmYXVsdCB3aWxsIGJlIHVzZWQuXHJcbiAgIC0gQG1lbWJlciB7cmVmfSBzY29wZS53b3Jrc3BhY2UgLSB0aGUgd29ya3NwYWNlXHJcbiAgIC0gQG1lbWJlciB7b2JqZWN0fSByZXF1ZXN0T3B0aW9ucyAtIEFkZGl0aW9uYWwgb3B0aW9ucyB0byBiZSBhcHBsaWVkIHRvIHRoZSByZXF1ZXN0OiBodHRwczovL2dpdGh1Yi5jb20vbWlrZWFsL3JlcXVlc3QgKG9wdGlvbmFsKVxyXG4gICBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFjayAtIEEgY2FsbGJhY2sgdG8gYmUgY2FsbGVkIHdoZW4gdGhlIG9wZXJhdGlvbiBjb21wbGV0ZXNcclxuICAgLSBAcGFyYW0ge3N0cmluZ1tdfSBlcnJvcnMgLSBBbnkgZXJyb3JzIHdoaWNoIG9jY3VycmVkXHJcbiAgIC0gQHBhcmFtIHtvYmplY3R9IHJlc3VsdCAtIHRoZSBvcGVyYXRpb24gcmVzdWx0XHJcbiAgIEByZXR1cm4ge3Byb21pc2V9XHJcbiAgICovXHJcbiAgcmVtb3ZlKG9wdGlvbnM6IGFueSwgY2FsbGJhY2s6IGFueSk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm4gdGhpcy5jb2xsZWN0aW9uUG9zdChvcHRpb25zLCAncmVtb3ZlJywgY2FsbGJhY2spO1xyXG4gIH1cclxufVxyXG4iXX0=