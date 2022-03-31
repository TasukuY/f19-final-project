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
        let {email, password, isLocal} = req.body;
        if(isLocal){
            sequelize.query(`
                SELECT u.user_id, u.username, u.country_name, u.city_name, a.email, l.local_id, l.review FROM 
                users AS u 
                    inner join 
                auth AS a
                    ON u.user_id = a.user_id 
                    inner join
                locals AS l
                    on u.user_id = l.user_id
                WHERE a.password = '${password}' AND a.email = '${email}';
            `)
            .then(dbRes => res.status(200).send(dbRes[0]))
            .catch(err => console.log(err));
        }else{
            sequelize.query(`
                SELECT u.user_id, u.username, u.country_name, u.city_name, a.email FROM users AS u 
                JOIN auth AS a ON u.user_id = a.user_id 
                WHERE a.password = '${password}' AND a.email = '${email}';
            `)
            .then(dbRes => res.status(200).send(dbRes[0]))
            .catch(err => console.log(err));
        }
    },
    isLocal: (req, res) => {
        let {user_id} = req.params;
        sequelize.query(`
            SELECT l.local_id FROM locals AS l
            JOIN users AS u ON l.user_id = u.user_id 
            WHERE l.user_id = ${user_id};
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
    getCountryCityID: (req, res) => {
        let {city_name} = req.params;
        sequelize.query(`
            SELECT city_id, country_id FROM cities WHERE city_name = '${city_name}'; 
        `)
        .then(dbRes => res.status(200).send(dbRes[0]))
        .catch(err => console.log(err))
    },
    postNewTripDraft: (req, res) => {
        let {user_id, country_id, city_id, start_date, end_date, num_of_ppl, budget, include_hotel_fee, include_meal_fee, include_transport_fee, budget_detail, note} = req.body;
        num_of_ppl = +num_of_ppl;
        budget = +budget;
        sequelize.query(`
            insert into trip_drafts (user_id, country_id, city_id, start_date, end_date, num_of_ppl, budget, include_hotel_fee, include_meal_fee, include_transport_fee, budget_detail, note)
            values (${user_id}, ${country_id}, ${city_id}, '${start_date}', '${end_date}', ${num_of_ppl}, ${budget}, ${include_hotel_fee}, ${include_meal_fee}, ${include_transport_fee}, '${budget_detail}', '${note}');
        `)
        .then(dbRes => res.status(200).send(dbRes[0]))
        .catch(err => console.log(err));
    },
    addTitleAndDescription: (req, res) => {
        let {trip_draft_id, local_id, trip_title, trip_description} = req.body;
        sequelize.query(`
            insert into trip_proposals (trip_draft_id, local_id, proposal_title, proposal_description)
            values (${trip_draft_id}, ${local_id}, '${trip_title}', '${trip_description}');
            SELECT * FROM trip_proposals 
            WHERE trip_draft_id = ${trip_draft_id}
            AND local_id = ${local_id}
            AND proposal_title = '${trip_title}' 
            AND proposal_description = '${trip_description}'; 
        `)
        .then(dbRes => res.status(200).send(dbRes[0]))
        .catch(err => console.log(err));
    },
    addDay: (req, res) => {
        let {trip_proposal_id, day_date, day_title, day_description} = req.body;
        sequelize.query(`
            insert into day_plans(trip_proposal_id, day_date, day_title, day_description)
            values (${trip_proposal_id}, '${day_date}', '${day_title}', '${day_description}');
            select * from day_plans where trip_proposal_id = ${trip_proposal_id} AND day_date = '${day_date}' AND day_title = '${day_title}' AND day_description = '${day_description}';
        `)
        .then(dbRes => res.status(200).send(dbRes[0]))
        .catch(err => console.log(err));
    },
    getDate: (req, res) => {
        sequelize.query(`
            select day_date from day_plans
            where day_plan_id = (SELECT MAX(day_plan_id) FROM day_plans);
        `)
        .then(dbRes => res.status(200).send(dbRes[0]))
        .catch(err => console.log(err));
    },
    addEvent: (req, res) => {
        let {start_time, total_hours, event_title, event_detail, event_color} = req.body;
        sequelize.query(`
            insert into events (day_plan_id, start_time, total_hours, event_title, event_detail, event_color)
            values((SELECT MAX(day_plan_id) FROM day_plans), '${start_time}', ${total_hours}, '${event_title}', '${event_detail}', '${event_color}');
            SELECT * FROM events WHERE day_plan_id = (SELECT MAX(day_plan_id) FROM day_plans) AND event_title = '${event_title}';
        `)
        .then(dbRes => res.status(200).send(dbRes[0]))
        .catch(err => console.log(err));
    },
    getDaySchedule: (req, res) => {
        let {day_plan_id} = req.params;
        sequelize.query(`
            SELECT d.day_plan_id, d.trip_proposal_id, d.day_date, d.day_title, d.day_description, e.start_time, e.total_hours, e.event_title, e.event_detail, e.event_color
            FROM day_plans AS d
            JOIN events AS e
            ON d.day_plan_id = e.day_plan_id
            WHERE d.day_plan_id = (SELECT MAX(day_plan_id) FROM day_plans);
        `)
        .then(dbRes => res.status(200).send(dbRes[0]))
        .catch(err => console.log(err));
    },
    get_trip_drafts: (req, res) => {
        let {user_id} = req.params;
        sequelize.query(`
            SELECT t.trip_draft_id, t.user_id, t.start_date, t.end_date, t.num_of_ppl, t.budget, t.include_hotel_fee, t.include_meal_fee, include_transport_fee, t.budget_detail, t.note, co.country_name, ci.city_name FROM 
                trip_drafts AS t 
                    inner join 
                countries AS co
                    ON t.country_id = co.country_id
                    inner join
                cities AS ci
                    on t.city_id = ci.city_id
            WHERE t.user_id = ${user_id};
        `)
        .then(dbRes => res.status(200).send(dbRes[0]))
        .catch(err => console.log(err));
    },
    get_trip_requests_from_travelers: (req, res) => {
        let {city_name} = req.params;
        sequelize.query(`
            SELECT u.username, t.trip_draft_id, t.user_id, t.start_date, t.end_date, t.num_of_ppl, t.budget, t.include_hotel_fee, t.include_meal_fee, include_transport_fee, t.budget_detail, t.note, co.country_name, ci.city_name 
                FROM 
                trip_drafts AS t 
                    inner join 
                cities AS ci
                    on t.city_id = ci.city_id 
                    inner join
                countries As co
                    on ci.country_id = co.country_id
                    inner join
                users AS u
                    on t.user_id = u.user_id
            WHERE ci.city_name = '${city_name}';          
        `)
        .then(dbRes => res.status(200).send(dbRes[0]))
        .catch(err => console.log(err));
    },
    get_local_id: (req, res) => {
        let {user_id} = req.params;
        sequelize.query(`
            select * from locals where user_id = ${user_id};
        `)
        .then(dbRes => res.status(200).send(dbRes[0]))
        .catch(err => console.log(err));
    },
    get_trip_proposals_title_discription: (req, res) => {
        let {user_id} = req.params;
        sequelize.query(`
            SELECT tp.*, aLocal.username AS local_name, aTraveler.username AS traveler_name, ci.city_name, co.country_name FROM 
                trip_drafts AS td
                inner join 
                cities AS ci
                on td.city_id = ci.city_id
                inner join
                countries AS co
                on ci.country_id = co.country_id
                inner join
                trip_proposals AS tp
                on td.trip_draft_id = tp.trip_draft_id
                inner join 
                users AS aTraveler
                on td.user_id = aTraveler.user_id
                inner join
                locals AS l
                on tp.local_id = l.local_id
                inner join
                users AS aLocal
                on l.user_id = aLocal.user_id
            WHERE td.user_id = ${user_id}
            order by tp.trip_proposal_id;
        `)
        .then(dbRes => res.status(200).send(dbRes[0]))
        .catch(err => console.log(err));
    },
    get_trip_proposals_days: (req, res) => {
        let {trip_proposal_id} = req.params;
        sequelize.query(`
            SELECT d.* FROM 
                trip_proposals AS tp
                    inner join 
                day_plans AS d
                    on tp.trip_proposal_id = d.trip_proposal_id
            WHERE tp.trip_proposal_id = ${trip_proposal_id}
            order by d.day_plan_id;
        `)
        .then(dbRes => res.status(200).send(dbRes[0]))
        .catch(err => console.log(err));
    },
    get_trip_proposals_events: (req, res) => {
        let {day_plan_id} = req.params;
        sequelize.query(`
            SELECT e.* FROM 
                day_plans AS d
                    inner join 
                events AS e
                    on d.day_plan_id = e.day_plan_id
            WHERE d.day_plan_id = ${day_plan_id}
            order by e.event_id;
        `)
        .then(dbRes => res.status(200).send(dbRes[0]))
        .catch(err => console.log(err));
    }, 
    add_to_my_trip_plan: (req, res) => {
        let {trip_proposal_id} = req.params;
        sequelize.query(`
            insert into my_trip_plans(user_id, local_id, country_id, city_id, trip_title, trip_description, start_date, end_date, num_of_ppl, budget)
            values(
                (select u.user_id from
                    trip_proposals as tp
                      inner join
                    trip_drafts as td 
                      on tp.trip_draft_id = td.trip_draft_id
                      inner join
                    users as u
                      on td.user_id = u.user_id
                    where tp.trip_proposal_id = ${trip_proposal_id}), 
                (select local_id from trip_proposals where trip_proposal_id = ${trip_proposal_id}), 
                (select co.country_id from 
                    trip_proposals as tp
                      inner join
                    trip_drafts as td
                      on tp.trip_draft_id = td.trip_draft_id
                      inner join
                    countries as co
                      on td.country_id = co.country_id
                    where tp.trip_proposal_id = ${trip_proposal_id}),
                (select ci.city_id from 
                    trip_proposals as tp
                      inner join
                    trip_drafts as td
                      on tp.trip_draft_id = td.trip_draft_id
                      inner join
                    cities as ci
                      on td.city_id = ci.city_id
                    where tp.trip_proposal_id = ${trip_proposal_id}),
                (select proposal_title from trip_proposals where trip_proposal_id = ${trip_proposal_id}), 
                (select proposal_description from trip_proposals where trip_proposal_id = ${trip_proposal_id}),
                (select td.start_date from 
                    trip_proposals as tp
                      inner join
                    trip_drafts as td
                      on tp.trip_draft_id = td.trip_draft_id
                    where tp.trip_proposal_id = ${trip_proposal_id}),
                (select td.end_date from 
                    trip_proposals as tp
                      inner join
                    trip_drafts as td
                      on tp.trip_draft_id = td.trip_draft_id
                    where tp.trip_proposal_id = ${trip_proposal_id}),
                (select td.num_of_ppl from 
                    trip_proposals as tp
                      inner join
                    trip_drafts as td
                      on tp.trip_draft_id = td.trip_draft_id
                    where tp.trip_proposal_id = ${trip_proposal_id}),
                (select td.budget from 
                    trip_proposals as tp
                      inner join
                    trip_drafts as td
                      on tp.trip_draft_id = td.trip_draft_id
                    where tp.trip_proposal_id = ${trip_proposal_id})
            );
            
            select * from day_plans where trip_proposal_id = ${trip_proposal_id};
        `)
        .then(dbRes => res.status(200).send(dbRes[0]))
        .catch(err => console.log(err));
    },
    add_my_day_plan: (req, res) => {
        let {my_day_date, my_day_title, my_day_description, day_plan_id} = req.body;
        sequelize.query(`
            insert into my_day_plans(my_trip_plan_id, my_day_date, my_day_title, my_day_description)
            values(
                (select my_trip_plan_id from my_trip_plans where my_trip_plan_id = (SELECT MAX(my_trip_plan_id) FROM my_trip_plans)),
                '${my_day_date}',
                '${my_day_title}',
                '${my_day_description}'
            );

            select * from events where day_plan_id = ${day_plan_id};
        `)
        .then(dbRes => res.status(200).send(dbRes[0]))
        .catch(err => console.log(err));
    },
    add_my_events: (req, res) => {
        let {my_event_start_time, my_event_total_hours, my_event_title, my_event_detail, my_event_color} = req.body;
        sequelize.query(`
            insert into my_events(my_day_plan_id, my_event_start_time, my_event_total_hours, my_event_title, my_event_detail, my_event_color)
            values(
                (select my_day_plan_id from my_day_plans where my_day_plan_id = (SELECT MAX(my_day_plan_id) FROM my_day_plans)),
                '${my_event_start_time}',
                ${my_event_total_hours},
                '${my_event_title}',
                '${my_event_detail}',
                '${my_event_color}'
            );
        `)
        .then(dbRes => res.status(200).send(dbRes[0]))
        .catch(err => console.log(err));
    }, 
    delete_events: (req, res) => {
        let {trip_draft_id} = req.params;
        sequelize.query(`
            DELETE FROM events AS e 
            USING 
                day_plans AS d,
                trip_proposals AS tp,
                trip_drafts AS td
            WHERE 
                e.day_plan_id = d.day_plan_id
            AND d.trip_proposal_id = tp.trip_proposal_id
            AND tp.trip_draft_id = td.trip_draft_id 
            AND td.trip_draft_id = ${trip_draft_id};  
        `)
        .then(dbRes => res.status(200).send(dbRes[0]))
        .catch(err => console.log(err));
    },
    delete_day_plans: (req, res) => {
        let {trip_draft_id} = req.params;
        sequelize.query(`
            DELETE FROM day_plans AS d
            USING 
                trip_proposals AS tp,
                trip_drafts AS td
            WHERE 
            d.trip_proposal_id = tp.trip_proposal_id
            AND tp.trip_draft_id = td.trip_draft_id 
            AND td.trip_draft_id = ${trip_draft_id}; 
        `)
        .then(dbRes => res.status(200).send(dbRes[0]))
        .catch(err => console.log(err));
    },
    delete_trip_proposal_trip_draft: (req, res) => {
        let {trip_draft_id} = req.params;
        sequelize.query(`
            DELETE FROM trip_proposals AS tp
            USING 
                trip_drafts AS td
            WHERE 
            tp.trip_draft_id = td.trip_draft_id 
            AND td.trip_draft_id = ${trip_draft_id}; 

            DELETE FROM trip_drafts WHERE trip_draft_id = ${trip_draft_id};
        `)
        .then(dbRes => res.status(200).send(dbRes[0]))
        .catch(err => console.log(err));
    },
    get_my_trip_plans: (req, res) => {
        let {user_id} = req.params;
        sequelize.query(`
            select mtp.*, co.country_name, ci.city_name, traveler.username as traveler, aLocal.username as local
            from users as traveler
            inner join
            my_trip_plans as mtp
            on traveler.user_id = mtp.user_id
            inner join
            countries as co
            on mtp.country_id = co.country_id
            inner join
            cities as ci
            on mtp.city_id = ci.city_id
            inner join
            locals as l
            on l.local_id = mtp.local_id
            inner join
            users as aLocal
            on l.user_id = aLocal.user_id
            where traveler.user_id = ${user_id};
        `)
        .then(dbRes => res.status(200).send(dbRes[0]))
        .catch(err => console.log(err));
    },
    get_my_trip_days: (req, res) => {
        let {my_trip_id} = req.params;
        sequelize.query(`
            select * from my_day_plans where my_trip_plan_id = ${my_trip_id};
        `)
        .then(dbRes => res.status(200).send(dbRes[0]))
        .catch(err => console.log(err));
    },
    get_my_events: (req, res) => {
        let {my_day_plan_id} = req.params;
        sequelize.query(`
            select * from my_events where my_day_plan_id = ${my_day_plan_id};
        `)
        .then(dbRes => res.status(200).send(dbRes[0]))
        .catch(err => console.log(err));
    }
}
 
// select my_trip_plan_id from my_trip_plans 
// where my_trip_plan_id = (SELECT MAX(my_trip_plan_id) FROM my_trip_plans);
