var path = require('path');

module.exports = (req, res, next) => {
    res.sendFile(path.resolve('public/example.html'));
}