import React, { useRef } from "react";
import {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "../firebase";
import "./SigninScreen.css";

const SignInScreen = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const register = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((e) => console.log(e.message));
  };

  const signIn = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div className="signinScreen">
      <form>
        <h1>Sign In</h1>
        <input ref={emailRef} type="email" placeholder="email" />
        <input ref={passwordRef} type="password" placeholder="Password" />
        <button type="submit" onClick={signIn} className="signinScreen__login">
          Sign In
        </button>

        <h4>
          <span className="signinScreen__gray">New to Netflix? </span>
          <span className="signinScreen__link" onClick={register}>
            Sign Up Now.
          </span>
        </h4>
      </form>
    </div>
  );
};

export default SignInScreen;
