/**
 *main.js
 */
'use strict';

//main context
var gui = require('nw.gui'),
    FileManager = require('./script/FileManager');
global.jQuery = jQuery;
global.localStorage = window.localStorage;
global.gui = gui;
global.mainWindow = gui.Window.get();
global.getFileManager = function () {
    return FileManager;
}

Date.prototype.dateDiff = function (date) {
    var startTime = new Date(this.getFullYear() + '-' + (this.getMonth() + 1) + '-' + this.getDate()),
        endTime = new Date(date),
        diff;
    diff=parseInt((endTime - startTime) / 86400000);
    return diff;
}
console.log(new Date().dateDiff('2013-09-16'));
//initialize
require('./script/initialization.js');