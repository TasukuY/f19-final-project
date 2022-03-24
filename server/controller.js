const test = require('./db.json');

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
    getMessages: (req, res) => {
        res.status(200).send(test);
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
    }
}



// create table travelers (
//     traveler_id serial primary key, 
//     first_name varchar(50), 
//     last_name varchar(50),
//     username varchar(50),
//     gender varchar(10)
// );

// create table auth (
//     traveler_id integer not null references travelers(traveler_id),
//     email varchar(100),
//     password varchar(100)
// );

// create table locals (
//     local_id serial primary key, 
//     traveler_id integer not null references travelers(traveler_id),
//     review float 
// );

// INSERT INTO cities (name, rating, country_id)
// VALUES ('Paris', 5, 61),
// ('Melbourne', 4, 9),
// ('Barcelona', 4, 165);

// let travelerInfo = {
//     first_name: firstnameInput.value,
//     last_name: lastnameInput.value,
//     username: usernameInput.value,
//     //male, female, no_gender
//     gender: genderCheck()
// }

// let authInfo = {
//     email: emailInput.value,
//     password: passInput.value
// }

// let localInfo = {
//     //yes, no
//     registerAsLocal: registerAsLocalCheck()
// }

//  let body = {
//     travelerInfo,
//     authInfo,
//     localInfo
// }