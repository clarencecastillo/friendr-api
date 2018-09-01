"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Import everything from express and assign it to the express variable
var express = require("express");
// Import WelcomeController from controllers entry point
var services_1 = require("./services");
var app = express();
var port = process.env.PORT || 3000;
app.use('/welcome', services_1.WelcomeController);
// Serve the application at the given port
app.listen(port, function () {
    // Success callback
    console.log("Listening at http://localhost:" + port + "/");
});
