import React, { useState } from "react";
import Homepage from "./Homepage";
import Search from "./Search";

import "./App.css";

function App() {
  const [city, setCity] = useState("Perth");

  return (
    <div>
      <Search onSearch={setCity} />
      <Homepage city={city} />
    </div>
  );
}

export default App;
