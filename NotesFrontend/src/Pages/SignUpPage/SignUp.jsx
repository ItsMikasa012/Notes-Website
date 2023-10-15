import { useState } from "react";
import styles from "./SignUp.module.css";

const SignUp = () => {
  return (
    <div className={styles.sign_up}>
      <div className={styles.title}>
        <p>TAKE NOTES</p>
      </div>
      <div className={styles.card}>
        <img src="/images/User_cicrle_light.svg" width={100} alt="" />
        <form className={styles.form_div} action="">
          <input type="email" placeholder="Enter Mail" required />
          <input type="password" placeholder="Enter Password" />
          <input type="password" placeholder="Confirm Password" />
        </form>
        <button className={styles.login_btn}>Login</button>
        <p>Enjoy taking some notes!!!</p>
      </div>
    </div>
  );
};

export default SignUp;
