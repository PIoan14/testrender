const express = require('express');

const app = express();
const port = 3000;

// Ruta care returnează mesajul direct
app.get('/r', (req, res) => {
  res.send('Suntem pe web');
});

app.listen(port, () => {
  console.log(`Serverul rulează la http://localhost:${port}`);
});
