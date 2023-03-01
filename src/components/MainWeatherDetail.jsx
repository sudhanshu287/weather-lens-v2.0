import React from "react";
import {
  formatToLocalTime,
  iconUrlFromCode,
} from "../services/weatherServices";
import "./MainWeatherDetail.css";
const MainWeatherDetail = ({
  weather: { details, icon, temp, timezone, dt, name, country },
}) => {
  const styleGradient = {
    backgroundImage: "url('https://images.unsplash.com/photo-1584267385494-9fdd9a71ad75?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8d2VhdGhlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60')", backgroundSize: 'cover', backgroundRepeat: 'no-repeat',
  }
  return (
    <div className="mainWeatherDetail" style={styleGradient}>
      <div className="cityName mainDetailBox">
        <h2>{`${name}, ${country}`}</h2>
      </div>
      <div className="weatherConditionIcon mainDetailBox">
        <img src={iconUrlFromCode(icon)} alt="weather-condition-icon" />
      </div>
      <div className="dateAndTime mainDetailBox">
        <div className="timeIcon">
          <i className="ri-time-line "></i>
        </div>
        <div>
          <h2>{formatToLocalTime(dt, timezone, "dd LLL yyyy")}</h2>
          <p>{formatToLocalTime(dt, timezone, " ccc', 'hh:mm a")}</p>
        </div>
      </div>
      <div className="temperatureDetail mainDetailBox">
        <div>
          <h1>{`${temp.toFixed()}°`}</h1>
          <p>{details}</p>
        </div>
      </div>
    </div>
  );
};

export default MainWeatherDetail;
