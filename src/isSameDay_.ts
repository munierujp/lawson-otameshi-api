import moment from './moment'

// NOTE: Below function will be private in Google Apps Script.
function isSameDay_ (date1: any, date2: any): boolean {
  return moment(date1).isSame(date2, 'day')
}

// NOTE: Below statement will be removed by clasp.
export default isSameDay_
