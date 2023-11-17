import Search from "./Search";
import CurrentWeather from "./CurrentWeather";
import NearbyCities from "./NearbyCities";
import FutureForecast from "./FutureForecast";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <div className="weather-app">
        <NearbyCities />
        <Search />
        <CurrentWeather city="Johannesburg" />
        <hr />
        <FutureForecast />
      </div>
      <div className="p-3">
        <p>
          <a href="https://github.com/Sibongile-Nhlema/shecodes-react-week4-weather-app" target="_blank">
            Open-source code
          </a>
          , by Sibongile Nthlema 😊, hosted on 
          <a href="" target="_blank">Netlify</a>
        </p>
      </div>
    </div>
  );
}

export default App;
