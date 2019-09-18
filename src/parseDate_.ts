import moment from './moment'

function parseDate_ (dateString: string, pattern: string): Date {
  return moment(dateString, pattern).toDate()
}

export default parseDate_
