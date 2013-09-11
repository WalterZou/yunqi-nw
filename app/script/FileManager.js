/**
 * FileManager.js
 */
'use strict';

var path = require('path');

exports.appRootDir = process.cwd();
exports.appDataDir = path.join(exports.appRootDir, 'app');
exports.appScriptDir = path.join(exports.appDataDir, 'script');
exports.appStaticDir = path.join(exports.appDataDir, 'static');
exports.appViewDir = path.join(exports.appDataDir, 'view');
exports.packageJsonFile = path.join(exports.appRootDir, 'package.json');


