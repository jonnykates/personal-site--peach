const autoprefixer = require("autoprefixer");
const gulp = require("gulp");
const postcss = require("gulp-postcss");
const sass = require("gulp-sass");
const sourcemaps = require("gulp-sourcemaps");

gulp.task("compile-sass", () =>
  gulp
    .src("./_includes/styles/main.scss")
    .pipe(sourcemaps.init())
    .pipe(
      sass({
        outputStyle: "compressed",
      }).on("error", sass.logError)
    )
    .pipe(postcss([autoprefixer()]))
    .pipe(sourcemaps.write("./"))
    .pipe(gulp.dest("./_includes/styles/"))
);

gulp.task("watch-sass", () =>
  gulp.watch("./_includes/styles/*.scss", gulp.series("compile-sass"))
);

gulp.task("default", gulp.series("compile-sass", "watch-sass"));
