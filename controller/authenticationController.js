var http=require("http");
var authService=require("../services/authenticationService");

exports.userLogin=function(req,res,next){
   console.log('in auth controller',authService);
   authService.validateLogin(req,function(response){
   	console.log('rrrrrrrrrrrrrr',response);
	   res.json(response);
   });
}

exports.userRegister=function(req,res,next){
   console.log('userRegister',req.body);
   authService.userRegister(req,function(response){
	   res.json(response);
   });
}

exports.getOnlineUsers=function(req,res,next){
   console.log('getOnlineUsers');

 
   authService.getOnlineUsers(req,function(response){
	   res.json(response);
   });
}
