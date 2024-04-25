import { useContext, useState } from "react";
import AppContext from "../context/appContext";
import Loader from "./Loader";
import Temperature from "./Temperature";
import convertOffsetSecondsToTimezone from "../timezone/convertOffsetSecondsToTimezone";

function Weather() {

   const {timer, setTimer} = useState()
  const {
    app,
    app: {weather, unit},
  } = useContext(AppContext);
  
  if (!weather) {
    return <Loader showText={true} height="40vh" />;
  }

  const {main, dt,timezone,sys} = weather;
   
  const date = new Date(dt * 1000);
  //  console.log(weather,date)
  const formatter = Intl.DateTimeFormat([], {
    hour12: true,
    hour: "numeric",
    minute: "2-digit",
    timeZone: convertOffsetSecondsToTimezone(timezone),
  });
  const dayFormatter = Intl.DateTimeFormat([], {
    weekday: "long",
    timeZone: convertOffsetSecondsToTimezone(timezone),
  });


  return (
    <>
      <div
        className="weather-icon"
        style={{
          background: `url(../weather_icons/${weather.weather[0].icon}.png)`,
        }}
      ></div>
      <h2 className="temp">
        <Temperature temperature={main.temp-273} />
        <span>°{unit}</span>
      </h2>
      <div className="feels-like">
        Feels like <Temperature temperature={main.feels_like-273} /> °{unit}
      </div>
      <div className="description">
        <i className="fa-brands fa-cloudversify"></i>&nbsp;
        {weather.weather[0].description}
      </div>
      <div
        className="divider"
        style={app.isDark ? { background: "#3B435E" } : null}
      ></div>
      <div className="day">
        {dayFormatter.format(date)}, <span>{formatter.format(date)}</span>
      </div>
      <div className="city">
        <i className="fa-solid fa-location-dot"></i> {app.city}, {app.country}
      </div>
    </>
  );
}

export default Weather;