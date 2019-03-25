import React from 'react';
import axios from 'axios';

const {Consumer, Provider} = React.createContext() 



// const greenhousePlants = [
//   {
//     recordId: '1232132132',
//     name: 'tomato',
//     plantId: '192831209382',
//     timestamp: new Date().toISOString()
//   },
//   {
//     id: '1232132132',
//     name: 'tomato',
//     timestamp: new Date().toISOString()
//   },
//   {
//     id: '1232132132',
//     name: 'carrot',
//     timestamp: new Date().toISOString()
//   }
// ]


class GameProvider extends React.Component{
  constructor(){
    super()
    this.state ={
      // sun: false,
      // water: false,
      // seed: false,
      // availPlants: [],
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
