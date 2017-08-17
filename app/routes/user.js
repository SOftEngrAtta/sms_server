const express = require("express"),
    router = express.Router(),
    util = require('../services/util');



module.exports = function(connection) {
        
    const userService = require('../services/user')(connection);
    // get all sms users
    router.get('/' , (req,res)=>{
        console.log('get users');
    })
    
    // create sms user
    router.post('/' , (req,res)=>{
        console.log('hello world');
    })

    // update sms user data 
    router.patch('/' , (req,res)=>{
        console.log('update users');
    })

    //delete sms user
    router.patch('/' , (req,res)=>{
        console.log('delete users');
    })

    return router;
}
