const express = require('express');

const plantRoute = express.Router();

const Plant = require('../models/plantSchema');

plantRoute.route('/')

    .get((req, res) => {
        Plant.find((err, plants) => {
            if (err) {
                return res.status(500).next(err)
            }
            return res.status(200).send(plants)
        })
    })

    .post((req, res) => {
        const newPlant = new Plant(req.body)

        newPlant.save(err =>{
            if(err) return res.status(500).send(err)
                return res.status(200).send(err)
        })
    })

plantRoute.route('/:_id')

.get((req,res) => {
    Plant.findById({_id: req.params._id}, (err, plant) => {
        if(err) return res.status(500).send(err)
        return res.status(200).send(plant)
    })
})
.put((req,res) => {
    Plant.findOneAndUpdate({_id: req.params._id}, req.body, {new: true}, (err, plant) => {
        if(err) return res.status(500).send(err)
        return res.status(200).send({
            msg: 'Successfully updated your plants',
            plant: plant
        })

    })
})

.delete((req, res) => {
    Plant.findOneAndDelete({_id: req.params._id}, (err, plant) => {
        if(err) return res.status(500).send(err)
    })
})


module.exports = plantRoute