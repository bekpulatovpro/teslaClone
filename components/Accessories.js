import React from 'react'
import styles from "../styles/Home.module.css";
import  Reveal  from 'react-reveal/Reveal';

function Accessories() {
  return (
    <section className={styles.section}>
   <Reveal effect='fadeInUp'>
   <div className={styles.textArea}>
        <h3>Accessories</h3>
        <p>Lowest Const Solar Panels in America</p>

    </div>
   </Reveal>

    <Reveal effect='fadeInUp2'>
    <div className={styles.buttons}>
        <div className={styles.btnMain}>
            <a href='#' className={styles.btn}>
                shop Now
            </a>
            
        </div>
        

    </div>
    </Reveal>
</section>
  )
}

export default Accessories;