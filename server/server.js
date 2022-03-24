const express = require('express');
const cors = require('cors');
const exp = require('constants');
require('dotenv').config();

const baseURL = '/localseelocaldo/';
const {getMessages, registerUser, loginUser} = require('./controller');
const {seed} = require('./seed');

const app = express();

app.use(express.json());
app.use(cors());

app.get('/seed', seed);
app.get(baseURL + 'test', getMessages);
app.post(baseURL + 'register_user', registerUser);
app.post(baseURL + 'login', loginUser);



app.listen(process.env.SERVER_PORT, () => console.log(`server running at ${process.env.SERVER_PORT}`));
