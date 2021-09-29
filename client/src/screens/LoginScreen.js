import React, { useState } from "react";
import "./LoginScreen.css";
import SignInScreen from "./SignInScreen";

const LoginScreen = () => {
  const [signIn, setSignIn] = useState(false);

  return (
    <div className="loginScreen">
      <div className="loginScreen__background">
        <img
          className="loginScreen__logo"
          src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt=""
        />

        <button className="loginScreen__button" onClick={() => setSignIn(true)}>
          Sign In
        </button>

        <div className="loginScreen__gradient"></div>
      </div>

      <div className="loginScreen__body">
        {signIn ? (
          <SignInScreen />
        ) : (
          <>
            <h1>Unlimited films, TV programs and more.</h1>
            <h2>Whatch anywhere. Cancel at any time.</h2>
            <h3>
              Ready to watch? Enter your Email to create or restart your
              membership.
            </h3>
            <div className="loginScreen__input">
              <form>
                <input type="email" placeholder="Email Address" />
                <button
                  className="loginScreen__getStarted"
                  onClick={() => setSignIn(true)}
                >
                  Get Started
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default LoginScreen;
