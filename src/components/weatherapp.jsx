import React from 'react';
import '../css/weather-app.css';
import Days from './days';
import DetailedForecast from './detailedforecast';

export default class WeatherApp extends React.Component {
	today() {
   return new Date().toLocaleDateString('en-US', 
      { 
   	     weekday: 'long', 
         month: 'short', 
         day: 'numeric' 
      });
	}
   render() {
     return (
           <main>
         <Days cityState={this.props.match.params.weatherId}/>

         <DetailedForecast />
           </main>
     )
   }
 }