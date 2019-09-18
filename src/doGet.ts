import fetchItems_ from './fetchItems_'
import isSameDay_ from './isSameDay_'
import createJSONResponse_ from './createJSONResponse_'

// NOTE: Below function will be public in Google Apps Script.
function doGet (e: GoogleAppsScript.Events.AppsScriptHttpRequestEvent): GoogleAppsScript.Content.TextOutput {
  const params: any = e.parameter
  const date: string = params.date // ISO 8601 (YYYY-MM-DD)
  let items = fetchItems_()
  const isNotEmpty: (any) => boolean = value => typeof value !== 'undefined' && value !== ''
  if (isNotEmpty(date)) {
    items = items.filter(item => isSameDay_(item.startDate, date))
  }
  const resp = items.map(item => {
    return {
      title: item.title,
      image: item.image,
      start_date: item.startDate,
      point: item.point,
      detail: item.detail
    }
  })
  return createJSONResponse_(resp)
}

// NOTE: Below statement will be removed by clasp.
export default doGet
