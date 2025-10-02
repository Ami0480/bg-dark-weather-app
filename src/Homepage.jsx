import React from "react";
import Time from "./Time";
import iconMap from "./Icons";

export default function Homepage({
  city,
  dt,
  timezone,
  temperature,
  description,
  humidity,
  wind,
  weatherCode,
  forecast,
}) {
  return (
    <div className="container w-screen h-screen overflow-hidden">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl mt-1 mb-1 capitalize font-semibold">{city}</h1>
        <div className="flex flex-row text-sm">
          <Time dt={dt} timezone={timezone} />
          <span className="uppercase">| {description}</span>
        </div>
        <div className="text-sm">
          Humidity: {humidity}%, Wind: {wind}km/h
        </div>
        <div className="flex flex-col">
          <div className="flex flex-row mt-4">
            <h2 className="text-6xl mb-2 font-semibold">{temperature} </h2>
            <div className="text-2xl">°C</div>
          </div>
          {forecast && forecast.length > 0 && (
            <div className="flex text-md gap-1">
              <div className="flex">
                <p>H: </p>
                {Math.round(forecast[0].minTemp)}
                <span className="text-sm">°</span>
              </div>
              <div className="flex">
                <p>L: </p>
                {Math.round(forecast[0].maxTemp)}
                <span className="text-sm">°</span>
              </div>
            </div>
          )}

          <video
            src={iconMap[weatherCode]}
            autoPlay
            loop
            muted
            preload="auto"
            playsInline
            className="w-24 h-24"
          />
        </div>
        <div className="mt-28">
          <div className="flex flex-row gap-2">
            {forecast && forecast.length > 0 ? (
              forecast.map((item, index) => {
                const localTime = new Date((item.dt + timezone) * 1000);
                const dayShort = localTime.toUTCString().split(",")[0];

                return (
                  <div
                    key={index}
                    className="flex flex-col items-center mr-1 ml-1"
                  >
                    <p>{dayShort}</p>
                    <video
                      src={iconMap[item.weather?.[0]?.icon]}
                      autoPlay
                      loop
                      muted
                      preload="auto"
                      playsInline
                      className="w-12 h-12"
                    />

                    <h3 className="text-sm">
                      <div className="flex flex-row gap-1">
                        <div className="flex">
                          {Math.round(item.minTemp)}
                          <span className="text-sm">°</span>
                        </div>
                        <div className="flex">
                          {Math.round(item.maxTemp)}
                          <span className="text-sm">°</span>
                        </div>
                      </div>
                    </h3>
                  </div>
                );
              })
            ) : (
              <p>No forecast available</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
