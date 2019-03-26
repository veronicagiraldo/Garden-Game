import React from 'react';
import axios from 'axios';

const {Consumer, Provider} = React.createContext() 

class GameProvider extends React.Component{
  constructor(){
    super()
    this.state ={
      plants: [],
      harvestPlants: [],
      // randomEnemies: [],
    }
  }
  getPlant = () => {
    axios.get("/plants").then(res => {
      // console.log(res.data)
      // console.log("am I working")
      this.setState({
        plants: res.data
      })
    }) 
  }
  //  postPlant =()
  postPlant = (newPlant) => {
    axios.post('/plants', newPlant).then(res =>{
      this.setState(prevState => ({
        plants: [...prevState.plants, newPlant]
      }))
    })
  }
  // create a new plant on the DB with seedchoice
  // put/update
  editPlant = (_id, updatePlant) => {
    axios.put(`/plants/${_id}`, updatePlant).then(res => {
      console.log(res.data.plant)
      this.setState(prevState => ({
        plants: prevState.plants.map(plant => plant._id === _id ? plant = res.data.plant : plant)
      }))
    })
    .catch(err => console.log(err))
  }
  getHarvest = () => {
    console.log("harvest!!")
    axios.get('/plants/greenhouse').then(res => {
      this.setState({
        harvestPlants: res.data
      })
    })
  }

  render(){
    return(
      <Provider value= {{
        getPlant: this.getPlant,
        editPlant: this.editPlant,
        postPlant: this.postPlant,
        getHarvest: this.getHarvest,
        ...this.state
      }}>
      {this.props.children}
      </Provider>
    );
  }
}

export default GameProvider;

export function withGame (C) {
  return props => <Consumer>
                {value => <C {...value}{...props}/>}
                 </Consumer>
}