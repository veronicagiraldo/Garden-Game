const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const plantSchema = new Schema ({
    plantName: {
        type: String,
        required: true
    },
    plantPicture: {
        type: String,
        required: true
    },
    plantFact: {
        type: String,
        default: ''
    }

})

module.exports = mongoose.model('Plant', plantSchema)