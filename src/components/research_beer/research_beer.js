import React, { useState, useEffect } from "react";
import "./research_beer.css";
import Results from "../beer_search/beer_search";
import wen from "../../assets/img/search.png";

export default function Research_beer() {
  const [search, setSearch] = useState();
  const [dataBeer, setDataBeer] = useState([]);
  const [researchToggle, setResearchToggle] = useState(false);

  const searchValue = (e) => {
    setSearch(e.target.value);
  };

  const sendResearch = () => {
    setResearchToggle(!researchToggle);
  };

  useEffect(() => {
    fetch(`https://api.punkapi.com/v2/beers?beer_name=${search}&page=1`).then(
      function (response) {
        if (response.ok && !search == "") {
          response.json().then((data) => {
            let beer = data;
            setDataBeer(beer);
            console.log(data);
          });
        }
      }
    );
  }, [researchToggle]);

  const keypress = (e) => {
    if (e.code == "Enter") {
      sendResearch();
    }
  };

  return (
    <>
      <div className="search-container">
        <div className="search-bar">
          <input
            onKeyDown={keypress}
            onChange={searchValue}
            type="text"
            className="search"
            placeholder="Chercher une bière"
          />
          <img onClick={sendResearch} src={wen} alt="Loupe" />
        </div>
        <div className="search-result">
          {dataBeer.map((item) => {
            return (
              <Results
                name={item.name}
                type={item.tagline}
                url={item.image_url}
                key={item.id}
                id={item.id}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
