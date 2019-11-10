var orm = require("../config/orm.js");

var burger = {
    all: function(cb){
        orm.all("burger", function(res){
            cb(res);
        });
    },

    create: function(burgerName, devoured){
        orm.create("burger", burgerName, devoured, function(res){
            cb(res);
        });
    },

    update: function(){
        orm.update("burger", burgerName, devoured, function(res){
            cb(res);
        });
    },

    delete: function(){
        orm.delete("burger", burgerName, devoured, function(res){
            cb(res);
        });
    }
};

//create the code that will call the ORM functions using burger specific input for the ORM.

module.exports = burger;