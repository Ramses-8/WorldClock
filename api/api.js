const express = require('express');
const cors = require('cors');
const app = express();
const port = 8888;
const v1 = require('./controllers/v1');
const ui = require('swagger-ui-express');
const swaggerdoc = require('./swagger.json');

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