import React from 'react';
import '../css/weather-app.css';
import Days from './days';
import DetailedForecast from './detailedforecast';

export default class WeatherApp extends React.Component {
   render() {
     return (
           <main>
         <Days />
         <DetailedForecast />
           </main>
     )
   }
 }