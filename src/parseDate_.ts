import Moment from './Moment'

function parseDate_ (dateString: string, pattern: string): Date {
  return Moment.moment(dateString, pattern).toDate()
}

export default parseDate_
