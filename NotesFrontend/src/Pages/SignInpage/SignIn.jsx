import { useState } from 'react';
import styles from './SignIn.module.css';
import NoteSection from '../../Components/NoteSection/NoteSection';
import NotesPages from '../NotesPages/NotesPages';


const SignIn = () => {

  const handleLogin = () => {
    window.location.href="/notes"
  }

  return (
    <div className= {styles.sign_in}>
      <div className= {styles.title}>
        <p>TAKE NOTES</p>
      </div>
      <div className= {styles.card}>
        <img src="/images/User_cicrle_light.svg" width={100} alt="" />
        <form className= {styles.form_div} action="">
          <input type="email" placeholder='Enter Mail' required />
          <input type="password" placeholder='Enter Password' />
        </form>
        <button className= {styles.login_btn} onClick= {handleLogin}>Login</button>
        <p>New to TAKE NOTES? <a href="/signup">Sign Up</a></p>
      </div>
    </div>
  );
};

export default SignIn;