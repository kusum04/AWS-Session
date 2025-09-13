const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello, Node is fun to learn! Leaning DevOps in funway.' + 1/0);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
