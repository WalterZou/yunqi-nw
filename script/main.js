/**
 *main.js
 */
'use script';
//main context
var gui=require('nw.gui');
global.jQuery = jQuery;
global.localStorage = window.localStorage;
global.gui=gui;
global.mainWindow=gui.Window.get();