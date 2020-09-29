const connection = require("../config/connection.js");

function printQuestionMarks(num){
    const array = [];

    for (let i = 0; i < num; i++){
        arr.push('?');
    }

    return array.toString();
}

function objToSql(object){
    const array = [];

    for (var key in object) {
        var value = object[key]

        if(Object.hasOwnProperty.call(object, key)){
            if (typeof value === 'string' && value.indexOf(" ") >= 0){
                value = "'" + value + "'";
            }
            array.push(key + "=" + value);
        }
    }

    return array.toString();
}

const orm = {
    selectAll: function(tableInput, callback){
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, [tableInput], function(err, result){
            if(err) throw(err);
            callback(result);
        });
    },
    insertOne: function(){

    },
    updateOne: function(table, objColsVals, condition, callback){
        var queryString = "UPDATE " + table;

        queryString += " SET ";
        queryString += objToSql(objColsVals);
        queryString += " WHERE ";
        queryString += condition;

        console.log(queryString);
        connection.query(queryString, function(err, result){
            if (err) {
                throw err;
            }
            callback(result);
        })

    }
}

module.exports = orm;