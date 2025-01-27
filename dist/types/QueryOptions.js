"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.QueryOptions = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var QueryOptions = function QueryOptions() {
  (0, _classCallCheck2["default"])(this, QueryOptions);
  (0, _defineProperty2["default"])(this, "ref", void 0);
  (0, _defineProperty2["default"])(this, "type", void 0);
  (0, _defineProperty2["default"])(this, "scope", void 0);
  (0, _defineProperty2["default"])(this, "start", void 0);
  (0, _defineProperty2["default"])(this, "pageSize", void 0);
  (0, _defineProperty2["default"])(this, "limit", void 0);
  (0, _defineProperty2["default"])(this, "fetch", void 0);
  (0, _defineProperty2["default"])(this, "order", void 0);
  (0, _defineProperty2["default"])(this, "query", void 0);
  (0, _defineProperty2["default"])(this, "requestOptions", void 0);
};

exports.QueryOptions = QueryOptions;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90eXBlcy9RdWVyeU9wdGlvbnMudHMiXSwibmFtZXMiOlsiUXVlcnlPcHRpb25zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0lBR2FBLFkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcmVxdWVzdCBmcm9tIFwicmVxdWVzdFwiO1xyXG5pbXBvcnQgUXVlcnkgZnJvbSBcIi4uL3V0aWwvcXVlcnlcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBRdWVyeU9wdGlvbnMge1xyXG4gIC8qKlxyXG4gICAqIFRoZSByZWYgb2YgdGhlIGNvbGxlY3Rpb24gdG8gcXVlcnksIGUuZy4gL2RlZmVjdC8xMjM0NS90YXNrcyAocmVxdWlyZWQgaWYgdHlwZSBub3Qgc3BlY2lmaWVkKVxyXG4gICAqL1xyXG4gIHJlZj86IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogVGhlIHR5cGUgdG8gcXVlcnksIGUuZy4gZGVmZWN0LCBoaWVyYXJjaGljYWxyZXF1aXJlbWVudCAocmVxdWlyZWQgaWYgcmVmIG5vdCBzcGVjaWZpZWQpXHJcbiAgICovXHJcbiAgdHlwZT86IHN0cmluZzsgLy9UT0RPOiBtYWtlIHRoaXMgZW51bS9zdHJpbmcgdmFsdWVzXHJcbiAgXHJcbiAgLyoqXHJcbiAgICogdGhlIGRlZmF1bHQgc2NvcGluZyB0byB1c2UuICBpZiBub3Qgc3BlY2lmaWVkIHNlcnZlciBkZWZhdWx0IHdpbGwgYmUgdXNlZC5cclxuICAgKi9cclxuICBzY29wZT86IHtcclxuICAgIC8qKlxyXG4gICAgICogdGhlIHdvcmtzcGFjZVxyXG4gICAgICovXHJcbiAgICB3b3Jrc3BhY2U/OiBzdHJpbmc7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiB0aGUgcHJvamVjdCwgb3IgbnVsbCB0byBpbmNsdWRlIGVudGlyZSB3b3Jrc3BhY2VcclxuICAgICAqL1xyXG4gICAgcHJvamVjdD86IHN0cmluZztcclxuXHJcbiAgICAvKipcclxuICAgICAqIHRydWUgdG8gaW5jbHVkZSBwYXJlbnQgcHJvamVjdCBkYXRhLCBmYWxzZSBvdGhlcndpc2VcclxuICAgICAqL1xyXG4gICAgdXA/OiBib29sZWFuO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogdHJ1ZSB0byBpbmNsdWRlIGNoaWxkIHByb2plY3QgZGF0YSwgZmFsc2Ugb3RoZXJ3aXNlXHJcbiAgICAgKi9cclxuICAgIGRvd24/OiBib29sZWFuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogdGhlIDEgYmFzZWQgc3RhcnQgaW5kZXhcclxuICAgKi9cclxuICBzdGFydD86IG51bWJlcjtcclxuXHJcbiAgLyoqXHJcbiAgICogdGhlIHBhZ2Ugc2l6ZSwgMSAtIDIwMCAoZGVmYXVsdD0yMDApXHJcbiAgICovXHJcbiAgcGFnZVNpemU/OiBudW1iZXI7XHJcblxyXG4gIC8qKlxyXG4gICAqIHRoZSBtYXhpbXVtIG51bWJlciBvZiByZWNvcmRzIHRvIHJldHVyblxyXG4gICAqL1xyXG4gIGxpbWl0PzogbnVtYmVyO1xyXG5cclxuICAvKipcclxuICAgKiB0aGUgZmllbGRzIHRvIGluY2x1ZGUgb24gZWFjaCByZXR1cm5lZCByZWNvcmRcclxuICAgKi9cclxuICBmZXRjaD86IHN0cmluZyB8IHN0cmluZ1tdO1xyXG5cclxuICAvKipcclxuICAgKiB0aGUgb3JkZXIgYnkgd2hpY2ggdG8gc29ydCB0aGUgcmVzdWx0c1xyXG4gICAqL1xyXG4gIG9yZGVyPzogc3RyaW5nIHwgc3RyaW5nW107XHJcblxyXG4gIC8qKlxyXG4gICAqIGEgcXVlcnkgdG8gZmlsdGVyIHRoZSByZXN1bHQgc2V0XHJcbiAgICovXHJcbiAgcXVlcnk/OiBzdHJpbmcgfCBRdWVyeTtcclxuXHJcbiAgLyoqXHJcbiAgICogQWRkaXRpb25hbCBvcHRpb25zIHRvIGJlIGFwcGxpZWQgdG8gdGhlIHJlcXVlc3Q6IGh0dHBzOi8vZ2l0aHViLmNvbS9taWtlYWwvcmVxdWVzdCAob3B0aW9uYWwpXHJcbiAgICovXHJcbiAgcmVxdWVzdE9wdGlvbnM/OiByZXF1ZXN0LkNvcmVPcHRpb25zO1xyXG59Il19