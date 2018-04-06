import React from 'react';
import '../css/weather-app.css';
import Days from './days';
import DetailedForecast from './detailedforecast';
import sampleCity from '../sample-city';

export default class WeatherApp extends React.Component {
    today() {
   return new Date().toLocaleDateString('en-US',
      {
        weekday: 'long',
         month: 'short',
         day: 'numeric'
      });
    }
    constructor() {
      super();
      this.state = {
        city: [],
        currentDay:{}
      }
    }

    updateCurrentDay(day){
   this.setState({
     currentDay: day
   });
 }
    componentWillMount() {
       this.setState({
         city: sampleCity,
         currentDay: sampleCity[0]
       });
 }
   render() {
    // console.log(this.props.match.params)
     return (
           <main>
            <Days cityState={ this.props.match.params.weatherId }
              data={ this.state }
            />
            <DetailedForecast currentDay={ this.state.currentDay } />
           </main>
     )
   }
 }