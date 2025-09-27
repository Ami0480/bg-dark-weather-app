import React from "react";

export default function Homepage() {
  return (
    <div>
      <form>
        <input
          type="search"
          placeholder="Enter a city.."
          className="bg-gray-200"
        />
        <input type="submit" value="Search" />
      </form>
      <h1 className="text-4xl">Perth</h1>
      <p className="text-sm">Monday Sep 27 | CLOUDY</p>
      <p className="text-sm">Humidity: 48%, Wind: 7km/h</p>
      <h2 className="text-4xl">20°C</h2>
      <img src="/images/cloudy.png" alt="current icon" className="w-24 h-24" />
    </div>
  );
}
