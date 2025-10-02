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
    <div className="px-10 py-5 md:mr-80 md:ml-80">
      <form onSubmit={handleSubmit} className="text-left w-full">
        <input
          type="search"
          placeholder="Enter a city.."
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="bg-[#f1f1f1]  pt-2 pb-2 pl-2 rounded-md focus:outline-none w-full"
        />
        <input type="submit" value="Search" className="hidden" />
      </form>
    </div>
  );
}
