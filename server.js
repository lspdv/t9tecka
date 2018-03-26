const express = require('express');
const router = express.Router();
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');
const port = process.env.SERVER_PORT || 5000;

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.listen(port);
console.log('Server runs on port ' + port);
app.use('/api', router);

router.post('/t9ka', (req, res) => {
  const numbersToConvert = req.body.numbers;

  const words = ['word1', 'word2'];
  
    console.log("result server.js", words);
  
    res.json(words);
    res.status(200).send('OK')
}