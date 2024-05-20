import "./CardProduct.css";
import star from "../../img/sprite.svg";
import "../Header/Header";
import handlerClick from "../Layout/Layout";
import { headphones, wireless_headphones } from "../../headphones";

export let product = [];

export default function CardProduct({ id, img, title, price, rate }) {
  const getProduct = (event) => {
    let eTarget = event.currentTarget.parentNode.parentNode;
    console.log(eTarget);
    console.log(eTarget.id);
    let count = 0;
    for (let i = 0; i < headphones.length; i++) {
      if (headphones[i].id === parseInt(eTarget.id)) {
        product.push(headphones[i]);
        sessionStorage.setItem(i, JSON.stringify(headphones[i]));
        count++;
      }
    }

    if (count === 0) {
      for (let i = 0; i < wireless_headphones.length; i++) {
        if (wireless_headphones[i].id === parseInt(eTarget.id)) {
          product.push(wireless_headphones[i]);
          sessionStorage.setItem(i, JSON.stringify(wireless_headphones[i]));
        }
      }
    }

    console.log(product);
  };

  return (
    <div className="card" id={id}>
      <img
        src={img}
        className={
          title === "BOROFONE BO4"
            ? "img-borofone"
            : img.match(/earpods2/gi)
            ? "img-earpods2"
            : "img-headphone"
        }
        alt={title}
      />
      <div className="card-list">
        <h3 className="card-title">{title}</h3>

        <span className={id === 1 ? "card-price old-price" : "card-price"}>
          {price} &#8381;
        </span>

        <div className="rating">
          <svg className="star-icon">
            <use href={star + "#star"}></use>
          </svg>
          <span className="card-rate">{rate}</span>
        </div>
        <button className="btn-buy" onClick={getProduct}>
          Купить
        </button>
      </div>
    </div>
  );
}
