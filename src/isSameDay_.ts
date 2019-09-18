import Moment from './Moment'

function isSameDay_ (date1: any, date2: any): boolean {
  return Moment.moment(date1).isSame(date2, 'day')
}

export default isSameDay_
