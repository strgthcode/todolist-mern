const express = require('express');
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require('./routes/api');
const path = require('path');

const app = express();

const port = 5000;

const dbName = 'todolistDB';
const url = `mongodb://localhost:27017/${dbName}`;

mongoose.connect(
url
, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
})
.then(()=> console.log(`Database connected succesfully`))
.catch((err) => console.log(err));




app.use(bodyParser.json());

app.use('/api', routes);

app.use((err, req, res, next) => {
    console.log(err);
    next();
    
})


app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});