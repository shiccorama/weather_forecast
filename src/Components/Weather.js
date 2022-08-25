import React from "react";


const Weather = (props) => {

	// const [city, country, temperature, humitidy, description, error] = {props};
	return (
		<div className="Weather">
			{
				props.city && 
				<p> City: {props.city} </p>
			}
			{
				props.country && 
				<p> Country: {props.country} </p>
			}
			{
				props.temperature &&		
				<p> Temperature: {props.temperature} </p>
			}
			{
				props.humitidy && 
				<p> Humidity: {props.humitidy} </p>
			}
			{
				props.description && 
				<p> Description: {props.description} </p>
			}
			
		</div>
    );
}

export default Weather;

