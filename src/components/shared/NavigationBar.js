import React, { useContext } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

//context
import { cartContext } from "../../context/CardContextProvider";

//icon
import shopIcon from "../../assets/icons/shop.svg";

const NavigationBar = () => {
  const { state } = useContext(cartContext);
  return (
    <div>
      <div>
        <Link to="/products">Products</Link>
        <div>
          <Link to="/cart">
            <img src={shopIcon} alt="shop card icon" />
          </Link>
          <span>{state.itemsCounter}</span>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
