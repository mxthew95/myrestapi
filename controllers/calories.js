const Calorie = require('../models/calorie');

module.exports = {
    //get all
    getCalories: async (req, res, next) => {
        console.log('CalorieController.getCalories() called!');
        try {
            const result = await Calorie.find();
            res.status(200).send(result);
        }
        catch (err) {
            console.log(err.toString());
            res.status(500).send('Something went wrong...');
        }
    },
    //get one
    getCalorie: async (req, res, next) => {
        console.log(`CalorieController.getCalorie() called on id: ${req.params.id}!`);
        try {
            const result = await Calorie.findById(req.params.id);
            if (!result) {
                res.status(404).send(`${req.params.id} does not exist`);
            }
            else {
                res.send(result);
            }
        }
        catch (err) {
            console.log(err.toString());
            res.status(500).send('Something went wrong...');
        }
    },
    //add one
    addCalorie: async (req, res, next) => {
        console.log(`CalorieController.addCalorie() called!`);
        try {
            console.log(req.body);
            const result = await Calorie.create({ amount: req.body.amount });
            res.status(200).send(result);
        }
        catch (err) {
            console.log(err.toString());
            res.status(500).send('Something went wrong...');
        }
    },
    updateCalorie: async (req, res, next) => {
        console.log(`CalorieController.updateCalorie() called on id: ${req.params.id}!`);
        console.log(req.body);
        try {
            // new: true -> sends result after update
            const result = await Calorie.findByIdAndUpdate(req.params.id, { amount: req.body.amount },{new: true});
            res.status(200).send(result);
        }
        catch (err) {
            console.log(err.toString());
            res.status(500).send('Something went wrong...');
        }
    },
    deleteCalorie: async (req, res, next) => {
        console.log(`CalorieController.deleteCalorie() called on id: ${req.params.id}!`);
        try {
            const result = await Calorie.findByIdAndDelete(req.params.id);
            res.status(200).send(result);
        }
        catch (err) {
            console.log(err.toString());
            res.status(500).send('Something went wrong...');
        }
    },
}