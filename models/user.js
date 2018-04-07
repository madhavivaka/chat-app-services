var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var uniqueValidator = require('mongoose-unique-validator');

var userSchema = new mongoose.Schema({
	username: { type: String, lowercase: true, unique: true },
	email: { type: String, lowercase: true, unique: true },
	password: String,
	is_active: { type: Boolean, default: true },
	contact: []
});

userSchema.plugin(uniqueValidator);
// the schema is useless so far
// we need to create a model using it
// make this available to our users in our Node applications
module.exports = mongoose.model('userSchema', userSchema);