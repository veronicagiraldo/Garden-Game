const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const plantSchema = new Schema ({
    plantName: {
        type: String,
        required: true
    },
    plantPicture: {
        type: String,
        required: true,
        imageUrl: ""
    },
    plantFact: {
        type: String,
        required: true
    },
    harvested: {
        type: Boolean,
        default: false
    }

})

module.exports = mongoose.model('Plant', plantSchema)