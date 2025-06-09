import React from "react";
import styled from "styled-components";
import Logoimg from '../images/Logo.png';
import styles from './Header.module.css';
import { GiHamburgerMenu } from "react-icons/gi";
const HeaderArea = styled.div`
  width: 100%;
  height: 110px;
  display: flex;
  border-bottom: 1px solid #000;
`

export default function Header(){
  return(
    <HeaderArea>
      <div className={styles.h_main}>
        <h1 className={styles.logo}><img src={Logoimg} alt=""/></h1>
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