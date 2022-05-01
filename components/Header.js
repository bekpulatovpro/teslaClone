import React from 'react'
import styles from "../styles/Home.module.css";
import  Reveal  from 'react-reveal/Reveal';

function Header() {
  return (
    <section className={styles.section}>
        <Reveal effect='fadeInUp'>
        <div className={styles.textArea}>
            <h3>Modal 3</h3>
            <p>Order Online for <span className={styles.touchless}>Touchles delivery</span></p>

        </div>
        </Reveal>

        <Reveal effect='fadeInUp2'>
        <div className={styles.buttons}>
            <div className={styles.btnMain}>
                <a href='#' className={styles.btn}>
                    custom order
                </a>
                <a href='#' className={styles.btn}>
                    exiting inventory
                </a>
            </div>
            <img className={styles.downIcon} src='/images/down-arrow.svg' alt='down logo'/>

        </div>
        </Reveal>
    </section>
  )
}

export default Header