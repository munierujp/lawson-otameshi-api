import moment from './moment'

function isSameDay_ (date1: any, date2: any): boolean {
  return moment(date1).isSame(date2, 'day')
}

export default isSameDay_
