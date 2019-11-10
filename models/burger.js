var orm = require("../config/orm.js");

var burger = {
    selectAll: function(cb){
        orm.selectAll(function(res){
            cb(res);
        });
    },

    insertOne: function(burgerName, devoured){
        orm.insertOne("burger", burgerName, devoured, function(res){
            cb(res);
        });
    },

    updateOne: function(){
        orm.update("burger", burgerName, devoured, function(res){
            cb(res);
        });
    }/*,

    delete: function(){
        orm.delete("burger", burgerName, devoured, function(res){
            cb(res);
        });
    }*/
};

//create the code that will call the ORM functions using burger specific input for the ORM.

module.exports = burger;