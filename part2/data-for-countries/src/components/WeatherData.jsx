const WeatherData = ({ city, weatherData }) => {
  return weatherData ? (
    <>
      <div>temperature {weatherData.main.temp} Celcius</div>
      <img 
        alt={weatherData.weather[0].description} 
        src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
      />
      <div>wind {weatherData.wind.speed} m/s</div>
    </>
  ) : null
}

export default WeatherData;
