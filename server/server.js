const express = require('express');
const app = express();
const morgan = require('morgan')

const mongoose = require('mongoose');
app.use(express.json());
app.use(morgan('dev'))

mongoose.connect('mongodb://localhost:27017/garden-game', {useNewUrlParser: true}, () => {
    console.log('Connected to MongoDB!')
})
.catch(err => console.error(err))

// Routes for Harvested Veggies
const port = 4204;

app.listen(port, () => {
    console.log(`All set on port ${port}`)
})

// Routes
app.use('/plants', require('./routes/plantRoutes'))
// app.use('/greenhouse', require('./routes/plantRoutes'))

