"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Dependencies
 */
var distance = require("js-levenshtein");

var domains = require("email-domain-popular");

var EmailSuggester =
/*#__PURE__*/
function () {
  function EmailSuggester(extraDomains) {
    var _this = this;

    _classCallCheck(this, EmailSuggester);

    this.defaultDomains = domains;

    if (extraDomains && Array.isArray(extraDomains)) {
      extraDomains.forEach(function (extra) {
        _this.defaultDomains.push(extra);
      });
    }
  }

  _createClass(EmailSuggester, [{
    key: "suggest",
    value: function suggest(address, maxDistance) {
      if (typeof maxDistance === "undefined") maxDistance = 5;

      var _address$split = address.split("@"),
          _address$split2 = _slicedToArray(_address$split, 2),
          left = _address$split2[0],
          domain = _address$split2[1];

      if (domain) {
        var suggestions = this.defaultDomains.map(function (e) {
          return {
            distance: distance(e, domain),
            email: left + "@" + e
          };
        }).filter(function (e) {
          return e.distance < maxDistance;
        }).sort(function (a, b) {
          return a.distance - b.distance;
        });
        return suggestions;
      }
    }
  }]);

  return EmailSuggester;
}();

module.exports = EmailSuggester; // module.exports = address => {
//   const [left, domain] = address.split("@");
//   if (domain) {
//     const suggestions = domains.sort((a, b) => {
//       return distance(a, domain) - distance(b, domain);
//     });
//     return left + "@" + suggestions[0];
//   }
// };