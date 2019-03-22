import React from 'react';
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
import rabbit from './images/rabbit.png'
import bug from './images/bug.png'
import "./App.css"

class gameDisplay extends React.Component{
  constructor(){
    super()
    this.state = {
      onWater: false,
      onSun: false,
      onSeed: false,
      onHarvest: false,
      enemypick: ""
    }
  }

  componentDidMount(){
    this.props.getPlant()
  }

  onClickSeed = () => {
    this.setState(({onSeed}) =>({onSeed: !onSeed}))
    console.log("get ready to plant your seed")
  }
  onClickSun = (e) => {
    e.preventDefault()
    this.setState(({onSun})=> ({onSun: !onSun})) //newsun
    console.log("you have enough sun!")
  }
  onClickWater = (e) => {
    e.preventDefault()
    if(!this.props.onWater){
      console.log("good job watering your plant")
      this.callEnemy(1)
      this.setState(({onWater})=> ({onWater: !onWater}))
    }else{
      console.log('notworking')
    }
  }
  onHarvest = (e) => {
    e.preventDefault()
    console.log("ready to harvest!")
  }
  callEnemy = (num) => {
    // console.log("math does work?")
    num = Math.floor(Math.random() * 2) + 1;
    // console.log("bad guy")
    if(num === 1){
      this.setState({enemypick: rabbit})
    } if (num === 2){
      this.setState({enemypick: bug})
    }
  }
  onTool = (e) => {
    e.preventDefault()
    console.log("imaTOOL")
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
      <div className="gameContainer">
        <div className="options">
          <div onClick={this.onClickSeed}><img src={image} alt=""/> </div>  
          <div onClick={this.onClickWater}><img src={water}alt="water"/> </div>
          <div onClick={this.onClickSun}> <img src={sun} alt="sun"/></div> 
          <div onClick={this.onHarvest}><img src={harvest} alt="harvest"/></div> 
        </div>
        <div className="dirtPile">
          <div><img src={this.state.enemypick}/></div>
        </div>       
        <div className="tools">
          <div onClick={this.onTool}><img src={greenHouse} alt=""/></div>
          <div onClick={this.onTool}><img src={bugSpray} alt=""/></div>
          <div onClick={this.onTool}><img src={weedKiller} alt=""/></div>
          <div onClick={this.onTool}><img src={fence} alt=""/> </div>
        </div>
      </div>
      // <div className="gameContainer">
      //   <div className="options">
      //     <img src={image} alt=""/> 
      //     <img src={water} alt=""/>
      //     <img src={sun} alt=""/>
      //     <img src={harvest} alt=""/>
      //   </div>
      //   <div className="dirtPile">
          
      //   </div>
      //   <div className="tools">
      //     <img src={greenHouse} alt=""/>
      //     <img src={bugSpray} alt=""/>
      //     <img src={weedKiller} alt=""/>
      //     <img src={fence} alt=""/>
      //   </div>
      // </div>
    )
  }
}
export default withGame(gameDisplay)