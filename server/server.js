const express = require('express');
const cors = require('cors');
const exp = require('constants');
require('dotenv').config();

const baseURL = '/localseelocaldo/';
const {registerUser, loginUser, isLocal, loadCities, getCountryCityID, postNewTripDraft, addTitleAndDescription, addDay, getDate, addEvent, getDaySchedule, get_trip_drafts, get_trip_requests_from_travelers, get_local_id, get_trip_proposals_title_discription, get_trip_proposals_days, get_trip_proposals_events, add_to_my_trip_plan, add_my_day_plan, add_my_events, delete_day_plans, delete_trip_proposal_trip_draft, get_my_trip_plans, get_my_trip_days, get_my_events} = require('./controller');
const {seed} = require('./seed');

const app = express();

app.use(express.json());
app.use(cors());
 
app.get('/seed', seed);
app.get(baseURL + 'isLocal/:user_id', isLocal)
app.get(baseURL + 'load_cities/:country_name', loadCities);
app.get(baseURL + 'getCountryCityID/:city_name', getCountryCityID)
app.get(baseURL + 'get_date', getDate);
app.get(baseURL + 'day_schedule', getDaySchedule);
app.get(baseURL + 'get_trip_drafts/:user_id', get_trip_drafts);
app.get(baseURL + 'get_trip_requests_from_travelers/:city_name', get_trip_requests_from_travelers);
app.get(baseURL + 'get_local_id/:user_id', get_local_id);
app.get(baseURL + 'get_trip_proposals_title_discription/:user_id', get_trip_proposals_title_discription);
app.get(baseURL + `get_trip_proposals_days/:trip_proposal_id`, get_trip_proposals_days);
app.get(baseURL + `get_trip_proposals_events/:day_plan_id`, get_trip_proposals_events);
app.get(baseURL + 'get_my_trip_plans/:user_id', get_my_trip_plans);
app.get(baseURL + `get_my_trip_days/:my_trip_id`, get_my_trip_days);
app.get(baseURL + `get_my_events/:my_day_plan_id`, get_my_events);

app.post(baseURL + 'register_user', registerUser);
app.post(baseURL + 'login', loginUser);
app.post(baseURL + 'post_new_trip_draft', postNewTripDraft);
app.post(baseURL + 'add_title_description', addTitleAndDescription);
app.post(baseURL + 'add_day', addDay);
app.post(baseURL + 'add_event', addEvent);
app.post(baseURL + 'add_to_my_trip_plan/:trip_proposal_id', add_to_my_trip_plan);
app.post(baseURL + 'add_my_day_plan', add_my_day_plan);
app.post(baseURL + 'add_my_events', add_my_events);

app.delete(baseURL + `delete_day_plans/:trip_draft_id`, delete_day_plans);
app.delete(baseURL + `delete_trip_proposal_trip_draft/:trip_draft_id`, delete_trip_proposal_trip_draft);

app.listen(process.env.SERVER_PORT, () => console.log(`server running at ${process.env.SERVER_PORT}`));
