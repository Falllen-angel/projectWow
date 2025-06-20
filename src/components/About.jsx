import React from "react";
import Mainimg from '../images/about1.png';
import styles from './About.module.css';

export default function About(){
  return(
    <>
      <div className={styles.main_box}>
        <img className={styles.main_img} src={Mainimg} alt="" />
      </div>
      <hr/>
      <div className={styles.txt_box}>
        {/*
        <div className={styles.core_values}>
          <span>
            Authenticity: In an age of pervasive artificiality, Haagen-Dazs insists on only the finest natural ingredients, preserving the original taste and quality. This is a promise to deliver a genuine experience beyond mere ice cream.

          </span>
          <span>
            Transcendence: Beyond everyday consumption, Haagen-Dazs offers perfect relaxation and sensory satisfaction, transcending time and space, allowing you to focus solely on yourself. It's an experience that serves as a sanctuary for the soul, not just a dessert.

          </span>
          <span>
            Craftsmanship: Even in an era of mass production, we unwaveringly adhere to traditional methods and the delicate touch of artisans. This signifies our relentless passion for perfection and obsession with detail, showcasing Haagen-Dazs' enduring prestige.
            
          </span>
        </div>
        <div className={styles.brand_personality}>
          <span>
            하겐다즈는 최고의 재료와 장인정신으로 빚어낸,
            고요하면서도 자신감 있고 감각적인 경험을 통해
            시대를 초월한 세련미를 선사하는 브랜드입니다.

          </span>
        </div>
        <div className={styles.slogun}>
          <span>
            Haagen-Dazs: Taste the True Now.
          </span>
        </div> */}
      </div>
    </>
  )
}