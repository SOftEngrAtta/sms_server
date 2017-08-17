var utils = {

    checkBool: function(value) {
        return (value == true ? 1 : null)
    },

    executeQuery: function(query, database) {
        return new Promise(function(resolve, reject) {

            database.getConnection(function(err, connection) {
                connection.query(query, function(err, results) {
                    connection.release();
                    if (err) {
                        reject(err);
                    }else{
                        resolve(results);
                    }
                })
            })
        });
    },

    validateRequest: function(requestBody, requiredFieldsArray){
        
        var validationResult = {
            isValid:true,
            message: ''
        }

        requiredFieldsArray.forEach(function(field){
            if(!requestBody[field]){
                validationResult.isValid = false;
                validationResult.message+=`value for ${field} is missing `;
            }
        });

        return validationResult;


    }
}

module.exports = utils;