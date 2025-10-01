import React, { useState, useEffect } from "react";
import Homepage from "./Homepage";
import Search from "./Search";

import "./App.css";

function App() {
  const [weather, setWeather] = useState([]);
  const [forecast, setForecast] = useState([]);
  const [loading, setLoading] = useState(false);

  const apiKey = "d1193959d2d841ec7555416d715716a6";

  const handleSearch = async (cityName) => {
    setLoading(true);

    try {
      const resWeather = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`
      );

      const data = await resWeather.json();

      console.log(forecast);

      setWeather({
        city: data.name,
        temperature: Math.round(data.main.temp),
        description: data.weather[0].description,
        humidity: data.main.humidity,
        wind: data.wind.speed,
        dt: data.dt,
        timezone: data.timezone,
        icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
        weatherCode: data.weather[0].icon,
      });

      const resForecast = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}&units=metric`
      );

      const dataForecast = await resForecast.json();

      const dailyForecast = dataForecast.list
        .filter((item) => item.dt_txt.includes("12:00:00"))
        .map((item) => ({
          ...item,
          weather: item.weather.map((w) => ({
            ...w,
            icon: w.icon.replace("n", "d"),
          })),
        }));

      setForecast(dailyForecast);
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    handleSearch("Perth");
  }, []);

  return (
    <div>
      <Search onSearch={handleSearch} />
      {loading ? (
        <p className="text-xl mt-20">Loading...</p>
      ) : (
        <Homepage
          city={weather.city}
          temperature={weather.temperature}
          description={weather.description}
          humidity={weather.humidity}
          wind={weather.wind}
          dt={weather.dt}
          timezone={weather.timezone}
          icon={weather.icon}
          weatherCode={weather.weatherCode}
          forecast={forecast}
        />
      )}
    </div>
  );
}

export default App;
