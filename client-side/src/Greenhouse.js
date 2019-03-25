import React from 'react';
import { withGame } from './GameProvider';

class Greenhouse extends React.Component{
  // constructor(){
  //   super()

  // }
  componentDidMount(){
    console.log('fired')
    this.props.getHarvest()
  }

  render(){
    const mappedPlants = this.props.harvestPlants.map((harvestPlant, i) => {
      return(<div>{harvestPlant.plantName}</div>)
    })
    return(
      <div>
        {mappedPlants}
      </div>
    )
  }

}

export default withGame(Greenhouse)