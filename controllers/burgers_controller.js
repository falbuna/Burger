const express = require("express");

const router = express.Router();

const burger = require("../models/burger.js");

router.get("/", function(request, response){
    burger.selectAll(function(data){
        const handlebarsObject = {
            burgers: data
        };
        console.log(handlebarsObject);
        response.render("index", handlebarsObject);
    });
});

router.put("/api/burgers/:id", function(req, res){
    const condition = "id = " + req.params.id;

    console.log("condition", condition);

    burger.updateOne({
        devoured: req.body.devoured
    }, condition, function(result){
        if (result.changedRows == 0){
            return res.status(404).end();
        } else {
            res.status(200).end();
        };
    });
}) 

module.exports = router;

