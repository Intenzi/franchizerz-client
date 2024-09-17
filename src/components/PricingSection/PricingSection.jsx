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
              <button className={`${styles.btn} ${btnClassName}`} >
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
          <h2 className={styles.title}>Franchise Models</h2>
          <p className={styles.description}>The Right Plan for Your Business</p>
          <div className={styles.pricingBox}>
            <Card
              title="Express"
              features={featuresBase}
              btnText="Choose"
              btnClassName={styles.btnExpress}
            />
            <Card
              title="Platinum"
              features={featuresPro}
              btnText="Choose"
              btnClassName={styles.btnPlatinum}
              sale
            />
            <Card
              title="Gold"
              features={featuresEnterprise}
              btnText="Choose"
              btnClassName={styles.btnGold}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingSection;
