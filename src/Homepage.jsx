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
    <div className="pb-5 px-10 flex-1 flex flex-col justify-between  md:mt-10 max-w-screen mx-auto w-[1000px] md:mb-10">
      <div class="w-full md:flex md:justify-between">
        <div>
          <h1 className="text-4xl mt-1 mb-1 capitalize font-semibold md:text-8xl md:mt-4">
            {city}
          </h1>
          <div className="flex flex-row text-sm md:text-xl font-light">
            <Time dt={dt} timezone={timezone} />
            <span className="uppercase">| {description}</span>
          </div>
          <div className="text-sm md:text-xl font-light">
            Humidity: {humidity}%, Wind: {wind}km/h
          </div>
        </div>

        <div className="flex flex-col md:items-center">
          <div className="flex flex-row mt-4">
            <h2 className="text-8xl mb-2 font-semibold md:text-9xl">
              {temperature}{" "}
            </h2>
            <div className="text-2xl mt-3">°C</div>
          </div>
          {forecast && forecast.length > 0 && (
            <div className="flex text-md gap-1 md:text-xl font-light">
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
            className="w-24 h-24 md:w-30 md:h-30"
          />
        </div>
      </div>

      <div className="flex gap-2 w-full justify-between">
        {forecast && forecast.length > 0 ? (
          forecast.map((item, index) => {
            const localTime = new Date((item.dt + timezone) * 1000);
            const dayShort = localTime.toUTCString().split(",")[0];

            return (
              <div key={index} className="flex flex-col items-center mr-1 ml-1">
                <p className="md:text-xl">{dayShort}</p>
                <video
                  src={iconMap[item.weather?.[0]?.icon]}
                  autoPlay
                  loop
                  muted
                  preload="auto"
                  playsInline
                  className="w-12 h-12 md:w-20 md:h-20"
                />

                <h3 className="text-sm md:text-xl">
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
  );
}
