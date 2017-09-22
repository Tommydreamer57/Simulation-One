const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');
const products_controller = require('./server/products_controller');

require('dotenv').config()
//Look into this a bit more

const app = express();
app.use(express.static('public'))
app.use(bodyParser.json());
app.use(cors());

massive(process.env.CONNECTION_STRING).then(dbInstance => app.set('db', dbInstance));

//String is placehold until I can come back this 
app.post('api/product', products_controller.create);
app.get('api/product', products_controller.getShelves);
app.get('api/product', products_controller.getBin);
app.get('api/products', products_controller.getProduct);
app.put('api/products', products_controller.update);
app.delete('api/products', products_controller.delete);''

const port = process.env.port || 3000;
app.listen(port, () => {console.log(`Server is listening on port ${port}.`); });
