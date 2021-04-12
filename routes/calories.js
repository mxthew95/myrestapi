const express = require('express');

const app = express();

const UserController = require('../controllers/calories');

app.get('/get-calories', UserController.getCalories)

app.get('/get-calorie/:id', UserController.getCalorie)

app.post('/add-calorie', UserController.addCalorie)

app.put('/update-calorie/:id', UserController.updateCalorie)

app.delete('/delete-calorie/:id', UserController.deleteCalorie)

module.exports = app;
