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
    const mappedPlants = this.props.plants.map(plant =>
    <Link key={plant._id} to={`/seedChoice/${plant._id}`}>{plant.plantName}</Link>)
    return(
      <div>
        <p>Select which seed you want to plant</p>

        {mappedPlants}

        <img src={cabbageCard} alt=""/>
        <img src={carrotCard} alt=""/>
        <img src={tomatoCard} alt=""/>

      </div>
    );
  };
}

export default withGame(seedChoice)