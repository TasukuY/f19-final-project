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

module.exports = {
    registerUser: (req, res) => {
        let {userInfo, authInfo, localInfo} = req.body;
        if(localInfo.registerAsLocal === 'yes'){
            sequelize.query(`
                INSERT INTO users (first_name, last_name, username, country_name, city_name, gender)
                VALUES ('${userInfo.first_name}', '${userInfo.last_name}', '${userInfo.username}', '${userInfo.country_name}', '${userInfo.city_name}', '${userInfo.gender}');
                INSERT INTO auth (user_id, email, password)
                VALUES ((SELECT user_id FROM users Where username='${userInfo.username}'), '${authInfo.email}', '${authInfo.password}');
                INSERT INTO locals (user_id, review) VALUES ((SELECT user_id FROM users Where username='${userInfo.username}'), 3.5);
                
                SELECT u.user_id, u.username, u.country_name, u.city_name, a.email, l.local_id, l.review FROM 
                    users AS u 
                        inner join 
                    auth AS a
                        ON u.user_id = a.user_id 
                        inner join
                    locals AS l
                        on u.user_id = l.user_id
                WHERE u.username = '${userInfo.username}' AND a.email = '${authInfo.email}';
            `)
            .then(dbRes => res.status(200).send(dbRes[0]))
            .catch(err => console.log(err));
        }else{
            sequelize.query(`
                INSERT INTO users (first_name, last_name, username, country_name, city_name, gender)
                VALUES ('${userInfo.first_name}', '${userInfo.last_name}', '${userInfo.username}', '${userInfo.country_name}', '${userInfo.city_name}', '${userInfo.gender}');
                INSERT INTO auth (user_id, email, password)
                VALUES ((SELECT user_id FROM users Where username='${userInfo.username}'), '${authInfo.email}', '${authInfo.password}');

                SELECT u.user_id, u.username, u.country_name, u.city_name, a.email FROM users AS u 
                JOIN auth AS a ON u.user_id = a.user_id 
                WHERE u.username = '${userInfo.username}' AND a.email = '${authInfo.email}';
            `)
            .then(dbRes => res.status(200).send(dbRes[0]))
            .catch(err => console.log(err));
        }
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
    postNewTripDraft: (req, res) => {
        let {user_id, country_id, city_id, start_date, end_date, num_of_ppl, budget, include_hotel_fee, include_meal_fee, include_transport_fee, budget_detail, note} = req.body;
        // num_of_ppl = +num_of_ppl;
        // budget = +budget;

        sequelize.query(`
            insert into trip_drafts (user_id, country_id, city_id, start_date, end_date, num_of_ppl, budget, include_hotel_fee, include_meal_fee, include_transport_fee, budget_detail, note)
            values (${user_id}, ${country_id}, ${city_id}, '${start_date}', '${end_date}', ${num_of_ppl}, ${budget}, ${include_hotel_fee}, ${include_meal_fee}, ${include_transport_fee}, '${budget_detail}', '${note}');
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
    getTitleAndDescription: (req, res) => {
        sequelize.query(`
            SELECT * FROM trip_plan WHERE trip_plan_id = (SELECT MAX(trip_plan_id) FROM trip_plan);
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
    },
    getDayInfo: (req, res) => {
        sequelize.query(`
            SELECT * FROM day_plan WHERE day_plan_id = (SELECT MAX(day_plan_id) FROM day_plan);
        `)
        .then(dbRes => res.status(200).send(dbRes[0]))
        .catch(err => console.log(err));
    },
    getDate: (req, res) => {
        sequelize.query(`
            SELECT date_of_day FROM day_plan WHERE day_plan_id = (SELECT MAX(day_plan_id) FROM day_plan);
        `)
        .then(dbRes => res.status(200).send(dbRes[0]))
        .catch(err => console.log(err));
    },
    addEvent: (req, res) => {
        let {date, event_start_time, event_total_hours, event_title, event_detail, event_color} = req.body;
        sequelize.query(`
            insert into events (day_plan_id, event_start_time, event_total_hours, event_title, event_detail, event_color)
            values((SELECT day_plan_id FROM day_plan WHERE day_plan_id = (SELECT MAX(day_plan_id) FROM day_plan)), TO_TIMESTAMP('${date} ${event_start_time}:00.00', 'YYYY-MM-DD HH24:MI:SS.FF'), ${event_total_hours}, '${event_title}', '${event_detail}', '${event_color}');
        `)
        .then(dbRes => res.status(200).send(dbRes[0]))
        .catch(err => console.log(err));
    },
    getEventInfo: (req, res) => {
        sequelize.query(`
            SELECT * FROM events WHERE event_id = (SELECT MAX(event_id) FROM events);
        `)
        .then(dbRes => res.status(200).send(dbRes[0]))
        .catch(err => console.log(err));
    },
    getDaySchedule: (req, res) => {
        sequelize.query(`
            SELECT *
            FROM day_plan AS d
            JOIN events AS e
            ON d.day_plan_id = e.day_plan_id
            WHERE d.day_plan_id = (SELECT day_plan_id FROM day_plan WHERE day_plan_id = (SELECT MAX(day_plan_id) FROM day_plan));
        `)
        .then(dbRes => res.status(200).send(dbRes[0]))
        .catch(err => console.log(err));
    }
}

