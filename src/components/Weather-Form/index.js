import React from 'react';

const WeatherForm = (props) => {
  return (
      <form onSubmit = {props.getWeather}>
          <input className="col-sm-12 col-md-6" type="text" name="city" placeholder="City..."></input>
          <input className="col-sm-12 col-md-6" type="text" name="country" placeholder="Country..."></input>
          <button>Get Weather</button>
      </form>
  );
}

export default WeatherForm;
