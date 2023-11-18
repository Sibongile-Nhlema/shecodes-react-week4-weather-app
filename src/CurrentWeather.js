import React, { useEffect, useState } from "react";
import axios from "axios";

function CurrentWeather() {
  let [cityTime, setCityTime] = useState("Saturday 17:00");
  let [city, setCity] = useState("Cairo");
  //let [day, setDay] = useState("Wednesday");
  let [icon, setIcon] = useState(
    "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
  );
  let [temp, setTemp] = useState("42");
  let [description, setDescription] = useState("Sunny");
  let [precipitation, setPrecipitation] = useState("30");
  let [humidity, setHumidity] = useState("60");
  let [wind, setWind] = useState("10");
  let [unit, setUnit] = useState("");

  function convertTemperature(temp, unit) {
    if (unit === "C") {
      return temp;
    } else if (unit === "F") {
      return ((temp - 32) * 5) / 9;
    } else {
      return temp;
    }
  }

  useEffect(() => {
    function handleCityChange(response) {
      setTemp(convertTemperature(response.data.main.temp, unit));
      setIcon(response.data.weather[0].icon);
      setDescription(response.data.weather[0].description);
      setPrecipitation(response.data.main.pressure);
      setHumidity(response.data.main.humidity);
      setWind(response.data.wind.speed);

      console.log(response.data);
    }

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=62231151ce343c4d68652e1617efc22f&units=metric`;
    axios.get(url).then(handleCityChange);
  }, [city, unit]);

  function handleCityInput(event) {
    setCity(event.target.value);
  }

  if (city) {
    return (
      <div className="container p-3">
        <div className="row">
          <div className="current-weather">
            <h1 id="city-display">{city}</h1>
            <ul className="list">
              <li id="displayDateTime">
                <span id="city-time">{cityTime}</span>
              </li>
              <li id="conditions">{description}</li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <div className="clearfix ">
              <div>
                <img
                  src={`https://openweathermap.org/img/w/${icon}.png`}
                  alt="Cloudy icon"
                  width="100px"
                  className="weather-icon float-left"
                />
              </div>
              <div className="float-left icon-div">
                <span className="temperature">{Math.round(temp)}</span>
                <span className="units">
                  <a href="#" className="celsius" onClick={() => setUnit("C")}>
                    °C{" "}
                  </a>{" "}
                  |
                  <a
                    href="#"
                    className="fahrenheit"
                    onClick={() => setUnit("F")}
                  >
                    °F
                  </a>
                </span>
              </div>
            </div>
          </div>
          <div className="col-6">
            <ul className="list">
              <li id="precipitation">Precipitation: {precipitation}%</li>
              <li id="humidity">Humidity: {humidity}%</li>
              <li id="wind-speed">Wind: {Math.round(wind)} km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default CurrentWeather;
