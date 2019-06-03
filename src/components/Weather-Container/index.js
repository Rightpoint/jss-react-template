import React from 'react';
import { Placeholder, Text } from '@sitecore-jss/sitecore-jss-react';
import WeatherInformation from '../Weather-Information/index';

const API_KEY = "b0d53800ca8929750d721c47ff5a8658";

class WeatherContainer extends React.Component {
  // state is an object that contains key-value pairs
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }

  // No need to bind 'this' in the constructor
  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=imperial`);
    const data = await api_call.json();

    if (city && country) {
      console.log(data);
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ""
      });
    } else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: "Please enter the values."
      });
    }
  }

  render() {
    return (
      <div className="wrapper">
        <div className="main">
          <div className="container">
            <div className="row">
              
              <div className="col-sm-12 col-md-5 col-lg-5 title-container">
                <Placeholder name="weather-titles" rendering={this.props.rendering}/>
              </div>
              <div className="col-sm-12 col-md-7 col-lg-7 form-container">
                <Placeholder name="weather-form" getWeather={this.getWeather} rendering={this.props.rendering}/>
                <Placeholder name="weather-information" 
                  temperature={this.state.temperature}
                  city={this.state.city}
                  country={this.state.country}
                  humidity={this.state.humidity}
                  description={this.state.description}
                  error={this.state.error}
                  rendering={this.props.rendering} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


//Make this component available for import in other files
export default WeatherContainer;
