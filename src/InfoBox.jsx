import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import "./InfoBox.css";

export default function InfoBox({ info }) {
  return (
    <div className="InfoBox">
      {Object.keys(info).length ? (
        <>
          <h1>Weather Info - {info.weather}</h1>
          <div className="cardContainer">
            <Card sx={{ maxWidth: 400 }}>
              <CardMedia
                sx={{ height: 300 }}
                image={info.imageUrl}
                title={info.city}
              />
              <CardContent>
                <Typography gutterBottom variant="h4" component="div">
                  {info.place}&nbsp;
                  {info.condition === "Rain" ? (
                    <ThunderstormIcon />
                  ) : info.temp < 15 ? (
                    <AcUnitIcon />
                  ) : (
                    <WbSunnyIcon />
                  )}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "text.secondary" }}
                  component="span"
                >
                  <p>Temperature: {info.temp}&deg;C</p>
                  <p>Humidity: {info.humidity}&deg;C</p>
                  <p>Min Temp: {info.tempMin}&deg;C</p>
                  <p>Max Temp: {info.tempMax}&deg;C</p>
                  <p>
                    The Weather can be described as <i>{info.weather}</i> and
                    fells like {info.fellsLike}&deg;C
                  </p>
                </Typography>
              </CardContent>
            </Card>
          </div>
        </>
      ) : (
        <h1 style={{ opacity: 0.7 }}>
          Enter a valid city name above to get the weather information.
        </h1>
      )}
    </div>
  );
}
