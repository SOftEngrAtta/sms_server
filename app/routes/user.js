const express = require("express"),
    router = express.Router(),
    util = require('../services/util');

const validationReq = require('../shared/validation');


module.exports = function(connection) {
        
    const userService = require('../services/user')(connection);
    // get all sms users
    router.get('/' , (req,res)=>{
        
        userService
        .get()
        .then(result=>{
            res.json({
                status : true ,
                message : result
            })
        })
        .catch(error=>{
            res.json({
                status : false ,
                message : error
            })
        })


    })
    
    // create sms user
    router.post('/' , (req,res)=>{
        let data = req.body ;
        let checkValidation = 
        validationReq.validation(data , ['name' , 'class' , 'address' , 'parent_name' , 'cell_number'])
        if(checkValidation.invalid){
            res.json({
                status : false ,
                message : checkValidation.message
            })
        }

        userService
        .create(data)   
        .then(result=>{
            res.json({
                status : true ,
                message : result
            })
        })
        .catch(error=>{
            res.json({
                status : false ,
                message : error
            })
        })
    })

    // update sms user data 
    router.patch('/:id' , (req,res)=>{
        
        let userID =  req.params['id'];
        let data = req.body ;

        userService
        .update(userId , data)
        .then(result=>{
            res.json({
                status : true ,
                message : result
            })
        })
        .catch(error=>{
            res.json({
                status : false ,
                message : error
            })
        })

    })

    //delete sms user
    router.delete('/:id' , (req,res)=>{
        
        let userID = req.params['id'];

        userService
        .delete_u(userID)
        .then(result=>{
            res.json({
                status : true ,
                message : result
            })
        })
        .catch(error=>{
            res.json({
                status : false ,
                message : error
            })
        })


    })

    return router;
}
