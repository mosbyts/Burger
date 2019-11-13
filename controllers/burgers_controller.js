var express = require("express");
var router = express.Router();
var app = express();
var burger = require("../models/burger");
var exphbs = require("express-handlebars")

router.get("/", function(req, res){
    burger.selectAll(function(data){
        var hbsObject = {
            burger: data
        };
        app.set('views', __dirname + '/');
        res.render("index", hbsObject);
    });
});

app.post("/api/burgers", function(req, res){
    burger.insertOne(["burger_name", "devoured"], [req.body.burger_name, req.body.devoured], function(result){
        res.json({ id: result.insertId});
    });
});

app.put("/api/burgers/:id", function(req, res){
    var condition = "id = " + req.params.id;
    console.log("condition", condition);

    burger.updateOne(
        {
            devoured: req.body.devoured
        },
        condition,
        function(result){
            if(result.changedRows === 0){
                return res.status(404).end();
            }
            res.status(200).end();
        }
    );
});

/*router.delete("/api/burgers/:id", function(req, res){
    var condition = "id = " + req.params.id;

    burger.delete(condition, function(result){
        if(result.affectedRows == 0){
            return res.status(404).end();
        }else{
            res.status(200).end()
        }
    });
});*/

module.exports = router;