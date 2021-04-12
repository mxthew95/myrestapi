const express = require('express');

const app = express();

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Node app is running on port ${port}`);
});

//CONNECT TO DATABASE
const mongoose = require('mongoose');

const dbURI = 'mongodb+srv://mxthew95:deader5@mycluster.5fkzr.mongodb.net/rn-db?retryWrites=true&w=majority'

mongoose.connect(dbURI,{ useNewUrlParser: true, useUnifiedTopology: true})
.then((result) => {
    console.log('Connected to DB!')
})
.catch((err) => {
    console.log(err)
})

//avoid decprecation warning
mongoose.set('useFindAndModify', false);

//MIDDLEWARES
app.use(express.json())

//ROUTES
app.get('/', (req,res) => {
    res.send('Home!')
})

app.use('/api', require('./routes/calories'))







 