/**
*yunqi.js get yunqi data
*/
'use strict';
var fs=require('fs'),
    path=require('path'),
    localStorage=global.localStorage;
function readFile(dataName){
    var fpath=path.join(__dirname,'..','static/js',dataName+'.json');
        buffer = fs.readFileSync(fpath);
    return buffer.toString();
}

