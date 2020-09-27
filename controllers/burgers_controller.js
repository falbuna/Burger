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
    })
});

module.exports = router;

