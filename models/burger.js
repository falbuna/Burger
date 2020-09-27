const orm = require("../config/orm.js");

const burger = {
    selectAll: function(callback){
        orm.selectAll("burgers", function(response){
            callback(response);
        });
    },
    
}

module.exports = burger;