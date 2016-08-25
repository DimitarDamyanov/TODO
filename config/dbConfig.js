/**
 * Created by D on 4.8.2016 г..
 */
var mongoose = require('mongoose'),
    DBNAME = 'TODOApp'
    db = mongoose.connect(['mongodb://localhost/', DBNAME].join(''));
module.exports = db;