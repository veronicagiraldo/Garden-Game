import React from 'react';
// import list from "./availPlants.json"
import { withGame } from './GameProvider';
import cabbageSeed from './images/cabbageSeed.png'
import carrotSeed from './images/carrotSeed.png'
import tomatoSeed from './images/tomatoSeed.png'
import water from './images/water.png'
import sun from './images/sun.png'
import harvest from './images/harvest.png'
import greenHouse from './images/greenHouse.png'
import bugSpray from './images/bugSpray.png'
import weedKiller from './images/weedKiller.png'
import fence from './images/fence.png'
import "./App.css"

class gameDisplay extends React.Component{
  // constructor(){
  //   super()
  //   this.state={
     
  // component did mount - get request from the game provider 

  //   }
  // }
  componentDidMount(){
    this.props.getPlant()
  }

  render(){
    let _id = this.props.match.params.vegetable
    let image;
    const foundPlant = this.props.plants.find(plant => plant._id === _id)
    if(foundPlant.plantName === 'Tomato'){
      image = tomatoSeed
    } else if(foundPlant.plantName === 'Carrot'){
      image = carrotSeed
    } else if(foundPlant.plantName === 'Cabbage'){
      image = cabbageSeed
    }
    return(
      <div>
        HERE IS THE GAME
        <div className="options">
          <img src={image} alt=""/> 
          <img src={water} alt=""/>
          <img src={sun} alt=""/>
          <img src={harvest} alt=""/>
        </div>
        <br/>
        <div className="tools">
          <img src={greenHouse} alt=""/>
          <img src={bugSpray} alt=""/>
          <img src={weedKiller} alt=""/>
          <img src={fence} alt=""/>
        </div>
      </div>
    )
  }
}
export default withGame(gameDisplay)