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

router.post("/api/burgers", function(request, response){
    burger.insertOne([
        "burger_name", "devoured"
    ], [
        request.body.burger_name, request.body.devoured
    ], function(result){
        response.json({ id: result.insertId});
    });
});

router.put("/api/burgers/:id", function(request, response){
    const condition = "id = " + request.params.id;

    console.log("condition", condition);

    burger.updateOne({
        devoured: request.body.devoured
    }, condition, function(result){
        if (result.changedRows == 0){
            return response.status(404).end();
        } else {
            response.status(200).end();
        };
    });
}) 

module.exports = router;

