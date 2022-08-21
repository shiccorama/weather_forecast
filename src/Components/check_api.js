const api_key = "43af3f6fa42ed309c715e8e1db26b83e";



const api_link = `https://api.openweathermap.org/data/2.5/weather?lat=30&lon=30&appid=43af3f6fa42ed309c715e8e1db26b83e`;

const getWeather = async () => {
    const api_data = await fetch(api_link)
    debugger;
    const pure_data = await api_data.json();
    debugger;
    console.log(pure_data);

};


async function showAvatar() {

    // read our JSON
    let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=30&lon=30&appid=43af3f6fa42ed309c715e8e1db26b83e`);

    let user = await response.json();


    // wait 3 seconds
    // await new Promise((resolve, reject) => setTimeout(resolve, 3000));

    return (user) ;
}

showAvatar();


const getWeather = async () => {

    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_id = "43af3f6fa42ed309c715e8e1db26b83e";

    // const api_link = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${city}&lon=${country}&appid=${api_id}`);

    const api_link = await fetch("https://api.openweathermap.org/data/2.5/weather?lat=30&lon=30&appid=43af3f6fa42ed309c715e8e1db26b83e");

    const api_data = await api_link.json();

    console.log(api_data);

};



