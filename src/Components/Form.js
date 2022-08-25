import React, {Component, Fragment} from "react";
import '../App.css';

const Form = (props) => {

	return (
			<form onSubmit={props.getWeather} 
			className="Form text-violet" 
			>
				<input
					className="border-solid border-2 border-grey-500 p-2 m-2 text-pink-800 rounded-lg"
					type="text" name="lat" placeholder="Enter Latitude:" 
				/>
				<input
					className="border-solid border-2 border-grey-500 p-2 m-2 text-pink-800 rounded-lg"
					type="text" name="lon" placeholder="Enter Longitude" 
				/>
				<input 
					className="border-4 p-2 text-violet-600 text-large bg-amber-500 rounded-md hover:bg-green-300 cursor-pointer"
					type="submit" name="submit" placeholder="Search" 
				/>
			</form>

	);
}

export default Form;


