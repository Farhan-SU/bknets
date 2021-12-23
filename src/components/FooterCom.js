import React from 'react';
import { Link} from 'react-router-dom';
import {Row, Col} from 'react-bootstrap';
import {NavLink, useHistory} from "react-router-dom";
import "../assets/styles/layout.scss";
import Logo from "../assets/img/brooklynnets.png";


function Footer () {

  let history = useHistory();
  function goHome() {
    history.push("/");
  };

    return(
        <>
          <footer className='footerStyle'>
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
          <p>Copyright © 2021 Barclays Center. All Rights Reserved. Privacy Policy | Do Not Sell My Info | Sitemap</p>
          </footer>
        </>
    );
};

export default Footer;
