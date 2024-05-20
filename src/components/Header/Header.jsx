import like from "../../img/sprite.svg";
import shortingCart from "../../img/sprite.svg";
import "./Header.css";
import { Link } from "react-router-dom";

export default function Header({ countActive, counter }) {
  return (
    <>
      <header className="header">
        <Link to="/" className="logo">
          QPICK
        </Link>
        <nav className="nav">
          <Link to="/favorites" lassName="nav-link">
            <svg className="like-icon">
              <use href={like + "#like"}></use>
            </svg>
            <div className="count-favorites">
              <p className="count-style">1</p>
            </div>
          </Link>
          <Link to="/storeCart">
            <svg className="shorting-cart-icon">
              <use href={shortingCart + "#shorting-cart"}></use>
            </svg>
            <div
              className={
                countActive
                  ? "count-shorting-cart count-active"
                  : "count-shorting-cart"
              }
            >
              <p className="count-style style-shorting-cart">{counter}</p>
            </div>
          </Link>
        </nav>
      </header>
    </>
  );
}
