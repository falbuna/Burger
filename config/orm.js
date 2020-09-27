const connection = require("../config/connection.js");

const orm = {
    selectAll: function(table, callback){
        const queryString = "SELECT * FROM " + table + ";";
        connection.query(queryString, [table], function(err, result){
            if(err) throw(err);
            callback(result);
        });
    },
    insertOne: function(){

    },
    updateOne: function(){

    }
}

module.exports = orm;