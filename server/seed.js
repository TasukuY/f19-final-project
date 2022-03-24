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
    seed: (req, res) => {
        sequelize.query(`
            drop table if exists travelers;
            drop table if exists auth;

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

        `).then(() => {
            console.log('DB seeded!')
            res.sendStatus(200)
        }).catch(err => console.log('error seeding DB', err))
    }
}

// create table cities (
//     city_id serial primary key, 
//     name varchar,
//     rating integer,
//     country_id integer references countries(country_id)
// );

// INSERT INTO cities (name, rating, country_id)
// VALUES ('Paris', 5, 61),
// ('Melbourne', 4, 9),
// ('Barcelona', 4, 165);