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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZXN0YXBpLnRzIl0sIm5hbWVzIjpbImRlZmF1bHRTZXJ2ZXIiLCJkZWZhdWx0QXBpVmVyc2lvbiIsIm9wdGlvbnNUb1JlcXVlc3RPcHRpb25zIiwib3B0aW9ucyIsInFzIiwic2NvcGUiLCJwcm9qZWN0IiwicmVmVXRpbHMiLCJnZXRSZWxhdGl2ZSIsImhhc093blByb3BlcnR5IiwicHJvamVjdFNjb3BlVXAiLCJ1cCIsInByb2plY3RTY29wZURvd24iLCJkb3duIiwid29ya3NwYWNlIiwiXyIsImlzQXJyYXkiLCJmZXRjaCIsImpvaW4iLCJpc1N0cmluZyIsIlJlc3RBcGkiLCJtZXJnZSIsInNlcnZlciIsImFwaVZlcnNpb24iLCJyZXF1ZXN0T3B0aW9ucyIsImpzb24iLCJnemlwIiwiaGVhZGVycyIsInBrZ0luZm8iLCJkZXNjcmlwdGlvbiIsInZlcnNpb24iLCJhcGlLZXkiLCJwcm9jZXNzIiwiZW52IiwiUkFMTFlfQVBJX0tFWSIsInpzZXNzaW9uaWQiLCJqYXIiLCJhdXRoIiwidXNlciIsInVzZXJOYW1lIiwiUkFMTFlfVVNFUk5BTUUiLCJwYXNzIiwicGFzc3dvcmQiLCJSQUxMWV9QQVNTV09SRCIsInNlbmRJbW1lZGlhdGVseSIsInJlcXVlc3QiLCJSZXF1ZXN0Iiwib3BlcmF0aW9uIiwiY2FsbGJhY2siLCJwb3N0IiwidXJsIiwicmVmIiwiY29sbGVjdGlvbiIsIkNvbGxlY3Rpb25JdGVtcyIsImRhdGEiLCJwb3N0Qm9keSIsInR5cGUiLCJnZXRUeXBlIiwicHV0IiwiZGVsIiwiY2IiLCJnZXRQcm9taXNlIiwiZ2V0IiwidGhlbiIsInJlc3VsdCIsIkVycm9ycyIsIldhcm5pbmdzIiwiT2JqZWN0Iiwib21pdCIsInNlbGYiLCJwYWdlU2l6ZURlZmF1bHQiLCJzdGFydCIsInBhZ2VTaXplIiwicGFnZXNpemUiLCJsaW1pdCIsIk1hdGgiLCJtaW4iLCJvcmRlciIsInF1ZXJ5IiwidG9RdWVyeVN0cmluZyIsInJlc3VsdHMiLCJsb2FkUmVtYWluaW5nUGFnZXMiLCJwYWdlUmVzdWx0cyIsIlJlc3VsdHMiLCJjb25jYXQiLCJTdGFydEluZGV4IiwiVG90YWxSZXN1bHRDb3VudCIsInNsaWNlIiwibGVuZ3RoIiwiUGFnZVNpemUiLCJxdWVyeVByb21pc2UiLCJjb2xsZWN0aW9uUG9zdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBTUE7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBWEE7Ozs7OztBQWdCQSxJQUFNQSxhQUFhLEdBQUcsNkJBQXRCO0FBQ0EsSUFBTUMsaUJBQWlCLEdBQUcsTUFBMUI7O0FBVUEsU0FBU0MsdUJBQVQsQ0FBaUNDLE9BQWpDLEVBQW9FO0FBQ2xFLE1BQU1DLEVBQW1CLEdBQUcsRUFBNUI7O0FBQ0EsTUFBSUQsT0FBTyxDQUFDRSxLQUFaLEVBQW1CO0FBQ2pCLFFBQUlGLE9BQU8sQ0FBQ0UsS0FBUixDQUFjQyxPQUFsQixFQUEyQjtBQUN6QkYsTUFBQUEsRUFBRSxDQUFDRSxPQUFILEdBQWFDLGdCQUFTQyxXQUFULENBQXFCTCxPQUFPLENBQUNFLEtBQVIsQ0FBY0MsT0FBbkMsQ0FBYjs7QUFDQSxVQUFJSCxPQUFPLENBQUNFLEtBQVIsQ0FBY0ksY0FBZCxDQUE2QixJQUE3QixDQUFKLEVBQXdDO0FBQ3RDTCxRQUFBQSxFQUFFLENBQUNNLGNBQUgsR0FBb0JQLE9BQU8sQ0FBQ0UsS0FBUixDQUFjTSxFQUFsQztBQUNEOztBQUNELFVBQUlSLE9BQU8sQ0FBQ0UsS0FBUixDQUFjSSxjQUFkLENBQTZCLE1BQTdCLENBQUosRUFBMEM7QUFDeENMLFFBQUFBLEVBQUUsQ0FBQ1EsZ0JBQUgsR0FBc0JULE9BQU8sQ0FBQ0UsS0FBUixDQUFjUSxJQUFwQztBQUNEO0FBQ0YsS0FSRCxNQVFPLElBQUlWLE9BQU8sQ0FBQ0UsS0FBUixDQUFjUyxTQUFsQixFQUE2QjtBQUNsQ1YsTUFBQUEsRUFBRSxDQUFDVSxTQUFILEdBQWVQLGdCQUFTQyxXQUFULENBQXFCTCxPQUFPLENBQUNFLEtBQVIsQ0FBY1MsU0FBbkMs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Q0Q7QUFDRjs7QUFFRCxVQUFNMEIsWUFBWSxHQUFHLEtBQUs3QyxPQUFMLENBQWFpQixHQUFiLENBQWlCdEMsY0FBakIsRUFBaUN1QyxJQUFqQyxDQUFzQ2tCLGtCQUF0QyxDQUFyQjtBQUVBLG1DQUFZUyxZQUFaLEVBQTBCMUMsUUFBMUI7QUFDQSxhQUFPMEMsWUFBUDtBQUNEO0FBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt3QkFlSXZGLE8sRUFBYzZDLFEsRUFBNkI7QUFDN0MsYUFBTyxLQUFLMkMsY0FBTCxDQUFvQnhGLE9BQXBCLEVBQTZCLEtBQTdCLEVBQW9DNkMsUUFBcEMsQ0FBUDtBQUNEO0FBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7OzsyQkFlTzdDLE8sRUFBYzZDLFEsRUFBNkI7QUFDaEQsYUFBTyxLQUFLMkMsY0FBTCxDQUFvQnhGLE9BQXBCLEVBQTZCLFFBQTdCLEVBQXVDNkMsUUFBdkMsQ0FBUDtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiBAbW9kdWxlIFJlc3RBcGlcclxuXHJcbiBUaGlzIG1vZHVsZSBwcmVzZW50cyBhIGhpZ2hlci1sZXZlbCBBUEkgZm9yIGludGVyYWN0aW5nIHdpdGggcmVzb3VyY2VzXHJcbiBpbiB0aGUgUmFsbHkgUkVTVCBBUEkuXHJcbiAqL1xyXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgUmVxdWVzdCBmcm9tICcuL3JlcXVlc3QnO1xyXG5pbXBvcnQgY2FsbGJhY2tpZnkgZnJvbSAnLi91dGlsL2NhbGxiYWNraWZ5JztcclxuaW1wb3J0IHsgY2FsbGJhY2sgfSBmcm9tIFwiLi91dGlsL2NhbGxiYWNrXCI7XHJcbmltcG9ydCByZWZVdGlscyBmcm9tICcuL3V0aWwvcmVmJztcclxuaW1wb3J0IHBrZ0luZm8gZnJvbSAnLi4vcGFja2FnZS5qc29uJztcclxuaW1wb3J0IHsgR2V0UmVzdWx0LCBRdWVyeU9wdGlvbnMgfSBmcm9tICcuL3R5cGluZ3MnO1xyXG5pbXBvcnQgUXVlcnkgZnJvbSAnLi91dGlsL3F1ZXJ5JztcclxuaW1wb3J0IHJlcXVlc3QgZnJvbSAncmVxdWVzdCc7XHJcblxyXG5jb25zdCBkZWZhdWx0U2VydmVyID0gJ2h0dHBzOi8vcmFsbHkxLnJhbGx5ZGV2LmNvbSc7XHJcbmNvbnN0IGRlZmF1bHRBcGlWZXJzaW9uID0gJ3YyLjAnO1xyXG5cclxuaW50ZXJmYWNlIElSZXF1ZXN0T3B0aW9ucyB7XHJcbiAgcHJvamVjdD86IHN0cmluZyB8IG51bGw7XHJcbiAgcHJvamVjdFNjb3BlVXA/OiBib29sZWFuO1xyXG4gIHByb2plY3RTY29wZURvd24/OiBib29sZWFuO1xyXG4gIHdvcmtzcGFjZT86IHN0cmluZyB8IG51bGw7XHJcbiAgZmV0Y2g/OiBzdHJpbmc7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG9wdGlvbnNUb1JlcXVlc3RPcHRpb25zKG9wdGlvbnM6IGFueSk6IHJlcXVlc3QuQ29yZU9wdGlvbnMge1xyXG4gIGNvbnN0IHFzOiBJUmVxdWVzdE9wdGlvbnMgPSB7fTtcclxuICBpZiAob3B0aW9ucy5zY29wZSkge1xyXG4gICAgaWYgKG9wdGlvbnMuc2NvcGUucHJvamVjdCkge1xyXG4gICAgICBxcy5wcm9qZWN0ID0gcmVmVXRpbHMuZ2V0UmVsYXRpdmUob3B0aW9ucy5zY29wZS5wcm9qZWN0KTtcclxuICAgICAgaWYgKG9wdGlvbnMuc2NvcGUuaGFzT3duUHJvcGVydHkoJ3VwJykpIHtcclxuICAgICAgICBxcy5wcm9qZWN0U2NvcGVVcCA9IG9wdGlvbnMuc2NvcGUudXA7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKG9wdGlvbnMuc2NvcGUuaGFzT3duUHJvcGVydHkoJ2Rvd24nKSkge1xyXG4gICAgICAgIHFzLnByb2plY3RTY29wZURvd24gPSBvcHRpb25zLnNjb3BlLmRvd247XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAob3B0aW9ucy5zY29wZS53b3Jrc3BhY2UpIHtcclxuICAgICAgcXMud29ya3NwYWNlID0gcmVmVXRpbHMuZ2V0UmVsYXRpdmUob3B0aW9ucy5zY29wZS53b3Jrc3BhY2UpO1xyXG4gICAgfVxyXG4gIH1cclxuICBpZiAoXy5pc0FycmF5KG9wdGlvbnMuZmV0Y2gpKSB7XHJcbiAgICBxcy5mZXRjaCA9IG9wdGlvbnMuZmV0Y2guam9pbignLCcpO1xyXG4gIH0gZWxzZSBpZiAoXy5pc1N0cmluZyhvcHRpb25zLmZldGNoKSkge1xyXG4gICAgcXMuZmV0Y2ggPSBvcHRpb25zLmZldGNoO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHFzOiBxc1xyXG4gIH07XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDb25maWd1cmF0aW9uIG9wdGlvbnMgZm9yIHRoZSBSRVNUIGNsaWVudC5cclxuICovXHJcbmludGVyZmFjZSBJUmVzdEFwaU9wdGlvbnMge1xyXG4gIC8qKlxyXG4gICAqIHNlcnZlciBmb3IgdGhlIFJhbGx5IEFQSSAoZGVmYXVsdDogaHR0cHM6Ly9yYWxseTEucmFsbHlkZXYuY29tKVxyXG4gICAqL1xyXG4gIHNlcnZlcj86IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogdGhlIFJhbGx5IFJFU1QgQVBJIHZlcnNpb24gdG8gdXNlIGZvciByZXF1ZXN0cyAoZGVmYXVsdDogdjIuMClcclxuICAgKi9cclxuICBhcGlWZXJzaW9uPzogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiB0aGUgYXBpIGtleSB0byB1c2UgZm9yIHJlcXVlc3RzIChkZWZhdWx0OiBSQUxMWV9BUElfS0VZIGVudiB2YXJpYWJsZSlcclxuICAgKi9cclxuICBhcGlLZXk/OiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIGRlZmF1bHQgb3B0aW9ucyBmb3IgdGhlIHJlcXVlc3Q6IGh0dHBzOi8vZ2l0aHViLmNvbS9taWtlYWwvcmVxdWVzdFxyXG4gICAqL1xyXG4gIHJlcXVlc3RPcHRpb25zPzogb2JqZWN0O1xyXG5cclxuICB1c2VyTmFtZT86IHN0cmluZztcclxuICB1c2VyPzogc3RyaW5nO1xyXG4gIHBhc3N3b3JkPzogc3RyaW5nO1xyXG4gIHBhc3M/OiBzdHJpbmc7XHJcbn1cclxuLyoqXHJcbiBUaGUgUmFsbHkgUkVTVCBBUEkgY2xpZW50XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXN0QXBpIHtcclxuICBwcml2YXRlIHJlcXVlc3Q6IFJlcXVlc3Q7XHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIG9wdGlvbnMgKG9wdGlvbmFsKSAtIG9wdGlvbmFsIGNvbmZpZyBmb3IgdGhlIFJFU1QgY2xpZW50XHJcbiAgICovXHJcbiAgY29uc3RydWN0b3Iob3B0aW9ucz86IElSZXN0QXBpT3B0aW9ucykge1xyXG4gICAgb3B0aW9ucyA9IF8ubWVyZ2Uoe1xyXG4gICAgICBzZXJ2ZXI6IGRlZmF1bHRTZXJ2ZXIsXHJcbiAgICAgIGFwaVZlcnNpb246IGRlZmF1bHRBcGlWZXJzaW9uLFxyXG4gICAgICByZXF1ZXN0T3B0aW9uczoge1xyXG4gICAgICAgIGpzb246IHRydWUsXHJcbiAgICAgICAgZ3ppcDogdHJ1ZSxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAnWC1SYWxseUludGVncmF0aW9uTGlicmFyeSc6IGAke3BrZ0luZm8uZGVzY3JpcHRpb259IHYke3BrZ0luZm8udmVyc2lvbn1gLFxyXG4gICAgICAgICAgJ1gtUmFsbHlJbnRlZ3JhdGlvbk5hbWUnOiBwa2dJbmZvLmRlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgJ1gtUmFsbHlJbnRlZ3JhdGlvblZlbmRvcic6ICdSYWxseSBTb2Z0d2FyZSwgSW5jLicsXHJcbiAgICAgICAgICAnWC1SYWxseUludGVncmF0aW9uVmVyc2lvbic6IHBrZ0luZm8udmVyc2lvblxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSwgb3B0aW9ucyk7XHJcblxyXG4gICAgY29uc3QgYXBpS2V5ID0gKG9wdGlvbnMgJiYgb3B0aW9ucy5hcGlLZXkpIHx8IHByb2Nlc3MuZW52LlJBTExZX0FQSV9LRVk7XHJcbiAgICBpZiAoYXBpS2V5KSB7XHJcbiAgICAgIG9wdGlvbnMgPSBfLm1lcmdlKHtcclxuICAgICAgICByZXF1ZXN0T3B0aW9uczoge1xyXG4gICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICB6c2Vzc2lvbmlkOiBhcGlLZXlcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBqYXI6IGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgICB9LCBvcHRpb25zKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIG9wdGlvbnMgPSBfLm1lcmdlKHtcclxuICAgICAgICByZXF1ZXN0T3B0aW9uczoge1xyXG4gICAgICAgICAgYXV0aDoge1xyXG4gICAgICAgICAgICB1c2VyOiAob3B0aW9ucyAmJiAob3B0aW9ucy51c2VyIHx8IG9wdGlvbnMudXNlck5hbWUpKSB8fCBwcm9jZXNzLmVudi5SQUxMWV9VU0VSTkFNRSxcclxuICAgICAgICAgICAgcGFzczogKG9wdGlvbnMgJiYgKG9wdGlvbnMucGFzcyB8fCBvcHRpb25zLnBhc3N3b3JkKSkgfHwgcHJvY2Vzcy5lbnYuUkFMTFlfUEFTU1dPUkQsXHJcbiAgICAgICAgICAgIHNlbmRJbW1lZGlhdGVseTogZmFsc2VcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0sIG9wdGlvbnMpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMucmVxdWVzdCA9IG5ldyBSZXF1ZXN0KG9wdGlvbnMpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjb2xsZWN0aW9uUG9zdChvcHRpb25zOiBhbnksIG9wZXJhdGlvbjogc3RyaW5nLCBjYWxsYmFjazogYW55KTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybiB0aGlzLnJlcXVlc3QucG9zdChcclxuICAgICAgXy5tZXJnZShcclxuICAgICAgICB7XHJcbiAgICAgICAgICB1cmw6IGAke3JlZlV0aWxzLmdldFJlbGF0aXZlKG9wdGlvbnMucmVmKX0vJHtvcHRpb25zLmNvbGxlY3Rpb259LyR7b3BlcmF0aW9ufWAsXHJcbiAgICAgICAgICBqc29uOiB7Q29sbGVjdGlvbkl0ZW1zOiBvcHRpb25zLmRhdGF9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBvcHRpb25zLnJlcXVlc3RPcHRpb25zLFxyXG4gICAgICAgIG9wdGlvbnNUb1JlcXVlc3RPcHRpb25zKG9wdGlvbnMpXHJcbiAgICAgICksXHJcbiAgICAgIGNhbGxiYWNrXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgIENyZWF0ZSBhIG5ldyBvYmplY3RcclxuICAgQHBhcmFtIHtvYmplY3R9IG9wdGlvbnMgLSBUaGUgY3JlYXRlIG9wdGlvbnMgKHJlcXVpcmVkKVxyXG4gICAtIEBtZW1iZXIge3N0cmluZ30gdHlwZSAtIFRoZSB0eXBlIHRvIGJlIGNyZWF0ZWQsIGUuZy4gZGVmZWN0LCBoaWVyYXJjaGljYWxyZXF1aXJlbWVudCwgZXRjLiAocmVxdWlyZWQpXHJcbiAgIC0gQG1lbWJlciB7b2JqZWN0fSBkYXRhIC0gS2V5L3ZhbHVlIHBhaXJzIG9mIGRhdGEgd2l0aCB3aGljaCB0byBwb3B1bGF0ZSB0aGUgbmV3IG9iamVjdCAocmVxdWlyZWQpXHJcbiAgIC0gQG1lbWJlciB7b2JqZWN0fSBzY29wZSAtIHRoZSBkZWZhdWx0IHNjb3BpbmcgdG8gdXNlLiAgaWYgbm90IHNwZWNpZmllZCBzZXJ2ZXIgZGVmYXVsdCB3aWxsIGJlIHVzZWQuXHJcbiAgIC0gQG1lbWJlciB7cmVmfSBzY29wZS53b3Jrc3BhY2UgLSB0aGUgd29ya3NwYWNlXHJcbiAgIC0gQG1lbWJlciB7c3RyaW5nL3N0cmluZ1tdfSBmZXRjaCAtIHRoZSBmaWVsZHMgdG8gaW5jbHVkZSBvbiB0aGUgcmV0dXJuZWQgcmVjb3JkXHJcbiAgIC0gQG1lbWJlciB7b2JqZWN0fSByZXF1ZXN0T3B0aW9ucyAtIEFkZGl0aW9uYWwgb3B0aW9ucyB0byBiZSBhcHBsaWVkIHRvIHRoZSByZXF1ZXN0OiBodHRwczovL2dpdGh1Yi5jb20vbWlrZWFsL3JlcXVlc3QgKG9wdGlvbmFsKVxyXG4gICBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFjayAtIEEgY2FsbGJhY2sgdG8gYmUgY2FsbGVkIHdoZW4gdGhlIG9wZXJhdGlvbiBjb21wbGV0ZXNcclxuICAgLSBAcGFyYW0ge3N0cmluZ1tdfSBlcnJvcnMgLSBBbnkgZXJyb3JzIHdoaWNoIG9jY3VycmVkXHJcbiAgIC0gQHBhcmFtIHtvYmplY3R9IHJlc3VsdCAtIHRoZSBvcGVyYXRpb24gcmVzdWx0XHJcbiAgIEByZXR1cm4ge3Byb21pc2V9XHJcbiAgICovXHJcbiAgY3JlYXRlKG9wdGlvbnM6IGFueSwgY2FsbGJhY2s6IGFueSk6IFByb21pc2U8YW55PiB7XHJcbiAgICBjb25zdCBwb3N0Qm9keTogYW55ID0ge307XHJcbiAgICBwb3N0Qm9keVtvcHRpb25zLnR5cGVdID0gb3B0aW9ucy5kYXRhO1xyXG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdC5wb3N0KFxyXG4gICAgICBfLm1lcmdlKFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHVybDogYC8ke29wdGlvbnMudHlwZX0vY3JlYXRlYCxcclxuICAgICAgICAgIGpzb246IHBvc3RCb2R5XHJcbiAgICAgICAgfSxcclxuICAgICAgICBvcHRpb25zLnJlcXVlc3RPcHRpb25zLFxyXG4gICAgICAgIG9wdGlvbnNUb1JlcXVlc3RPcHRpb25zKG9wdGlvbnMpXHJcbiAgICAgICksXHJcbiAgICAgIGNhbGxiYWNrXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgIFVwZGF0ZSBhbiBvYmplY3RcclxuICAgQHBhcmFtIHtvYmplY3R9IG9wdGlvbnMgLSBUaGUgdXBkYXRlIG9wdGlvbnMgKHJlcXVpcmVkKVxyXG4gICAtIEBtZW1iZXIge3N0cmluZ30gcmVmIC0gVGhlIHJlZiBvZiB0aGUgb2JqZWN0IHRvIHVwZGF0ZSwgZS5nLiAvZGVmZWN0LzEyMzQ1IChyZXF1aXJlZClcclxuICAgLSBAbWVtYmVyIHtvYmplY3R9IGRhdGEgLSBLZXkvdmFsdWUgcGFpcnMgb2YgZGF0YSB3aXRoIHdoaWNoIHRvIHVwZGF0ZSBvYmplY3QgKHJlcXVpcmVkKVxyXG4gICAtIEBtZW1iZXIge29iamVjdH0gc2NvcGUgLSB0aGUgZGVmYXVsdCBzY29waW5nIHRvIHVzZS4gIGlmIG5vdCBzcGVjaWZpZWQgc2VydmVyIGRlZmF1bHQgd2lsbCBiZSB1c2VkLlxyXG4gICAtIEBtZW1iZXIge3JlZn0gc2NvcGUud29ya3NwYWNlIC0gdGhlIHdvcmtzcGFjZVxyXG4gICAtIEBtZW1iZXIge3N0cmluZy9zdHJpbmdbXX0gZmV0Y2ggLSB0aGUgZmllbGRzIHRvIGluY2x1ZGUgb24gdGhlIHJldHVybmVkIHJlY29yZFxyXG4gICAtIEBtZW1iZXIge29iamVjdH0gcmVxdWVzdE9wdGlvbnMgLSBBZGRpdGlvbmFsIG9wdGlvbnMgdG8gYmUgYXBwbGllZCB0byB0aGUgcmVxdWVzdDogaHR0cHM6Ly9naXRodWIuY29tL21pa2VhbC9yZXF1ZXN0IChvcHRpb25hbClcclxuICAgQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2sgLSBBIGNhbGxiYWNrIHRvIGJlIGNhbGxlZCB3aGVuIHRoZSBvcGVyYXRpb24gY29tcGxldGVzXHJcbiAgIC0gQHBhcmFtIHtzdHJpbmdbXX0gZXJyb3JzIC0gQW55IGVycm9ycyB3aGljaCBvY2N1cnJlZFxyXG4gICAtIEBwYXJhbSB7b2JqZWN0fSByZXN1bHQgLSB0aGUgb3BlcmF0aW9uIHJlc3VsdFxyXG4gICBAcmV0dXJuIHtwcm9taXNlfVxyXG4gICAqL1xyXG4gIHVwZGF0ZShvcHRpb25zOiBhbnksIGNhbGxiYWNrOiBhbnkpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgY29uc3QgcG9zdEJvZHk6IGFueSA9IHt9O1xyXG4gICAgcG9zdEJvZHlbcmVmVXRpbHMuZ2V0VHlwZShvcHRpb25zLnJlZildID0gb3B0aW9ucy5kYXRhO1xyXG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdC5wdXQoXHJcbiAgICAgIF8ubWVyZ2UoXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdXJsOiByZWZVdGlscy5nZXRSZWxhdGl2ZShvcHRpb25zLnJlZiksXHJcbiAgICAgICAgICBqc29uOiBwb3N0Qm9keVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgb3B0aW9ucy5yZXF1ZXN0T3B0aW9ucyxcclxuICAgICAgICBvcHRpb25zVG9SZXF1ZXN0T3B0aW9ucyhvcHRpb25zKVxyXG4gICAgICApLFxyXG4gICAgICBjYWxsYmFja1xyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICBEZWxldGUgYW4gb2JqZWN0XHJcbiAgIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zIC0gVGhlIGRlbGV0ZSBvcHRpb25zIChyZXF1aXJlZClcclxuICAgLSBAbWVtYmVyIHtzdHJpbmd9IHJlZiAtIFRoZSByZWYgb2YgdGhlIG9iamVjdCB0byBkZWxldGUsIGUuZy4gL2RlZmVjdC8xMjM0XHJcbiAgIC0gQG1lbWJlciB7b2JqZWN0fSBzY29wZSAtIHRoZSBkZWZhdWx0IHNjb3BpbmcgdG8gdXNlLiAgaWYgbm90IHNwZWNpZmllZCBzZXJ2ZXIgZGVmYXVsdCB3aWxsIGJlIHVzZWQuXHJcbiAgIC0gQG1lbWJlciB7cmVmfSBzY29wZS53b3Jrc3BhY2UgLSB0aGUgd29ya3NwYWNlXHJcbiAgIC0gQG1lbWJlciB7b2JqZWN0fSByZXF1ZXN0T3B0aW9ucyAtIEFkZGl0aW9uYWwgb3B0aW9ucyB0byBiZSBhcHBsaWVkIHRvIHRoZSByZXF1ZXN0OiBodHRwczovL2dpdGh1Yi5jb20vbWlrZWFsL3JlcXVlc3QgKG9wdGlvbmFsKVxyXG4gICBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFjayAtIEEgY2FsbGJhY2sgdG8gYmUgY2FsbGVkIHdoZW4gdGhlIG9wZXJhdGlvbiBjb21wbGV0ZXNcclxuICAgLSBAcGFyYW0ge3N0cmluZ1tdfSBlcnJvcnMgLSBBbnkgZXJyb3JzIHdoaWNoIG9jY3VycmVkXHJcbiAgIC0gQHBhcmFtIHtvYmplY3R9IHJlc3VsdCAtIHRoZSBvcGVyYXRpb24gcmVzdWx0XHJcbiAgIEByZXR1cm4ge3Byb21pc2V9XHJcbiAgICovXHJcbiAgZGVsKG9wdGlvbnM6IGFueSwgY2FsbGJhY2s6IGFueSk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0LmRlbChcclxuICAgICAgXy5tZXJnZShcclxuICAgICAgICB7XHJcbiAgICAgICAgICB1cmw6IHJlZlV0aWxzLmdldFJlbGF0aXZlKG9wdGlvbnMucmVmKVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgb3B0aW9ucy5yZXF1ZXN0T3B0aW9ucyxcclxuICAgICAgICBvcHRpb25zVG9SZXF1ZXN0T3B0aW9ucyhvcHRpb25zKVxyXG4gICAgICApLFxyXG4gICAgICBjYWxsYmFja1xyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEdldCBhbiBvYmplY3RcclxuICAgKiBAcGFyYW0gb3B0aW9ucyBbcmVxdWlyZWRdIFRoZSBnZXQgb3B0aW9uc1xyXG4gICAqIEBwYXJhbSBjYiBbb3B0aW9uYWxdIEEgY2FsbGJhY2sgd2hlbiB0aGUgb3BlcmF0aW9uIGNvbXBsZXRlc1xyXG4gICAqL1xyXG4gIGdldDxUPihvcHRpb25zOiBhbnksIGNiPzogY2FsbGJhY2s8R2V0UmVzdWx0PFQ+Pik6IFByb21pc2U8R2V0UmVzdWx0PFQ+PiB7XHJcbiAgICBjb25zdCBnZXRQcm9taXNlID0gdGhpcy5yZXF1ZXN0LmdldDxHZXRSZXN1bHQ8VD4+KFxyXG4gICAgICBfLm1lcmdlKFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHVybDogcmVmVXRpbHMuZ2V0UmVsYXRpdmUob3B0aW9ucy5yZWYpXHJcbiAgICAgICAgfSxcclxuICAgICAgICBvcHRpb25zLnJlcXVlc3RPcHRpb25zLFxyXG4gICAgICAgIG9wdGlvbnNUb1JlcXVlc3RPcHRpb25zKG9wdGlvbnMpXHJcbiAgICAgIClcclxuICAgICkudGhlbihmdW5jdGlvbihyZXN1bHQpIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBFcnJvcnM6IHJlc3VsdC5FcnJvcnMsXHJcbiAgICAgICAgV2FybmluZ3M6IHJlc3VsdC5XYXJuaW5ncyxcclxuICAgICAgICBPYmplY3Q6IChfLm9taXQocmVzdWx0LCBbJ0Vycm9ycycsICdXYXJuaW5ncyddKSBhcyB1bmtub3duKSBhcyBUXHJcbiAgICAgIH07XHJcbiAgICB9KTtcclxuXHJcbiAgICBjYWxsYmFja2lmeShnZXRQcm9taXNlLCBjYik7XHJcbiAgICByZXR1cm4gZ2V0UHJvbWlzZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICBRdWVyeSBmb3Igb2JqZWN0c1xyXG4gICBAcGFyYW0gb3B0aW9ucyAtIFRoZSBxdWVyeSBvcHRpb25zXHJcbiAgIEBwYXJhbSBjYWxsYmFjayAtIEEgY2FsbGJhY2sgdG8gYmUgY2FsbGVkIHdoZW4gdGhlIG9wZXJhdGlvbiBjb21wbGV0ZXNcclxuICAgKi9cclxuICBxdWVyeShvcHRpb25zOiBRdWVyeU9wdGlvbnMsIGNhbGxiYWNrPzogY2FsbGJhY2s8YW55Pik6IFByb21pc2U8YW55PiB7XHJcbiAgICBjb25zdCBzZWxmID0gdGhpcztcclxuICAgIGNvbnN0IHBhZ2VTaXplRGVmYXVsdCA9IDIwMDtcclxuICAgIG9wdGlvbnMgPSBfLm1lcmdlKHtcclxuICAgICAgc3RhcnQ6IDEsXHJcbiAgICAgIHBhZ2VTaXplOiBwYWdlU2l6ZURlZmF1bHRcclxuICAgIH0sIG9wdGlvbnMpO1xyXG5cclxuICAgIGNvbnN0IHJlcXVlc3RPcHRpb25zID0gXy5tZXJnZSh7XHJcbiAgICAgIHVybDogcmVmVXRpbHMuZ2V0UmVsYXRpdmUob3B0aW9ucy5yZWYpIHx8IGAvJHtvcHRpb25zLnR5cGV9YCxcclxuICAgICAgcXM6IHtcclxuICAgICAgICBzdGFydDogb3B0aW9ucy5zdGFydCxcclxuICAgICAgICBwYWdlc2l6ZTogb3B0aW9ucy5saW1pdCA/IE1hdGgubWluKG9wdGlvbnMucGFnZVNpemUgfHwgcGFnZVNpemVEZWZhdWx0LCBvcHRpb25zLmxpbWl0KSA6IG9wdGlvbnMucGFnZVNpemVcclxuICAgICAgfVxyXG4gICAgfSwgb3B0aW9ucy5yZXF1ZXN0T3B0aW9ucywgb3B0aW9uc1RvUmVxdWVzdE9wdGlvbnMob3B0aW9ucykpIGFzIHJlcXVlc3QuVXJsT3B0aW9ucyAmIHJlcXVlc3QuQ29yZU9wdGlvbnM7XHJcbiAgICBpZiAoXy5pc0FycmF5KG9wdGlvbnMub3JkZXIpKSB7XHJcbiAgICAgIHJlcXVlc3RPcHRpb25zLnFzLm9yZGVyID0gb3B0aW9ucy5vcmRlci5qb2luKCcsJyk7XHJcbiAgICB9IGVsc2UgaWYgKF8uaXNTdHJpbmcob3B0aW9ucy5vcmRlcikpIHtcclxuICAgICAgcmVxdWVzdE9wdGlvbnMucXMub3JkZXIgPSBvcHRpb25zLm9yZGVyO1xyXG4gICAgfVxyXG4gICAgaWYgKG9wdGlvbnMucXVlcnkpIHtcclxuICAgICAgcmVxdWVzdE9wdGlvbnMucXMucXVlcnkgPSAoKG9wdGlvbnMucXVlcnkgYXMgUXVlcnkpICYmXHJcbiAgICAgICAgICAob3B0aW9ucy5xdWVyeSBhcyBRdWVyeSkudG9RdWVyeVN0cmluZygpKSB8fCBvcHRpb25zLnF1ZXJ5O1xyXG4gICAgfVxyXG5cclxuICAgIGxldCByZXN1bHRzOiBhbnlbXSA9IFtdO1xyXG5cclxuICAgIGZ1bmN0aW9uIGxvYWRSZW1haW5pbmdQYWdlcyhyZXN1bHQ6IGFueSk6IGFueSB7XHJcbiAgICAgIGNvbnN0IHBhZ2VSZXN1bHRzID0gcmVzdWx0LlJlc3VsdHM7XHJcbiAgICAgIHJlc3VsdHMgPSByZXN1bHRzLmNvbmNhdChwYWdlUmVzdWx0cyk7XHJcbiAgICAgIGlmIChvcHRpb25zLmxpbWl0ICYmIHJlc3VsdC5TdGFydEluZGV4ICsgb3B0aW9ucy5wYWdlU2l6ZSA8PSBNYXRoLm1pbihvcHRpb25zLmxpbWl0IHx8IG9wdGlvbnMucGFnZVNpemUgfHwgcGFnZVNpemVEZWZhdWx0LCByZXN1bHQuVG90YWxSZXN1bHRDb3VudCkpIHtcclxuICAgICAgICByZXR1cm4gc2VsZi5yZXF1ZXN0LmdldChfLm1lcmdlKHJlcXVlc3RPcHRpb25zLCB7XHJcbiAgICAgICAgICBxczoge1xyXG4gICAgICAgICAgICBzdGFydDogcmVzdWx0LlN0YXJ0SW5kZXggKyBvcHRpb25zLnBhZ2VTaXplXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSkgYXMgcmVxdWVzdC5VcmxPcHRpb25zKS50aGVuKGxvYWRSZW1haW5pbmdQYWdlcyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmVzdWx0LlJlc3VsdHMgPSByZXN1bHRzLnNsaWNlKDAsIG9wdGlvbnMubGltaXQgfHwgcmVzdWx0cy5sZW5ndGgpO1xyXG4gICAgICAgIHJlc3VsdC5TdGFydEluZGV4ID0gb3B0aW9ucy5zdGFydDtcclxuICAgICAgICByZXN1bHQuUGFnZVNpemUgPSByZXN1bHRzLmxlbmd0aDtcclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcXVlcnlQcm9taXNlID0gdGhpcy5yZXF1ZXN0LmdldChyZXF1ZXN0T3B0aW9ucykudGhlbihsb2FkUmVtYWluaW5nUGFnZXMpO1xyXG5cclxuICAgIGNhbGxiYWNraWZ5KHF1ZXJ5UHJvbWlzZSwgY2FsbGJhY2spO1xyXG4gICAgcmV0dXJuIHF1ZXJ5UHJvbWlzZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICBBZGRzIGl0ZW1zIHRvIGEgY29sbGVjdGlvblxyXG4gICBAcGFyYW0ge29iamVjdH0gb3B0aW9ucyAtIFRoZSBhZGQgb3B0aW9ucyAocmVxdWlyZWQpXHJcbiAgIC0gQG1lbWJlciB7c3RyaW5nfSByZWYgLSBUaGUgcmVmIG9mIHRoZSBjb2xsZWN0aW9uIHRvIHVwZGF0ZSwgZS5nLiAvdXNlci8xMjM0NSAocmVxdWlyZWQpXHJcbiAgIC0gQG1lbWJlciB7c3RyaW5nfSBjb2xsZWN0aW9uIC0gVGhlIG5hbWUgb2YgdGhlIGNvbGxlY3Rpb24gdG8gdXBkYXRlLCBlLmcuICdUZWFtTWVtYmVyc2hpcHMgKHJlcXVpcmVkKVxyXG4gICAtIEBtZW1iZXIge29iamVjdH0gZGF0YSAtIFt7X3JlZjogb2JqZWN0UmVmfSwge05hbWU6XCJKb2VcIn1dLCB0aGluZ3MgdG8gYmUgYWRkZWQgdG8gdGhlIGNvbGxlY3Rpb24gKHJlcXVpcmVkKVxyXG4gICAtIEBtZW1iZXIge3N0cmluZy9zdHJpbmdbXX0gZmV0Y2ggLSB0aGUgZmllbGRzIHRvIGluY2x1ZGUgb24gdGhlIHJldHVybmVkIHJlY29yZHNcclxuICAgLSBAbWVtYmVyIHtvYmplY3R9IHNjb3BlIC0gdGhlIGRlZmF1bHQgc2NvcGluZyB0byB1c2UuICBpZiBub3Qgc3BlY2lmaWVkIHNlcnZlciBkZWZhdWx0IHdpbGwgYmUgdXNlZC5cclxuICAgLSBAbWVtYmVyIHtyZWZ9IHNjb3BlLndvcmtzcGFjZSAtIHRoZSB3b3Jrc3BhY2VcclxuICAgLSBAbWVtYmVyIHtvYmplY3R9IHJlcXVlc3RPcHRpb25zIC0gQWRkaXRpb25hbCBvcHRpb25zIHRvIGJlIGFwcGxpZWQgdG8gdGhlIHJlcXVlc3Q6IGh0dHBzOi8vZ2l0aHViLmNvbS9taWtlYWwvcmVxdWVzdCAob3B0aW9uYWwpXHJcbiAgIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrIC0gQSBjYWxsYmFjayB0byBiZSBjYWxsZWQgd2hlbiB0aGUgb3BlcmF0aW9uIGNvbXBsZXRlc1xyXG4gICAtIEBwYXJhbSB7c3RyaW5nW119IGVycm9ycyAtIEFueSBlcnJvcnMgd2hpY2ggb2NjdXJyZWRcclxuICAgLSBAcGFyYW0ge29iamVjdH0gcmVzdWx0IC0gdGhlIG9wZXJhdGlvbiByZXN1bHRcclxuICAgQHJldHVybiB7cHJvbWlzZX1cclxuICAgKi9cclxuICBhZGQob3B0aW9uczogYW55LCBjYWxsYmFjazogYW55KTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybiB0aGlzLmNvbGxlY3Rpb25Qb3N0KG9wdGlvbnMsICdhZGQnLCBjYWxsYmFjayk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgUmVtb3ZlIGl0ZW1zIGZyb20gYSBjb2xsZWN0aW9uXHJcbiAgIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zIC0gVGhlIHJlbW92ZSBvcHRpb25zIChyZXF1aXJlZClcclxuICAgLSBAbWVtYmVyIHtzdHJpbmd9IHJlZiAtIFRoZSByZWYgb2YgdGhlIGNvbGxlY3Rpb24gdG8gdXBkYXRlLCBlLmcuIC91c2VyLzEyMzQ1IChyZXF1aXJlZClcclxuICAgLSBAbWVtYmVyIHtzdHJpbmd9IGNvbGxlY3Rpb24gLSBUaGUgbmFtZSBvZiB0aGUgY29sbGVjdGlvbiB0byB1cGRhdGUsIGUuZy4gJ1RlYW1NZW1iZXJzaGlwcyAocmVxdWlyZWQpXHJcbiAgIC0gQG1lbWJlciB7b2JqZWN0fSBkYXRhIC0gW3tfcmVmOiBvYmplY3RSZWZ9XSwgd2hlcmUgdGhlIG9iamVjdFJlZnMgYXJlIHRvIGJlIHJlbW92ZWQgZnJvbSB0aGUgY29sbGVjdGlvbiAocmVxdWlyZWQpXHJcbiAgIC0gQG1lbWJlciB7c3RyaW5nL3N0cmluZ1tdfSBmZXRjaCAtIHRoZSBmaWVsZHMgdG8gaW5jbHVkZSBvbiB0aGUgcmV0dXJuZWQgcmVjb3Jkc1xyXG4gICAtIEBtZW1iZXIge29iamVjdH0gc2NvcGUgLSB0aGUgZGVmYXVsdCBzY29waW5nIHRvIHVzZS4gIGlmIG5vdCBzcGVjaWZpZWQgc2VydmVyIGRlZmF1bHQgd2lsbCBiZSB1c2VkLlxyXG4gICAtIEBtZW1iZXIge3JlZn0gc2NvcGUud29ya3NwYWNlIC0gdGhlIHdvcmtzcGFjZVxyXG4gICAtIEBtZW1iZXIge29iamVjdH0gcmVxdWVzdE9wdGlvbnMgLSBBZGRpdGlvbmFsIG9wdGlvbnMgdG8gYmUgYXBwbGllZCB0byB0aGUgcmVxdWVzdDogaHR0cHM6Ly9naXRodWIuY29tL21pa2VhbC9yZXF1ZXN0IChvcHRpb25hbClcclxuICAgQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2sgLSBBIGNhbGxiYWNrIHRvIGJlIGNhbGxlZCB3aGVuIHRoZSBvcGVyYXRpb24gY29tcGxldGVzXHJcbiAgIC0gQHBhcmFtIHtzdHJpbmdbXX0gZXJyb3JzIC0gQW55IGVycm9ycyB3aGljaCBvY2N1cnJlZFxyXG4gICAtIEBwYXJhbSB7b2JqZWN0fSByZXN1bHQgLSB0aGUgb3BlcmF0aW9uIHJlc3VsdFxyXG4gICBAcmV0dXJuIHtwcm9taXNlfVxyXG4gICAqL1xyXG4gIHJlbW92ZShvcHRpb25zOiBhbnksIGNhbGxiYWNrOiBhbnkpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuIHRoaXMuY29sbGVjdGlvblBvc3Qob3B0aW9ucywgJ3JlbW92ZScsIGNhbGxiYWNrKTtcclxuICB9XHJcbn1cclxuIl19