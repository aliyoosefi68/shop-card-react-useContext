import React, { useContext } from "react";

//context
import { cartContext } from "../../context/CardContextProvider";

//function
import { shortenTitle } from "../../helpers/functions";

//icons
import trashIcon from "../../assets/icons/trash.svg";

const Cart = ({ data }) => {
  const { image, title, price, quantity } = data;
  const { dispatch } = useContext(cartContext);

  return (
    <div>
      <img src={image} style={{ width: "200px" }} />
      <div>
        <h3>{shortenTitle(title)}</h3>
        <p>${price}</p>
      </div>
      <div>
        <span>{quantity}</span>
      </div>
      <div>
        {quantity === 1 ? (
          <button
            onClick={() => dispatch({ type: "REMOVE_ITEM", payload: data })}
          >
            <img src={trashIcon} style={{ width: "15px" }} />
          </button>
        ) : (
          <button onClick={() => dispatch({ type: "DECREASE", payload: data })}>
            -
          </button>
        )}
        {
          <button onClick={() => dispatch({ type: "INCREASE", payload: data })}>
            +
          </button>
        }
      </div>
    </div>
  );
};

export default Cart;
