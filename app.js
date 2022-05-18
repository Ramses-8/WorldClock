const express = require('express');
const path = require('path');
const app = express();
const port = 8880;

const timezones = require('./controllers/timezones');
app.use('/timezones',timezones);

const folder = path.resolve(__dirname,'public');
app.use('/',express.static(folder));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

/*
city_id
city
timezone
*/
