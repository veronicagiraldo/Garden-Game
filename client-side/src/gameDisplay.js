import React from 'react';
import { withGame } from './GameProvider';
import water from './images/water.png';
import sun from './images/sun.png';


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
    // const mappedPlants = this.props.plants.map((plant, i) => {
    //   {plants.plantName}
    //   console.log("wirkjf?")
    // })
    return(
      <div>
        {/* {mappedPlants} */}
        HERE IS THE GAME
        <img src={water} alt="" onClick={this.props.onClickWater}  />
        <img src={sun} alt="" onClick={this.props.onClickSun}  />
        {/* <img src={seed} alt="" onClick={this.onClickSeed} /> */}
      </div>
    )
  }
}
export default withGame(gameDisplay)