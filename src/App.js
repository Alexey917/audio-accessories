import "./App.css";
import Home from "./pages/Home";
import StoreCart from "./pages/StoreCart/StoreCart";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Favorites from "./pages/Favorites";
import Contacts from "./pages/Contacts";
import Conditions from "./pages/Conditions";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="storeCart" element={<StoreCart />} />
            <Route path="favorites" element={<Favorites />} />
            <Route path="contacts" element={<Contacts />} />
            <Route path="service" element={<Conditions />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
