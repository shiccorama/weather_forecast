import React, {Component, Fragment} from "react";

const Form = (props) => {

	return (
			<form onSubmit={props.getWeather} className="Form">
				<input type="text" name="city" placeholder="Enter your City:" />
				<input type="text" name="country" placeholder="Enter your Country" />
				<input type="submit" name="submit" placeholder="Search" />
			</form>

	);
}

export default Form;


