import { useState, useEffect } from "react";
import Forecast from "./forecast/Forecast";
import MainWeatherDetail from "./mainWeatherDetail/MainWeatherDetail";
import SearchWeather from "./searchWeather/SearchWeather";
import SecondaryWeatherDetail from "./secondaryWeatherDetail/SecondaryWeatherDetail";
import { toast } from "react-toastify";
import getFormattedWeatherData from "../../services/weatherServices";
const WeatherDetails = () => {
  const [query, setQuery] = useState({ q: "fatehpur" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      const message = query.q ? query.q : "current location.";
      toast.info("Fetching weather for " + message);
      await getFormattedWeatherData({ ...query, units }).then((data) => {
        toast.success(
          `Successfully fetched weather for ${data.name}, ${data.country}.`
        );
        setWeather(data);
      });
    };
    fetchWeather();
  }, [query, units]);
  return (
    <section className="section">
      <SearchWeather setQuery={setQuery} units={units} setUnits={setUnits} />
      {weather && (
        <>
          <MainWeatherDetail weather={weather} />
          <SecondaryWeatherDetail weather={weather} />
          <Forecast title="Daily Forecast" items={weather.daily} />
          <Forecast title="Hourly Forecast" items={weather.hourly} />
        </>
      )}
    </section>
  );
};

export default WeatherDetails;
