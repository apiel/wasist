"use strict";
exports.__esModule = true;
var magic_1 = require("./magic");
function getList() {
    return magic_1.magic(function () { return require('./server/data').getList; });
}
exports.getList = getList;
