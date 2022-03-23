const test = require('./db.json');

module.exports = {
    getMessages: (req, res) => {
        res.status(200).send(test);
    }
}