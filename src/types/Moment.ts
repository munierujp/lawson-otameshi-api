export type moment = (value: any, pettern?: string) => {
  toDate(): Date
  isSame(date1: any, date2: any): boolean
}
