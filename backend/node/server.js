const express = require('express');
const cors = require("cors");
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

var whitelist = []

app.get('/', (req, res) => {
  res.send("Hello World!");
});

app.get('/register', (req, res) => {
  res.json(whitelist);
});

app.post('/register', (req, res) => {
  const { whitelist: wl } = req.body;
  if( wl ){
    whitelist = wl;
  }
  res.json( whitelist );
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
