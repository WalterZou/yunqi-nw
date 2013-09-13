/**
 *localize.js
 */
'use strict';
var fs = require('fs'),
    path = require('path'),
    FileManager = global.getFileManager(),
    localStorage = global.localStorage;

function readFile(dataName, callback) {
    var fpath = path.join(FileManager.appStaticDir, '/js', dataName + '.json'),
        buffer = fs.readFileSync(fpath);
    callback(buffer.toString());
}

//缓存孕期提醒数据
function localizeData() {
    var dataName = ['yunqi_tip', 'yunqi_baby'];
    for (var i = 0; i < dataName.length; i++) {
        var name = dataName[i];
        readFile(name, function (data) {
            localStorage.setItem(name, data);
        })
    }
}

//缓存template
function localizeViews(){
    var files=['indexContent','indexTabs'];
    for( var i in files){
        var filePath=path.join(FileManager.appViewsDir,files[i]+'.jade'),
            html=fs.readFileSync(filePath);
        localStorage.setItem('jade-'+files[i],html);
    }
}

//生成孕期日历
function pregnancyCal(DueDate){
    var DD=new Date(DueDate),
        year=DD.getFullYear(),
        month=DD.getMonth()+1,
        day=DD.getDate(),
        cal=[DueDate];
     for(var i=1;i<280;i++){
        if(day<=1){
            month-=1;
            switch(month){
                case 4:
                case 6:
                case 9:
                case 11:
                    day=30;
                break;
                case 2:
                    if(year%4==0){
                        day=29;
                    }else{
                        day=28;
                    }
                break;
                case 0:
                    year-=1;
                    month=12;
                    day=31;
                break;
                default:
                    day=31;
            }
        }else{
            day-=1;
        }
        cal.unshift(year+'-'+month+'-'+day); 
    }
    return cal;
}
//缓存孕期日历
function localizeCal(){
    var fpath=path.join(FileManager.appSettingsDir,'settings.json'),
        str=fs.readFileSync(fpath,'utf-8').toString(),
        settings=JSON.parse(str),
        cal=pregnancyCal(settings.DueDate);
    localStorage.setItem('cal',JSON.stringify(cal));
}

localizeData();
localizeViews();
localizeCal();

