// NOTE: Below function will be private in Google Apps Script.
function createJSONResponse_ (obj: object): GoogleAppsScript.Content.TextOutput {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON)
}

// NOTE: Below statement will be removed by clasp.
export default createJSONResponse_
