import React from "react";
import currentIcon from "/images/cloudy.png";

export default function Homepage() {
  return (
    <div>
      <form className="mt-3 mb-3 text-center">
        <input
          type="search"
          placeholder="Enter a city.."
          className="bg-gray-200 pt-2 pb-2 pl-2 rounded-md"
        />
        <input type="submit" value="Search" className="hidden" />
      </form>
      <h1 className="text-4xl mt-8 mb-2">Perth</h1>
      <p className="text-md">Monday Sep 27 | CLOUDY</p>
      <p className="text-md">Humidity: 48%, Wind: 7km/h</p>
      <h2 className="text-6xl mt-5">20°C</h2>
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
