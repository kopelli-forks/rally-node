"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PersistableObject = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

/**
 * The base type of all persistable objects.
 */
var PersistableObject = function PersistableObject() {
  (0, _classCallCheck2["default"])(this, PersistableObject);
  (0, _defineProperty2["default"])(this, "CreationDate", void 0);
  (0, _defineProperty2["default"])(this, "ObjectID", void 0);
  (0, _defineProperty2["default"])(this, "ObjectUUID", void 0);
  (0, _defineProperty2["default"])(this, "VersionId", void 0);
};

exports.PersistableObject = PersistableObject;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90eXBlcy9QZXJzaXN0YWJsZU9iamVjdC50cyJdLCJuYW1lcyI6WyJQZXJzaXN0YWJsZU9iamVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUVBOzs7SUFHc0JBLGlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZGF0ZVRpbWUgfSBmcm9tIFwiLi90eXBlc1wiO1xyXG5cclxuLyoqXHJcbiAqIFRoZSBiYXNlIHR5cGUgb2YgYWxsIHBlcnNpc3RhYmxlIG9iamVjdHMuXHJcbiAqL1xyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgUGVyc2lzdGFibGVPYmplY3Qge1xyXG4gIC8qKlxyXG4gICAqIFRoZSBjcmVhdGlvbiBkYXRlIG9mIHRoZSBvYmplY3QuIEl0IGlzIGF1dG9tYXRpY2FsbHkgYXNzaWduZWQgd2hlbiBhbiBvYmplY3QgaXMgY3JlYXRlZCwgYW5kIGNhbiBuZXZlciBiZSBjaGFuZ2VkLlxyXG4gICAqL1xyXG4gIHJlYWRvbmx5IENyZWF0aW9uRGF0ZTogZGF0ZVRpbWUgfCB1bmRlZmluZWQ7XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoaXMgaXMgdGhlIG9iamVjdCBJRCwgYSBnbG9iYWxseS11bmlxdWUgaWRlbnRpZmllciBmb3IgdGhlIG9iamVjdC4gSXQgaXMgYXV0b21hdGljYWxseSBhc3NpZ25lZCB3aGVuIHRoZSBvYmplY3QgaXMgY3JlYXRlZCwgYW5kIGNhbiBuZXZlciBiZSBjaGFuZ2VkLlxyXG4gICAqL1xyXG4gIHJlYWRvbmx5IE9iamVjdElEOiBudW1iZXIgfCB1bmRlZmluZWQ7XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoaXMgaXMgdGhlIFVVSUQsIGEgdW5pdmVyc2FsbHktdW5pcXVlIGlkZW50aWZpZXIgZm9yIHRoZSBvYmplY3QuIEl0IGlzIGF1dG9tYXRpY2FsbHkgYXNzaWduZWQgd2hlbiBhbiBvYmplY3QgaXMgY3JlYXRlZCwgYW5kIGNhbiBuZXZlciBiZSBjaGFuZ2VkLlxyXG4gICAqL1xyXG4gIHJlYWRvbmx5IE9iamVjdFVVSUQ6IHN0cmluZyB8IHVuZGVmaW5lZDtcclxuXHJcbiAgLyoqXHJcbiAgICogVGhlIG9iamVjdCB2ZXJzaW9uLlxyXG4gICAqL1xyXG4gIHJlYWRvbmx5IFZlcnNpb25JZD86IG51bWJlcjtcclxufVxyXG4iXX0=