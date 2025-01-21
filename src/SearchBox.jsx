import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SearchBox.css";
import { useState } from "react";
import Alert from "@mui/material/Alert";
import { setImage } from "./helper";

export default function SearchBox({ updateInfo }) {
  let [city, setCity] = useState("");
  let [error, setError] = useState(false);

  let API_URL = `https://api.openweathermap.org/data/2.5/weather`;

  let getWeatherInfo = async () => {
    try {
      let res = await fetch(
        `${API_URL}?q=${city}&appid=${
          import.meta.env.VITE_WEATHER_API_KEY
        }&units=metric`
      );
      let jsonRes = await res.json();
      console.log(jsonRes);
      let result = {
        place: `${city}, ${jsonRes.sys.country}`,
        imageUrl: setImage(jsonRes.main.temp, jsonRes.weather[0].main),
        condition: jsonRes.weather[0].main,
        weather: jsonRes.weather[0].description,
        temp: jsonRes.main.temp,
        tempMin: jsonRes.main.temp_min,
        tempMax: jsonRes.main.temp_max,
        humidity: jsonRes.main.humidity,
        fellsLike: jsonRes.main.feels_like,
      };
      console.log(result);
      return result;
    } catch (err) {
      throw err;
    }
  };

  let handleCityChange = (e) => {
    setCity(e.target.value);
  };

  let handleSubmit = async (e) => {
    try {
      e.preventDefault();
      setError(false);
      setCity("");
      let result = await getWeatherInfo();
      updateInfo(result);
    } catch (err) {
      setError(true);
    }
  };

  return (
    <div className="SearchBox">
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
        {error && (
          <Alert severity="error" style={{ marginTop: "1rem" }}>
            No Such Place Exists.
          </Alert>
        )}
      </form>
    </div>
  );
}
