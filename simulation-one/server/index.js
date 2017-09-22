const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');
const products_controller = require('/products_controller');

require('dotenv').config()
//Look into this a bit more
app.use(express.static('public'))
const app = express();
app.use(bodyParser.json());
app.use(cors());

massive(process.env.CONNECTION_STRING).then(dbInstance => app.set('db', dbInstance))


const port = process.env.port || 3000;
app.listen(port, () => {console.log(`Server is listening on port ${port}.`); });
