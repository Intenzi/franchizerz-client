import styles from "./FranchizerzWhy.module.css";
import { FaCube } from "react-icons/fa";

const FranchizerzWhy = ({features}) => {
  return (
    <div className={styles.container}>
     <div className={styles.headTop}></div>
      <h2 className={styles.heading}>Why Franchise With Us</h2>
      <div className={styles.headBottom}></div>
      <div className={styles.grid}>
        {features.map((feature, index) => (
          <div
            className={`${styles.featureCard} ${styles[`card${index + 1}`]}`}
            key={index}
          >
            <FaCube className={styles.icon} />
            <p>{feature}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FranchizerzWhy;
