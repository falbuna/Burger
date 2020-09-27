const connection = require("../config/connection.js");

const orm = {
    selectAll: function(table){
        const queryString = "SELECT * FROM ??";
        connection.query(queryString, [table], function(err, result){
            if(err) throw(err);
            console.log(result);
        });
    },
    insertOne: function(){

    },
    updateOne: function(){
        
    }
}

module.exports = orm;