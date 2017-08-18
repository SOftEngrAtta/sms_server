
module.exports = {
    validation : validation
}


function validation(data , requiredKeys){
    if(data){
        let invalid = false;
        requiredKeys.forEach(key=>{
            if(!data[key]){
                return {
                    invalid : true ,
                    message : key+' required'
                }
            };
        })
    }
}