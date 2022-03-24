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
            drop table if exists locals;

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

        `).then(() => {
            console.log('DB seeded!')
            res.sendStatus(200)
        }).catch(err => console.log('error seeding DB', err))
    }
}


