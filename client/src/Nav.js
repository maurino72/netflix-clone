import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);
  const history = useHistory();

  const transitionNavbar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavbar);
    return () => {
      window.removeEventListener("scroll", transitionNavbar);
    };
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <div className="nav__content">
        <img
          onClick={() => history.push("/")}
          className="nav__logo"
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt="Netflix Logo"
        />

        <img
          onClick={() => history.push("/profile")}
          className="nav__avatar"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt="Netflix Avatar"
        />
      </div>
    </div>
  );
}

export default Nav;
