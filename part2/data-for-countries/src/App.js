import { useState, useEffect } from "react";
import axios from "axios";
import Filter from "./components/Filter";
import Result from "./components/Result";

function App() {
  const [filter, setFilter] = useState('');
  const [countries, setCountries] = useState([]);
  const [weatherData, setWeatherData] = useState(null);
  
  const handleChange = (e) => {
    setFilter(e.target.value);
  }

  const showHandler = (countryObj) => {
    setCountries([countryObj]);
  }

  useEffect(() => {
    if (filter !== '') {
      const baseUrl = 'https://studies.cs.helsinki.fi/restcountries/';
      axios
        .get(`${baseUrl}/api/all`)
        .then((response) => {
          const filteredCountries = [];
          response.data.forEach((countryObj) => {
            const countryName = countryObj.name.common;
            if (countryName.toLowerCase().includes(filter.toLowerCase())) {
              filteredCountries.push(countryObj);
            }
          });
          setCountries(filteredCountries);
        });
    }
  }, [filter]);

  useEffect(() => {
    if (countries.length === 1) {
      const baseUrl = 'https://api.openweathermap.org/data/2.5/weather';
      const capital = countries[0].capital[0];
      const api_key = process.env.REACT_APP_API_KEY;
      axios
        .get(`${baseUrl}?q=${capital}&appid=${api_key}`)
        .then((response) => {
          setWeatherData(response.data);
        });
    }
  }, [countries]);

  return (
    <>
      <Filter 
        filter={filter}
        handleChange={handleChange}
      />

      <Result
        countries={countries}
        showHandler={showHandler}
        weatherData={weatherData}
      />
    </>
  );
}

export default App;
