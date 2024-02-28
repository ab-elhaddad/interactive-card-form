import { useContext } from "react";
import "./cards.css";
import { cardInfoContext } from "../context/CardDetailsContext";

const Cards = () => {
  const [cardInfo] = useContext(cardInfoContext);
  console.log(cardInfo);
  return (
    <div className="cards">
      <div className="card-1">
        <img src="./images/card-logo.svg" alt="" />
        <div className="card-1-txt">
          <p>{cardInfo.number}</p>
          <div className="bottom-txt">
            <p>{cardInfo.name.toUpperCase()}</p>
            <p className="m-y">
              {cardInfo.month}/{cardInfo.year}
            </p>
          </div>
        </div>
      </div>
      <div className="card-2">
        <div className="card-2-txt">{cardInfo.cvc}</div>
      </div>
    </div>
  );
};

export default Cards;
