import styles from "../Home/OurServices.module.css"
import ServiceCard from "./ServiceCard";
const OurServices = () => {
  return (
    <section className={styles.sectionThree}>
      <div className={`${styles.head} container-fluid`}>
        <p className={styles.subHeading}>Our Services</p>
        <h2 className={styles.heading}>What We Offer</h2>
      </div>

      <div className={`container ${styles.services}`}>
        <div className={`row row-cols-1 row-cols-md-4 ${styles.cardsDiv}`}>
          <div className="col">
            <ServiceCard
              imageUrl="/images/home3-section4-img1.png"
              iconUrl="/images/icon1_services.png"
              title="Agriculture Products"
            />
          </div>

          <div className="col">
            <ServiceCard
              imageUrl="/images/organicProducts_home1.png"
              iconUrl="/images/icon2_services.png"
              title="Organic Products"
            />
          </div>

          <div className="col">
            <ServiceCard
              imageUrl="/images/freshVegetable_home1.png"
              iconUrl="/images/product-2-icon-home5.png"
              title="Fresh Vegetables"
            />
          </div>

          <div className="col">
            <ServiceCard
              imageUrl="/images/jessica brown.png"
              iconUrl="/images/icon4_services.png"
              title="Dairy Products"
            />
          </div>
        </div>
      </div>
    </section>
  );
};


export default OurServices;
