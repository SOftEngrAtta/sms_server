const { 
    smsClass , 
    smsFee , 
    smsSubject ,
    smsTest ,
    smsUser  
} = require('../model');

const mongoose = require('mongoose')

module.exports = function(connection) {
    


    let userService = {
        //get all users from db 
        get : ()=>{
            return new Promise((resolve , reject)=>{
                smsUser
                .find(
                    {},
                    result=>{
                        resolve(result);
                    },
                    error=>{
                        reject('getting error: '+ err);
                    },
                )
            })
        },
        //create sms user in db
        create : (data)=>{
            
            return new Promise((resolve , reject)=>{
                let saveUser = new smsUser(data);
                saveUser
                .save(
                    error=>{
                        reject('getting error on user create time : '+ err);
                    },
                    result=>{
                        resolve('user created');
                    }
                )
            })

        },
        // update sms user in db 
        update : ()=>{
            return new Promise((resolve , reject)=>{
                
            })
        },
        // delete sms user in db 
        delete_u : (userID)=>{

            return new Promise((resolve , reject)=>{
                smsUser
                .find({_id : userID})
                .remove()
                .exec(
                    error=>{
                        reject('getting error on user delete time ' + error)
                    },
                    result=>{
                        resolve('user record deleted');
                    }
                )
            })
            
        }

    }
    return userService;

}