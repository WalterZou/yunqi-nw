/**
 *initialization.js
 */
'use strict';
var fs = require('fs'),
    path = require('path'),
    FileManager = global.getFileManager(),
    localStorage = global.localStorage;

function readFile(dataName, callback) {
    console.log(FileManager.appStaticDir);
    var fpath = path.join(FileManager.appStaticDir, '/js', dataName + '.json'),
        buffer = fs.readFileSync(fpath);
    callback(buffer.toString());
}

function localizeData() {
    var dataName = ['yunqi_tip', 'yunqi_baby'];
    for (var i = 0; i < dataName.length; i++) {
        var name = dataName[i];
        readFile(name, function (data) {
            localStorage.setItem(name, data);
        })
    }
}
localizeData();