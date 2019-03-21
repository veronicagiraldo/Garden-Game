import React from 'react';
import Home from './Home';
import{Switch, Route} from 'react-router-dom';
import HowTo from './HowTo';
import gameDisplay from './gameDisplay';
// import { homedir } from 'os';
// import GameProvider from '/GameProvider';

class App extends React.Component {
  render(){
  return(
    <div>
      <Switch>
          <Route exact path ='/' component={Home}/>
          <Route path ='/HowTo' component={HowTo}/>
          <Route path ='/gameDisplay'component={gameDisplay}/>
      </Switch>
    </div>
  )
}
}

export default App