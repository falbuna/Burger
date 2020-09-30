const orm = require("../config/orm.js");

const burger = {

    selectAll: function(callback){
        orm.selectAll("burgers", function(response){
            callback(response);
        });
    },

    insertOne: function(columns, values, callback){
        orm.insertOne("burgers", columns, values, function(response){
            callback(response);
        });
    },

    updateOne: function(objColVals, condition, callback){
        orm.updateOne("burgers", objColVals, condition, function(response){
            callback(response);
        });
    },
}



module.exports = burger;