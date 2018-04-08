var express = require('express');
var router = express.Router();
var authController=require('../controller/authenticationController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/api/userLogin', authController.userLogin);

router.post('/api/userRegister', authController.userRegister);

router.post('/api/getOnlineUsers', authController.getOnlineUsers);




//router.post('/api/userLogin',  function(req, res, next) {
	//authController.userLogin(req,res,function(res){

	//});

//});





module.exports = router;
