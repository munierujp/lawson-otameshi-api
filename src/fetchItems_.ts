import parseDate_ from './parseDate_'

// NOTE: Below function will be private in Google Apps Script.
function fetchItems_ (): Item[] {
  const resp = UrlFetchApp.fetch('http://www.lawson.co.jp/ponta/tsukau/otameshi/index.html')
  const html = resp.getContentText()
  const itemList = html.match(/<ul class="col-2 heightLineParent">([\s\S]*?)<\/ul>/)[1]
  const items = itemList.match(/<li>[\s\S]*?<\/li>/g)
  return items.map(item => {
    const title = item.match(/<p class="ttl">(.*?)<\/p>/)[1]
    const image = 'http://www.lawson.co.jp' + item.match(/<img src="(.*?)"/)[1]
    const startDate = parseDate_(item.match(/<dt>発券開始日<\/dt><dd>(.*?)～?<\/dd>/)[1], 'YYYY.MM.DD HH:mm')
    const point = Number(item.match(/<dt>ポイント<\/dt><dd>(.*?)P?<\/dd>/)[1])
    const detail = item.match(/<dt>詳細<\/dt><dd>(.*?)<\/dd>/)[1]
    return {
      title,
      image,
      startDate,
      point,
      detail
    }
  })
}

// NOTE: Below statement will be removed by clasp.
export default fetchItems_
