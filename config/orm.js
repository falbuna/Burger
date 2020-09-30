const connection = require("../config/connection.js");

function printQuestionMarks(num){
    const array = [];

    for (let i = 0; i < num; i++){
        array.push("?");
    }

    return array.toString();
}

function objToSql(object){
    const array = [];

    for (var key in object) {
        var value = object[key]

        if(Object.hasOwnProperty.call(object, key)) {
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            array.push(key + "=" + value);
        }
    }

    return array.toString();
}

const orm = {

    selectAll: function(tableInput, callback) {
        let queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, [tableInput], function(err, result){
            if(err) throw(err);
            callback(result);
        });
    },

    insertOne: function(table, columns, values, callback) {
        let queryString = "INSERT INTO " + table;

        queryString += " (";
        queryString += columns.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(values.length);
        queryString += ") ";

        console.log(queryString);

        connection.query(queryString, values, function(err, result) {
            if (err) {
                throw err;
            }
            callback(result);
        });
    },

    updateOne: function(table, objColsVals, condition, callback) {
        let queryString = "UPDATE " + table;

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