import React from 'react';
import App from './App.js'
import WeatherInformationreducer from weather_information_reducer.js


class AppMainContainer extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      data : 'hyderabad'
    }
  }
  debugger;
  render() {
    return(
      <div>
        <App  data = {this.state.data}/ >
      </div>
    )
  }
}

export default AppMainContainer
