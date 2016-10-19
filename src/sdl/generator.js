const Http = require('http');
const jsdom = require("jsdom");
const endOfLine = require('os').EOL;

jsdom.env({
  url: 'https://wiki.libsdl.org/CategoryAPI',
  scripts: [],
  done (err, window) {
    let hints = window.document.querySelector('#content > div:nth-child(21) > ol').children;
    console.log(window.location.host);
    console.log(window.location.protocol);
    console.log(window.location.host);
    Array.prototype.forEach.call(hints, (v) => {
      let a = v.children[0];
      setTimeout(() => {
        hintHandler(a.innerHTML, a.href);
      }, 500);
    });
  }
});

function hintHandler (id, url) {
  console.log(id, url);
  jsdom.env({
    url: url,
    scripts: [],
    done (err, window) {
      let ret = '/**' + endOfLine;
      let illustrate = window.document.querySelectorAll(`[id*=${id}] + * + *`);
      console.log(illustrate[0].textContent);
    }
  })
}
