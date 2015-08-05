/**
 * Protocols
 * Returns the protocols of an input url.
 *
 * @name Protocols
 * @function
 * @param {String} input The input url.
 * @param {Boolean|Number} first If `true`, the first protocol will be returned. If number, it will represent the zero-based index of the protocols array.
 * @return {Array|String} The array of protocols or the specified protocol.
 */
function Protocols(input, first) {

    if (first === true) {
        first = 0;
    }

    var index = input.indexOf("://")
      , splits = input.substring(0, index).split("+") || []
      ;

    if (typeof first === "number") {
        return splits[first];
    }

    return splits;
}

module.exports = Protocols;
