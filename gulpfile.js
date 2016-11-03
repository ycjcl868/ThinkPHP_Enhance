var gulp = require('gulp');  
var minifycss = require('gulp-minify-css');  
var uglify = require('gulp-uglify'); 
//var minifyhtml = require('gulp-minify-html');
var minifyimg = require('gulp-imagemin');
var concat = require('gulp-concat');  
var notify = require('gulp-notify');
var cache = require('gulp-cache');
var clean = require('gulp-clean');
var changedInPlace = require('gulp-changed-in-place');


gulp.task('homecss',function(){  
    return gulp.src('./Apps/Home/View/css/*.css')
    .pipe(changedInPlace({firstPass:true}))  
    .pipe(minifycss())  
    .pipe(gulp.dest('./Apps/Home/min/css'))
});  
  
gulp.task('homejs',function(){  
    return gulp.src('./Apps/Home/View/js/*.js')
    .pipe(changedInPlace({firstPass:true})) 
    .pipe(uglify())  
    .pipe(gulp.dest('./Apps/Home/min/js'))  
});  

gulp.task('homeimages',function(){
    return gulp.src('./Apps/Home/View/images/**')
        //.pipe(minifyimg({optimizationLevel: 3, progressive: true, interlaced: true}))
        //对变动的文件进行压缩
        .pipe(cache(minifyimg({optimizationLevel: 3,progressive: true, interlaced: true})))
        .pipe(gulp.dest('./Apps/Home/min/images'))

});


gulp.task('clean',function(cb){
  return gulp.src(['./Apps/Home/min/css', './Apps/Home/min/js','./Apps/Home/min/images'], {read: false})
    .pipe(clean());
});


gulp.task('default',['clean'],function() {  
    gulp.start('homecss','homejs','homeimages');
  
    gulp.watch('./Apps/Home/View/css/*.css',function(){  
        gulp.run('css');  
    });  
  
    gulp.watch('./Apps/Home/View/js/*.js',function(){  
        gulp.run('minifyjs');  
    });
});  