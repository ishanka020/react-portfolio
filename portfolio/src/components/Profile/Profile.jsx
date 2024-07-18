import React from "react";

import styles from "./Profile.module.css";
import { getImageUrl } from "../../utils";

export const Profile = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Ishanka</h1>
        <p className={styles.description}>
          Passionate IT undergraduate with hands-on experience in software
          development and system design. Reach out if you'd like to learn more!
        </p>
        <a
          href="mailto:ishankapereraofficial@email.com"
          className={styles.contactBtn}
        >
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("profile/profile2.png")}
        alt="Image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
