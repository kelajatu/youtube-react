const objMap = ["years", "months", "days", "hours", "minutes", "seconds"];
const numbers = "\\d+(?:[\\.,]\\d{0,3})?";
const datePattern = `(${numbers}Y)?(${numbers}M)?(${numbers}D)?`;
const timePattern = `T(${numbers}H)?(${numbers}M)?(${numbers}S)?`;
const pattern = new RegExp(`P(?:${datePattern}(?:${timePattern})?)`);

export function parseISO8601TimePattern(durationString) {
  return durationString
    .match(pattern)
    .slice(1)
    .reduce((prev, next, idx) => {
      prev[objMap[idx]] = parseFloat(next) || 0;
      return prev;
    }, {});
}
