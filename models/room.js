var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var User = require("../model/user.js");
var Message = require("../model/user.js");

var room = new mongoose.Schema({
    name: { type: String, lowercase: true, unique: true },
    topic: String,
    users: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    messages: [{ type: Schema.Types.ObjectId, ref: 'Message' }],
    created_at: Date,
    updated_at: { type: Date, default: Date.now },
});
// the schema is useless so far
// we need to create a model using it
// make this available to our users in our Node applications
module.exports = mongoose.model('messageSchema', messageSchema);