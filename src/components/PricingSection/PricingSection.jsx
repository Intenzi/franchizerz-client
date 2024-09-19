import PropTypes from 'prop-types';
import styles from './PricingSection.module.css'; // Import the CSS module
import 'remixicon/fonts/remixicon.css';

const Card = ({ title, features, btnText, btnClassName, sale }) => {
  console.log("Rendering Card Component");
  return (
    <div className={styles.card3dPart}>
      <div className={styles.card3dWrap}>
        <div className={styles.card3dWrapper}>
          <div className={styles.cardFront}>
            <div className={styles.pricingWrap}>
              <h4 className={styles.cardTitle}>
                {title}
              </h4>
              <ul className={styles.cardList}>
                {features.map((feature, index) => (
                  <li key={index} className={feature.hidden ? styles.cardListItemHidden : styles.cardListItem}>
                    {feature.text}
                  </li>
                ))}
              </ul>
              <button className={`${styles.btn} ${btnClassName}`}>
                {btnText}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  features: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      included: PropTypes.bool.isRequired,
      hidden: PropTypes.bool,
    })
  ).isRequired,
  btnText: PropTypes.string.isRequired,
  btnClassName: PropTypes.string.isRequired,
  sale: PropTypes.bool,
};

const PricingSection = () => {
  console.log("Rendering PricingSection Component");

  const featuresBase = [
    { text: 'Area Required: 400-500 sq ft', included: true },
    { text:"Total Investment: 20-25 Lakhs" , included: true },
    { text: "Total Sales: 5 lakh", hidden: false, included: true },
    { text: 'Employees: 10', hidden: false, included: true },
  ];

  const featuresPro = [
    { text: 'Area Required: 2000-2500 sq ft', included: true },
    { text:"Total Investment: 55-60 Lakhs" , included: true },
    { text: "Total Sales: 5 lakh", hidden: false, included: true },
    { text: 'Employees: 10', hidden: false, included: true },
  ];

  const featuresEnterprise = [
    { text: 'Area Required: 400-500 sq ft', included: true },
    { text:"Total Investment: 20-25 Lakhs" , included: true },
    { text: "Total Sales: 5 lakh", hidden: false, included: true },
    { text: 'Employees: 10', hidden: false, included: true },
  ];

  return (
    <div className={styles.main} style={{ backgroundImage: `url(${import.meta.env.BASE_URL + '/img/bg-mask.svg'})` }}>
      <section className={styles.pricing} id="pricing">
        <div className={styles.container}> 
        <div className={styles.headTop}></div>     
          <h2 className={styles.title}>Franchise Models</h2>
          {/* <p className={styles.description}>The Right Plan for Your Business</p> */}
          <div className={styles.headBottom}></div>
          <div className={styles.pricingBox}>
            <Card
              title="Express"
              price="123"
              features={featuresBase}
              btnText="Choose"
              btnClassName="bg-[#F8F4FF] text-lg font-bold text-[var(--two-color)] hover:bg-[var(--first-color)] hover:text-[var(--white-color)]"
            />
            <Card
              title="Platinum"
              price="123"
              features={featuresPro}
              btnText="Choose"
              btnClassName="bg-[var(--two-color)] text-[var(--white-color)] text-xl font-bold hover:bg-[var(--gray-color)] hover:text-[var(--first-color)]"
              sale
            />
            <Card
              title="Gold"
              price="123"
              features={featuresEnterprise}
              btnText="Choose"
              btnClassName="bg-[#F8F4FF] text-lg font-bold text-[var(--two-color)] hover:bg-[var(--first-color)] hover:text-[var(--white-color)]"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingSection;
