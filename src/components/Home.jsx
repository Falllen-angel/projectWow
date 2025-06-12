import React from "react";
import styles from './Home.module.css';
import Mainimg from '../images/MainImg.png';
import Mainimg2 from '../images/Make it natural.png';

export default function Home(){
  return(
    <div>
      <div className={styles.main_box}>
        <div className={styles.main_txt_box_back}></div>
        <div className={styles.main_txt_box}></div>
          <p className={styles.main_ttl}>Taste the Difference</p>
          <p className={styles.main_sub}>
            Indulge in the true<br/>
            taste of premium<br/>
            ice cream,<br/>
            Häagen-Dazs.
          </p>

        <img className={styles.main_img} src={Mainimg2} alt=""/>
        <div className={styles.back_txt}>
          <span>This is Häagen-Dazs</span>
          <span>This is Häagen-Dazs</span>
          <span>This is Häagen-Dazs</span>
          <span>This is Häagen-Dazs</span>
          <span>This is Häagen-Dazs</span>
          <span>This is Häagen-Dazs</span>
          <span>This is Häagen-Dazs</span>
          <span>This is Häagen-Dazs</span>
        </div>
      </div>
    </div>
  )
}