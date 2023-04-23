import React from "react";
import styles from "./ProductCard.module.css";

//functions
import { shortenTitle } from "../../helpers/functions";

const ProductCard = (props) => {
  const { image, price, title } = props;
  return (
    <div className={styles.container}>
      <img src={image} alt={title} className={styles.productImg} />
      <h3>{shortenTitle(title)}</h3>
      <p>${price}</p>
      <button>click</button>
    </div>
  );
};

export default ProductCard;
