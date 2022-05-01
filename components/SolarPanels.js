import React from "react";
import styles from "../styles/Home.module.css";
import Reveal from "react-reveal/Reveal";

function SolarPanels() {
  return (
    <section className={styles.section}>
      <Reveal effect="fadeInUp">
        <div className={styles.textArea}>
          <h3>Solar Panels</h3>
          <p>Lowest Const Solar Panels in America</p>
        </div>
      </Reveal>

      <Reveal effect="fadeInUp">
        <div className={styles.buttons}>
          <div className={styles.btnMain}>
            <a href="#" className={styles.btn}>
              order now
            </a>
            <a href="#" className={styles.btn}>
              learn more
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export default SolarPanels;
