import React from 'react';
import {Link} from 'react-router-dom';

class Home extends React.Component{
  render(){
    return(
      <div className="title body">
        <h1 className="gardenParty">Garden Party</h1>
        <div className="aboutContainer">
          <Link className="titlePage" to='/Howto'>How to Play</Link>
        </div>
        <div className="playContainer" >
          <Link className="titlePage" to='/seedChoice'>PLAY</Link>
        </div>
      </div>
    )
  }
}
export default Home