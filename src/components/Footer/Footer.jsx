import vk from "../../img/sprite.svg";
import tg from "../../img/sprite.svg";
import whatsapp from "../../img/sprite.svg";
import languages from "../../img/sprite.svg";
import "./Footer.css";
import { Link } from "react-router-dom";

export default function Footer({ ru, eng, kaz }) {
  return (
    <footer className="footer">
      <Link to="/" className="logo">
        QPICK
      </Link>

      <ul className="links-list">
        <li className="link-items">
          <Link to="/favorites" className="list-link">
            Избранное
          </Link>
        </li>
        <li className="link-items">
          <Link to="/storeCart" className="list-link">
            Корзина
          </Link>
        </li>
        <li className="link-items">
          <Link to="/contacts" className="list-link">
            Контакты
          </Link>
        </li>
      </ul>

      <ul className="links-list-2">
        <li className="links-list-2-item">
          <Link to="/service" className="list-link">
            Условия сервиса
          </Link>
        </li>
        <ul className="languages-list">
          <li>
            <svg className="languages-icon">
              <use href={languages + "#languages"}></use>
            </svg>
          </li>
          <li>
            <a href="#" className="languages-link">
              {kaz}
            </a>
          </li>
          <li>
            <a href="#" className="languages-link">
              {ru}
            </a>
          </li>
          <li>
            <a href="#" className="languages-link">
              {eng}
            </a>
          </li>
        </ul>
      </ul>

      <ul className="social-list">
        <li>
          <a href="https://vk.com/">
            <svg className="vk-icon">
              <use href={vk + "#vk"}></use>
            </svg>
          </a>
        </li>

        <li>
          <a href="https://web.telegram.org/a/">
            <svg className="tg-icon">
              <use href={tg + "#tg"}></use>
            </svg>
          </a>
        </li>
        <li>
          <a href="https://www.whatsapp.com/?lang=ru_RU">
            <svg className="whatsapp-icon">
              <use href={whatsapp + "#whatsapp"}></use>
            </svg>
          </a>
        </li>
      </ul>
    </footer>
  );
}
