const { smsUserSchema } = require('../Schema/sms-user.js');
const mongoose = require('mongoose')

module.exports = function(connection) {
    let userService = {
        //get all users from db 
        get : ()=>{

        },
        //create sms user in db
        create : ()=>{

        },
        // update sms user in db 
        update : ()=>{

        },
        // delete sms user in db 
        delete_u : ()=>{

        }

    }
    return userService;

}