import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";

const Countries = () => {
  const [data, setData] = useState([]);
  const [rangeValue, setRangeValue] = useState(30);

  useEffect(() => {
    axios
      .get(
        "https://restcountries.com/v2/all?fields=name,population,region,capital,flag"
      )
      .then((res) => setData(res.data));
  }, []);

  return (
    <div className="countries">
      <div className="sort-container">
        <input type="range" min="1" max="250" value={rangeValue} onChange={(e) => setRangeValue(e.target.value)} />
      </div>
      <ul className="countries-list">
        {data
          .sort((a, b) => b.population - a.population)
          .filter( (country, index) => index < rangeValue)
          .map((country) => {
            return <Card country={country} key={country.name} />;
          })}
      </ul>
    </div>
  );
};

export default Countries;
