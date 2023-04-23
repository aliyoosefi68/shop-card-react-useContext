import React, { useContext } from "react";

import { Link } from "react-router-dom";

//Context
import { productContext } from "../context/ProductContextProvider";

const ProductDetails = (props) => {
  const products = useContext(productContext);
  const id = props.match.params.id;
  const productData = products[id - 1];

  const { image, title, description, price, category } = productData;

  return (
    <div>
      <img src={image} alt="product" />
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
        <p>
          <span>category: </span>
          {category}
        </p>
        <div>
          <span>{price}</span>
          <Link to="/products">Back to shop</Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
