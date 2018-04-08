var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var uniqueValidator = require('mongoose-unique-validator');

var user = new mongoose.Schema({
	firstName:{ type: String,  unique: true },
	lastName:{ type: String,  unique: true },
	username: { type: String,  unique: true },
	email: { type: String,  unique: true },
	password: String,
	is_active: { type: Boolean, default: true },
	contact: []
});

user.plugin(uniqueValidator);
// the schema is useless so far
// we need to create a model using it
// make this available to our users in our Node applications
module.exports = mongoose.model('user', user);