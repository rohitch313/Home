import React from 'react';
import styles from './ServiceCard.module.css'; // Import the CSS module for styling

const ServiceCard = ({ imageUrl, iconUrl, title }) => {
  return (
    <div className={`${styles.card}`}>
      <img src={imageUrl} className={`card-img-top ${styles.cardImg}`} alt="..." />
      <div className={styles.cardBody}>
        <div className={styles.about}>
          <img src={iconUrl} className={styles.icon1} alt="" />
          <button className={`btn ${styles.readMoreBtn}`}>Read More</button>
          <h5 className={`${styles.cardTitle} ${styles.heading}`}>{title}</h5>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
