/**
 *localize.js
 */
'use strict';
var startTime=new Date();
var fs = require('fs'),
    path = require('path'),
    FileManager = global.getFileManager(),
    localStorage = global.localStorage;

function readFile(dataName, callback) {
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

function localizeViews(){
    var files=['index'];
    for( var i in files){
        var filePath=path.join(FileManager.appViewsDir,'index.jade'),
            html=fs.readFileSync(filePath);
        localStorage.setItem('jade-'+files[i],html);
    }
}

localizeData();
localizeViews();
var stopTime=new Date();
console.log('localize',stopTime-startTime);
