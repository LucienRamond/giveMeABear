import BeerCard from "../../components/beer_card/beer_card";
import "./random_beer.css";
import { useEffect, useState } from "react";

export default function RandomBeer() {
  const [dataBeer, setDataBeer] = useState({});
  const [toggle, setToggle] = useState(true);

  const changeState = () => {
    return setToggle(!toggle);
  };

  useEffect(() => {
    fetch("https://api.punkapi.com/v2/beers/random").then(function (response) {
      if (response.ok) {
        response.json().then((data) => {
          let beer = {
            name: data[0].name,
            url: data[0].image_url,
            type: data[0].tagline,
            id: data[0].id,
          };
          setDataBeer(beer);
        });
      }
    });
  }, [toggle]);

  return (
    <>
      <div className="random-beer">
        <BeerCard
          name={dataBeer.name}
          url={dataBeer.url}
          type={dataBeer.type}
          id={dataBeer.id}
        />

        <button onClick={changeState} className="random-beer-btn">
          Random Beer !
        </button>
      </div>
    </>
  );
}
