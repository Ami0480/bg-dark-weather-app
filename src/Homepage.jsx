import React from "react";
import currentIcon from "/images/cloudy.png";

export default function Homepage({ city, temperature }) {
  return (
    <div>
      <h1 className="text-4xl mt-8 mb-2 capitalize">{city}</h1>
      <p className="text-md">Monday Sep 27 | CLOUDY</p>
      <p className="text-md">Humidity: 48%, Wind: 7km/h</p>
      <h2 className="text-6xl mt-5">{temperature}°C</h2>
      <img src={currentIcon} alt="current icon" className="w-34 h-34" />

      <div className="flex flex-row mt-44 place-content-between">
        <div className="flex flex-col items-center">
          <p>Mon</p>
          <img src={currentIcon} alt="current icon" className="w-14 h-14" />
          <p>Cloudy</p>
          <p>18°C</p>
        </div>
        <div className="flex flex-col items-center">
          <p>Mon</p>
          <img src={currentIcon} alt="current icon" className="w-14 h-14" />
          <p>Cloudy</p>
          <p>18°C</p>
        </div>
        <div className="flex flex-col items-center">
          <p>Mon</p>
          <img src={currentIcon} alt="current icon" className="w-14 h-14" />
          <p>Cloudy</p>
          <p>18°C</p>
        </div>
        <div className="flex flex-col items-center">
          <p>Mon</p>
          <img src={currentIcon} alt="current icon" className="w-14 h-14" />
          <p>Cloudy</p>
          <p>18°C</p>
        </div>
        <div className="flex flex-col items-center">
          <p>Mon</p>
          <img src={currentIcon} alt="current icon" className="w-14 h-14" />
          <p>Cloudy</p>
          <p>18°C</p>
        </div>
      </div>
    </div>
  );
}
