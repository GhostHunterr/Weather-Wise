import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SearchBox.css";
import { useState } from "react";

export default function SearchBox() {
  let [city, setCity] = useState("");

  let API_URL = `https://api.openweathermap.org/data/2.5/weather`;

  let getWeatherInfo = async () => {
    let res = await fetch(
      `${API_URL}?q=${city}&appid=${
        import.meta.env.VITE_WEATHER_API_KEY
      }&units=metric`
    );
    let jsonRes = await res.json();
    let result = {
      temp: jsonRes.main.temp,
      tempMin: jsonRes.main.temp_min,
      tempMax: jsonRes.main.temp_max,
      humidity: jsonRes.main.humidity,
      fellsLike: jsonRes.main.feels_like,
      weather: jsonRes.weather[0].description,
    };
    console.log(result);
  };
  let handleCityChange = (e) => {
    setCity(e.target.value);
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    setCity("");
    getWeatherInfo();
  };

  return (
    <div className="SearchBox">
      <h1>Search for the Weather</h1>
      <form onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="City Name"
          variant="outlined"
          name="city"
          value={city}
          onChange={handleCityChange}
          required
        />
        <br />
        <br />
        <Button variant="contained" type="submit">
          Search
        </Button>
      </form>
    </div>
  );
}
