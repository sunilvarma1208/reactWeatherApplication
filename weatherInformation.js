import React from 'react'
import styles from './app.css';

class WeatherInformation extends React.Component{
  constructor(props){
    super(props);
  }

  render() {
    return (
      this.props.show ?
      <div className={styles.mainContainer}>
        <div><b>City:</b> <i>{this.props.city}</i></div>
        <div><b>Temperature:</b> <i>{this.props.temperature}</i></div>
        <div><b>WeatherDescription: </b> <i className={styles.weatherDescription}>{this.props.weatherDescription}</i></div>

      </div> : null
    );
  }
}

export default WeatherInformation
