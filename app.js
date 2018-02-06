const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const multer = require('multer');
const upload = multer({dest:'uploads/'});
// so app can be deployed on heroku
var port = process.env.PORT || 3000;

var app = express();
app.use(bodyParser.json());
app.use(cors());

app.use(express.static(__dirname + '/public'));

app.post('/upload', upload.single('file'), (req, res, next) => {
  return res.json(req.file);
});

app.listen(port, () => {
  console.log(`Server is up and running on port ${port}`);
});

module.exports = {app};