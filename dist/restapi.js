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

var _callbackify = _interopRequireDefault(require("./util/callbackify"));

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
      (0, _callbackify["default"])(getPromise, cb);
      return getPromise;
    }
    /**
     Query for objects
     @param {object} options - The query options (required)
     - @member {string} ref - The ref of the collection to query, e.g. /defect/12345/tasks (required if type not specified)
     - @member {string} type - The type to query, e.g. defect, hierarchicalrequirement (required if ref not specified)
     - @member {object} scope - the default scoping to use.  if not specified server default will be used.
     - @member {ref} scope.workspace - the workspace
     - @member {ref} scope.project - the project, or null to include entire workspace
     - @member {ref} scope.up - true to include parent project data, false otherwise
     - @member {ref} scope.down - true to include child project data, false otherwise
     - @member {int} start - the 1 based start index
     - @member {int} pageSize - the page size, 1 - 200 (default=200)
     - @member {int} limit - the maximum number of records to return
     - @member {string/string[]} fetch - the fields to include on each returned record
     - @member {string/string[]} order - the order by which to sort the results
     - @member {string/query} query - a query to filter the result set
     - @member {object} requestOptions - Additional options to be applied to the request: https://github.com/mikeal/request (optional)
     @param {function} callback - A callback to be called when the operation completes
     - @param {string[]} errors - Any errors which occurred
     - @param {object} result - the operation result
     @return {promise}
     */

  }, {
    key: "query",
    value: function query(options, callback) {
      var self = this;
      options = _lodash["default"].merge({
        start: 1,
        pageSize: 200
      }, options);

      var requestOptions = _lodash["default"].merge({
        url: _ref["default"].getRelative(options.ref) || "/".concat(options.type),
        qs: {
          start: options.start,
          pagesize: options.limit ? Math.min(options.pageSize, options.limit) : options.pageSize
        }
      }, options.requestOptions, optionsToRequestOptions(options));

      if (_lodash["default"].isArray(options.order)) {
        requestOptions.qs.order = options.order.join(',');
      } else if (_lodash["default"].isString(options.order)) {
        requestOptions.qs.order = options.order;
      }

      if (options.query) {
        requestOptions.qs.query = options.query.toQueryString && options.query.toQueryString() || options.query;
      }

      var results = [];

      function loadRemainingPages(result) {
        var pageResults = result.Results;
        results = results.concat(pageResults);

        if (options.limit && result.StartIndex + options.pageSize <= Math.min(options.limit || options.pageSize, result.TotalResultCount)) {
          return self.request.get(_lodash["default"].merge(requestOptions, {
            qs: {
              start: result.StartIndex + options.pageSize
            }
          })).then(loadRemainingPages);
        } else {
          result.Results = results.slice(0, options.limit || results.length);
          result.StartIndex = options.start;
          result.PageSize = results.length;
          return result;
        }
      }

      var queryPromise = this.request.get(requestOptions).then(loadRemainingPages);
      (0, _callbackify["default"])(queryPromise, callback);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZXN0YXBpLnRzIl0sIm5hbWVzIjpbImRlZmF1bHRTZXJ2ZXIiLCJkZWZhdWx0QXBpVmVyc2lvbiIsIm9wdGlvbnNUb1JlcXVlc3RPcHRpb25zIiwib3B0aW9ucyIsInFzIiwic2NvcGUiLCJwcm9qZWN0IiwicmVmVXRpbHMiLCJnZXRSZWxhdGl2ZSIsImhhc093blByb3BlcnR5IiwicHJvamVjdFNjb3BlVXAiLCJ1cCIsInByb2plY3RTY29wZURvd24iLCJkb3duIiwid29ya3NwYWNlIiwiXyIsImlzQXJyYXkiLCJmZXRjaCIsImpvaW4iLCJpc1N0cmluZyIsIlJlc3RBcGkiLCJtZXJnZSIsInNlcnZlciIsImFwaVZlcnNpb24iLCJyZXF1ZXN0T3B0aW9ucyIsImpzb24iLCJnemlwIiwiaGVhZGVycyIsInBrZ0luZm8iLCJkZXNjcmlwdGlvbiIsInZlcnNpb24iLCJhcGlLZXkiLCJwcm9jZXNzIiwiZW52IiwiUkFMTFlfQVBJX0tFWSIsInpzZXNzaW9uaWQiLCJqYXIiLCJhdXRoIiwidXNlciIsInVzZXJOYW1lIiwiUkFMTFlfVVNFUk5BTUUiLCJwYXNzIiwicGFzc3dvcmQiLCJSQUxMWV9QQVNTV09SRCIsInNlbmRJbW1lZGlhdGVseSIsInJlcXVlc3QiLCJSZXF1ZXN0Iiwib3BlcmF0aW9uIiwiY2FsbGJhY2siLCJwb3N0IiwidXJsIiwicmVmIiwiY29sbGVjdGlvbiIsIkNvbGxlY3Rpb25JdGVtcyIsImRhdGEiLCJwb3N0Qm9keSIsInR5cGUiLCJnZXRUeXBlIiwicHV0IiwiZGVsIiwiY2IiLCJnZXRQcm9taXNlIiwiZ2V0IiwidGhlbiIsInJlc3VsdCIsIkVycm9ycyIsIldhcm5pbmdzIiwiT2JqZWN0Iiwib21pdCIsInNlbGYiLCJzdGFydCIsInBhZ2VTaXplIiwicGFnZXNpemUiLCJsaW1pdCIsIk1hdGgiLCJtaW4iLCJvcmRlciIsInF1ZXJ5IiwidG9RdWVyeVN0cmluZyIsInJlc3VsdHMiLCJsb2FkUmVtYWluaW5nUGFnZXMiLCJwYWdlUmVzdWx0cyIsIlJlc3VsdHMiLCJjb25jYXQiLCJTdGFydEluZGV4IiwiVG90YWxSZXN1bHRDb3VudCIsInNsaWNlIiwibGVuZ3RoIiwiUGFnZVNpemUiLCJxdWVyeVByb21pc2UiLCJjb2xsZWN0aW9uUG9zdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBTUE7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBWEE7Ozs7OztBQWNBLElBQU1BLGFBQWEsR0FBRyw2QkFBdEI7QUFDQSxJQUFNQyxpQkFBaUIsR0FBRyxNQUExQjs7QUFhQSxTQUFTQyx1QkFBVCxDQUFpQ0MsT0FBakMsRUFBeUU7QUFDdkUsTUFBTUMsRUFBbUIsR0FBRyxFQUE1Qjs7QUFDQSxNQUFJRCxPQUFPLENBQUNFLEtBQVosRUFBbUI7QUFDakIsUUFBSUYsT0FBTyxDQUFDRSxLQUFSLENBQWNDLE9BQWxCLEVBQTJCO0FBQ3pCRixNQUFBQSxFQUFFLENBQUNFLE9BQUgsR0FBYUMsZ0JBQVNDLFdBQVQsQ0FBcUJMLE9BQU8sQ0FBQ0UsS0FBUixDQUFjQyxPQUFuQyxDQUFiOztBQUNBLFVBQUlILE9BQU8sQ0FBQ0UsS0FBUixDQUFjSSxjQUFkLENBQTZCLElBQTdCLENBQUosRUFBd0M7QUFDdENMLFFBQUFBLEVBQUUsQ0FBQ00sY0FBSCxHQUFvQlAsT0FBTyxDQUFDRSxLQUFSLENBQWNNLEVBQWxDO0FBQ0Q7O0FBQ0QsVUFBSVIsT0FBTyxDQUFDRSxLQUFSLENBQWNJLGNBQWQsQ0FBNkIsTUFBN0IsQ0FBSixFQUEwQztBQUN4Q0wsUUFBQUEsRUFBRSxDQUFDUSxnQkFBSCxHQUFzQlQsT0FBTyxDQUFDRSxLQUFSLENBQWNRLElBQXBDO0FBQ0Q7QUFDRixLQVJELE1BUU8sSUFBSVYsT0FBTyxDQUFDRSxLQUFSLENBQWNTLFNBQWxCLEVBQTZCO0FBQ2xDVixNQUFBQSxFQUFFLENBQUNVLFNBQUgsR0FBZVAsZ0JBQVNDLFdBQVQsQ0FBcUJMLE9BQU8sQ0FBQ0UsS0FBUixDQUFjUyxTQUFuQyxDQUFmO0FBQ0Q7QUFDRjs7QUFD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QUFiLENBQWlCdEMsY0FBakIsRUFBaUN1QyxJQUFqQyxDQUFzQ2lCLGtCQUF0QyxDQUFyQjtBQUVBLG1DQUFZUyxZQUFaLEVBQTBCekMsUUFBMUI7QUFDQSxhQUFPeUMsWUFBUDtBQUNEO0FBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt3QkFlSXRGLE8sRUFBYzZDLFEsRUFBNkI7QUFDN0MsYUFBTyxLQUFLMEMsY0FBTCxDQUFvQnZGLE9BQXBCLEVBQTZCLEtBQTdCLEVBQW9DNkMsUUFBcEMsQ0FBUDtBQUNEO0FBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7OzsyQkFlTzdDLE8sRUFBYzZDLFEsRUFBNkI7QUFDaEQsYUFBTyxLQUFLMEMsY0FBTCxDQUFvQnZGLE9BQXBCLEVBQTZCLFFBQTdCLEVBQXVDNkMsUUFBdkMsQ0FBUDtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiBAbW9kdWxlIFJlc3RBcGlcclxuXHJcbiBUaGlzIG1vZHVsZSBwcmVzZW50cyBhIGhpZ2hlci1sZXZlbCBBUEkgZm9yIGludGVyYWN0aW5nIHdpdGggcmVzb3VyY2VzXHJcbiBpbiB0aGUgUmFsbHkgUkVTVCBBUEkuXHJcbiAqL1xyXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgUmVxdWVzdCBmcm9tICcuL3JlcXVlc3QnO1xyXG5pbXBvcnQgY2FsbGJhY2tpZnkgZnJvbSAnLi91dGlsL2NhbGxiYWNraWZ5JztcclxuaW1wb3J0IHsgY2FsbGJhY2sgfSBmcm9tIFwiLi91dGlsL2NhbGxiYWNrXCI7XHJcbmltcG9ydCByZWZVdGlscyBmcm9tICcuL3V0aWwvcmVmJztcclxuaW1wb3J0IHBrZ0luZm8gZnJvbSAnLi4vcGFja2FnZS5qc29uJztcclxuaW1wb3J0IHsgR2V0UmVzdWx0IH0gZnJvbSAnLi90eXBpbmdzJztcclxuXHJcbmNvbnN0IGRlZmF1bHRTZXJ2ZXIgPSAnaHR0cHM6Ly9yYWxseTEucmFsbHlkZXYuY29tJztcclxuY29uc3QgZGVmYXVsdEFwaVZlcnNpb24gPSAndjIuMCc7XHJcblxyXG5pbnRlcmZhY2UgSVJlcXVlc3RPcHRpb25zIHtcclxuICBwcm9qZWN0Pzogc3RyaW5nIHwgbnVsbDtcclxuICBwcm9qZWN0U2NvcGVVcD86IGJvb2xlYW47XHJcbiAgcHJvamVjdFNjb3BlRG93bj86IGJvb2xlYW47XHJcbiAgd29ya3NwYWNlPzogc3RyaW5nIHwgbnVsbDtcclxuICBmZXRjaD86IHN0cmluZztcclxufVxyXG5cclxuaW50ZXJmYWNlIElSZXF1ZXN0T3B0aW9uc0NvbnRhaW5lciB7XHJcbiAgcXM6IElSZXF1ZXN0T3B0aW9ucztcclxufVxyXG5mdW5jdGlvbiBvcHRpb25zVG9SZXF1ZXN0T3B0aW9ucyhvcHRpb25zOiBhbnkpOiBJUmVxdWVzdE9wdGlvbnNDb250YWluZXIge1xyXG4gIGNvbnN0IHFzOiBJUmVxdWVzdE9wdGlvbnMgPSB7fTtcclxuICBpZiAob3B0aW9ucy5zY29wZSkge1xyXG4gICAgaWYgKG9wdGlvbnMuc2NvcGUucHJvamVjdCkge1xyXG4gICAgICBxcy5wcm9qZWN0ID0gcmVmVXRpbHMuZ2V0UmVsYXRpdmUob3B0aW9ucy5zY29wZS5wcm9qZWN0KTtcclxuICAgICAgaWYgKG9wdGlvbnMuc2NvcGUuaGFzT3duUHJvcGVydHkoJ3VwJykpIHtcclxuICAgICAgICBxcy5wcm9qZWN0U2NvcGVVcCA9IG9wdGlvbnMuc2NvcGUudXA7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKG9wdGlvbnMuc2NvcGUuaGFzT3duUHJvcGVydHkoJ2Rvd24nKSkge1xyXG4gICAgICAgIHFzLnByb2plY3RTY29wZURvd24gPSBvcHRpb25zLnNjb3BlLmRvd247XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAob3B0aW9ucy5zY29wZS53b3Jrc3BhY2UpIHtcclxuICAgICAgcXMud29ya3NwYWNlID0gcmVmVXRpbHMuZ2V0UmVsYXRpdmUob3B0aW9ucy5zY29wZS53b3Jrc3BhY2UpO1xyXG4gICAgfVxyXG4gIH1cclxuICBpZiAoXy5pc0FycmF5KG9wdGlvbnMuZmV0Y2gpKSB7XHJcbiAgICBxcy5mZXRjaCA9IG9wdGlvbnMuZmV0Y2guam9pbignLCcpO1xyXG4gIH0gZWxzZSBpZiAoXy5pc1N0cmluZyhvcHRpb25zLmZldGNoKSkge1xyXG4gICAgcXMuZmV0Y2ggPSBvcHRpb25zLmZldGNoO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHFzOiBxc1xyXG4gIH07XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDb25maWd1cmF0aW9uIG9wdGlvbnMgZm9yIHRoZSBSRVNUIGNsaWVudC5cclxuICovXHJcbmludGVyZmFjZSBJUmVzdEFwaU9wdGlvbnMge1xyXG4gIC8qKlxyXG4gICAqIHNlcnZlciBmb3IgdGhlIFJhbGx5IEFQSSAoZGVmYXVsdDogaHR0cHM6Ly9yYWxseTEucmFsbHlkZXYuY29tKVxyXG4gICAqL1xyXG4gIHNlcnZlcj86IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogdGhlIFJhbGx5IFJFU1QgQVBJIHZlcnNpb24gdG8gdXNlIGZvciByZXF1ZXN0cyAoZGVmYXVsdDogdjIuMClcclxuICAgKi9cclxuICBhcGlWZXJzaW9uPzogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiB0aGUgYXBpIGtleSB0byB1c2UgZm9yIHJlcXVlc3RzIChkZWZhdWx0OiBSQUxMWV9BUElfS0VZIGVudiB2YXJpYWJsZSlcclxuICAgKi9cclxuICBhcGlLZXk/OiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIGRlZmF1bHQgb3B0aW9ucyBmb3IgdGhlIHJlcXVlc3Q6IGh0dHBzOi8vZ2l0aHViLmNvbS9taWtlYWwvcmVxdWVzdFxyXG4gICAqL1xyXG4gIHJlcXVlc3RPcHRpb25zPzogb2JqZWN0O1xyXG5cclxuICB1c2VyTmFtZT86IHN0cmluZztcclxuICB1c2VyPzogc3RyaW5nO1xyXG4gIHBhc3N3b3JkPzogc3RyaW5nO1xyXG4gIHBhc3M/OiBzdHJpbmc7XHJcbn1cclxuLyoqXHJcbiBUaGUgUmFsbHkgUkVTVCBBUEkgY2xpZW50XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXN0QXBpIHtcclxuICBwcml2YXRlIHJlcXVlc3Q6IFJlcXVlc3Q7XHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIG9wdGlvbnMgKG9wdGlvbmFsKSAtIG9wdGlvbmFsIGNvbmZpZyBmb3IgdGhlIFJFU1QgY2xpZW50XHJcbiAgICovXHJcbiAgY29uc3RydWN0b3Iob3B0aW9ucz86IElSZXN0QXBpT3B0aW9ucykge1xyXG4gICAgb3B0aW9ucyA9IF8ubWVyZ2Uoe1xyXG4gICAgICBzZXJ2ZXI6IGRlZmF1bHRTZXJ2ZXIsXHJcbiAgICAgIGFwaVZlcnNpb246IGRlZmF1bHRBcGlWZXJzaW9uLFxyXG4gICAgICByZXF1ZXN0T3B0aW9uczoge1xyXG4gICAgICAgIGpzb246IHRydWUsXHJcbiAgICAgICAgZ3ppcDogdHJ1ZSxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAnWC1SYWxseUludGVncmF0aW9uTGlicmFyeSc6IGAke3BrZ0luZm8uZGVzY3JpcHRpb259IHYke3BrZ0luZm8udmVyc2lvbn1gLFxyXG4gICAgICAgICAgJ1gtUmFsbHlJbnRlZ3JhdGlvbk5hbWUnOiBwa2dJbmZvLmRlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgJ1gtUmFsbHlJbnRlZ3JhdGlvblZlbmRvcic6ICdSYWxseSBTb2Z0d2FyZSwgSW5jLicsXHJcbiAgICAgICAgICAnWC1SYWxseUludGVncmF0aW9uVmVyc2lvbic6IHBrZ0luZm8udmVyc2lvblxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSwgb3B0aW9ucyk7XHJcblxyXG4gICAgY29uc3QgYXBpS2V5ID0gKG9wdGlvbnMgJiYgb3B0aW9ucy5hcGlLZXkpIHx8IHByb2Nlc3MuZW52LlJBTExZX0FQSV9LRVk7XHJcbiAgICBpZiAoYXBpS2V5KSB7XHJcbiAgICAgIG9wdGlvbnMgPSBfLm1lcmdlKHtcclxuICAgICAgICByZXF1ZXN0T3B0aW9uczoge1xyXG4gICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICB6c2Vzc2lvbmlkOiBhcGlLZXlcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBqYXI6IGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgICB9LCBvcHRpb25zKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIG9wdGlvbnMgPSBfLm1lcmdlKHtcclxuICAgICAgICByZXF1ZXN0T3B0aW9uczoge1xyXG4gICAgICAgICAgYXV0aDoge1xyXG4gICAgICAgICAgICB1c2VyOiAob3B0aW9ucyAmJiAob3B0aW9ucy51c2VyIHx8IG9wdGlvbnMudXNlck5hbWUpKSB8fCBwcm9jZXNzLmVudi5SQUxMWV9VU0VSTkFNRSxcclxuICAgICAgICAgICAgcGFzczogKG9wdGlvbnMgJiYgKG9wdGlvbnMucGFzcyB8fCBvcHRpb25zLnBhc3N3b3JkKSkgfHwgcHJvY2Vzcy5lbnYuUkFMTFlfUEFTU1dPUkQsXHJcbiAgICAgICAgICAgIHNlbmRJbW1lZGlhdGVseTogZmFsc2VcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0sIG9wdGlvbnMpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMucmVxdWVzdCA9IG5ldyBSZXF1ZXN0KG9wdGlvbnMpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjb2xsZWN0aW9uUG9zdChvcHRpb25zOiBhbnksIG9wZXJhdGlvbjogc3RyaW5nLCBjYWxsYmFjazogYW55KTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybiB0aGlzLnJlcXVlc3QucG9zdChcclxuICAgICAgXy5tZXJnZShcclxuICAgICAgICB7XHJcbiAgICAgICAgICB1cmw6IGAke3JlZlV0aWxzLmdldFJlbGF0aXZlKG9wdGlvbnMucmVmKX0vJHtvcHRpb25zLmNvbGxlY3Rpb259LyR7b3BlcmF0aW9ufWAsXHJcbiAgICAgICAgICBqc29uOiB7Q29sbGVjdGlvbkl0ZW1zOiBvcHRpb25zLmRhdGF9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBvcHRpb25zLnJlcXVlc3RPcHRpb25zLFxyXG4gICAgICAgIG9wdGlvbnNUb1JlcXVlc3RPcHRpb25zKG9wdGlvbnMpXHJcbiAgICAgICksXHJcbiAgICAgIGNhbGxiYWNrXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgIENyZWF0ZSBhIG5ldyBvYmplY3RcclxuICAgQHBhcmFtIHtvYmplY3R9IG9wdGlvbnMgLSBUaGUgY3JlYXRlIG9wdGlvbnMgKHJlcXVpcmVkKVxyXG4gICAtIEBtZW1iZXIge3N0cmluZ30gdHlwZSAtIFRoZSB0eXBlIHRvIGJlIGNyZWF0ZWQsIGUuZy4gZGVmZWN0LCBoaWVyYXJjaGljYWxyZXF1aXJlbWVudCwgZXRjLiAocmVxdWlyZWQpXHJcbiAgIC0gQG1lbWJlciB7b2JqZWN0fSBkYXRhIC0gS2V5L3ZhbHVlIHBhaXJzIG9mIGRhdGEgd2l0aCB3aGljaCB0byBwb3B1bGF0ZSB0aGUgbmV3IG9iamVjdCAocmVxdWlyZWQpXHJcbiAgIC0gQG1lbWJlciB7b2JqZWN0fSBzY29wZSAtIHRoZSBkZWZhdWx0IHNjb3BpbmcgdG8gdXNlLiAgaWYgbm90IHNwZWNpZmllZCBzZXJ2ZXIgZGVmYXVsdCB3aWxsIGJlIHVzZWQuXHJcbiAgIC0gQG1lbWJlciB7cmVmfSBzY29wZS53b3Jrc3BhY2UgLSB0aGUgd29ya3NwYWNlXHJcbiAgIC0gQG1lbWJlciB7c3RyaW5nL3N0cmluZ1tdfSBmZXRjaCAtIHRoZSBmaWVsZHMgdG8gaW5jbHVkZSBvbiB0aGUgcmV0dXJuZWQgcmVjb3JkXHJcbiAgIC0gQG1lbWJlciB7b2JqZWN0fSByZXF1ZXN0T3B0aW9ucyAtIEFkZGl0aW9uYWwgb3B0aW9ucyB0byBiZSBhcHBsaWVkIHRvIHRoZSByZXF1ZXN0OiBodHRwczovL2dpdGh1Yi5jb20vbWlrZWFsL3JlcXVlc3QgKG9wdGlvbmFsKVxyXG4gICBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFjayAtIEEgY2FsbGJhY2sgdG8gYmUgY2FsbGVkIHdoZW4gdGhlIG9wZXJhdGlvbiBjb21wbGV0ZXNcclxuICAgLSBAcGFyYW0ge3N0cmluZ1tdfSBlcnJvcnMgLSBBbnkgZXJyb3JzIHdoaWNoIG9jY3VycmVkXHJcbiAgIC0gQHBhcmFtIHtvYmplY3R9IHJlc3VsdCAtIHRoZSBvcGVyYXRpb24gcmVzdWx0XHJcbiAgIEByZXR1cm4ge3Byb21pc2V9XHJcbiAgICovXHJcbiAgY3JlYXRlKG9wdGlvbnM6IGFueSwgY2FsbGJhY2s6IGFueSk6IFByb21pc2U8YW55PiB7XHJcbiAgICBjb25zdCBwb3N0Qm9keTogYW55ID0ge307XHJcbiAgICBwb3N0Qm9keVtvcHRpb25zLnR5cGVdID0gb3B0aW9ucy5kYXRhO1xyXG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdC5wb3N0KFxyXG4gICAgICBfLm1lcmdlKFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHVybDogYC8ke29wdGlvbnMudHlwZX0vY3JlYXRlYCxcclxuICAgICAgICAgIGpzb246IHBvc3RCb2R5XHJcbiAgICAgICAgfSxcclxuICAgICAgICBvcHRpb25zLnJlcXVlc3RPcHRpb25zLFxyXG4gICAgICAgIG9wdGlvbnNUb1JlcXVlc3RPcHRpb25zKG9wdGlvbnMpXHJcbiAgICAgICksXHJcbiAgICAgIGNhbGxiYWNrXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgIFVwZGF0ZSBhbiBvYmplY3RcclxuICAgQHBhcmFtIHtvYmplY3R9IG9wdGlvbnMgLSBUaGUgdXBkYXRlIG9wdGlvbnMgKHJlcXVpcmVkKVxyXG4gICAtIEBtZW1iZXIge3N0cmluZ30gcmVmIC0gVGhlIHJlZiBvZiB0aGUgb2JqZWN0IHRvIHVwZGF0ZSwgZS5nLiAvZGVmZWN0LzEyMzQ1IChyZXF1aXJlZClcclxuICAgLSBAbWVtYmVyIHtvYmplY3R9IGRhdGEgLSBLZXkvdmFsdWUgcGFpcnMgb2YgZGF0YSB3aXRoIHdoaWNoIHRvIHVwZGF0ZSBvYmplY3QgKHJlcXVpcmVkKVxyXG4gICAtIEBtZW1iZXIge29iamVjdH0gc2NvcGUgLSB0aGUgZGVmYXVsdCBzY29waW5nIHRvIHVzZS4gIGlmIG5vdCBzcGVjaWZpZWQgc2VydmVyIGRlZmF1bHQgd2lsbCBiZSB1c2VkLlxyXG4gICAtIEBtZW1iZXIge3JlZn0gc2NvcGUud29ya3NwYWNlIC0gdGhlIHdvcmtzcGFjZVxyXG4gICAtIEBtZW1iZXIge3N0cmluZy9zdHJpbmdbXX0gZmV0Y2ggLSB0aGUgZmllbGRzIHRvIGluY2x1ZGUgb24gdGhlIHJldHVybmVkIHJlY29yZFxyXG4gICAtIEBtZW1iZXIge29iamVjdH0gcmVxdWVzdE9wdGlvbnMgLSBBZGRpdGlvbmFsIG9wdGlvbnMgdG8gYmUgYXBwbGllZCB0byB0aGUgcmVxdWVzdDogaHR0cHM6Ly9naXRodWIuY29tL21pa2VhbC9yZXF1ZXN0IChvcHRpb25hbClcclxuICAgQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2sgLSBBIGNhbGxiYWNrIHRvIGJlIGNhbGxlZCB3aGVuIHRoZSBvcGVyYXRpb24gY29tcGxldGVzXHJcbiAgIC0gQHBhcmFtIHtzdHJpbmdbXX0gZXJyb3JzIC0gQW55IGVycm9ycyB3aGljaCBvY2N1cnJlZFxyXG4gICAtIEBwYXJhbSB7b2JqZWN0fSByZXN1bHQgLSB0aGUgb3BlcmF0aW9uIHJlc3VsdFxyXG4gICBAcmV0dXJuIHtwcm9taXNlfVxyXG4gICAqL1xyXG4gIHVwZGF0ZShvcHRpb25zOiBhbnksIGNhbGxiYWNrOiBhbnkpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgY29uc3QgcG9zdEJvZHk6IGFueSA9IHt9O1xyXG4gICAgcG9zdEJvZHlbcmVmVXRpbHMuZ2V0VHlwZShvcHRpb25zLnJlZildID0gb3B0aW9ucy5kYXRhO1xyXG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdC5wdXQoXHJcbiAgICAgIF8ubWVyZ2UoXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdXJsOiByZWZVdGlscy5nZXRSZWxhdGl2ZShvcHRpb25zLnJlZiksXHJcbiAgICAgICAgICBqc29uOiBwb3N0Qm9keVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgb3B0aW9ucy5yZXF1ZXN0T3B0aW9ucyxcclxuICAgICAgICBvcHRpb25zVG9SZXF1ZXN0T3B0aW9ucyhvcHRpb25zKVxyXG4gICAgICApLFxyXG4gICAgICBjYWxsYmFja1xyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICBEZWxldGUgYW4gb2JqZWN0XHJcbiAgIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zIC0gVGhlIGRlbGV0ZSBvcHRpb25zIChyZXF1aXJlZClcclxuICAgLSBAbWVtYmVyIHtzdHJpbmd9IHJlZiAtIFRoZSByZWYgb2YgdGhlIG9iamVjdCB0byBkZWxldGUsIGUuZy4gL2RlZmVjdC8xMjM0XHJcbiAgIC0gQG1lbWJlciB7b2JqZWN0fSBzY29wZSAtIHRoZSBkZWZhdWx0IHNjb3BpbmcgdG8gdXNlLiAgaWYgbm90IHNwZWNpZmllZCBzZXJ2ZXIgZGVmYXVsdCB3aWxsIGJlIHVzZWQuXHJcbiAgIC0gQG1lbWJlciB7cmVmfSBzY29wZS53b3Jrc3BhY2UgLSB0aGUgd29ya3NwYWNlXHJcbiAgIC0gQG1lbWJlciB7b2JqZWN0fSByZXF1ZXN0T3B0aW9ucyAtIEFkZGl0aW9uYWwgb3B0aW9ucyB0byBiZSBhcHBsaWVkIHRvIHRoZSByZXF1ZXN0OiBodHRwczovL2dpdGh1Yi5jb20vbWlrZWFsL3JlcXVlc3QgKG9wdGlvbmFsKVxyXG4gICBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFjayAtIEEgY2FsbGJhY2sgdG8gYmUgY2FsbGVkIHdoZW4gdGhlIG9wZXJhdGlvbiBjb21wbGV0ZXNcclxuICAgLSBAcGFyYW0ge3N0cmluZ1tdfSBlcnJvcnMgLSBBbnkgZXJyb3JzIHdoaWNoIG9jY3VycmVkXHJcbiAgIC0gQHBhcmFtIHtvYmplY3R9IHJlc3VsdCAtIHRoZSBvcGVyYXRpb24gcmVzdWx0XHJcbiAgIEByZXR1cm4ge3Byb21pc2V9XHJcbiAgICovXHJcbiAgZGVsKG9wdGlvbnM6IGFueSwgY2FsbGJhY2s6IGFueSk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0LmRlbChcclxuICAgICAgXy5tZXJnZShcclxuICAgICAgICB7XHJcbiAgICAgICAgICB1cmw6IHJlZlV0aWxzLmdldFJlbGF0aXZlKG9wdGlvbnMucmVmKVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgb3B0aW9ucy5yZXF1ZXN0T3B0aW9ucyxcclxuICAgICAgICBvcHRpb25zVG9SZXF1ZXN0T3B0aW9ucyhvcHRpb25zKVxyXG4gICAgICApLFxyXG4gICAgICBjYWxsYmFja1xyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEdldCBhbiBvYmplY3RcclxuICAgKiBAcGFyYW0gb3B0aW9ucyBbcmVxdWlyZWRdIFRoZSBnZXQgb3B0aW9uc1xyXG4gICAqIEBwYXJhbSBjYiBbb3B0aW9uYWxdIEEgY2FsbGJhY2sgd2hlbiB0aGUgb3BlcmF0aW9uIGNvbXBsZXRlc1xyXG4gICAqL1xyXG4gIGdldDxUPihvcHRpb25zOiBhbnksIGNiPzogY2FsbGJhY2s8R2V0UmVzdWx0PFQ+Pik6IFByb21pc2U8R2V0UmVzdWx0PFQ+PiB7XHJcbiAgICBjb25zdCBnZXRQcm9taXNlID0gdGhpcy5yZXF1ZXN0LmdldDxHZXRSZXN1bHQ8VD4+KFxyXG4gICAgICBfLm1lcmdlKFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHVybDogcmVmVXRpbHMuZ2V0UmVsYXRpdmUob3B0aW9ucy5yZWYpXHJcbiAgICAgICAgfSxcclxuICAgICAgICBvcHRpb25zLnJlcXVlc3RPcHRpb25zLFxyXG4gICAgICAgIG9wdGlvbnNUb1JlcXVlc3RPcHRpb25zKG9wdGlvbnMpXHJcbiAgICAgIClcclxuICAgICkudGhlbihmdW5jdGlvbihyZXN1bHQpIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBFcnJvcnM6IHJlc3VsdC5FcnJvcnMsXHJcbiAgICAgICAgV2FybmluZ3M6IHJlc3VsdC5XYXJuaW5ncyxcclxuICAgICAgICBPYmplY3Q6IChfLm9taXQocmVzdWx0LCBbJ0Vycm9ycycsICdXYXJuaW5ncyddKSBhcyB1bmtub3duKSBhcyBUXHJcbiAgICAgIH07XHJcbiAgICB9KTtcclxuXHJcbiAgICBjYWxsYmFja2lmeShnZXRQcm9taXNlLCBjYik7XHJcbiAgICByZXR1cm4gZ2V0UHJvbWlzZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICBRdWVyeSBmb3Igb2JqZWN0c1xyXG4gICBAcGFyYW0ge29iamVjdH0gb3B0aW9ucyAtIFRoZSBxdWVyeSBvcHRpb25zIChyZXF1aXJlZClcclxuICAgLSBAbWVtYmVyIHtzdHJpbmd9IHJlZiAtIFRoZSByZWYgb2YgdGhlIGNvbGxlY3Rpb24gdG8gcXVlcnksIGUuZy4gL2RlZmVjdC8xMjM0NS90YXNrcyAocmVxdWlyZWQgaWYgdHlwZSBub3Qgc3BlY2lmaWVkKVxyXG4gICAtIEBtZW1iZXIge3N0cmluZ30gdHlwZSAtIFRoZSB0eXBlIHRvIHF1ZXJ5LCBlLmcuIGRlZmVjdCwgaGllcmFyY2hpY2FscmVxdWlyZW1lbnQgKHJlcXVpcmVkIGlmIHJlZiBub3Qgc3BlY2lmaWVkKVxyXG4gICAtIEBtZW1iZXIge29iamVjdH0gc2NvcGUgLSB0aGUgZGVmYXVsdCBzY29waW5nIHRvIHVzZS4gIGlmIG5vdCBzcGVjaWZpZWQgc2VydmVyIGRlZmF1bHQgd2lsbCBiZSB1c2VkLlxyXG4gICAtIEBtZW1iZXIge3JlZn0gc2NvcGUud29ya3NwYWNlIC0gdGhlIHdvcmtzcGFjZVxyXG4gICAtIEBtZW1iZXIge3JlZn0gc2NvcGUucHJvamVjdCAtIHRoZSBwcm9qZWN0LCBvciBudWxsIHRvIGluY2x1ZGUgZW50aXJlIHdvcmtzcGFjZVxyXG4gICAtIEBtZW1iZXIge3JlZn0gc2NvcGUudXAgLSB0cnVlIHRvIGluY2x1ZGUgcGFyZW50IHByb2plY3QgZGF0YSwgZmFsc2Ugb3RoZXJ3aXNlXHJcbiAgIC0gQG1lbWJlciB7cmVmfSBzY29wZS5kb3duIC0gdHJ1ZSB0byBpbmNsdWRlIGNoaWxkIHByb2plY3QgZGF0YSwgZmFsc2Ugb3RoZXJ3aXNlXHJcbiAgIC0gQG1lbWJlciB7aW50fSBzdGFydCAtIHRoZSAxIGJhc2VkIHN0YXJ0IGluZGV4XHJcbiAgIC0gQG1lbWJlciB7aW50fSBwYWdlU2l6ZSAtIHRoZSBwYWdlIHNpemUsIDEgLSAyMDAgKGRlZmF1bHQ9MjAwKVxyXG4gICAtIEBtZW1iZXIge2ludH0gbGltaXQgLSB0aGUgbWF4aW11bSBudW1iZXIgb2YgcmVjb3JkcyB0byByZXR1cm5cclxuICAgLSBAbWVtYmVyIHtzdHJpbmcvc3RyaW5nW119IGZldGNoIC0gdGhlIGZpZWxkcyB0byBpbmNsdWRlIG9uIGVhY2ggcmV0dXJuZWQgcmVjb3JkXHJcbiAgIC0gQG1lbWJlciB7c3RyaW5nL3N0cmluZ1tdfSBvcmRlciAtIHRoZSBvcmRlciBieSB3aGljaCB0byBzb3J0IHRoZSByZXN1bHRzXHJcbiAgIC0gQG1lbWJlciB7c3RyaW5nL3F1ZXJ5fSBxdWVyeSAtIGEgcXVlcnkgdG8gZmlsdGVyIHRoZSByZXN1bHQgc2V0XHJcbiAgIC0gQG1lbWJlciB7b2JqZWN0fSByZXF1ZXN0T3B0aW9ucyAtIEFkZGl0aW9uYWwgb3B0aW9ucyB0byBiZSBhcHBsaWVkIHRvIHRoZSByZXF1ZXN0OiBodHRwczovL2dpdGh1Yi5jb20vbWlrZWFsL3JlcXVlc3QgKG9wdGlvbmFsKVxyXG4gICBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFjayAtIEEgY2FsbGJhY2sgdG8gYmUgY2FsbGVkIHdoZW4gdGhlIG9wZXJhdGlvbiBjb21wbGV0ZXNcclxuICAgLSBAcGFyYW0ge3N0cmluZ1tdfSBlcnJvcnMgLSBBbnkgZXJyb3JzIHdoaWNoIG9jY3VycmVkXHJcbiAgIC0gQHBhcmFtIHtvYmplY3R9IHJlc3VsdCAtIHRoZSBvcGVyYXRpb24gcmVzdWx0XHJcbiAgIEByZXR1cm4ge3Byb21pc2V9XHJcbiAgICovXHJcbiAgcXVlcnkob3B0aW9uczogYW55LCBjYWxsYmFjazogYW55KTogUHJvbWlzZTxhbnk+IHtcclxuICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xyXG4gICAgb3B0aW9ucyA9IF8ubWVyZ2Uoe1xyXG4gICAgICBzdGFydDogMSxcclxuICAgICAgcGFnZVNpemU6IDIwMFxyXG4gICAgfSwgb3B0aW9ucyk7XHJcblxyXG4gICAgY29uc3QgcmVxdWVzdE9wdGlvbnMgPSBfLm1lcmdlKHtcclxuICAgICAgdXJsOiByZWZVdGlscy5nZXRSZWxhdGl2ZShvcHRpb25zLnJlZikgfHwgYC8ke29wdGlvbnMudHlwZX1gLFxyXG4gICAgICBxczoge1xyXG4gICAgICAgIHN0YXJ0OiBvcHRpb25zLnN0YXJ0LFxyXG4gICAgICAgIHBhZ2VzaXplOiBvcHRpb25zLmxpbWl0ID8gTWF0aC5taW4ob3B0aW9ucy5wYWdlU2l6ZSwgb3B0aW9ucy5saW1pdCkgOiBvcHRpb25zLnBhZ2VTaXplXHJcbiAgICAgIH1cclxuICAgIH0sIG9wdGlvbnMucmVxdWVzdE9wdGlvbnMsIG9wdGlvbnNUb1JlcXVlc3RPcHRpb25zKG9wdGlvbnMpKTtcclxuICAgIGlmIChfLmlzQXJyYXkob3B0aW9ucy5vcmRlcikpIHtcclxuICAgICAgcmVxdWVzdE9wdGlvbnMucXMub3JkZXIgPSBvcHRpb25zLm9yZGVyLmpvaW4oJywnKTtcclxuICAgIH0gZWxzZSBpZiAoXy5pc1N0cmluZyhvcHRpb25zLm9yZGVyKSkge1xyXG4gICAgICByZXF1ZXN0T3B0aW9ucy5xcy5vcmRlciA9IG9wdGlvbnMub3JkZXI7XHJcbiAgICB9XHJcbiAgICBpZiAob3B0aW9ucy5xdWVyeSkge1xyXG4gICAgICByZXF1ZXN0T3B0aW9ucy5xcy5xdWVyeSA9IChvcHRpb25zLnF1ZXJ5LnRvUXVlcnlTdHJpbmcgJiZcclxuICAgICAgICAgIG9wdGlvbnMucXVlcnkudG9RdWVyeVN0cmluZygpKSB8fCBvcHRpb25zLnF1ZXJ5O1xyXG4gICAgfVxyXG5cclxuICAgIGxldCByZXN1bHRzOiBhbnlbXSA9IFtdO1xyXG5cclxuICAgIGZ1bmN0aW9uIGxvYWRSZW1haW5pbmdQYWdlcyhyZXN1bHQ6IGFueSk6IGFueSB7XHJcbiAgICAgIGNvbnN0IHBhZ2VSZXN1bHRzID0gcmVzdWx0LlJlc3VsdHM7XHJcbiAgICAgIHJlc3VsdHMgPSByZXN1bHRzLmNvbmNhdChwYWdlUmVzdWx0cyk7XHJcbiAgICAgIGlmIChvcHRpb25zLmxpbWl0ICYmIHJlc3VsdC5TdGFydEluZGV4ICsgb3B0aW9ucy5wYWdlU2l6ZSA8PSBNYXRoLm1pbihvcHRpb25zLmxpbWl0IHx8IG9wdGlvbnMucGFnZVNpemUsIHJlc3VsdC5Ub3RhbFJlc3VsdENvdW50KSkge1xyXG4gICAgICAgIHJldHVybiBzZWxmLnJlcXVlc3QuZ2V0KF8ubWVyZ2UocmVxdWVzdE9wdGlvbnMsIHtcclxuICAgICAgICAgIHFzOiB7XHJcbiAgICAgICAgICAgIHN0YXJ0OiByZXN1bHQuU3RhcnRJbmRleCArIG9wdGlvbnMucGFnZVNpemVcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KSkudGhlbihsb2FkUmVtYWluaW5nUGFnZXMpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJlc3VsdC5SZXN1bHRzID0gcmVzdWx0cy5zbGljZSgwLCBvcHRpb25zLmxpbWl0IHx8IHJlc3VsdHMubGVuZ3RoKTtcclxuICAgICAgICByZXN1bHQuU3RhcnRJbmRleCA9IG9wdGlvbnMuc3RhcnQ7XHJcbiAgICAgICAgcmVzdWx0LlBhZ2VTaXplID0gcmVzdWx0cy5sZW5ndGg7XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHF1ZXJ5UHJvbWlzZSA9IHRoaXMucmVxdWVzdC5nZXQocmVxdWVzdE9wdGlvbnMpLnRoZW4obG9hZFJlbWFpbmluZ1BhZ2VzKTtcclxuXHJcbiAgICBjYWxsYmFja2lmeShxdWVyeVByb21pc2UsIGNhbGxiYWNrKTtcclxuICAgIHJldHVybiBxdWVyeVByb21pc2U7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgQWRkcyBpdGVtcyB0byBhIGNvbGxlY3Rpb25cclxuICAgQHBhcmFtIHtvYmplY3R9IG9wdGlvbnMgLSBUaGUgYWRkIG9wdGlvbnMgKHJlcXVpcmVkKVxyXG4gICAtIEBtZW1iZXIge3N0cmluZ30gcmVmIC0gVGhlIHJlZiBvZiB0aGUgY29sbGVjdGlvbiB0byB1cGRhdGUsIGUuZy4gL3VzZXIvMTIzNDUgKHJlcXVpcmVkKVxyXG4gICAtIEBtZW1iZXIge3N0cmluZ30gY29sbGVjdGlvbiAtIFRoZSBuYW1lIG9mIHRoZSBjb2xsZWN0aW9uIHRvIHVwZGF0ZSwgZS5nLiAnVGVhbU1lbWJlcnNoaXBzIChyZXF1aXJlZClcclxuICAgLSBAbWVtYmVyIHtvYmplY3R9IGRhdGEgLSBbe19yZWY6IG9iamVjdFJlZn0sIHtOYW1lOlwiSm9lXCJ9XSwgdGhpbmdzIHRvIGJlIGFkZGVkIHRvIHRoZSBjb2xsZWN0aW9uIChyZXF1aXJlZClcclxuICAgLSBAbWVtYmVyIHtzdHJpbmcvc3RyaW5nW119IGZldGNoIC0gdGhlIGZpZWxkcyB0byBpbmNsdWRlIG9uIHRoZSByZXR1cm5lZCByZWNvcmRzXHJcbiAgIC0gQG1lbWJlciB7b2JqZWN0fSBzY29wZSAtIHRoZSBkZWZhdWx0IHNjb3BpbmcgdG8gdXNlLiAgaWYgbm90IHNwZWNpZmllZCBzZXJ2ZXIgZGVmYXVsdCB3aWxsIGJlIHVzZWQuXHJcbiAgIC0gQG1lbWJlciB7cmVmfSBzY29wZS53b3Jrc3BhY2UgLSB0aGUgd29ya3NwYWNlXHJcbiAgIC0gQG1lbWJlciB7b2JqZWN0fSByZXF1ZXN0T3B0aW9ucyAtIEFkZGl0aW9uYWwgb3B0aW9ucyB0byBiZSBhcHBsaWVkIHRvIHRoZSByZXF1ZXN0OiBodHRwczovL2dpdGh1Yi5jb20vbWlrZWFsL3JlcXVlc3QgKG9wdGlvbmFsKVxyXG4gICBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFjayAtIEEgY2FsbGJhY2sgdG8gYmUgY2FsbGVkIHdoZW4gdGhlIG9wZXJhdGlvbiBjb21wbGV0ZXNcclxuICAgLSBAcGFyYW0ge3N0cmluZ1tdfSBlcnJvcnMgLSBBbnkgZXJyb3JzIHdoaWNoIG9jY3VycmVkXHJcbiAgIC0gQHBhcmFtIHtvYmplY3R9IHJlc3VsdCAtIHRoZSBvcGVyYXRpb24gcmVzdWx0XHJcbiAgIEByZXR1cm4ge3Byb21pc2V9XHJcbiAgICovXHJcbiAgYWRkKG9wdGlvbnM6IGFueSwgY2FsbGJhY2s6IGFueSk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm4gdGhpcy5jb2xsZWN0aW9uUG9zdChvcHRpb25zLCAnYWRkJywgY2FsbGJhY2spO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgIFJlbW92ZSBpdGVtcyBmcm9tIGEgY29sbGVjdGlvblxyXG4gICBAcGFyYW0ge29iamVjdH0gb3B0aW9ucyAtIFRoZSByZW1vdmUgb3B0aW9ucyAocmVxdWlyZWQpXHJcbiAgIC0gQG1lbWJlciB7c3RyaW5nfSByZWYgLSBUaGUgcmVmIG9mIHRoZSBjb2xsZWN0aW9uIHRvIHVwZGF0ZSwgZS5nLiAvdXNlci8xMjM0NSAocmVxdWlyZWQpXHJcbiAgIC0gQG1lbWJlciB7c3RyaW5nfSBjb2xsZWN0aW9uIC0gVGhlIG5hbWUgb2YgdGhlIGNvbGxlY3Rpb24gdG8gdXBkYXRlLCBlLmcuICdUZWFtTWVtYmVyc2hpcHMgKHJlcXVpcmVkKVxyXG4gICAtIEBtZW1iZXIge29iamVjdH0gZGF0YSAtIFt7X3JlZjogb2JqZWN0UmVmfV0sIHdoZXJlIHRoZSBvYmplY3RSZWZzIGFyZSB0byBiZSByZW1vdmVkIGZyb20gdGhlIGNvbGxlY3Rpb24gKHJlcXVpcmVkKVxyXG4gICAtIEBtZW1iZXIge3N0cmluZy9zdHJpbmdbXX0gZmV0Y2ggLSB0aGUgZmllbGRzIHRvIGluY2x1ZGUgb24gdGhlIHJldHVybmVkIHJlY29yZHNcclxuICAgLSBAbWVtYmVyIHtvYmplY3R9IHNjb3BlIC0gdGhlIGRlZmF1bHQgc2NvcGluZyB0byB1c2UuICBpZiBub3Qgc3BlY2lmaWVkIHNlcnZlciBkZWZhdWx0IHdpbGwgYmUgdXNlZC5cclxuICAgLSBAbWVtYmVyIHtyZWZ9IHNjb3BlLndvcmtzcGFjZSAtIHRoZSB3b3Jrc3BhY2VcclxuICAgLSBAbWVtYmVyIHtvYmplY3R9IHJlcXVlc3RPcHRpb25zIC0gQWRkaXRpb25hbCBvcHRpb25zIHRvIGJlIGFwcGxpZWQgdG8gdGhlIHJlcXVlc3Q6IGh0dHBzOi8vZ2l0aHViLmNvbS9taWtlYWwvcmVxdWVzdCAob3B0aW9uYWwpXHJcbiAgIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrIC0gQSBjYWxsYmFjayB0byBiZSBjYWxsZWQgd2hlbiB0aGUgb3BlcmF0aW9uIGNvbXBsZXRlc1xyXG4gICAtIEBwYXJhbSB7c3RyaW5nW119IGVycm9ycyAtIEFueSBlcnJvcnMgd2hpY2ggb2NjdXJyZWRcclxuICAgLSBAcGFyYW0ge29iamVjdH0gcmVzdWx0IC0gdGhlIG9wZXJhdGlvbiByZXN1bHRcclxuICAgQHJldHVybiB7cHJvbWlzZX1cclxuICAgKi9cclxuICByZW1vdmUob3B0aW9uczogYW55LCBjYWxsYmFjazogYW55KTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybiB0aGlzLmNvbGxlY3Rpb25Qb3N0KG9wdGlvbnMsICdyZW1vdmUnLCBjYWxsYmFjayk7XHJcbiAgfVxyXG59XHJcbiJdfQ==