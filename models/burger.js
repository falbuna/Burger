// The ORM to create functions that will be imported for the database interactions.
const orm = require("../config/orm.js");

const burger = {
    // The function to get all of the data from the database.
    selectAll: function(callback){
        orm.selectAll("burgers", function(response){
            callback(response);
        });
    },
    // The function to insert data into the database.
    insertOne: function(columns, values, callback){
        orm.insertOne("burgers", columns, values, function(response){
            callback(response);
        });
    },
    // The function to update the data in the database.
    updateOne: function(objColVals, condition, callback){
        orm.updateOne("burgers", objColVals, condition, function(response){
            callback(response);
        });
    },
}

// Export to the controller.
module.exports = burger;