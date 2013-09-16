/**
 *main.js
 */
"use strict";

//main context
var gui         = require('nw.gui'),
    FileManager = require('./scripts/FileManager');

global.jQuery         = jQuery;
global.localStorage   = window.localStorage;
global.gui            = gui;
global.mainWindow     = gui.Window.get();
global.getFileManager = function () {
    return FileManager;
}

function dateDiff(start, end) {
    var startTime = new Date(start),
        endTime   = new Date(end),
        diff      = parseInt((endTime - startTime) / 86400000);
    console.log(startTime, endTime, diff);
    return diff;
}

function caculateDueDate(date, period) {
    var LMP   = new Date(date),
        year  = LMP.getFullYear(),
        month = LMP.getMonth() + 1,
        day   = LMP.getDate(),
        diff  = 7 + period - 28,
        d;
    if (month <= 3) {
        month += 9;
        day = day + diff;
        if (month > 12) {
            year += 1;
            month -= 12;
        }
    } else {
        month -= 3;
        year += 1;
        day = day + diff;
    }
    switch (month) {
    case 4:
    case 6:
    case 9:
    case 11:
        d = 30;
        break;
    case 2:
        if (year % 4 === 0) {
            d = 29;
        } else {
            d = 28;
        }
        break;
    default:
        d = 31;
    }
    if (day > d) {
        month += 1;
        day -= d;
        if (month > 12) {
            year += 1;
        }
    }
    return year + '-' + month + '-' + day;
}

//initialize
require('./scripts/localize.js');
require('./scripts/renderpage.js');