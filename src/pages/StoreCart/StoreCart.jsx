import Footer from "../../components/Footer/Footer";
import TotalPrice from "../../components/TotalPrice/TotalPrice";
import Product from "../../components/Product/Product";
import "./StoreCart.css";
import { useState } from "react";

export default function StoreCart() {
  let [counter, setCounter] = useState(1);
  let [totalPrice, setTotalPrice] = useState(2927);

  // let goods = [];
  // for (let i = 0; i < sessionStorage.length; i++) {
  //   goods.push(JSON.parse(sessionStorage.getItem[i]));
  //   console.log(JSON.parse(sessionStorage.getItem[i]));
  // }
  // console.log(goods);

  // function priceAllGoods() {}

  const sum = () => {
    const startPrice = document.querySelector(".product-price-2");
    totalPrice += parseInt(startPrice.textContent);
    setTotalPrice(totalPrice);
  };

  const subtraction = () => {
    totalPrice -= 2927;
    setTotalPrice(totalPrice);
  };

  const increase = () => {
    counter++;
    setCounter(counter);
    sum();
  };

  const decrease = () => {
    if (counter > 1) {
      counter--;
      setCounter(counter);
      subtraction();
    }
  };

  return (
    <>
      <section className="store-cart">
        <h2 className="basket-title">Корзина</h2>
        <div className="basket-container">
          <div className="goods">
            <Product
              increase={increase}
              counter={counter}
              decrease={decrease}
            />

            {/* {goods.map((elem) => (
              <Product
                {...elem}
                increase={increase}
                counter={counter}
                decrease={decrease}
              />
            ))} */}
          </div>
          <TotalPrice totalPrice={totalPrice} />
        </div>
      </section>
      <Footer ru="рус" eng="eng" kaz="Каз" />
    </>
  );
}
