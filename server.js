const express = require("express");

const PORT = process.env.PORT || 8080;

const app = express();

// Serves static contect for the app in the public directory.
app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Sets handlebars
const expressHandlebars = require('express-handlebars');

app.engine("handlebars", expressHandlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import the routes
const routes = require ("./controllers/burgers_controller.js");

app.use(routes);

app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
});