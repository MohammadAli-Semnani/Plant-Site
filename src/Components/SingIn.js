import React, {useEffect, useState} from "react";
import {validating} from "../Utils/singInValidating";
import styles from "../styles/SingUp.module.css";

import {toast} from "react-toastify";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SingIn = () => {
  const information = {
    email: "",
      password: "",
  };
  const [info, setInfo] = useState(information);
  const [errors, setErrors] = useState({});

  const handleButtonClick = (event) => {
    event.preventDefault();

    if (Object.keys(errors).length === 0) {
      toast.success("Sign Up Successfully!");
      setInfo(information);
    } else {
      toast.error("Please Check All Field!");
    }
  };

  useEffect(() => {
    setErrors(validating(info));
    console.log("This is error : ", errors);
  }, [info]);

  const changeHandler = (event) => {
    const {value, name, checked} = event.target;

    if (name === "isAccepted") {
      setInfo({...info, [name]: checked});
    } else {
      setInfo({...info, [name]: value});
    }
    console.log("This is Info : ", info);
  };

  return (
    <>
      <div className={styles.backgroundContainer}>
        <form className={styles.formContainer}>
          <h1 className={styles.formTitle}>Sing Up</h1>

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


          <div className={styles.btnContainer}>
            <button
              className={styles.submitBtn}
              type="submit"
              onClick={handleButtonClick}>
              Sing In
            </button>
          </div>
        </form>
      </div>

      <ToastContainer />
    </>
  );
};

export default SingIn;
