const Calorie = require('../models/calorie');

module.exports = {
    getCalories: async (req, res, next) => {
        console.log('CalorieController.getCalories() called!');
        const result = await Calorie.find();
        res.send(result);
    },
    getCalorie: async (req, res, next) => {
        console.log(`CalorieController.getCalorie() called on id: ${req.params.id}!`);
        const result = await Calorie.findById(req.params.id);
        if (result) {
            res.send(result);
        }
        else {
            res.send('Document not found!');
        }
    },
    addCalorie: async (req, res, next) => {
        console.log(`CalorieController.addCalorie() called!`);

        const { amount } = req.body;

        const calorie = {
            amount: amount
        };

        try {
            await Calorie.create(calorie);
            res.send('Record added!');
        }
        catch (err) {
            console.error(err.toString());
        }

    },
    updateCalorie: async (req, res, next) => {
        console.log(`CalorieController.updateCalorie() called on id: ${req.params.id}!`);
        console.log(req.body);
        Calorie.findByIdAndUpdate(req.params.id, { amount: req.body.amount },
        (err, docs) => {
            if (err) {
                res.send(err)
            }
            else {
                res.send('Record updated!');
            }
        });
    },
    deleteCalorie: async (req, res, next) => {
        console.log(`CalorieController.deleteCalorie() called on id: ${req.params.id}!`);
        console.log(req.body);
        const result = await Calorie.findByIdAndDelete(req.params.id);
        if (result) {
            res.send('Record deleted!');
        }
        else {
            res.send('Document not found');
        }
    },
}