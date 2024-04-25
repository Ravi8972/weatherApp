import React, { useContext } from "react";
import AppContext from "../context/appContext";
import Card from "./Card";
import Loader from "./Loader";
import convertOffsetSecondsToTimezone from "../timezone/convertOffsetSecondsToTimezone";

function Highlights() {


  const {
    app: { weather, isDark },
  } = useContext(AppContext);

  if (!weather) {
    return <Loader />;
  }
  const { timezone,main,wind,sys } = weather;
  const formatter = Intl.DateTimeFormat([], {
    hour12: true,
    hour: "numeric",
    minute: "2-digit",
    timeZone: convertOffsetSecondsToTimezone(timezone),
  });
  return (
    <>
      <div className="highlight-container">
        <Card className="h-card">
          <div className="h-title">Humidity</div>
          <img src="/weather_icons/humidity.png" width={100} alt="" />
          <div className="hl-value">
            <h1>{main.humidity}</h1>
            <span>%</span>
          </div>
        </Card>
        <Card className="h-card">
          <div className="h-title">Wind Speed</div>
          <img
            src={`/weather_icons/wind-${isDark ? "night" : "day"}.png`}
            width={100}
            alt="wind icon"
          />
          <div className="hl-value">
            <h1>{wind.speed.toFixed(1)}</h1>
            <span>m/s</span>
          </div>
        </Card>
        <Card className="h-card sun">
          <div className="sun-info">
            <img src="/weather_icons/sunrise.png" width={50} alt="" />
            <div>
              {formatter.format(new Date(sys.sunrise * 1000))}
              <span>Sunrise</span>
            </div>
          </div>
          <div className="sun-info">
            <img src="/weather_icons/sunset.png" width={50} alt="" />
            <div>
              {formatter.format(new Date(sys.sunset * 1000))}
              <span>Sunset</span>
            </div>
          </div>
        </Card>
        <Card className="h-card">
          <div className="h-title">Clouds</div>
          <img src="/weather_icons/clouds.png" width={100} alt="" />

          <div className="hl-value">
            <h1> {weather.clouds.all}</h1>
            <span>%</span>
          </div>
        </Card>
        <Card className="h-card">
          <div className="h-title">Visibility</div>
          <img src="/weather_icons/uv.png" width={100} alt="" />
          <h1>{weather.visibility}</h1>
        </Card>
        <Card className="h-card">
          <div className="h-title">Pressure</div>
          <img src="/weather_icons/pressure.png" width={100} alt="" />

          <div className="hl-value">
            <h1>{main.pressure}</h1>
            <span>hPa</span>
          </div>
        </Card>
      </div>
    </>
  );
}

export default Highlights;