import React from 'react';
import Home from './Home';
import{Switch, Route} from 'react-router-dom';
import HowTo from './HowTo';
import gameDisplay from './gameDisplay';
import seedChoice from './seedChoice';
// import GameProvider from '/GameProvider';

class App extends React.Component {
  render(){
  return(
    <div>
      <Switch>
          <Route exact path ='/' component={Home}/>
          <Route path ='/HowTo' component={HowTo}/>
          <Route path ='/gameDisplay'component={gameDisplay}/>
          <Route path='./seedChoice' component={seedChoice}/>
      </Switch>
    </div>
  )
}
}

export default App