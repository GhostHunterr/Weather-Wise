import "./WeatherApp.css";
import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "Toronto",
    fellsLike: -21.64,
    humidity: 63,
    temp: -14.64,
    tempMax: -13.78,
    tempMin: -16.01,
    weather: "clear sky",
  });

  return (
    <div className="WeatherApp">
      <h1>Weather Wise.</h1>
      <SearchBox />
      <InfoBox info={weatherInfo} />
    </div>
  );
}
