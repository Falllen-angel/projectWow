import React from "react";
import styles from './Body.module.css';
import Mainimg from '../images/MainImg.png';
import Mainimg2 from '../images/MainImg2.png';

export default function Body(){
  return(
    <div>
      <div className={styles.main_box}>
        <p className={styles.main_ttl}>Taste the Difference</p>
        <p className={styles.main_sub}>
          Indulge in the true<br/>
          taste of premium<br/>
          ice cream,<br/>
          Häagen-Dazs.
        </p>
        {/* <img className={styles.main_img} src={Mainimg} alt=""/> */}
        <img className={styles.main_img} src={Mainimg2} alt=""/>
        <div className={styles.back_txt}>
          <span>This is Häagen-Dazs</span>
          <span>This is Häagen-Dazs</span>
          <span>This is Häagen-Dazs</span>
        </div>
      </div>
    </div>
  )
}