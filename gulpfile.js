const gulp = require('gulp')
const sass = require('gulp-sass')
const browserSync = require('browser-sync')

//compile sass

gulp.task('sass', () => {
    return gulp.src(['./sass/main.scss'])
    .pipe(sass())
    .pipe(gulp.dest('./src/css'))
    .pipe(browserSync.stream())
})

//watch and serve

gulp.task('serve', ['sass'], () => {
    browserSync.init({
        server: './'
    })
    gulp.watch(['./sass/main.scss'], ['sass'])
    gulp.watch(['./public/index.html']).on('change', browserSync.reload)

    
})

//default

gulp.task('default', ['serve'])