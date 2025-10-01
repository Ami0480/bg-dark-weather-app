import React, { useState, useEffect } from "react";
import Homepage from "./Homepage";
import Search from "./Search";
import currentIcon from "./images/cloudy.png";

import "./App.css";

function App() {
  const [weather, setWeather] = useState({
    city: "Perth",
    dt: Math.floor(Date.now() / 1000),
    timezone: 8 * 3600,
    temperature: 20,
    description: "ClOUDY",
    humidity: 48,
    wind: 7,
    icon: currentIcon,
  });

  const [loading, setLoading] = useState(false);

  const apiKey = "d1193959d2d841ec7555416d715716a6";

  const handleSearch = async (cityName) => {
    setLoading(true);
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`
      );

      if (!res.ok) throw new Error("City not found");

      const data = await res.json();

      console.log(data);

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
        />
      )}
    </div>
  );
}

export default App;
