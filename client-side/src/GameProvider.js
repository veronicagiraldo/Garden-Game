import React from 'react';
import axios from 'axios';

const {Consumer, Provider} = React.createContext() 

class GameProvider extends React.Component{
  constructor(){
    super()
    this.state ={
      onSun: false,
      onWater: false,
      onSeed: false,
      plants:[],
      availplants: [],
      // harvestPlants: [],
      // randomEnemies: [],
    }
  }
  
  // GET info from DB about harvest
  getPlant = () => {
    axios.get('/plants').then(res => {
      console.log("working?")
        this.setState({
          plants: res.data
        })
    })
}


  render(){
    return(
      <Provider value= {{
        getPlant: this.getPlant,
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
