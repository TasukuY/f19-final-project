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
            drop table if exists travelers;
            drop table if exists countries;
            drop table if exists cities;
            drop table if exists new_trip_plan;
            drop table if exists trip_plan;
            drop table if exists day_plan;
            drop table if exists events;

            create table travelers (
                traveler_id serial primary key, 
                first_name varchar(50), 
                last_name varchar(50),
                username varchar(50),
                gender varchar(10)
            );

            create table auth (
                traveler_id integer not null references travelers(traveler_id),
                email varchar(100),
                password varchar(100)
            );

            create table locals (
                local_id serial primary key, 
                traveler_id integer not null references travelers(traveler_id),
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

            create table new_trip_plan (
                new_trip_plan_id serial primary key,
                traveler_id integer not null references travelers(traveler_id),
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

            create table trip_plan (
                trip_plan_id serial primary key,
                new_trip_plan_id integer not null references new_trip_plan(new_trip_plan_id),
                local_id integer not null references locals(local_id),
                trip_plan_title varchar(100),
                trip_plan_description text
            );

            create table day_plan(
                day_plan_id serial primary key,
                trip_plan_id integer not null references trip_plan(trip_plan_id),
                date_of_day date,
                title_day varchar(100),
                description_day text
            );

            create table events (
                event_id serial primary key,
                day_plan_id integer not null references day_plan(day_plan_id),
                event_start_time timestamp,
                event_total_hours float, 
                event_title varchar(100),
                event_detail text,
                event_color varchar(100)
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