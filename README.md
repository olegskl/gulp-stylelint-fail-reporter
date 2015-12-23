# gulp-stylelint-fail-reporter

[![Build Status](https://travis-ci.org/olegskl/gulp-stylelint-fail-reporter.svg?branch=master)](https://travis-ci.org/olegskl/gulp-stylelint-fail-reporter)
[![Code Climate](https://codeclimate.com/github/olegskl/gulp-stylelint-fail-reporter/badges/gpa.svg)](https://codeclimate.com/github/olegskl/gulp-stylelint-fail-reporter)

A [gulp-stylelint](https://github.com/olegskl/gulp-stylelint) reporter that fails a [stylelint](https://github.com/stylelint/stylelint) linting task with non-zero exit code.

## Installation

```bash
npm install gulp-stylelint-fail-reporter --save-dev
```

## Quick start

```js
import gulpStylelint from 'gulp-stylelint';
import failReporter from 'gulp-stylelint-fail-reporter';

gulp.task('lint-css', function lintCssTask() {
  return gulp
    .src('src/**/*.css')
    .pipe(gulpStylelint({
      reporters: [
        failReporter()
      ]
    }));
});
```

## License

http://opensource.org/licenses/mit-license.html
