// var config = require("../../config/config"),
    express = require("express"),
    router = express.Router(),
    util = require('../services/util')

var generateJwt = function(jwt, user) {

    var expiry = new Date();
    expiry.setDate(expiry.getDate() + 7);
    return jwt.sign({
        _id: user._id,
        username: user.name,
        type : user.type,
        email : user.email ,
        exp: parseInt(expiry.getTime() / 1000),
    }, config.supersecret);
}


module.exports = function(connection, jwt) {

    var userService = require('../services/user')(connection);


    router.post("/login", function(req, res, next) {

       let loginData = req.body ;

       userService.authenticateUser(loginData).then( success => {

           if(success.status == 200){
               res.json({
                   status : 200 ,
                   token : generateJwt(jwt , success.user),
                   loginUser : success.user
               })
           }else{
              res.json(success)  
           }

       }, error => {
           next(error);
       })



    })

    return router;

}


