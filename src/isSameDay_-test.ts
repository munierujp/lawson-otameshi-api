import { Exports } from './types/GASUnit'
import { AssertThat } from './types/AssertGAS'
import isSameDay_ from './isSameDay_'

// eslint-disable-next-line @typescript-eslint/camelcase
function test_isSameDay_ (exports: Exports, assertThat: AssertThat): void {
  exports({
    isSameDay_: {
      'should return true when day of dates is same': () => {
        const date1 = '2019-12-31T00:00:00'
        const date2 = '2019-12-31T23:59:59'
        assertThat(isSameDay_(date1, date2)).isTrue()
      },
      'should return false when day of dates is not same': () => {
        const date1 = '2019-12-31T00:00:00'
        const date2 = '2019-12-30T23:59:59'
        assertThat(isSameDay_(date1, date2)).isFalse()
      }
    }
  })
}

// eslint-disable-next-line @typescript-eslint/camelcase
export default test_isSameDay_
