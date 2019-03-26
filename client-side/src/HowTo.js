import React from 'react';
import water from './images/water.png'
import sun from './images/sun.png'
import harvest from './images/harvest.png'
import bugSpray from './images/bugSpray.png'
import weedKiller from './images/weedKiller.png'
import fence from './images/fence.png'
import shears from './images/shears.svg'
import tomatoSeed from './images/tomatoSeed.svg'

class HowTo extends React.Component{
  
  render(){
    // console.log("working?")
    return(
      <div className="howTo">
        <h1>How to play</h1>
        <div className="instructions">
          <div>
            <p>Click this to plant your seeds</p>
            <img className="instructionSeeds" src={tomatoSeed} alt=""/>
          </div>
          <div>
            <p>Click this to water the plant</p>
            <img src={water} alt=""/>
          </div>
          <div>
            <p>Click this to give the plant sunlight</p>
            <img src={sun} alt=""/>
          </div>
          <div>
            <p>Click this to harvest your plant</p>
            <img src={harvest} alt=""/>
          </div>
          <div>
            <p>Click this to get rid of bugs</p>
            <img src={bugSpray} alt=""/>
          </div>
          <div>
            <p>Click this to get rid of weeds</p>
            <img src={weedKiller} alt=""/>
          </div>
          <div>
            <p>Click this to get rid of rabbits</p>
            <img src={fence} alt=""/>
          </div>
          <div>
            <p>Click this to sprout your plant</p>
            <img src={shears} alt=""/>
          </div>
        </div>
      </div>
    )

  }
}
export default HowTo