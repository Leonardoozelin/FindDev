const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');

const app = express();

mongoose.connect('mongodb://localhost/Omnistack', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}, (err) => {
  if (err) {
    console.log('Erro: ' + err);
  }
})

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);
