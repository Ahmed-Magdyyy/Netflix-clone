import React, { useEffect, useState } from "react";
import "./Nav.css";
import netflixLogo from "../../images/580b57fcd9996e24bc43c529.png";
function Nav() {
  const [show, setShow] = useState(false);

  const transitionHandler = () => {
    if (window.scrollY > 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionHandler);
    return () => window.removeEventListener("scroll", transitionHandler);
  }, []);

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <div className="nav_contents">
        <img className="nav_logo" src={netflixLogo} alt="" />

        <img
          className="nav_avatar"
          src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default Nav;
