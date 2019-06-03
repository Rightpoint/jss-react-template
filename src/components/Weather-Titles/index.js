import React from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-react';

const WeatherTitles = (props) => {
  return (
      <div>
          <h1 className="title-container__title"><Text field={props.fields.main} /></h1>
          <p className="title-container__subtitle"><Text field={props.fields.sub} /></p>
      </div>
  );
}

export default WeatherTitles;
