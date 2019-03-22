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

class gameDisplay extends React.Component{
  constructor(props){
    super(props)
    // this.state = {
    //   onWater:false,
    //   onSun:false,
    //   onSeed: false,
    // }
   
  }
  componentDidMount(){
    this.props.getPlant()
  }
  onClickSeed = () =>{
    this.setState(({onSeed}) =>({onSeed: !onSeed}))
  }
  onClickSun = () =>{
    // e.preventDefault()
    this.setState(({onSun})=> ({onSun: !onSun}))
  }
  onClickWater = () => {
    // e.preventDefault()
    if(!this.setState.onWater){
      console.log("good job watering your plant")
      this.setState(({onWater})=> ({onWater: !onWater}))
    }else{
      console.log('notworking')
    }
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
        {/* {mappedPlants} */}
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