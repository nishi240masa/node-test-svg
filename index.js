const express = require('express');
const app = express();

const fs = require('fs');


const port = 3000; // 使用するポート番号を指定


app.get('/', (req, res) => {
    res.send('Hello World!');
});

// // SVGを生成する関数
// function generateSVG() {

//   // SVGを生成するコードをここに記述
//   return '<svg xmlns="http://www.w3.org/2000/svg" width=" height="200"><rect width="200" height="200" style="fill:rgb(0,0,255);stroke-width:1;stroke:rgb(0,0,0)" /></svg>';
// }

app.get('/generate-svg', function (req, res,next)  {
  // SVGを生成するコードをここに記述
  const whid = req.query.whid;
  const height = req.query.height;

  // GitHub READMEに表示する形式でSVGを設定
  res.setHeader('Content-Type', 'image/svg+xml');
  res.send(`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <rect width="${whid}px" height="${height}px" fill="#eada" />
  </svg>`);
});

const gifPath = './cat.gif'; // サーバー上のGIF画像のパス

// ルートエンドポイント
app.get('/api/gif', (req, res) => {
  // サーバー上のGIF画像を読み込み、ブラウザに送信
  fs.readFile(gifPath, (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    } else {
      // レスポンスヘッダーを設定してGIF画像を送信
      res.header('Content-Type', 'image/gif');
      res.status(200).send(data);
    }
  });
});


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
