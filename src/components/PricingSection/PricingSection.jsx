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

const PricingSection = ({ baseFeatures, proFeatures, enterpriseFeatures , baseTitle, proTitle, enterpriseTitle}) => {
  console.log("Rendering PricingSection Component");

  return (
    <div className={styles.main} style={{ backgroundImage: `url(${import.meta.env.BASE_URL + '/img/bg-mask.svg'})` }}>
      <section className={styles.pricing} id="pricing">
        <div className={styles.container}> 
        <div className={styles.headTop}></div>     
          <h2 className={styles.title}>Franchise Models</h2>
          <div className={styles.headBottom}></div>
          <div className={styles.pricingBox}>
            {/* Render Base Card only if baseTitle and baseFeatures are provided */}
            {baseFeatures && baseTitle && (
              <Card
                title={baseTitle}
                features={baseFeatures}
                btnText="Choose"
                btnClassName={styles.btnExpress}
              />
            )}
            {/* Render Pro Card only if proTitle and proFeatures are provided */}
            {proFeatures && proTitle && (
              <Card
                title={proTitle}
                features={proFeatures}
                btnText="Choose"
                btnClassName={styles.btnPlatinum}
                sale
              />
            )}
            {/* Render Enterprise Card only if enterpriseTitle and enterpriseFeatures are provided */}
            {enterpriseFeatures && enterpriseTitle && (
              <Card
                title={enterpriseTitle}
                features={enterpriseFeatures}
                btnText="Choose"
                btnClassName={styles.btnGold}
              />
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

PricingSection.propTypes = {
  baseFeatures: PropTypes.array.isRequired,
  proFeatures: PropTypes.array.isRequired,
  enterpriseFeatures: PropTypes.array.isRequired,
  baseTitle: PropTypes.string.isRequired,
  proTitle: PropTypes.string.isRequired,
  enterpriseTitle: PropTypes.string.isRequired,
};

export default PricingSection;
