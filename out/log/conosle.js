"use strict";
const colors = require('colors');
function error(message, line = false) {
    let e = new Error();
    let list = e.stack.match(/\([/\\].*\)/g)[0];
    console.log((message)['red'], list);
}
exports.error = error;
function position() {
    let e = new Error(), path;
}
//# sourceMappingURL=conosle.js.map