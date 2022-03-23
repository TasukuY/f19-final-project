const express = require('express');
const cors = require('cors');
const exp = require('constants');

const baseURL = '/locals/';
const {getMessages} = require('./controller');

const app = express();

app.use(express.json());
app.use(cors());

app.get(baseURL + 'test', getMessages);

const SERVER_PORT = 5100;
app.listen(SERVER_PORT, () => console.log(`server running at ${SERVER_PORT}`));
