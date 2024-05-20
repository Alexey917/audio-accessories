import delIcon from "../../img/sprite.svg";
import image from "../../img/byz.png";
import prev from "../../img/sprite.svg";
import "./Product.css";

export default function Product(
  { increase, decrease, counter },
  { id, img, title, price, rate }
) {
  return (
    <div className="product">
      <div className="product-block-1">
        <img src={image} className="product-img" alt="Apple BYZ S852I" />
        <div className="product-buttons">
          <button className="btn-prev">
            <svg className="prev-icon" onClick={decrease}>
              <use href={prev + "#minus"}></use>
            </svg>
          </button>

          <p className="counter">{counter}</p>

          <button className="btn-next" onClick={increase}>
            <svg className="next-icon">
              <use href={prev + "#plus"}></use>
            </svg>
          </button>
        </div>
      </div>

      <div className="product-block-2">
        <h3 className="product-title">Apple BYZ S852I</h3>
        <p className="product-price">2927 &#8381;</p>
      </div>

      <div className="product-block-3">
        <svg className="delete-icon">
          <use href={delIcon + "#delete"}></use>
        </svg>
        <p className="product-price-2">2927 &#8381;</p>
      </div>
    </div>
  );
}
