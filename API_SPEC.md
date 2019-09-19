# API仕様
## 商品
<table>
<tr><th>プロパティ</th><th>型</th><th>フォーマット</th></tr>
<tr><td>title</td><td>string</td><td></td></tr>
<tr><td>image</td><td>string</td><td>URL</td></tr>
<tr><td>start_date</td><td>string</td><td>ISO 8601</td></tr>
<tr><td>point</td><td>number</td><td></td></tr>
<tr><td>detail</td><td>string</td><td></td></tr>
</table>

### GET /
#### リクエスト
##### URL
<table>
<tr><th>パラメーター</th><th>型</th><th>フォーマット</th></tr>
<tr><td>date</td><td>string</td><td>ISO 8601</td></tr>
</table>

#### レスポンス
##### コード
|code|condition|
|---|---|
|200|Success|

##### ボディ
商品の配列

#### 例
```js
const URL_BASE = 'https://script.google.com/macros/s/XXX/exec'
const url = `${URL_BASE}?date=2019-08-31`
const resp = await fetch(url)
const body = await resp.text()
const items = JSON.parse(body)
console.log(items)
```

```json
[
  {
  "title": "カルビー　ポテリッチ　濃厚バター醤油味(80g)/オリーブ＆ガーリック味(70g)",
  "image": "http://www.lawson.co.jp/ponta/calender/files/ota_190801_146.png",
  "start_date": "2019-08-31T11:00:00.000Z",
  "point": 50,
  "detail": "先着合計17,000個"
  }
]
```
