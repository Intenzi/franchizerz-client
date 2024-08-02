// import React from 'react';
import PropTypes from 'prop-types';
import styles from './PricingSection.module.css'; // Import the CSS module
import 'remixicon/fonts/remixicon.css';

const Card = ({ title, price, features, btnText, btnClassName, sale }) => {
  console.log("Rendering Card Component");
  return (
    <div className={styles.card3dPart}>
      <div className={styles.card3dWrap}>
        <div className={styles.card3dWrapper}>
          <div className={styles.cardFront}>
            <div className={styles.pricingWrap}>
              <h4 className={styles.cardTitle}>
                {title} {sale && <span className={styles.sale}>Save $40</span>}
              </h4>
              <ul className={styles.cardList}>
                {features.map((feature, index) => (
                  <li key={index} className={feature.hidden ? styles.cardListItemHidden : styles.cardListItem}>
                    <i className={`ri-${feature.included ? 'check' : 'close'}-fill`}></i> {feature.text}
                  </li>
                ))}
              </ul>
              <div className={styles.price}>
                ${price}<span className={styles.priceTime}>/month</span>
              </div>
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
    { text: 'Upload Video up to 720p Resolution', included: true },
    { text: 'Attachment & Post Scheduling', included: true },
    { text: 'Set your rates', hidden: true, included: true },
    { text: 'Exclusive Deals', hidden: true, included: true },
    { text: 'Advanced Statistics', hidden: true, included: false },
  ];

  const featuresPro = [
    { text: 'Upload Video up to 720p Resolution', included: true },
    { text: 'Attachment & Post Scheduling', included: true },
    { text: 'Set your rates', included: true },
    { text: 'Exclusive Deals', included: true },
    { text: 'Advanced Statistics', included: false },
  ];

  const featuresEnterprise = [
    { text: 'Upload Video up to 720p Resolution', included: true },
    { text: 'Attachment & Post Scheduling', included: true },
    { text: 'Set your rates', included: true },
    { text: 'Exclusive Deals', included: true },
    { text: 'Advanced Statistics', included: true },
  ];

  return (
    <div className={styles.main} style={{ backgroundImage: `url(${import.meta.env.BASE_URL + '/img/bg-mask.svg'})` }}>
      <section className={styles.pricing} id="pricing">
        <div className={styles.container}> 
          <h2 className={styles.title}>Franchise Models</h2>
          <p className={styles.description}>The Right Plan for Your Business</p>
          <div className={styles.pricingBox}>
            <Card
              title="Base"
              price="123"
              features={featuresBase}
              btnText="Choose"
              btnClassName="bg-[#F8F4FF] text-lg font-bold text-[var(--two-color)] hover:bg-[var(--first-color)] hover:text-[var(--white-color)]"
            />
            <Card
              title="Pro"
              price="123"
              features={featuresPro}
              btnText="Try 1 month"
              btnClassName="bg-[var(--two-color)] text-[var(--white-color)] text-xl font-bold hover:bg-[var(--greay-color)] hover:text-[var(--first-color)]"
              sale
            />
            <Card
              title="Enterprise"
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
