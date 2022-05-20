const express = require('express');
const cors = require('cors');
const app = express();
const port = 8888;
const v1 = require('./controllers/v1');
const ui = require('swagger-ui-express');
const swaggerdoc = require('./swagger.json');
const path = require('path');

const public = path.resolve(__dirname, 'public');
app.use('/', express.static(public));

const css = path.resolve(public, 'static/css');
app.use('/static/css', express.static(css));

const js = path.resolve(public, 'static/js');
app.use('/static/js', express.static(js));

app.use(express.json());
app.use(cors({
    origin:['http://localhost:3000']
}));

app.use('/v1',v1);

app.use('/swagger',ui.serve);
app.use('/swagger',ui.setup(swaggerdoc));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});