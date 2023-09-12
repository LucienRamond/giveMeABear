import React from "react";
import "./beer_search.css";
import noImage from "../../assets/img/no_image.png";
import { useNavigate } from "react-router-dom";

export default function Results(props) {
  const naviguate = useNavigate();
  return (
    <div onClick={() => naviguate(`/beerpage/${props.id}`)} className="result">
      <img src={props.url ? props.url : noImage} alt="Photo de bière" />
      <p>- {props.name}</p>
      <p>- {props.type}</p>
    </div>
  );
}
