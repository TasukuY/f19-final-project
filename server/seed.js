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