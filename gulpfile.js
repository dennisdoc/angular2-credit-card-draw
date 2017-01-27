var gulp = require('gulp');
var embedTemplates = require('gulp-angular-embed-templates');
 
gulp.task('js:build', function () {
    gulp.src('./src/card.component.ts') // also can use *.js files 
        .pipe(embedTemplates({sourceType:'ts'}))
        .pipe(gulp.dest('./dist'));
});