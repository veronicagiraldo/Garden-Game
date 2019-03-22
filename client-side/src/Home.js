import React from 'react';
import {Link} from 'react-router-dom';

// import HowTo from './HowTo';

class Home extends React.Component{
  render(){
    return(
      <div className="title">
        <h1>Garden Party</h1>
        <Link className="about"to='/Howto'>About game</Link>
        <Link className="play" to='/seedChoice'>PLAY</Link>
      </div>
    )

  }
}
export default Home