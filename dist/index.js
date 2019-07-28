"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.rally = void 0;

var _restapi = _interopRequireDefault(require("./restapi"));

var _query = require("./util/query");

var _ref = _interopRequireDefault(require("./util/ref"));

var createClient = function createClient(options) {
  return new _restapi["default"](options);
};

var nodeDebug = process.env.NODE_DEBUG || '';
var debug = nodeDebug !== '' && /rally/.test(nodeDebug);
var rally = {
  createClient: createClient,
  debug: debug,
  util: {
    query: {
      where: _query.where
    },
    ref: _ref["default"]
  }
};
exports.rally = rally;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6WyJjcmVhdGVDbGllbnQiLCJvcHRpb25zIiwiUmVzdEFwaSIsIm5vZGVEZWJ1ZyIsInByb2Nlc3MiLCJlbnYiLCJOT0RFX0RFQlVHIiwiZGVidWciLCJ0ZXN0IiwicmFsbHkiLCJ1dGlsIiwicXVlcnkiLCJ3aGVyZSIsInJlZiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBRUEsSUFBTUEsWUFBaUMsR0FBRyxTQUFwQ0EsWUFBb0MsQ0FBQ0MsT0FBRDtBQUFBLFNBQWtCLElBQUlDLG1CQUFKLENBQVlELE9BQVosQ0FBbEI7QUFBQSxDQUExQzs7QUFDQSxJQUFNRSxTQUFTLEdBQUdDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxVQUFaLElBQTBCLEVBQTVDO0FBQ0EsSUFBTUMsS0FBSyxHQUFHSixTQUFTLEtBQUssRUFBZCxJQUFvQixRQUFRSyxJQUFSLENBQWFMLFNBQWIsQ0FBbEM7QUFFTyxJQUFNTSxLQUFLLEdBQUc7QUFDbkJULEVBQUFBLFlBQVksRUFBWkEsWUFEbUI7QUFFbkJPLEVBQUFBLEtBQUssRUFBTEEsS0FGbUI7QUFHbkJHLEVBQUFBLElBQUksRUFBRTtBQUNKQyxJQUFBQSxLQUFLLEVBQUU7QUFDTEMsTUFBQUEsS0FBSyxFQUFMQTtBQURLLEtBREg7QUFJSkMsSUFBQUEsR0FBRyxFQUFIQTtBQUpJO0FBSGEsQ0FBZCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZXN0QXBpIGZyb20gJy4vcmVzdGFwaSc7XHJcbmltcG9ydCB7IHdoZXJlIH0gZnJvbSAnLi91dGlsL3F1ZXJ5JztcclxuaW1wb3J0IHJlZiBmcm9tICcuL3V0aWwvcmVmJztcclxuXHJcbmNvbnN0IGNyZWF0ZUNsaWVudDogKHg6IGFueSkgPT4gUmVzdEFwaSA9IChvcHRpb25zOiBhbnkpID0+IG5ldyBSZXN0QXBpKG9wdGlvbnMpO1xyXG5jb25zdCBub2RlRGVidWcgPSBwcm9jZXNzLmVudi5OT0RFX0RFQlVHIHx8ICcnO1xyXG5jb25zdCBkZWJ1ZyA9IG5vZGVEZWJ1ZyAhPT0gJycgJiYgL3JhbGx5Ly50ZXN0KG5vZGVEZWJ1Zyk7XHJcblxyXG5leHBvcnQgY29uc3QgcmFsbHkgPSB7XHJcbiAgY3JlYXRlQ2xpZW50LFxyXG4gIGRlYnVnLFxyXG4gIHV0aWw6IHtcclxuICAgIHF1ZXJ5OiB7XHJcbiAgICAgIHdoZXJlXHJcbiAgICB9LFxyXG4gICAgcmVmXHJcbiAgfVxyXG59O1xyXG4iXX0=