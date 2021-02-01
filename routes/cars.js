const express = require('express');

const app = express();

const UserController = require('../controllers/cars');

app.get('/get-cars', UserController.getCars)

app.get('/get-car/:id', UserController.getCar)

module.exports = app;
