/**
 * Dependencies
 */

const distance = require("js-levenshtein");
const domains = require("email-domain-popular");

class EmailSuggester {
  constructor(extraDomains) {
    this.defaultDomains = domains;
    if (extraDomains && Array.isArray(extraDomains)) {
      extraDomains.forEach(extra => {
        this.defaultDomains.push(extra);
      });
    }
  }

  suggest(address, maxDistance) {
    if (typeof maxDistance === "undefined") maxDistance = 5;

    const [left, domain] = address.split("@");
    if (domain) {
      const suggestions = this.defaultDomains
        .map(e => {
          return { distance: distance(e, domain), email: left + "@" + e };
        })
        .filter(e => e.distance < maxDistance)
        .sort((a, b) => a.distance - b.distance);

      return suggestions;
    }
  }
}
module.exports = EmailSuggester;
// module.exports = address => {
//   const [left, domain] = address.split("@");
//   if (domain) {
//     const suggestions = domains.sort((a, b) => {
//       return distance(a, domain) - distance(b, domain);
//     });
//     return left + "@" + suggestions[0];
//   }
// };
