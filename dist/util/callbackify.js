"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

function _default(promise, cb) {
  if (typeof cb === 'function') {
    promise.then(function (obj) {
      return cb(null, obj);
    }, function (err) {
      return cb(err, null);
    });
  }
}

module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsL2NhbGxiYWNraWZ5LnRzIl0sIm5hbWVzIjpbInByb21pc2UiLCJjYiIsInRoZW4iLCJvYmoiLCJlcnIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFFZSxrQkFBWUEsT0FBWixFQUFpQ0MsRUFBakMsRUFBeUQ7QUFDdEUsTUFBSSxPQUFPQSxFQUFQLEtBQWMsVUFBbEIsRUFBOEI7QUFDNUJELElBQUFBLE9BQU8sQ0FBQ0UsSUFBUixDQUFhLFVBQUFDLEdBQUc7QUFBQSxhQUFJRixFQUFFLENBQUMsSUFBRCxFQUFPRSxHQUFQLENBQU47QUFBQSxLQUFoQixFQUFtQyxVQUFBQyxHQUFHO0FBQUEsYUFBSUgsRUFBRSxDQUFDRyxHQUFELEVBQU0sSUFBTixDQUFOO0FBQUEsS0FBdEM7QUFDRDtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY2FsbGJhY2sgfSBmcm9tIFwiLi9jYWxsYmFja1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb248VD4ocHJvbWlzZTogUHJvbWlzZTxUPiwgY2I/OiBjYWxsYmFjazxUPik6IHZvaWQge1xyXG4gIGlmICh0eXBlb2YgY2IgPT09ICdmdW5jdGlvbicpIHtcclxuICAgIHByb21pc2UudGhlbihvYmogPT4gY2IobnVsbCwgb2JqKSwgZXJyID0+IGNiKGVyciwgbnVsbCkpO1xyXG4gIH1cclxufVxyXG4iXX0=