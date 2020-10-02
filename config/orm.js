const connection = require("../config/connection.js");

// This function will create the question marks for the MySQL query.
function printQuestionMarks(num){
    const array = [];

    for (let i = 0; i < num; i++){
        array.push("?");
    }

    return array.toString();
}
// This function will convert the object/key values to MySQL syntax
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
    // This function will get the query to generate all of the data from the database.
    selectAll: function(tableInput, callback) {
        let queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, [tableInput], function(err, result){
            if(err) throw(err);
            callback(result);
        });
    },
    // This function will get the query to add data to the database.
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
    // This function will change the state of data in the database. In this case, change from devoured to blank.
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