import React from 'react'
import Days from './days';
import DetailedForecast from './detailedforecast'
class WeatherApp extends React.Component {
 render() {
return (
  <div>
    <Days />
    <DetailedForecast />
  </div> 
)
  }
}

export default WeatherApp;