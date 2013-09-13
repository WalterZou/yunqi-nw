/**
 *renderpage.js
 */

'use strict';

var jade = require('jade'),
    path = require('path'),
    localStorage = global.localStorage,
    FileManager = global.getFileManager(),
    $ = global.jQuery;

//从localstorage获取提醒数据
function fetchData(day,week) {
    var weekData = localStorage.getItem('yunqi_baby'),
        dayData = localStorage.getItem('yunqi_tip');
    return {
        dayTip: JSON.parse(dayData)[day],
        weekTip: JSON.parse(weekData)[week]
    }
}

function renderIndexContent(day) {
    var source = localStorage.getItem('jade-indexContent'),
        week=parseInt((day)/7),
        locals = fetchData(day, week),
        html = jade.render(source, locals);
    $('#main').html(html);
}

function initPages(){
   var today=new Date().getFullYear()+'-'+(new Date().getMonth()+1)+'-'+new Date().getDate(),
       cal=JSON.parse(localStorage.getItem('cal')),
       curIndex;
    for(var i=0;i<cal.length;i++){
        if(cal[i]==today){
            curIndex=i;
            console.log(i,cal.length);
        }
    }
    if(curIndex===undefined){
        console.log('当前日期不在孕期内');
        return false;
        //TODO
    }
    renderIndexContent(curIndex);
    renderIndexTabs(curIndex,cal.slice(0,curIndex+16));   
}

function renderIndexTabs(cur,days){
    var source= localStorage.getItem('jade-indexTabs'),
        html=jade.render(source,{tabs:days,cur:cur,week:parseInt((cur+1)/7),day:(cur+1)%7});
    $('#tabs').html(html);
}

initPages();
$('.tabs li').click(function () {
    var d= $(this).data('id');
    renderIndexContent(d);
 })