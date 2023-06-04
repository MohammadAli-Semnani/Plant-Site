import React, { Component } from 'react';
import styles from "../styles/Cards.module.css";
import Card from './Card';
import { v4 } from 'uuid';
import { Link } from 'react-router-dom';

//images
import plant1 from "../Images/plant1.png"
import plant2 from "../Images/plant2.png"
import plant3 from "../Images/plant3.png"
import plant4 from "../Images/plant4.png"
import plant5 from "../Images/plant5.png"
import plant6 from "../Images/plant6.png"
import plant7 from "../Images/plant7.png"
import plant8 from "../Images/plant8.png"
import plant9 from "../Images/plant9.png"
import backIcon from "../Images/backIcon.png"





class Cards extends Component {

    constructor() {
        super();
        this.state = {
          plants: [
            {
              image: plant1,
              name: "strelitzia",
              price: "€9.9 – €16.95",
              rate: "4.2",
            },
            {
              image: plant2,
              name: "ficus elastica",
              price: "€15.95 – €39.95",
              rate: "5",
            },
            {
              image: plant3,
              name: "calathea roseopicta",
              price: "€6.95 – €16.95",
              rate: "3.7",
            },
            {
              image: plant4,
              name: "philodendron",
              price: "€7.95 – €59.95",
              rate: "4.6",
            },
            {
                image: plant5,
                name: "monstera ",
                price: "€5.95",
                rate: "4.1"
            },
            {
              image: plant6,
              name: "epipremnum ",
              price: "€5.95 – €49.95",
              rate: "4.5",
            },
            {
              image: plant7,
              name: "zamioculcas raven",
              price: "€5.95 – €59.95",
              rate: "4.7",
            },
            {
              image: plant8,
              name: "ceropegia woodii",
              price: "€6.95 – €34.95",
              rate: "3.9",
            },
            {
              image: plant9,
              name: "ceropegia woodii",
              price: "€6.95 – €12.95",
              rate: "4.8",
            },
          ],
        };
    }

    
    render() {
        return (
          <>
            <div className={styles.backContainer}>
              <Link to="/"><img className={styles.backIcon} src={backIcon } /></Link>
            </div>
            <div className={styles.container}>
            <h1 className={styles.title}>
                Featured <span>Plants</span>
            </h1>
                {this.state.plants.map((plant) => <Card key={v4()}  image={plant.image}  name={plant.name}  price={plant.price}  rate={plant.rate}/>)}
            </div>
            </>
        );
    }
}

export default Cards;
