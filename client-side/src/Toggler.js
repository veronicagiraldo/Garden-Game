import React from 'react';

class Toggler extends Component{
  constructor(){
    super()

    this.state ={
      SunOn: false,
      waterOn: false,
      seedOn: false
    }
  }
  toggle =() => {
    this.setState(({on}) => ({on: !on}))
  }
  render(){
    let Comp = this.props.component;
    return(
      <Comp on={this.state.on} toggle={this.toggle}{...this.props}/>
    )
  }
}
export default Toggler;

export function withToggler(C) {
  return props => <Toggler component={C} {...props}/>
}