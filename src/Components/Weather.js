import React from "react";
import '../App.css';


const Weather = (props) => {

	// const [city, country, temperature, humitidy, description, error] = {props};
	return (
		<div className="Weather px-6 py-10 text-manga text-xl flex flex-col justify-center">
			{
				props.city && 
				<p className="flex justify-evenly py-4 px-30 w-30">
					<span className="">City:</span>
					<span className="">{props.city}</span> 
				</p>
			}
			{
				props.country && 
				<p className="flex justify-evenly py-4 px-30 w-30">
					<span className="">Country:</span>
					<span className="">{props.country}</span>
				</p>
			}
			{
				props.temperature &&		
				<p className="flex justify-evenly py-4 px-30 w-30">
					<span className="">Temperature:</span>
					<span className="">{props.temperature}</span>
				</p>
			}
			{
				props.humitidy && 
				<p className="flex justify-evenly py-4 px-30 w-30">
					<span className="">Humidity:</span>
					<span className="">{props.humitidy}</span>
				</p>
			}
			{
				props.description && 
				<p className="flex justify-evenly py-4 px-30 w-30">
					<span className="">Description:</span>
					<span className="">{props.description}</span>
				</p>
			}
			
		</div>
    );
}

export default Weather;

