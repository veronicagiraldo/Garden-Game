import React from 'react';
import Home from './Home';
import{Switch, Route} from 'react-router-dom';
import HowTo from './HowTo';
import gameDisplay from './gameDisplay';
import seedChoice from './seedChoice';
import Navbar from './Navbar';
import Greenhouse from './Greenhouse';

class App extends React.Component {
  render(){
    return(
      <div>
        <Navbar/>
        <div className="bodyContainer">
          <Switch>
            <Route exact path ='/' component={Home}/>
            <Route path ='/HowTo' component={HowTo}/>
            <Route exact path ='/seedChoice' component={seedChoice}/>
            <Route path ='/seedChoice/:vegetable'component={gameDisplay}/>
            <Route path ='/greenhouse' component={Greenhouse}/>
          </Switch>
        </div>
      </div>
    )
  }
}

export default App