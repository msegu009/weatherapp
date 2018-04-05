import React from 'react';
import DayForecast from './dayforecast';
import NightForecast from './nightforecast';
  
 export default class DetailedForecast extends React.Component {
   render() {
     return (
           <div className="details">
             <DayForecast />
             <NightForecast />
           </div>
     )
   }
 }