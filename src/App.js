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
    };

    state = {
        city: "",
        country: "",
        temperature: "",
        humitidy: "",
        description: "",
    };

    getWeather = async (e) => {
        e.preventDefault();
        const lat = e.target.elements.lat.value;
        const lon = e.target.elements.lon.value;
        const api_id = "43af3f6fa42ed309c715e8e1db26b83e";
        const api_link = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_id}`);
        console.log(api_link.data.main.temp);

        if(lat && lon){
            this.setState({
                city: api_link.data.name,
                country: api_link.data.sys.country,
                temperature: api_link.data.main.temp,
                humitidy: api_link.data.main.humitidy,
                description: api_link.data.weather[0].description,
            })
        }else{
            this.setState({
                city: "",
                country: "",
                temperature: "",
                humitidy: "",
                description: "",
            })
        }


    }

    render(){
        return (
            <div className="App">

                <h1 className='text-3xl text-blue-800 font-extrabold p-6'> Welcome to your cool WEATHER app </h1>

                <Form getWeather={this.getWeather} />

                <Weather 
                city={this.state.city}
                country={this.state.country}
                temperature={this.state.temperature}
                humitidy={this.state.humitidy}
                description={this.state.description}
                error={this.state.error}
                />

            </div>
        );
    }






}

export default App;
