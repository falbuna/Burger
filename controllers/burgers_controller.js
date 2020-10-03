const express = require("express");

const router = express.Router();

// Imported from the burger.js in models.
const burger = require("../models/burger.js");

// The route and logic to get all the data from the database.
router.get("/", function(request, response){
    burger.selectAll(function(data){
        const handlebarsObject = {
            burgers: data
        };
        console.log(handlebarsObject);
        response.render("index", handlebarsObject);
    });
});

// The route to post data to the database.
router.post("/api/burgers", function(request, response){
    burger.insertOne([
        "burger_name", "devoured"
    ], [
        request.body.burger_name, request.body.devoured
    ], function(result){
        // Returns the id of the new added burger.
        response.json({ id: result.insertId});
    });
});

// The route to update data to the database.
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

// Export routes for server.js
module.exports = router;

