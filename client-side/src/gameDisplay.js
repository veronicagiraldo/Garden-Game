import React from 'react';
// import list from "./availPlants.json"
import { withGame } from './GameProvider';

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

  async componentDidMount(){
    // Ideal place for firing HTTP requests
    // Event Listeners such as onTouch, onHover, etc...
    // Set up intervals
    try {
        const plants = await this.getPlants()
        this.setState({availPlants: plants})
    } catch(err) {
        // Do something with the error
    }


}

  render(){
    // const mappedPlants = this.props.availPlants.map(plant =>
    //   <div key={plant._id}>
    //     <img src={plant.imgUrl} alt=""/>
    //   </div>
    //   )
    return(
      <div>
        HERE IS THE GAME
        <div className="options">
          {/* {mappedPlants} */}
          {/* <img src="" alt=""/> */}
          {/* <img src="" alt=""/> */}
          {/* <img src=""?alt=""/> */}
        </div>
        <div className="tools">

        </div>
      </div>
    )
  }
}
export default withGame(gameDisplay)