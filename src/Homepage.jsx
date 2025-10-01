import React from "react";
import Time from "./Time";

export default function Homepage({
  city,
  dt,
  timezone,
  temperature,
  description,
  humidity,
  wind,
  icon,
}) {
  return (
    <div>
      <h1 className="text-4xl mt-8 mb-2 capitalize">{city}</h1>
      <div className="text-md">
        <Time dt={dt} timezone={timezone} />
        <span className="uppercase">{description}</span>
      </div>
      <div className="text-md">
        Humidity: {humidity}%, Wind: {wind}km/h
      </div>
      <div className="flex flex-row mt-5">
        <h2 className="text-6xl">{temperature} </h2>
        <div className="text-3xl">°C</div>
      </div>
      <img src={icon} alt="weather icon" className="w-24 h-24" />

      <div className="flex flex-row mt-44 place-content-between">
        <div className="flex flex-col items-center">
          <p>Mon</p>
          <img src={icon} alt="current icon" className="w-14 h-14" />
          <p>Cloudy</p>
          <p>18°C</p>
        </div>
        <div className="flex flex-col items-center">
          <p>Mon</p>
          <img src={icon} alt="current icon" className="w-14 h-14" />
          <p>Cloudy</p>
          <p>18°C</p>
        </div>
        <div className="flex flex-col items-center">
          <p>Mon</p>
          <img src={icon} alt="current icon" className="w-14 h-14" />
          <p>Cloudy</p>
          <p>18°C</p>
        </div>
        <div className="flex flex-col items-center">
          <p>Mon</p>
          <img src={icon} alt="current icon" className="w-14 h-14" />
          <p>Cloudy</p>
          <p>18°C</p>
        </div>
        <div className="flex flex-col items-center">
          <p>Mon</p>
          <img src={icon} alt="current icon" className="w-14 h-14" />
          <p>Cloudy</p>
          <p>18°C</p>
        </div>
      </div>
    </div>
  );
}
