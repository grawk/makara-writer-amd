'use strict';

var mkdirp = require('mkdirp');
var spundle = require('spundle');
var iferr = require('iferr');
var path = require('path');
var fs = require('fs');


module.exports = function writeLocale(appRoot) {
    return function (locale, cb) {
        var m = /(.*)-(.*)/.exec(locale); // Use a real BCP47 parser.
        var outputRoot = path.resolve(appRoot, path.join('.build', locale));
        mkdirp(outputRoot, iferr(cb, function () {
            moduleBuilder(appRoot, m, iferr(cb, function (out) {
                fs.writeFile(path.resolve(outputRoot, '_languagepack.js'), out, cb);
            }));
        }));
    }
};
var moduleBuilder = module.exports.moduleBuilder = function (appRoot, m, cb) {
    spundle(path.resolve(appRoot, 'locales'), m[2], m[1], iferr(cb, function (out) {
        cb(null, 'define("_languagepack", function () { return ' + JSON.stringify(out) + '; });');
    }));
};