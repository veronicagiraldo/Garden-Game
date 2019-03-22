import React from 'react';
import { withGame } from './GameProvider';

class gameDisplay extends React.Component{
  // constructor(){
  //   super()
  //   this.state={
     
  //   }
  // }

  render(){
    console.log(this.props)
    return(
      // <div onClick={() => this.props.onclickWater()}>
      <div>
        <button onClick={() => this.props.onClickSun}></button>
        HERE IS THE GAME
      </div>
    )
  }
}
export default withGame(gameDisplay)