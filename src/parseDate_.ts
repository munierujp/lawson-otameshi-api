import moment from './moment'

// NOTE: Below function will be private in Google Apps Script.
function parseDate_ (dateString: string, pattern: string): Date {
  return moment(dateString, pattern).toDate()
}

// NOTE: Below statement will be removed by clasp.
export default parseDate_
