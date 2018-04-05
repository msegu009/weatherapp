import React from 'react';
import { render } from 'react-dom';
import './css/global.css';
import WeatherForm from './components/weatherform.jsx';
import WeatherApp from './components/weatherapp';
import { BrowserRouter, Route } from 'react-router-dom';


const Root = () => {
 return (
   <BrowserRouter>
     <div>
       <Route exact path="/" component={ WeatherForm } />
       <Route path="/weather/:weatherId" component={ WeatherApp } />
     </div>
   </BrowserRouter>
 )
}

render( <Root />, document.querySelector('#app') );


