var connection = require("connection.js");

var orm = {
    selectAll: function(){
        var queryString = "SELECT * FROM burgers;"
        connection.query(queryString, function(err, result){
            if(err) throw err;
            console.log(result);
        });
    },

    insertOne: function(burgerName, devoured){
        var queryString = "INSERT INTO burgers (burger_name, devoured) VALUES (?,?)"
        connection.query(queryString, burgerName, devoured, function(err, result){
            if(err) throw err;
            console.log(result);
        });
    },

    updateOne: function(burgerName, devoured){
        var queryString = "UPDATE burgers SET (burger_name, devoured) = (?,?)"
        connection.query(queryString, burgerName, devoured, function(err, result){
            if(err) throw err;
            console.log(result);
        });
    }
};

module.exports = orm;