import React from 'react';
import { withGame } from './GameProvider';
import {Link} from "react-router-dom";
import cabbageCard from "./images/cabbageCard.png"
import carrotCard from "./images/carrotCard.png"
import tomatoCard from "./images/tomatoCard.png"

class seedChoice extends React.Component {
  componentDidMount(){
    this.props.getPlant()
  }

  render(){
    console.log(this.props.plants)
    const mappedPlants = this.props.plants.map(plant => {
      if (plant.plantName === 'Tomato'){
        return <Link key={plant._id} to={`/seedChoice/${plant._id}`}><img className="cardSelections" src={tomatoCard} alt=""/></Link>
      } else if (plant.plantName === 'Cabbage'){
        return <Link key={plant._id} to={`/seedChoice/${plant._id}`}><img className="cardSelections" src={cabbageCard} alt=""/></Link>
      } else if (plant.plantName === 'Carrot'){
        return <Link key={plant._id} to={`/seedChoice/${plant._id}`}><img className="cardSelections" src={carrotCard} alt=""/></Link>
      }
    })
    return(
      <div className="seedChoiceContainer">
        <p className="selectSeed">What would you like to Plant?</p>
          <div className="seedSelection">
            {mappedPlants}
          </div>
      </div>
    );
  };
}

export default withGame(seedChoice)