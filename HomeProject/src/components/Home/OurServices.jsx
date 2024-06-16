import style from "../Home/OurServices.module.css"
import ServiceCard from "./ServiceCard";
const services = [
  {
    image: '/images/home3-section4-img1.png',
    icon: '/images/icon1_services.png',
    title: 'Agriculture Products',
  },
  {
    image: '/images/organicProducts_home1.png',
    icon: '/images/icon2_services.png',
    title: 'Organic Products',
  },
  {
    image: '/images/freshVegetable_home1.png',
    icon: '/images/product-2-icon-home5.png',
    title: 'Fresh Vegetables',
  },
  {
    image: '/images/jessica brown.png',
    icon: '/images/icon4_services.png',
    title: 'Dairy Products',
  },
];

const OurServices = () => {
  return (
    <section className={style.sectionThree}>
      <div className={`container-fluid ${style.head}`}>
        <p className={style.subHeading}>Our Services</p>
        <h2 className={style.heading}>What We Offer</h2>
      </div>
      <div className={`container ${style.services}`}>
        <div className={`row row-cols-1 row-cols-md-4 ${style.cardsDiv}`}>
          {services.map((service, index) => (
            <div className="col" key={index}>
              <ServiceCard
                image={service.image}
                icon={service.icon}
                title={service.title}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};



export default OurServices;
