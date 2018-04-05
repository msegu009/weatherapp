import React, {Component} from 'react'
import DayForecast from './dayforecast';
import NightForecast from './nightforecast';

class DetailedForecast extends Component {
 render() {
return (
  <div>
    <DayForecast />
 <NightForecast /> 
  </div> 
)
  }
}

export default DetailedForecast;