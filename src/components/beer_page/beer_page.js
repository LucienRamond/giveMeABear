import React, { useState, useEffect } from "react";
import noImage from "../../assets/img/no_image.png";
import "./beer_page.css";
import { useParams } from "react-router-dom";

export default function BeerPage() {
  const [dataBeer, setDataBeer] = useState([]);
  const params = useParams();

  console.log(params.id);

  useEffect(() => {
    fetch(`https://api.punkapi.com/v2/beers/${params.id}`).then(
      function (response) {
        if (response.ok) {
          response.json().then((data) => {
            let beer = {
              name: data[0].name,
              type: data[0].tagline,
              description: data[0].description,
              url: data[0].image_url,
              abv: data[0].abv,
              ibu: data[0].ibu,
              color: data[0].ebc,
            };
            setDataBeer(beer);
            console.log();
          });
        }
      }
    );
  }, []);

  return (
    <>
      <div className="beer-page">
        <div className="beer-page-title">
          <h1>{dataBeer.name}</h1>
          <h2>{dataBeer.type}</h2>
        </div>

        <div className="beer-page-img">
          <img
            src={dataBeer.url ? dataBeer.url : noImage}
            alt="Photo de bière"
          />
        </div>
        <div className="beer-page-infos">
          <div className="abv">
            <p>{dataBeer.abv}°</p>
          </div>
          <div className="color">
            <p>{dataBeer.color}</p>
          </div>
          <div className="ibu">
            <p>{dataBeer.ibu}</p>
          </div>
          <div className="beer-page-description">
            <p>{dataBeer.description}</p>
          </div>
        </div>
      </div>
    </>
  );
}
