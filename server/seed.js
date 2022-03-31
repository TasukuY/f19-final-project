require('dotenv').config()

const { portalSuspended } = require('pg-protocol/dist/messages');
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
    seed: (req, res) => {
        sequelize.query(`
            drop table if exists auth;
            drop table if exists locals;
            drop table if exists users;
            drop table if exists countries;
            drop table if exists cities;
            drop table if exists trip_drafts;
            drop table if exists trip_proposals;
            drop table if exists day_plans;
            drop table if exists events;
            drop table if exists trip_plans;

            create table users (
                user_id serial primary key, 
                first_name varchar(100), 
                last_name varchar(100),
                username varchar(100),
                country_name varchar(100),
                city_name varchar(100),
                gender varchar(10)
            );

            create table auth (
                user_id integer not null references users(user_id),
                email varchar(100),
                password varchar(100)
            );

            create table locals (
                local_id serial primary key,
                user_id integer not null references users(user_id),
                review float
            );

            create table countries (
                country_id serial primary key,
                country_name varchar(100)
            );

            create table cities (
                city_id serial primary key,
                country_id integer not null references countries(country_id),
                city_name varchar(100)
            );

            create table trip_drafts (
                trip_draft_id serial primary key,
                user_id integer not null references users(user_id),
                country_id integer not null references countries(country_id),
                city_id integer not null references cities(city_id),
                start_date date,
                end_date date,
                num_of_ppl integer,
                budget float,
                include_hotel_fee bool,
                include_meal_fee bool,
                include_transport_fee bool,
                budget_detail text,
                note text
            );

            create table trip_proposals (
                trip_proposal_id serial primary key,
                trip_draft_id integer not null references trip_drafts(trip_draft_id),
                local_id integer not null references locals(local_id),
                proposal_title varchar(100),
                proposal_description text
            );

            create table day_plans(
                day_plan_id serial primary key,
                trip_proposal_id integer not null references trip_proposals(trip_proposal_id),
                day_date date,
                day_title varchar(100),
                day_description text
            );

            create table events (
                event_id serial primary key,
                day_plan_id integer not null references day_plans(day_plan_id),
                start_time timestamp,
                total_hours float, 
                event_title varchar(100),
                event_detail text,
                event_color varchar(100)
            );

            create table my_trip_plans (
                my_trip_plan_id serial primary key,
                user_id integer not null references users(user_id),
                local_id integer not null references locals(local_id),
                trip_title varchar(100),
                trip_description text
            );

            create table my_day_plans(
                my_day_plan_id serial primary key,
                my_trip_plan_id integer not null references my_trip_plans(my_trip_plan_id),
                my_day_date date,
                my_day_title varchar(100),
                my_day_description text
            );

            create table my_events (
                my_event_id serial primary key,
                my_day_plan_id integer not null references my_day_plans(my_day_plan_id),
                my_event_start_time timestamp,
                my_event_total_hours float, 
                my_event_title varchar(100),
                my_event_detail text,
                my_event_color varchar(100)
            );
            
            INSERT INTO countries (country_name)
            VALUES ('Australia'),
            ('Austria'),
            ('Netherlands'),
            ('Poland'),
            ('Canada'),
            ('Portugal'),
            ('Russia'),
            ('Malaysia'),
            ('Hong Kong'),
            ('Greece'),
            ('Japan'),
            ('United Kingdom'),
            ('Thailand'),
            ('Germany'),
            ('Mexico'),
            ('Italy'),
            ('China'),
            ('United States'),
            ('Spain'),
            ('France'),
            ('South Korea');
            
            INSERT INTO cities (country_id, city_name)
            VALUES (1, 'Sydney'),
            (11, 'Tokyo'),
            (11, 'Osaka'),
            (12, 'London'),
            (13, 'Bangkok'),
            (14, 'Berlin'),
            (15, 'Mexico City'),
            (16, 'Rome'),
            (17, 'Beijing'),
            (18, 'Hawaii'),
            (18, 'New York'),
            (18, 'Los Angeles'),
            (19, 'Barcelona'),
            (20, 'Paris'),
            (21, 'Soul');

        `).then(() => {
            console.log('DB seeded!')
            res.sendStatus(200)
        }).catch(err => console.log('error seeding DB', err))
    }
}