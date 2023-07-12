import WeatherData from "./WeatherData";

const CountryData = ({ country, weatherData }) => {
    return (
      <>
        <h1>{country.name.common}</h1>
        <div>capital {country.capital[0]}</div>
        <div>area {country.area}</div>
        <br />
        <strong>languages:</strong>
        <br />
        {Object.values(country.languages).map((language) => (
          <li key={language}>{language}</li>
        ))}
        <br />
        <img alt={country.flags.alt} src={country.flags.png} />
        <br />
        <h2>Weather in {country.capital[0]}</h2>
        <WeatherData city={country.capital[0]} weatherData={weatherData} />
      </>
    );
}

export default CountryData;
