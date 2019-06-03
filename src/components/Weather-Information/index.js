import React from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-react';

const WeatherInformation = (props) => {
  return (
      <div className="weather__info">
          { 
              props.city && props.country && 
              <p className="weather__key">
                  <Text field={props.fields.location} />: <span className="weather__value">{props.city}, {props.country}</span>
              </p> 
          }
          { 
              props.temperature && 
              <p className="weather__key">
                  <Text field={props.fields.temperature} />: <span className="weather__value">{props.temperature}</span>
              </p> 
          }
          { 
              props.humidity && 
              <p className="weather__key">
                  <Text field={props.fields.humidity} />: <span className="weather__value">{props.humidity}</span>
              </p> 
          }
          { 
              props.description && 
              <p className="weather__key">
                  <Text field={props.fields.condition} />: <span className="weather__value">{props.description}</span>
              </p> 
          }
          { 
              props.error && 
              <p className="weather__error">
                  {props.error}
              </p> 
          }
      </div>
  );
}

export default WeatherInformation;
