import React from 'react';
import { withGame } from './GameProvider';
import cabbageSeed from './images/cabbageSeed.svg'
import carrotSeed from './images/carrotSeed.svg'
import tomatoSeed from './images/tomatoSeed.svg'
import water from './images/water.png'
import sun from './images/sun.png'
import harvest from './images/harvest.png'
import shears from './images/shears.svg'
import bugSpray from './images/bugSpray.png'
import weedKiller from './images/weedKiller.png'
import fence from './images/fence.png'
import rabbit from './images/rabbitAttack.svg'
import bug from './images/bugAttack.svg'
import soil from './images/soil.svg'
import weeds from './images/weedAttack.svg'
import sproutedCabbage from './images/cabbagePlant.png'
import sproutedCarrot from './images/carrotPlant.png'
import sproutedTomato from './images/tomatoPlant.png'

import "./App.css"

class gameDisplay extends React.Component{
  constructor(){
    super()
    this.state = {
      onWater: "",
      onSun: "",
      onSeed: "",
      // onHarvest: false,
      enemypick: "",
      plantpick: "",
      planted: false,
      watered: false,
      sunned: false,
    }
  }

  componentDidMount(){
    this.props.getPlant()
  }

  logic = () => {
    // debugger;
    let _id = this.props.match.params.vegetable
    const foundPlant = this.props.plants.find(plant => plant._id === _id)
    console.log("hello")
    console.log(this.state)
    if (this.state.planted && this.state.watered && this.state.sunned) {
      if(foundPlant.plantName === 'Tomato'){
        this.setState({
          plantpick: sproutedTomato
        })
      } else if(foundPlant.plantName === 'Carrot'){
        this.setState({
          plantpick: sproutedCarrot
        })
      } else if(foundPlant.plantName === 'Cabbage'){
        this.setState({
          plantpick: sproutedCabbage
        })
      }
    }
    console.log(this.state)
  }

  onClickSeed = () => {
    this.setState(({onSeed}) => ({onSeed: typeof onSeed === "boolean" ? !onSeed : true, planted: true}))
    if(this.state.onSeed) {
      this.callEnemy(1)
    }
  }

  onClickSun = () => {
    this.setState(({onSun}) => ({onSun: typeof onSun === "boolean" ? !onSun : true, sunned: true}))
    if(this.state.onSun) {
      this.callEnemy(1)
    }
  }

  onClickWater = () => {
    this.setState(({onWater}) => ({onWater: typeof onWater === "boolean" ? !onWater : true, watered: true}))
    if(this.state.onWater) {
      this.callEnemy(1)
    }
  }

  onHarvest = () => {
    let _id = this.props.match.params.vegetable
    this.props.editPlant(_id, {harvested: true})
    if(this.state.plantpick){
      this.setState({
        plantpick: "",
      })
    }
  }

  callEnemy = (num) => {
    console.log("math does work?")
    num = Math.floor(Math.random() * 3) + 1;
    console.log("bad guy")
    if(num === 1){
      this.setState({enemypick: rabbit})
    } if (num === 2){
      this.setState({enemypick: bug})
    } if (num === 3){
      this.setState({enemypick: weeds})
    }
  }

  killRabbits = () => {
    if(this.state.enemypick === rabbit){
      this.setState({
        enemypick: ""
      })
    }
  }

  killBugs = () => {
    if(this.state.enemypick === bug){
      this.setState({
        enemypick: ""
      })
    }
  }

  killWeeds = () => {
    if(this.state.enemypick === weeds){
      this.setState({
        enemypick: ""
      })
    }
  }

  render(){
    console.log(this.state.enemypick)
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
        <div className="tools back">
          <div onClick={this.logic}>
            <img src={shears} alt=""/>
          </div>
          <div onClick={this.killBugs}>
            <img src={bugSpray} alt=""/>
          </div>
          <div onClick={this.killWeeds}>
            <img src={weedKiller} alt=""/>
          </div>
          <div onClick={this.killRabbits}>
            <img src={fence} alt=""/>
          </div>
        </div>
        <div className="dirtPile">
          <div>
            <img className="dirt" src={soil} alt="" />
            <img className="enemy" src={this.state.enemypick} alt="" />
            <img className="sproutedPlant" src={this.state.plantpick} alt="" />
          </div>
        </div>       
        <div className="options back">
          <div onClick={this.onClickSeed}>
            {!this.state.onSeed && <img className="seedPic" src={image} alt=""/> }
            {this.state.onSeed && <img className="seed" src={image}/>}
          </div>  
          <div onClick={this.onClickWater}>
          {!this.state.onWater && <img className="seedPic" src={water} alt=""/> }
            {this.state.onWater && <img className="seed" src={water}/>}         
          </div>
          <div onClick={this.onClickSun}> 
            {!this.state.onSun && <img src={sun} alt="sun"/> }
            {this.state.onSun && <img className="sun" src={sun}/>}
          </div> 
          <div onClick={this.onHarvest}>
            <img src={harvest} alt="harvest"/>
          </div> 
        </div>
      </div>
    )
  }
}
export default withGame(gameDisplay)