import parseDate_ from './parseDate_'

// NOTE: Below function will be private in Google Apps Script.
function fetchItems_ (): Item[] {
  const resp = UrlFetchApp.fetch('http://www.lawson.co.jp/ponta/tsukau/otameshi/index.html')
  const html = resp.getContentText()
  const itemList = html.match(/<ul class="col-2 heightLineParent">([\s\S]*?)<\/ul>/)[1]
  const items = itemList.match(/<li>[\s\S]*?<\/li>/g)
  return items.map(item => {
    const extract = pattern => item.match(pattern)[1].trim()
    const title = extract(/<p class="ttl">([\s\S]*?)<\/p>/)
    const image = 'http://www.lawson.co.jp' + extract(/<img src="([\s\S]*?)"/)
    const startDate = parseDate_(extract(/<dt>発券開始日<\/dt><dd>([\s\S]*?)～?<\/dd>/), 'YYYY.MM.DD HH:mm')
    const point = Number(extract(/<dt>ポイント<\/dt><dd>([\s\S]*?)P?<\/dd>/))
    const detail = extract(/<dt>詳細<\/dt><dd>([\s\S]*?)<\/dd>/)
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
