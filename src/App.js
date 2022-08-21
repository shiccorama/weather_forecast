import React, {Component, Fragment} from 'react';
import './App.css';
import Form from './Components/Form';
import Weather from './Components/Weather'

// you need to get 2 things for fetching api's from outside :
// you need api-key and api-url

const getWeather = async (e) => {
    e.preventDefault();

    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_id = "43af3f6fa42ed309c715e8e1db26b83e";

    const api_link = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${city}&lon=${country}&appid=${api_id}`);

    // const api_link = await fetch("https://api.openweathermap.org/data/2.5/weather?lat=30&lon=30&appid=43af3f6fa42ed309c715e8e1db26b83e");

    const api_data = await api_link.json();

    console.log(api_data);

};





class App extends Component {

    constructor(props) {
        super(props);

    }


    render(){
        return (
            <div className="App">

                <p> hello from my app  </p>

                <Form getWeather={this.getWeather} />

                <Weather />

            </div>
        );
    }
}

export default App;
