import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import { useState } from "react";

let product = [];

export default function Layout() {
  let [countActive, setCountActive] = useState(false);
  let [counter, setCounter] = useState(0);

  function handlerClick() {
    setCounter(counter++);
    if (product.length === 0) {
      setCountActive((countActive = true));
    }
  }

  return (
    <>
      <Header countActive={countActive} counter={counter} />
      <Outlet />
    </>
  );
}
