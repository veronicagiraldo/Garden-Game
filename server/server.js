const express = require('express');
const app = express();

const mongoose = require('mongoose');
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/garden-game', {useNewUrlParser: true}, () => {
    console.log('Connected to MongoDB!')
})

.catch(err => console.error(err))


const port = 4204;

app.listen(port, () => {
    console.log(`All set on port ${port}`)
})

// Routes
app.use('/plants', require('./routes/plantRoutes'))

// do i need another Route here for Database(harvestplants here???)