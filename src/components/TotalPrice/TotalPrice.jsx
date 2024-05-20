import "./TotalPrice.css";

export default function TotalPrice({ totalPrice }) {
  console.log(totalPrice);
  return (
    <div className="total-price">
      <div className="total-price-content">
        <p className="title-total-price">ИТОГО</p>
        <p className="price-total-price">&#8381; {totalPrice}</p>
      </div>
      <button className="go-to-checkout">Перейти к оформлению</button>
    </div>
  );
}
