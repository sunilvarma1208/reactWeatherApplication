import React from 'react';
import WeatherInformation from './WeatherInformation'
import styles from './app.css';
import TextField from '@material-ui/core/TextField';


class App extends React.Component {
  constructor(props) {
    super(props);
      debugger;
    this.state = {
      value: '',
      city :'',
      weatherDescription:'',
      temperature:'',
      show: false
    };

  }


  handleChange(event) {
    this.setState(
      {
        value: event.target.value
      }
  );
  }

  handleSubmit(event) {
    event.preventDefault();
    let cityName = this.state.value;
    let url = 'http://api.openweathermap.org/data/2.5/weather?q='+cityName+'&mode=json&units=metric&APPID=a1be9deacf14c15472775a38c10194ac';
    fetch(url)
    .then(res => res.json())
    .then((response) => {
      if(response.cod == 200){
        this.setState(
          {
           city : response.name,
           weatherDescription : response.weather[0].description,
           temperature : response.main.temp+ ' celsius',
           show: true,
           value: ''

         }
       )

      }
      else {
        alert('Please enter correct city name!')
      }


   })
 }


 handleClear(event){
   event.preventDefault();

    this.setState({
      value: ''
    })
  }

  render() {
    return (
      <div>
      <form className={styles.mainContainer}>
        <label>
        <div className={styles.title}> Weather App </div>
          <h1>Enter The City Name</h1> <br />
            <div className={styles.userEnteredInput}>
              <input type="text" value={this.state.value} onChange={this.handleChange.bind(this)} />
            </div>

        </label>
        <br />
        <div className={styles.clickButtons}>

            <input className={styles.inputSubmitButton} type="submit"  onClick={this.handleSubmit.bind(this)} />
            <input className={styles.inputClearButton}type="submit" value="Clear"  onClick={this.handleClear.bind(this)}/>

        </div>

      </form>

      <WeatherInformation city ={this.state.city} temperature={this.state.temperature} weatherDescription={this.state.weatherDescription} show={this.state.show}/>
      </div>
    );
  }
}

export default App
