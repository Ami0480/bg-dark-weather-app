import React, { useState, useEffect } from "react";
import Homepage from "./Homepage";
import Search from "./Search";

import "./App.css";

function App() {
  const [weather, setWeather] = useState({
    city: "",
    temperature: 0,
    description: "",
    humidity: 0,
    wind: 0,
    dt: 0,
    timezone: 0,
    icon: "",
    weatherCode: "",
  });
  const [forecast, setForecast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const apiKey = "d1193959d2d841ec7555416d715716a6";

  const handleSearch = async (cityName) => {
    setLoading(true);

    try {
      const resWeather = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`
      );

      const data = await resWeather.json();

      if (data.cod !== 200) {
        setError("City not found");
        setWeather(null);
        return;
      }

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

      const resForecast = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}&units=metric`
      );

      const dataForecast = await resForecast.json();

      if (dataForecast.cod !== "200") {
        setError("Forecast data not available");
        return;
      }

      const dailyTemps = {};
      dataForecast.list.forEach((item) => {
        const date = item.dt_txt.split(" ")[0];
        if (!dailyTemps[date]) dailyTemps[date] = [];
        dailyTemps[date].push(item.main.temp);
      });

      const dates = Object.keys(dailyTemps);
      const firstFullDayIndex = dates.findIndex((date) =>
        dataForecast.list.some(
          (i) => i.dt_txt.startsWith(date) && i.dt_txt.includes("12:00:00")
        )
      );
      const dailyForecast = dates
        .slice(firstFullDayIndex, firstFullDayIndex + 5)
        .map((date) => {
          const temps = dailyTemps[date];

          const noonItem = dataForecast.list.find(
            (i) => i.dt_txt.startsWith(date) && i.dt_txt.includes("12:00:00")
          );

          return {
            date,
            dt: noonItem
              ? noonItem.dt
              : dataForecast.list.find((i) => i.dt_txt.startsWith(date)).dt,
            minTemp: Math.min(...temps),
            maxTemp: Math.max(...temps),
            weather: noonItem
              ? noonItem.weather.map((w) => ({
                  ...w,
                  icon: w.icon.replace("n", "d"),
                }))
              : [],
            dt_txt: noonItem ? noonItem.dt_txt : date,
          };
        });

      setForecast(dailyForecast);
    } catch (error) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleSearch("Perth");
  }, []);

  return (
    <div className="flex flex-col w-screen h-dvh">
      <Search onSearch={handleSearch} />
      {loading ? (
        <p className="text-xl ml-10 md:ml-90 md:mt-14">Loading...</p>
      ) : weather === null ? (
        <p className="text-xl mt-20 ml-10 md:ml-90 md:mt-14">
          City not found...
        </p>
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
