var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var User = require("./user.js");
var Group = require("./Group.js");

var message = new mongoose.Schema({
    owner_user_id: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    message_status:{type: Boolean, default: false},
    created_at: { type: Date, default: Date.now },
    group_id:{type: Schema.Types.ObjectId, ref: 'Group'},
    messages: [{
        receiver_id:{ type: Schema.Types.ObjectId, ref: 'User' },
        message:{ type: String},
        sender_id:{ type: Schema.Types.ObjectId, ref: 'User' },
        timrStamp:{ type: Date, default: Date.now }
    }],
    unique_id:{type:String}
});
// the schema is useless so far
// we need to create a model using it
// make this available to our users in our Node applications
module.exports = mongoose.model('message', message);