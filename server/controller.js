const trip_plans = require('./trip_plan_db.json');
require('dotenv').config()
const Sequelize = require('sequelize');
const sequelize = new Sequelize(process.env.CONNECTION_STRING, {
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false
        }
    }
})

let trip_plan_id = 0;
let trip_plan_post_id = 0;
let traveler_id = 0;

let tempTripPlanObj = {
    "trip_plan_id": trip_plan_id,
    "trip_plan_post_id": trip_plan_post_id,
    "traveler_id": traveler_id,
    "trip_title": "",
    "trip_description": "",
    "day_plans": [
        {
            "date": "",
            "events": [
                {
                    "event_title": "",
                    "start_time": "",
                    "total_hours": 0,
                    "event_detail": "",
                    "event_color": ""
                }
            ]
        }
    ]
}

module.exports = {
    getMessages: (req, res) => {
        res.status(200).send(trip_plans);
    },
    registerUser: (req, res) => {
        let {travelerInfo, authInfo, localInfo} = req.body;
        sequelize.query(`
            INSERT INTO travelers (first_name, last_name, username, gender)
            VALUES ('${travelerInfo.first_name}', '${travelerInfo.last_name}', '${travelerInfo.username}', '${travelerInfo.gender}');
            INSERT INTO auth (traveler_id, email, password)
            VALUES ((SELECT traveler_id FROM travelers Where username='${travelerInfo.username}'), '${authInfo.email}', '${authInfo.password}');
        `)
        .then(dbRes => res.status(200).send(dbRes[0]))
        .catch(err => console.log(err));
    },
    loginUser: (req, res) => {
        let {email, password} = req.body;
        sequelize.query(`
            SELECT * FROM auth WHERE email = '${email}' AND password = '${password}';
        `)
        .then(dbRes => res.status(200).send(dbRes[0]))
        .catch(err => console.log(err));
    },
    loadCities: (req, res) => {
        let {country_name} = req.params;
        sequelize.query(`
            SELECT * FROM cities WHERE country_id = (SELECT country_id FROM countries WHERE country_name = '${country_name}');
        `)
        .then(dbRes => res.status(200).send(dbRes[0]))
        .catch(err => console.log(err))
    },
    getCountryId: (req, res) => {
        let {country_name} = req.params;
        sequelize.query(`
            SELECT country_id FROM countries WHERE country_name = '${country_name}'; 
        `)
        .then(dbRes => res.status(200).send(dbRes[0]))
        .catch(err => console.log(err))
    },
    getCityID: (req, res) => {
        let {city_name} = req.params;
        sequelize.query(`
            SELECT city_id FROM cities WHERE city_name = '${city_name}'; 
        `)
        .then(dbRes => res.status(200).send(dbRes[0]))
        .catch(err => console.log(err))
    },
    postNewTripPlan: (req, res) => {
        let {traveler_id, country_id, city_id, start_date, end_date, num_of_ppl, budget, include_hotel_fee, include_meal_fee, include_transport_fee, budget_detail, note} = req.body;
        // num_of_ppl = +num_of_ppl;
        // budget = +budget;

        sequelize.query(`
            insert into new_trip_plan (traveler_id, country_id, city_id, start_date, end_date, num_of_ppl, budget, include_hotel_fee, include_meal_fee, include_transport_fee, budget_detail, note)
            values (${traveler_id}, ${country_id}, ${city_id}, '${start_date}', '${end_date}', ${num_of_ppl}, ${budget}, ${include_hotel_fee}, ${include_meal_fee}, ${include_transport_fee}, '${budget_detail}', '${note}');
        `)
        .then(dbRes => res.status(200).send(dbRes[0]))
        .catch(err => console.log(err));
    },
    addTitleAndDescription: (req, res) => {
        let {trip_title, trip_description} = req.body;
        sequelize.query(`
            insert into trip_plan (new_trip_plan_id, local_id, trip_plan_title, trip_plan_description)
            values(1, 1, '${trip_title}', '${trip_description}');        
        `)
        .then(dbRes => res.status(200).send(dbRes[0]))
        .catch(err => console.log(err));
    },
    addDay: (req, res) => {
        let {date_of_day, title_day, description_day} = req.body;
        sequelize.query(`
            insert into day_plan(trip_plan_id, date_of_day, title_day, description_day)
            values 
            ((SELECT trip_plan_id FROM trip_plan WHERE trip_plan_id = (SELECT MAX(trip_plan_id) FROM trip_plan)), '${date_of_day}', '${title_day}', '${description_day}');
        `)
        .then(dbRes => res.status(200).send(dbRes[0]))
        .catch(err => console.log(err));
    }
}

