var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var User = require("./user.js");
var Room = require("./room.js");

var message = new mongoose.Schema({
    room: { type: Schema.Types.ObjectId, ref: 'Room' },
    user: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    message_body: String,
    message_status:{type: Boolean, default: false},
    created_at: { type: Date, default: Date.now },
});
// the schema is useless so far
// we need to create a model using it
// make this available to our users in our Node applications
module.exports = mongoose.model('message', message);