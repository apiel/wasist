"use strict";
exports.__esModule = true;
var magic_1 = require("./magic");
function getList(input) {
    return magic_1.magic(function () { return require('./server/data').getList; }, input);
}
exports.getList = getList;
// we could do magic<string[]>(...)
