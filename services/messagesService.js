var http = require('http');
var mongoose = require('mongoose');
var User = mongoose.model('user');
var message = mongoose.model('message');
var room = mongoose.model('room');




exports.saveMessage=function(req,callback){
	console.log('userRegister srvice',req.body.reqParams);
	var data=req.body.message;
	message.findOne({"username":req.body.reqParams.username},function(err,response){
		console.log('responseresponse',response);
		if(err || response == null){
          var user=new User({
          	firstName:data.firstName,
          	lastName:data.lastName,
          	email:data.email,
          	username:data.username,
          	password:data.password

          });
          user.save(function(err){
		      callback({status:"Success"});
          });
		}
		else{
			callback({status:"Fail",message:"User Already Exists"});
		}
		
	});

}


