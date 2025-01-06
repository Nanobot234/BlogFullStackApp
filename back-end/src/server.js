import express from 'express';

/**
 * @fileoverview This file sets up an Express server and defines a route handler.
 */

/**
 * Create an Express app instance.
 * @const {Object} app - The Express app instance.
 */
const app = express();

/**
 * Define a route handler for the GET /hello path.
 * @name get/hello
 * @function
 * @memberof module:express.Router
 * @inner
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 */
app.get('/hello', function(req, res) {
    res.send('Hello, World!'); 
});

app.get('/hello/:name', function(req, res) {
    res.send(`Hello, ${req.params.name}!`);
});

// app.post('/hello', function(req, res) {


/**
 * Start the server on port 8000.
 * @function
 * @param {number} port - The port number.
 */
app.listen(8000, function() {
    console.log('App is listening on port 8000');
});