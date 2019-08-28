import fetchItems_ from './fetchItems_'
import isSameDay_ from './isSameDay_'
import createJSONResponse_ from './createJSONResponse_'

// NOTE: Below function will be public in Google Apps Script.
function doGet (e: GoogleAppsScript.Events.AppsScriptHttpRequestEvent) {
  const date = e.parameter.date // ISO 8601 (YYYY-MM-DD)
  let items = fetchItems_()
  if (date) {
    items = items.filter(item => isSameDay_(item.startDate, date))
  }
  items = items.map(item => {
    return {
      title: item.title,
      image: item.image,
      start_date: item.startDate,
      point: item.point,
      detail: item.detail
    }
  })
  return createJSONResponse_(items)
}

// NOTE: Below statement will be removed by clasp.
export default doGet
