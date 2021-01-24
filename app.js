const express = require('express');

const app = express();

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Node app is running on port ${port}`);
});

//DATABASE
const dbURI = 'mongodb+srv://mxthew95:deader5@mycluster.5fkzr.mongodb.net/car-rentals?retryWrites=true&w=majority'

const mongoose = require('mongoose');

mongoose.connect(dbURI,{ useNewUrlParser: true, useUnifiedTopology: true})
    .then((result) => {
        console.log('Connected to DB!')
    })
    .catch((err) => {
        console.log(err)
    })

//ROUTES
app.get('/', (req,res) => {
    res.send('Home!')
})

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

app.get('/cars', (req,res) => {
    Car.find()
    .then((result) => {
        res.send(result)
    })
    .catch((err) => {
        console.log(err);
    })
})

//MIDDLEWARES





 