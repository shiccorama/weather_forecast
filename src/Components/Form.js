import React, {Component, Fragment} from "react";

const Form = (props) => {

	return (
			<form onSubmit={props.getWeather} className="Form">
				<input type="text" name="lat" placeholder="Enter Latitude:" />
				<input type="text" name="lon" placeholder="Enter Longitude" />
				<input type="submit" name="submit" placeholder="Search" />
			</form>

	);
}

export default Form;


