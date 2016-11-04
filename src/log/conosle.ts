const colors = require('colors');
import path = require('path');

export function error(message: string, line: boolean = false) {
  let e = new Error();
  let list = e.stack.match(/\([/\\].*\)/g)[0];
  console.log((message)['red'], list);
}

function position() {
  let e = new Error(), path;
}
