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
    <div className="container p-4">
      <h1 className="text-4xl mt-8 mb-2 capitalize">{city}</h1>
      <div className="flex flex-row text-md">
        <Time dt={dt} timezone={timezone} />
        <span className="uppercase">| {description}</span>
      </div>
      <div className="text-md">
        Humidity: {humidity}%, Wind: {wind}km/h
      </div>

      <div className="flex">
        <div className="flex flex-row mt-6">
          <h2 className="text-7xl mb-2">{temperature} </h2>
          <div className="text-3xl">°C</div>
        </div>

        {forecast && forecast.length > 0 && (
          <div className="flex mt-18 ml-4 text-md">
            <div className="flex">
              <p>H </p>
              {Math.round(forecast[0].minTemp)}
              <span className="text-sm">°C</span>
            </div>
            <div className="flex">
              <p>L </p>
              {Math.round(forecast[0].maxTemp)}
              <span className="text-sm">°C</span>
            </div>
          </div>
        )}
      </div>

      <video
        src={iconMap[weatherCode]}
        autoPlay
        loop
        muted
        preload="auto"
        playsInline
        className="w-24 h-24"
      />

      <div className="mt-40">
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
                    <div className="flex flex-col gap-1">
                      <div className="flex">
                        <p>H</p>
                        {Math.round(item.minTemp)}
                        <span className="text-sm">°C</span>
                      </div>
                      <div className="flex">
                        <p>L</p>
                        {Math.round(item.maxTemp)}
                        <span className="text-sm">°C</span>
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
  );
}
