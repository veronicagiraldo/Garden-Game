const express = require('express');
const path = require("path");
const mongoose = require('mongoose');
const app = express();
const morgan = require('morgan')
app.use(express.json());

const PORT = 4208;
// const port = 4204;

app.use(morgan('dev'))

app.use(express.static(path.join(__dirname, "client-side", "build")))
app.use('/plants', require('./routes/plantRoutes'))
// app.use('/greenhouse', require('./routes/plantRoutes'))

mongoose.connect(process.env.MONGODB_URI|| 'mongodb://localhost:27017/garden-game', {useNewUrlParser: true}, (err) => {
    // if (err) console.error(err)

    console.log('Connected to MongoDB!')
})
.catch(err => console.error(err))


// Routes for Harvested Veggies


app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client-side", "build", "index.html"));
});

app.listen(PORT, () => {
    console.log(`All set on port ${PORT}`)
})

