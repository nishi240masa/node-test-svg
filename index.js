const express = require('express');
const app = express();
const port = 3000; // 使用するポート番号を指定


app.get('/', (req, res) => {
    res.send('Hello World!');
});

// SVGを生成する関数
function generateSVG() {
  // SVGを生成するコードをここに記述
  return '<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200"><rect width="200" height="200" style="fill:rgb(0,0,255);stroke-width:1;stroke:rgb(0,0,0)" /></svg>';
}

app.get('/generate-svg', (req, res) => {
  // SVGを生成するコードをここに記述
  const svgContent = generateSVG(); 

  // GitHub READMEに表示する形式でSVGを設定
  res.setHeader('Content-Type', 'image/svg+xml');
  res.send(svgContent);
});

app.listen(port, () => {
  console.log(`APIサーバーがポート${port}で実行中...`);
});
