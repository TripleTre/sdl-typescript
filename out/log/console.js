"use strict";
const colors = require('colors');
const SourceMap = require('source-map');
const path = require('path');
const fs = require('fs');
const START_BORDER = '╭──╮\n';
const END_BORDER = '╰──╯\n';
function error(message) {
    let { line, column, source } = sourceInfo(), outMessage;
    console.log(START_BORDER + strWrap((' Error: ').bold['red']) +
        strWrap(message, 7) + strWrap((' Where: ').bold['red']) +
        strWrap(source + ':' + line + ':' + column, 7) + END_BORDER);
}
exports.error = error;
function sourceInfo() {
    let e = new Error(), file, line, column, fileLineColumn, relativeMapPath, absoluteMapPath, mapContent, mapConsumer, mapPhaserResult;
    fileLineColumn = e.stack.match(/\([/\\].*\)/g)[2];
    [, file, line, column] = fileLineColumn.match(/\((.+):(\d+):(\d+)/);
    relativeMapPath = fs.readFileSync(file, 'utf-8').match(/^.*sourceMappingURL=(.*$)/m)[1];
    absoluteMapPath = path.resolve(path.dirname(file), relativeMapPath);
    mapContent = fs.readFileSync(absoluteMapPath, 'utf-8');
    mapConsumer = new SourceMap.SourceMapConsumer(JSON.parse(mapContent));
    mapPhaserResult = mapConsumer.originalPositionFor({
        line: +line,
        column: +column
    });
    return Object.assign(mapPhaserResult, {
        source: path.resolve(path.dirname(absoluteMapPath), mapPhaserResult.source)
    });
}
function strWrap(str, preSpace = 0) {
    let index = 0, ret = '';
    const FIX = '│';
    const PRESPACE = makeWhitespace(preSpace);
    while (index < str.length) {
        let subItem = str.substr(index, 128 - preSpace);
        ret += FIX + PRESPACE + subItem + makeWhitespace(128 - subItem.length - preSpace) + '\n';
        index = index + 128 - preSpace;
    }
    return ret;
}
function makeWhitespace(count) {
    return Array(count + 1).join(' ').toString();
}
//# sourceMappingURL=console.js.map