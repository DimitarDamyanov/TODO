/**
 * Created by D on 4.8.2016 г..
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var Note = new Schema({
    task: String,
    status: String
});

module.exports = mongoose.model('Note', Note);