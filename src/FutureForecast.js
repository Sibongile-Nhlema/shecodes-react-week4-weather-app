import React, { useState } from "react";

function FutureForecast() {
  return (
    <div className="container p-3">
      <div className="row">
        <div className="col">
          <p>Monday</p>
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="Cloudy icon"
            className="weather-icon float-left"
          />
          <p>6 °C</p>
        </div>
        <div className="col">
          <p>Tuesday</p>
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="Cloudy icon"
            className="weather-icon float-left"
          />
          <p>41 °C</p>
        </div>
        <div className="col">
          <p>Wednesday</p>
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="Cloudy icon"
            className="weather-icon float-left"
          />
          <p>10 °C</p>
        </div>
        <div className="col">
          <p>Thursday</p>
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="Cloudy icon"
            className="weather-icon float-left"
          />
          <p>16 °C</p>
        </div>
        <div className="col">
          <p>Friday</p>
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="Cloudy icon"
            className="weather-icon float-left"
          />
          <p>24 °C</p>
        </div>
      </div>
    </div>
  );
}

export default FutureForecast;
