var http = require('http');
var mongoose = require('mongoose');
var User = mongoose.model('user');
var message = mongoose.model('message');
var group = mongoose.model('Group');






exports.saveMessage=function(req,callback){
	console.log('save message',req.body.message);
	var data=req.body.message;
	var unique_id=data.owner_user+"_"+data.receiver;
	
	message.findOne({"unique_id":unique_id},function(err,response){
     var msg=new message();
		if(response){
            msg=response;
		}else{
			msg.unique_id=data.owner_user+"_"+data.receiver;
				msg.owner_user_id=data.owner_user;
    		msg.messages=[];
		}
       
	    msg.messages.push({
	        receiver_id:data.receiver,
	        message:data.text,
	        sender_id:data.owner_user
       });
	    msg.save(function(err){
			if(err)
				console.log(err);
			callback({status:'Success'});
		});
	});

      
}

exports.getRecentMessages=function(req,callback){
	var unique_id=req.body.uniqueId;
	
	message.findOne({"unique_id":unique_id},function(err,response){
		if(response){
			var data=response;
		    callback({status:'Success',response:data});

		}
		else{
           callback({status:'Error',message:'No Data'});

		}
	});


}


