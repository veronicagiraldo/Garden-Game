const express = require('express');
const app = express();

const mongoose = require('mongoose');
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/garden-game', {useNewUrlParser: true}, () => {
    console.log('Connected to MongoDB!')
})

.catch(err => console.error(err))
// Routes
app.use('/plants', require('./routes/plantRoutes'))

let port = 4208;

app.listen(port, () => {
    console.log(`All set on port ${port}`)
})



// do i need another Route here for Database(harvestplants here???)