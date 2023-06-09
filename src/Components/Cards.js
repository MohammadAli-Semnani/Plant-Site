import React, { useContext, useEffect, useState } from "react";
import styles from "../styles/Cards.module.css";
import Card from "./Card";
import {v4} from "uuid";
import {Link} from "react-router-dom";

import backIcon from "../Images/backIcon.png";
//API
import {productsContextApi} from "./ProductsApi";




const Cards = ({children}) => {
  
  const productsContext = useContext(productsContextApi)
  const [products, setProducts] =  useState([])

  useEffect(() => {

    setProducts(productsContext)
    
  }, [])
  


  return (
    <>
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
      {children}
    </>
  );
};

export default Cards;
