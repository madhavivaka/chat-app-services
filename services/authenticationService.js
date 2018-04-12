var http = require('http');
var mongoose = require('mongoose');
var User = mongoose.model('user');


exports.validateLogin=function(req,callback){
	console.log('req.body.email',req.body.uname);
	console.log('req.body.password',req.body.password);
	User.findOne({"username":req.body.uname,"password":req.body.password},function(err,data){
		if(err || data == null){
			callback({status:"Fail",message:"User or Password not matching"});
		}
		else{
			console.log(data);
			callback({status:"Success",message:"User Logged in sucessfully",data:data});
		}
	});

}

exports.userRegister=function(req,callback){
	console.log('userRegister srvice',req.body.reqParams);
	var data=req.body.reqParams;
	User.findOne({"username":req.body.reqParams.username},function(err,response){
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



exports.getOnlineUsers=function(req,callback){
	
	User.find({},function(err,data){
		if(err || data == null){
			callback({status:"Fail",message:"no onli users"});
		}
		else{
			callback({status:"Success",data:data});
		}
	});

}