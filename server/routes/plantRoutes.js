const express = require('express');

const plantRoute = express.Router();

const Plant = require('../models/plantSchema');

plantRoute.route('/greenhouse')
    .get((req, res) => {
        console.log('hello world')
        Plant.find((err, plants) => {
            if (err) {
                return res.status(501).send(err)
            }
            const harvested = plants.filter(plant => plant.harvested)
            return res.status(200).send(harvested)
        })
    })

plantRoute.route('/')

    .get((req, res) => {
        Plant.find((err, plants) => {
            if (err) {
                return res.status(500).send(err)
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


//get http://localhost:3001/super-sweet-plant-game/api/v1/greenhouse/users/12343892423
// => [
//   {
//     recordId: '1232132132', (uuid) (opt)
//     name: 'tomato',
//     plantId: '192831209382', (opt)
//     timestamp: new Date().toISOString()
//   },
//   {
//     recordId: '1232132132', (opt)
//     name: 'tomato',
//     plantId: '192831209382', (opt)
//     timestamp: new Date().toISOString()
//   },
// ]

//get http://localhost:3001/super-sweet-plant-game/api/v1/plant-info/plants/tomato(or plantid)
// => {
//   name: 'tomato',
//   funFact: 'tomatoes are good'
// }

//if you want you can write some stuff about plant progress/state to localstorage in case tab gets closed

