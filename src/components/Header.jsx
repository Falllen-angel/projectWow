import React from "react";
import styled from "styled-components";
import Logoimg from '../images/Logo.png';
import Logoimg2 from '../images/Logo2.png';

import styles from './Header.module.css';
import { GiHamburgerMenu } from "react-icons/gi";
const HeaderArea = styled.div`
  width: 90vw;
  height: 110px;
  display: flex;
  left: 5vw;
  margin: 0 auto;
  margin-top: 20px;
  border-bottom: 1px solid #000;
  background: rgba( 255, 255, 255, 0.02 );
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
  backdrop-filter: blur( 15px );
  -webkit-backdrop-filter: blur( 15px );
  border-radius: 40vw;
  border: 1px solid rgba( 255, 255, 255, 0.18 );
`

export default function Header(){
  return(
    <HeaderArea>
      <div className={styles.h_main}>
        <h1 className={styles.logo}><img src={Logoimg2} alt=""/></h1>
        <div className={styles.h_nav}>
          <div className={styles.h_nav_top}>
            <ul className={styles.h_nav_top_in}>
              <li>Sign In</li>
              <li>Sign Up</li>
              <li>Cart</li>
              <li>Order</li>
            </ul>
          </div>
          <ul className={styles.h_nav_bot}>
            <li>Products</li>
            <li>About Us</li>
            <li>Clients</li>
            <li>Comments</li>
            <li><GiHamburgerMenu /></li>
          </ul>
        </div>
      </div>
    </HeaderArea>
  )
}