/**
 *renderpage.js
 */

'use strict';
var jade = require('jade'),
    path = require('path'),
    localStorage = global.localStorage,
    FileManager = global.getFileManager(),
    $ = global.jQuery;

function fetchData(day, week) {
    var weekData = localStorage.getItem('yunqi_baby'),
        dayData = localStorage.getItem('yunqi_tip');
    return {
        dayTip: JSON.parse(dayData)[day],
        weekTip: JSON.parse(weekData)[week]
    }
}

function renderIndex(day, week) {
    var startTime = new Date();
    var source = localStorage.getItem('jade-index'),
        locals = fetchData(day, week),
        html = jade.render(source, locals);
    $('#main').html(html);
    var stopTime = new Date();
    console.log('renderpage', stopTime - startTime);
}
renderIndex(2, 0);
$('#refresh').click(function () {
    renderIndex(16, 2);
})