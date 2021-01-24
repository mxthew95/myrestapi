const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const carSchema = new Schema({
    model: {
        type: String,
        required: true
    },
    year: {
        type: String,
        required: true
    },
    plate: {
        type: String,
        required: true
    },
    make: {
        type: String,
        required: true
    },
}, { timestamps :true});

const Car = mongoose.model('Car',carSchema);

module.exports = Car;
