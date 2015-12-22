/**
 * gulp-stylelint fail reporter.
 * @module gulp-stylelint-fail-reporter
 */

/**
 * Issue counter in Stylelint results.
 * @param  {Array<Object>} resultList List of results in Stylelint format.
 * @return {Number}                   Count of issues (errors and warnings).
 */
function countIssuesInResultList(resultList) {
  return resultList.reduce((resultMemo, result) => resultMemo + result.messages.length, 0);
}

/**
 * Failure trigger.
 * @param  {Array<Object>} resultList List of results in Stylelint format.
 * @throws {Error}                    An error is thrown if linting issues have been detected.
 * @return {undefined}                Nothing is returned.
 */
function failAfterAllIssuesReporter(resultList) {
  const errorCount = countIssuesInResultList(resultList);
  if (errorCount > 0) {
    const errorNotice = errorCount === 1 ? 'issue has' : 'issues have';
    throw new Error(`${errorCount} linting ${errorNotice} been found.`);
  }
}

/**
 * Reporter initialization function.
 * @return {Function} Reporter function.
 */
export default function gulpStylelintFailReporterInit() {
  return failAfterAllIssuesReporter;
}
