import React from "react";
import { Link } from "react-router-dom";
import "../style/produit.css";


const produits = ({ Produitslist }) => {
  return (
    <div className="articles">
      {Produitslist?.map((el) => (
        <div className="cardCam">
          <h2>{el.title}</h2>
          <img className="image_product" src={el.img} alt ="" />
          <p>{el.description}</p>
          <h2>{el.price}</h2>
          <Link to={`${el.id}`}>
            <button className="stylebtn">
              More Details
            </button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default produits;
