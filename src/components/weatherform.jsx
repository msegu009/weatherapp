import React from 'react';
import {render} from 'react-dom';
import '../css/weather-form.css';

class WeatherForm extends React.Component {
	render(){
		return (
			<form action="" className="weather-form" onSubmit={(e) => this.getWeather(e)}>
			  <h1 className="form-title">Find your local weather!</h1>
			  <div>
			    <label htmlFor="city">Enter city, state:</label>
			    <input type="text" id="city" name="city" placeholder="ex: Los Angeles, CA" ref={(input) => this.weatherFormInput = input} />
			  </div>
			  <footer>
			    <input type="submit" value="Find my weather!" />
			  </footer>
			</form>
			)
	}
}

render( <WeatherForm />, document.querySelector('#app'));

export default WeatherForm;