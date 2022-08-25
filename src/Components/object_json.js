const getWeather = async () => {

  const api_link = await (fetch("https://api.openweathermap.org/data/2.5/weather?lat=30&lon=30&appid=43af3f6fa42ed309c715e8e1db26b83e"))
  .then(res => res.json())
  .then(data => console.log(data));

};


