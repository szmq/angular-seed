var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var shell = require('gulp-shell');

gulp.task('docs', shell.task([
    'node_modules/jsdoc/jsdoc.js '+
    '-c node_modules/angular-jsdoc/common/conf.json '+   // config file
    '-t node_modules/angular-jsdoc/angular-template '+   // template file
    '-d docs '+                        // output directory
    './README.md ' +                   // to include README.md as index contents
    '-r src ' +                        // source code directory
    '-u tutorials',                    // tutorials directory
]));

var src = './src/';
var build = './build/';

var paths = {
    sass: src + './scss/app.scss',
    js: src + './**/*.js',
    json: src + './**/*.json',
    html: src + './**/*.html',
};

var sassOptions = {
    errLogToConsole: true,
    outputStyle: 'compressed',
};

var autoprefixerOptions = {
    browers: ['last 2 versions', '> 5%', 'Firefox ESR'],
};

gulp.task('html', function() {
    gulp
        .src(paths.html)
        .pipe(gulp.dest(build));
});

gulp.task('json', function() {
    gulp
        .src(paths.json)
        .pipe(gulp.dest(build));
});

gulp.task('sass-compile', function() {
    gulp
        .src(paths.sass)
        .pipe(sass(sassOptions).on('error', sass.logError))
        .pipe(autoprefixer(autoprefixerOptions))
        .pipe(gulp.dest(build));
});

gulp.task('watch', function() {
    gulp
        .watch(paths.sass, ['sass-compile'])
        .on('change', function(event) {
            console.log('File ' + event.path + ' was ' +
                        event.type + ', running tasks...');
        });
    gulp
        .watch(paths.html, ['html'])
        .on('change', function(event) {
            console.log('File ' + event.path + ' was ' +
                        event.type + ', running tasks...');
    });
    gulp
        .watch(paths.json, ['json'])
        .on('change', function(event) {
            console.log('File ' + event.path + ' was ' +
                        event.type + ', running tasks...');
        });
    gulp
        .watch(paths.js, ['docs'])
        .on('change', function(event) {
            console.log('File ' + event.path + ' was ' +
                        event.type + ', running tasks...');
        });
});

gulp.task('default', ['docs', 'html', 'json', 'sass-compile']);
gulp.task('dev', ['default', 'watch']);
gulp.task('build', ['default']);
