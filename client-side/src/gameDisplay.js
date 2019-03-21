import React from 'react';
import { withGame } from './GameProvider';

class gameDisplay extends React.Component{
  // constructor(){
  //   super()
  //   this.state={
     
  //   }
  // }

  render(){
    return(
      <div>
        HERE IS THE GAME
      </div>
    )
  }
}
export default withGame(gameDisplay)