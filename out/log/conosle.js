"use strict";
const colors = require('colors');
function error(message, line = false) {
    let e = new Error();
    console.log((message)['red'], e);
}
exports.error = error;
//# sourceMappingURL=conosle.js.map