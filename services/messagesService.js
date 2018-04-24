var http = require('http');
var mongoose = require('mongoose');
var User = mongoose.model('user');
var message = mongoose.model('message');
var group = mongoose.model('Group');




exports.saveMessage=function(req,callback){
	console.log('save message',req.body.message);
	var data=req.body.message;
	
      var messages =[{
        receiver_id:data.receiver,
        message:data.text,
        sender_id:data.owner_user
       }];
	
	var msg=new message();
	msg.owner_user_id=data.owner_user;
    msg.messages=messages;
	msg.save(function(err){
		if(err)
			console.log(err);
		callback({status:'Success'});
	});

}


