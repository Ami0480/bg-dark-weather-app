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
      <h1>Perth</h1>
      <p>Monday Sep 27 | CLOUDY</p>
      <p>Humidity: 48%, Wind: 7km/h</p>
      <h2>20°C</h2>
      <img src="/images/cloudy.png" alt="current icon" className="w-24 h-24" />
    </div>
  );
}
