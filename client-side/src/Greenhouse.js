import React from 'react';
import { withGame } from './GameProvider';

class Greenhouse extends Component{
  constructor(){
    super()

  }

  render(){
    // const mappedPlants = this.props.harvestplants.map((plant, i) => {

    // })
    return(
      <div>
        {/* {mappedPlants} */}
      </div>
    )
  }

}

export default withGame(Greenhouse)