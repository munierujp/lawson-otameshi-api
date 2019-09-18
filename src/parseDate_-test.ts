import { Exports } from './types/GASUnit'
import { AssertThat } from './types/AssertGAS'
import parseDate_ from './parseDate_'

// eslint-disable-next-line @typescript-eslint/camelcase
function test_parseDate_ (exports: Exports, assertThat: AssertThat): void {
  exports({
    parseDate_: {
      'should return Date object': () => {
        const dateString = '2019-12-31T23:59:58'
        const pattern = 'YYYY-MM-DDTHH:mm:ss'
        const date = parseDate_(dateString, pattern)
        assertThat(date instanceof Date).isTrue()
        assertThat(date.getFullYear()).is(2019)
        assertThat(date.getMonth()).is(12 - 1) // Date.getMonth() returns zero-based number
        assertThat(date.getDate()).is(31)
        assertThat(date.getHours()).is(23)
        assertThat(date.getMinutes()).is(59)
        assertThat(date.getSeconds()).is(58)
      }
    }
  })
}

// eslint-disable-next-line @typescript-eslint/camelcase
export default test_parseDate_
