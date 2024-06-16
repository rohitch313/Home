import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import styles from "../About/KnowUs.module.css";

const KnowUs = () => {
  return (
    <section className={styles.section1}>
      <div className={styles.titleContainer}>
        <h6 className={styles.subHeading}>Home/About</h6>
        <h3 className={styles.heading}>About</h3>
      </div>

      <div className={`${styles.section1ContentDiv} container`}>
        <div className={`${styles.section1Img} col col-lg-6 col-md-12`}>
          <div className={styles.tractorImgDiv}>
            <img className={styles.tractorImg} src="/images/about-content-img.png" />
            <div className={styles.greenSquare}></div>
          </div>

          <div className={styles.girlImgDiv} >
            <img className={styles.girlImg} src="/images/about-girl-img.png" />
          </div>
        </div>

        <div className={`${styles.section1Content} col col-lg-6 col-md-12`} >
          <div className={styles.getKnowUs}>
            <p className={styles.subHeading}>Get to Know Us</p>
            <h2 className={styles.heading}>The Best Agriculture Market</h2>
          </div>

          <div className={styles.title}>
            <h3>There are many variations of passa of lorem available, but the majority have suffered alteration.</h3>
          </div>

          <div className={styles.paragraph}>
            <p>There are many variations of passages of lorem ipsum available but the majority have suffered alteration in some form by injected humor or random word which don’t look even.</p>
          </div>

          <div className={styles.points}>
            <div className={styles.point1}>
              <p><FontAwesomeIcon icon={faCheck} className={styles.tick} /> Suspe ndisse suscipit sagittis leo</p>
            </div>
            <div className={styles.point2}>
              <p><FontAwesomeIcon icon={faCheck} className={styles.tick} /> Entum estibulum disgnissim posuere</p>
            </div>

            <div className={styles.point3}>
              <p><FontAwesomeIcon icon={faCheck} className={styles.tick} /> Lorem Ipsum on the tend to repeat</p>
            </div>
          </div>

          <div className={styles.section1btn}>
            <button className={`${styles.discoverMoreBtn} btn`}>Discover More</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KnowUs;
