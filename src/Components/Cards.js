import React, { createContext, useEffect, useState } from "react";
import styles from "../styles/Cards.module.css";
import Card from "./Card";
import {v4} from "uuid";
import {Link} from "react-router-dom";

import backIcon from "../Images/backIcon.png";
//Products
import { plants } from "./ProductsApi";

const ProductsContext = createContext()

const Cards = () => {

  const [products, setProducts] =  useState([])

  useEffect(() => {

    setProducts(plants)
    
  }, [])
  


  return (
    <ProductsContext.Provider value={products}>
      <div className={styles.backContainer}>
        <Link to="/">
          <img className={styles.backIcon} src={backIcon} />
        </Link>
      </div>
      <div className={styles.container}>
        <h1 className={styles.title}>
          Featured <span>Plants</span>
        </h1>
        {products.map((products) => (
          <Card
            key={v4()}
            image={products.image}
            name={products.name}
            price={products.price}
            rate={products.rate}
          />
        ))}
      </div>
    </ProductsContext.Provider>
  );
};

export default Cards;
