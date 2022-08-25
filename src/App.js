import React, {Component, Fragment} from 'react';
import axios from "axios";
import './App.css';
import Form from './Components/Form';
import Weather from './Components/Weather'

// you need to get 2 things for fetching api's from outside :
// you need api-key and api-url

class App extends Component {

    constructor(props) {
        super(props);

    }

    getWeather = async (e) => {
        e.preventDefault();

        const lat = e.target.elements.lat.value;
        const lon = e.target.elements.lon.value;
        const api_id = "43af3f6fa42ed309c715e8e1db26b83e";
    
        const api_link = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_id}`);
    
        console.log(api_link);
    
    };
    


    render(){
        return (
            <div className="App">

                <h1> Welcome to your cool WEATHER app </h1>

                <Form getWeather={this.getWeather} />

                <Weather />

            </div>
        );
    }
}

export default App;
