import "./beer_card.css";
import noImage from "../../assets/img/no_image.png";
import { useNavigate } from "react-router-dom";

export default function BeerCard(props) {
  const naviguate = useNavigate();

  return (
    <div
      onClick={() => naviguate(`/beerpage/${props.id}`)}
      className="beer-card"
    >
      <div className="beer-card-title">
        <h2 className="beer-card-name">{props.name}</h2>
      </div>

      <div className="beer-card-img">
        <img src={props.url ? props.url : noImage} alt="Image de bière" />
      </div>

      <p className="beer-card-description">{props.type}</p>
    </div>
  );
}
