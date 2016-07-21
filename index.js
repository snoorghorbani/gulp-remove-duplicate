'use strict';
var gutil = require('gulp-util');
var multimatch = require('multimatch');
var path = require('path');
var streamfilter = require('streamfilter');


module.exports = function (options) {
    console.log('***********************************AMS')
    options = options || {};
    var history = {};

    return streamfilter(function (file, enc, cb) {
        console.log('***********************************AMS streamfilter')
        //var fileName = file.relative;
        console.log(file.relative)
        //console.log(history)

        if (history[file.relative]) {
            console.log(1)
            cb(true);
            return;
        };
        history[file.relative] = true;

        //var match = typeof pattern === 'function' ? pattern(file) :
		//	multimatch(path.relative(file.cwd, file.path), pattern, options).length > 0;

        cb(false);
    }, {
        objectMode: true,
        passthrough: options.passthough !== false,
        restore: options.restore
    });
};
