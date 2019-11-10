var connection = require("../config/connection");

var orm = {
    selectAll: function(cb){
        var queryString = "SELECT * FROM burgers;";
        connection.query(queryString, function(err, result){
            if(err){
                throw err;
            };
            cb(result);
        });
    },

    insertOne: function(burgerName, devoured, cb){
        var queryString = "INSERT INTO burgers (burger_name, devoured) VALUES (?,?)";
        connection.query(queryString, burgerName, devoured, function(err, result){
            if(err){
                throw err;
            };
            cb(result);
        });
    },

    updateOne: function(burgerName, devoured, cb){
        var queryString = "UPDATE burgers SET (burger_name, devoured) WHERE (?,?)";
        connection.query(queryString, burgerName, devoured, function(err, result){
            if(err){
                throw err;
            };
            cb(result);
        });
    }
};

module.exports = orm;