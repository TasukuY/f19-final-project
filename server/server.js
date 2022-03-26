const express = require('express');
const cors = require('cors');
const exp = require('constants');
require('dotenv').config();

const baseURL = '/localseelocaldo/';
const {getMessages, registerUser, loginUser, loadCities, getCountryId, getCityID, postNewTripPlan, addTitleAndDescription, getTitleAndDescription, addDay, getDayInfo, getDate, addEvent, getEventInfo} = require('./controller');
const {seed} = require('./seed');

const app = express();

app.use(express.json());
app.use(cors());

app.get('/seed', seed);
app.get(baseURL + 'test', getMessages);
app.get(baseURL + 'load_cities/:country_name', loadCities);
app.get(baseURL + 'getCountryID/:country_name', getCountryId);
app.get(baseURL + 'getCityID/:city_name', getCityID)
app.get(baseURL + 'get_date', getDate);
app.get(baseURL + 'get_title_description', getTitleAndDescription);
app.get(baseURL + 'get_dayInfo', getDayInfo);
app.get(baseURL + 'get_eventInfo', getEventInfo);

app.post(baseURL + 'register_user', registerUser);
app.post(baseURL + 'login', loginUser);
app.post(baseURL + 'post_new_trip_plan', postNewTripPlan);
app.post(baseURL + 'add_title_description', addTitleAndDescription);
app.post(baseURL + 'add_day', addDay);
app.post(baseURL + 'add_event', addEvent);

app.listen(process.env.SERVER_PORT, () => console.log(`server running at ${process.env.SERVER_PORT}`));
