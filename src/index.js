import React from 'react';
import { render } from 'react-dom';
import './css/global.css';
import WeatherForm from './components/weatherform.jsx';
import WeatherApp from './components/weatherapp';

render(<WeatherApp />, document.getElementById('app'));
