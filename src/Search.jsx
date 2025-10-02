import React, { useState } from "react";

export default function Search({ onSearch }) {
  const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim() === "") return;
    onSearch(city);
    setCity("");
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="mt-3 mb-3 text-left">
        <input
          type="search"
          placeholder="Enter a city.."
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="bg-gray-200 pt-2 pb-2 pl-2 rounded-md focus:outline-none"
        />
        <input type="submit" value="Search" className="hidden" />
      </form>
    </div>
  );
}
