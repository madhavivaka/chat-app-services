var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var User = require("./user.js");
var Message = require("./message.js");

var Group = new mongoose.Schema({
    name: { type: String, lowercase: true, unique: true },
    topic: String,
    users: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    created_at: Date,
    updated_at: { type: Date, default: Date.now },
    created_by:{ type: Schema.Types.ObjectId, ref: 'User' }
});
// the schema is useless so far
// we need to create a model using it
// make this available to our users in our Node applications
module.exports = mongoose.model('Group', Group);