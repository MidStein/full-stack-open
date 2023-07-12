import CountryData from "./CountryData";

const Result = ({ countries, showHandler, weatherData }) => {
  if (countries.length > 10 ) {
    return (
      <div>Too many matches, specify another filter</div>
    );
  } else if (countries.length > 1) {
      return countries.map((country) => (
        <li key={country.name.common}>
          {country.name.common}
          <button onClick={() => {showHandler(country)}}>show</button>
        </li>
      ));
  } else if (countries.length === 1) {
    const country = countries[0];
    return <CountryData country={country} weatherData={weatherData} />
  } else return null;
}

export default Result;
