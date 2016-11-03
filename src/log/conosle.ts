const colors = require('colors');

export function error(message: string, line: boolean = false) {
  let e = new Error();
  console.log((message)['red'], e);
}
