const path = require("path");
const express = require("express")

const app = express();
const PORT = 3004;

app.use(express.json())
app.use(express.urlencoded({extended: true }));

app.use(express.static(__dirname + '/../client/dist'));

app.get('/hello', (req, res) => {
  console.log('Hello World');
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});