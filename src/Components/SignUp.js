import React, { useEffect, useState } from 'react';
import { validating } from '../Utils/validating';
import styles from "../styles/SingUp.module.css"

import { Link } from 'react-router-dom';
import logo from "../Images/logo.png"


import {toast} from "react-toastify";
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";



const SignUp = () => {

    const information = {
        username: "",
        email:"",
        password: "",
        confirmPassword: "",
        isAccepted:false
    }
    const [info, setInfo] = useState(information)
    const [errors, setErrors] = useState({})


    const handleButtonClick = (event) => {
        event.preventDefault()

        if (Object.keys(errors).length === 0) {

            toast.success("Sign Up Successfully!");
            setInfo(information);
            
        } else {

            toast.error("Please Check All Field!")
            
        }

    } 

    useEffect(() => {
        setErrors(validating(info)); 
        console.log("this is error : ",errors);
    },[info])

    const changeHandler = event => {

        const { value, name, checked } = event.target
        
        if (name === "isAccepted") {
            setInfo({...info, [name]: checked});
        }

        else {
            setInfo({...info, [name]: value })
        }
        console.log("this is Info : ", info);
    }
    
    return (
      <>
        {/* <div className={styles.logoContainer}>
          <Link to="/">
            <span> Flower Dance</span>
            <img alt="logo" src={logo} className={styles.logoImg} />
          </Link>
        </div> */}
        <div className={styles.backgroundContainer}>
          <form className={styles.formContainer}>
            <h1 className={styles.formTitle}>Sing Up</h1>

            <div className={styles.partContainer}>
              <label className={styles.labelTitle}>Username</label>
              <input
                className={styles.inputBox}
                name="username"
                type="text"
                value={info.username}
                onChange={changeHandler}
              />
              {info.username && errors.username && (
                <p className={styles.error}>{errors.username}</p>
              )}
            </div>

            <div className={styles.partContainer}>
              <label className={styles.labelTitle}>Email</label>
              <input
                className={styles.inputBox}
                name="email"
                type="email"
                value={info.email}
                onChange={changeHandler}
              />
              {info.email && errors.email && (
                <p className={styles.error}>{errors.email}</p>
              )}
            </div>

            <div className={styles.partContainer}>
              <label className={styles.labelTitle}>Password</label>
              <input
                className={styles.inputBox}
                name="password"
                type="password"
                value={info.password}
                onChange={changeHandler}
              />
              {info.password && errors.password && (
                <p className={styles.error}>{errors.password}</p>
              )}
            </div>

            <div className={styles.partContainer}>
              <label className={styles.labelTitle}>confirmPassword</label>
              <input
                className={styles.inputBox}
                name="confirmPassword"
                type="password"
                value={info.confirmPassword}
                onChange={changeHandler}
              />
              {info.confirmPassword && errors.confirmPassword && (
                <p className={styles.error}>{errors.confirmPassword}</p>
              )}
            </div>

            <div className={styles.rule}>
              <label>I Accept Terms Of Privecy Policy</label>
              <input
                className={styles.check}
                name="isAccepted"
                type="checkbox"
                value={info.isAccepted}
                onChange={changeHandler}
              />
              {info.isAccepted && errors.isAccepted && (
                <p className={styles.error}>{errors.isAccepted}</p>
              )}
            </div>

            <div className={styles.btnContainer}>
              <button
                className={styles.submitBtn}
                type="submit"
                onClick={handleButtonClick}>
                Create Account
              </button>
              <p className={styles.singupcollection}>
                Already have an Account<a href="#">Sing In</a>
              </p>
            </div>
          </form>
        </div>

        <ToastContainer />
      </>
    );
};

export default SignUp;