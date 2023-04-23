import React from "react";
import styles from "./ProductCard.module.css";

import { Link } from "react-router-dom";

//functions
import { shortenTitle } from "../../helpers/functions";

const ProductCard = (props) => {
  const { image, price, title, id } = props;
  return (
    <div className={styles.container}>
      <img src={image} alt={title} className={styles.productImg} />
      <h3>{shortenTitle(title)}</h3>
      <p>${price}</p>

      <Link to={`/products/${id}`}>details</Link>
      <button>click</button>
    </div>
  );
};

export default ProductCard;
