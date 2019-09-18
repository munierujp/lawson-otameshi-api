import GASUnit from './GASUnit'
import AssertGAS from './AssertGAS'

/* eslint-disable @typescript-eslint/camelcase */
import test_isSameDay_ from './isSameDay_-test'
import test_createJSONResponse_ from './createJSONResponse_-test'
import test_parseDate_ from './parseDate_-test'
/* eslint-enable @typescript-eslint/camelcase */

function test (): void {
  const run = createTestRunner_()
  run(test_isSameDay_)
  run(test_createJSONResponse_)
  run(test_parseDate_)
}

function createTestRunner_ (): (testFunction: Function) => void {
  const WEBHOOK_URL = PropertiesService.getScriptProperties().getProperty('WEBHOOK_URL')
  const exports = WEBHOOK_URL !== null ? GASUnit.slack(WEBHOOK_URL).exports : GASUnit.exports
  const assertThat = AssertGAS.assertThat
  return testFunction => testFunction(exports, assertThat)
}

export default test
