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
<table>
<tr><th>パラメーター</th><th>型</th><th>フォーマット</th></tr>
<tr><td>date</td><td>string</td><td>ISO 8601</td></tr>
</table>

#### レスポンス
商品の配列

#### 例
```sh
$ curl example.com/?date=2019-08-30
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
