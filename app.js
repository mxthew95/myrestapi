const express = require('express');

const app = express();

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Node app is running on port ${port}`);
});

//CONNECT TO DATABASE
const mongoose = require('mongoose');

const dbURI = 'mongodb+srv://mxthew95:deader5@mycluster.5fkzr.mongodb.net/car-rentals?retryWrites=true&w=majority'

mongoose.connect(dbURI,{ useNewUrlParser: true, useUnifiedTopology: true})
.then((result) => {
    console.log('Connected to DB!')
})
.catch((err) => {
    console.log(err)
})

//MIDDLEWARES
app.use(express.json())

//ROUTES
app.get('/', (req,res) => {
    res.send('Home!')
})

app.use('/api', require('./routes/cars'))

/*
app.post('/add/car', (req,res) => {
    const newCar = new Car(req.body)
    newCar.save()
    .then(resp=>console.log(resp))
    .catch(err=>console.log(err))
});
*/





 