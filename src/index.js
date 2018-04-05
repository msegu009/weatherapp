import React from 'react';
import {render} from 'react-dom';
import './css/global.css';
import WeatherForm from './components/weatherform';

render( <WeatherForm />, document.querySelector('#app'));