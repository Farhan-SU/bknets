import React from 'react';
import {NavLink, useHistory} from "react-router-dom";
import "../assets/styles/layout.scss";
import Logo from "../assets/img/brooklynnets.png";


function HeaderNav() {

  let history = useHistory();
  function goHome() {
    history.push("/");
  };

  return (
     <div className='navstyle'>
    <div className="logoCol">
      <NavLink className="logoNavBox" exact to="/" onClick={goHome}>
        <img src={Logo} alt="logo" />
      </NavLink>
    </div>
      <div className="linkCol">
        <a href='https://www.nba.com/nets/'>
          <div className="btnStyle">
            NETS NBA Page
          </div>
        </a>
      </div>
  </div>
  );
}

export default HeaderNav;

