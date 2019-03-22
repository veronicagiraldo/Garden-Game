import React from 'react';
// import axios from 'axios';

const {Consumer, Provider} = React.createContext() 

class GameProvider extends React.Component{
  constructor(){
    super()
    this.state ={
      onclickSun: false,
      water: false,
      seed: false,
      availplants: [],
      harvestPlants: [],
      randomEnemies: [{
        rabbit: false,
        weeds: false,
        bugs: false
      }],
    }
  }
  
  randomEnemies = () => {
    return Math.floor((Math.random(this.state.randomEnemies)))
  }
  // GET info from DB about harvest
//   getPlant = () => {
//     axios.get('/plants').then(res => {
//         this.setState({
//             plants: res.data
//         })
//     })
// }
  // onclickSeed function for each= 
    
  // onclickWater
  onclickSun = () => {
    if (!this.state.onclickSun){
      console.log("I work")
    } else {
      console.log("I don't think I work")
    }
  }
  // math.random= enemies 
   
  render(){
    return(
      <Provider value= {{
        onclickWater: this.onclickWater,
        onclickSun: this.onclickSun,
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
