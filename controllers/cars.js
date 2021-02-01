const Car = require('../models/car');

module.exports = {
    getCars: async (req,res,next) => {
        console.log('CarsController.getCars() called!');
        const result = await Car.find();
        res.send(result);
    },
    getCar: async (req,res,next) => {
        console.log(`CarsController.getCar() called on id: ${req.params.id}!`);
        const result = await Car.findById(req.params.id);
        res.send(result);
    },
    addCar: async (req,res,next) => {
        console.log('CarsController.addCar() called!');
    },
}