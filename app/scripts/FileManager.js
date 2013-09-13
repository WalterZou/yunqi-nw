/**
 * FileManager.js
 */
'use strict';

var path = require('path');

exports.appRootDir = process.cwd();
exports.appDataDir = path.join(exports.appRootDir, 'app');
exports.appScriptsDir = path.join(exports.appDataDir, 'scripts');
exports.appStaticDir = path.join(exports.appDataDir, 'static');
exports.appViewsDir = path.join(exports.appDataDir, 'views');
exports.appSettingsDir = path.join(exports.appDataDir, 'settings');
exports.packageJsonFile = path.join(exports.appRootDir, 'package.json');


