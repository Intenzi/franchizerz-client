import React from 'react';
import styles from './TeamComponent.module.css';

const TeamComponent = () => {
    return (
        <section className={styles.team}>
            <h1>Meet Our Team</h1>
            <div className={styles.teamCards}>
                {/* Card 1 */}
                <div className={styles.card}>
                    <div className={styles.cardImg}>
                        <img src="https://media.geeksforgeeks.org/wp-content/uploads/20230824122630/business-office-business-woman-professional.jpg" alt="User 1" />
                    </div>
                    <div className={styles.cardInfo}>
                        <h2 className={styles.cardName}>Jane</h2>
                        <p className={styles.cardRole}>CEO and Founder</p>
                        <p className={styles.cardEmail}>jane@example.com</p>
                        <button className={styles.button}>Contact</button>
                    </div>
                </div>

                {/* Card 2 */}
                <div className={styles.card}>
                    <div className={styles.cardImg}>
                        <img src="https://media.geeksforgeeks.org/wp-content/uploads/20230822183347/man-portrait-businessman-male.jpg" alt="User 2" />
                    </div>
                    <div className={styles.cardInfo}>
                        <h2 className={styles.cardName}>Miller</h2>
                        <p className={styles.cardRole}>Co-Founder</p>
                        <p className={styles.cardEmail}>Miller@example.com</p>
                        <button className={styles.button}>Contact</button>
                    </div>
                </div>

                {/* Card 3 */}
                <div className={styles.card}>
                    <div className={styles.cardImg}>
                        <img src="https://media.geeksforgeeks.org/wp-content/uploads/20230824122630/business-office-business-woman-professional.jpg" alt="User 3" />
                    </div>
                    <div className={styles.cardInfo}>
                        <h2 className={styles.cardName}>Joe</h2>
                        <p className={styles.cardRole}>Co-Founder</p>
                        <p className={styles.cardEmail}>Joe@example.com</p>
                        <button className={styles.button}>Contact</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TeamComponent;
