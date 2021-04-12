const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const calorieSchema = new Schema({
    amount: {
        type: String,
        required: true
    },
}, { timestamps :true});

const Calorie = mongoose.model('Calorie',calorieSchema);

module.exports = Calorie;
