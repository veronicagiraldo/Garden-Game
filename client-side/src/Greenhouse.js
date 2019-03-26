import React from 'react';
import { withGame } from './GameProvider';
import tomato from './images/tomato.png'
import cabbage from './images/cabbage.png'
import carrot from './images/carrot.png'

class Greenhouse extends React.Component{
  // constructor(){
  //   super()

  // }
  componentDidMount(){
    console.log('fired')
    this.props.getHarvest()
  }

  render(){
    const mappedPlants = this.props.harvestPlants.map((harvestPlant, i) =>  {
      let img
      if(harvestPlant.plantName === 'Tomato'){
        img = tomato
      }else if(harvestPlant.plantName === "Cabbage"){
        img = cabbage
      }else if(harvestPlant.plantName === 'Carrot'){
        img = carrot
      }
      return(
        // <div className="bodyContainer">
        // <div className="harvestContainer">
        // <p className ="selectSeed"></p>
        //     <div className="harvestSelection">
        <div >    
          <h1>{harvestPlant.plantName}</h1>
          <h2>{harvestPlant.plantFact}</h2>
          <img src={img} alt=""/>
        </div>
        //  </div>
        // </div>
        )
    })
    return(
      <div className="greenhouse">
        {mappedPlants}
      </div>
    )
  }

}

export default withGame(Greenhouse)

// import React from 'react';
// import { withGame } from './GameProvider';
// import cabbageCard from "./images/cabbageCard.svg"
// import carrotCard from "./images/carrotCard.svg"
// import tomatoCard from "./images/tomatoCard.svg"

// class Greenhouse extends React.Component{
//   // constructor(){
//   //   super()

//   // }
//   componentDidMount(){
//     console.log('fired')
//     this.props.getHarvest()
//   }

//   render(){
//     const mappedPlants = this.props.harvestPlants.map((harvestPlant, i) => {
//       return(<div>{harvestPlant.plantName}</div>)
//     })
//     return(
//       <div className="greenhouseContainer">
//         <p className="greenhouse"></p>
//         <div className="greenhouseBackground">
//           {mappedPlants}
//           {/* <div> <img className="card" src={cabbageCard} alt=""/></div>
//           <div> <img className="card" src= {carrotCard} alt=""/></div>
//           <div> <img className="card" src= {tomatoCard} alt=""/></div> */}
//         </div>
//       </div>
//     )
//   }

// }

// export default withGame(Greenhouse)