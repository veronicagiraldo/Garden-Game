import React from 'react';
import { withGame } from './GameProvider';
import {Link} from "react-router-dom";

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

      </div>
    );
  };
}

export default withGame(seedChoice)