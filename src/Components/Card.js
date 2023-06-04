import React, { Component } from 'react';
import styles from "../styles/Card.module.css"
import starIcon from "../Images/star.png"
import shopIcon from "../Images/shopIcon .png"
import heartNotFill from "../Images/heartNotFill.png"
import heartFill from "../Images/heartFill.png"
class Card extends Component {

    constructor() {
        super()
        this.flag = false
    }
    
    heartHandler = (event) => {
        if (this.flag === true) {
            event.target.src = heartNotFill;
            this.flag = false;
        } else {
            event.target.src = heartFill
            this.flag = true;
        }
        
    }

    render() {

        const { image, price, name, rate } = this.props

        return (
          <div className={styles.container}>
            <img
              onClick={this.heartHandler}
              id="heart"
              className={styles.heartNotFill}
              src={heartNotFill}
              alt="plant"
            />
            <img className={styles.plant} src={image} alt="plant" />
            <span className={styles.name}>{name}</span>

            <div className={styles.rateContainer}>
              <img className={styles.starIcon} src={starIcon} alt="plant" />
              <span className={styles.rateDegree}>{rate}</span>
            </div>

            <div className={styles.bottomCard}>
              <p className={styles.price}>{price}</p>
              <div className={styles.buyContainer}>
                <img className={styles.buyIcon} src={shopIcon} alt="plant" />
              </div>
            </div>
          </div>
        );
    }
}

export default Card;