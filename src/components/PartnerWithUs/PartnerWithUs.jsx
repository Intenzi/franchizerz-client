import React from 'react';
import styles from './PartnerWithUs.module.css'; // Import your CSS Modules file for styling
import "bootstrap/dist/css/bootstrap.min.css";

const PartnerWithUs = () => {
  return (
    <section className={styles.contact} id="contact">
      <h2 className={styles.heading}>
         <span>Partner With Us!</span>
        <hr className={styles['horizontal-line']} />
      </h2>

      <form>
        <div className={styles['form-container']}>
          <div className={styles.content}>
            <h3>Want Franchizerz to invest 50% in your new franchise?</h3>
            <p> We are excited to collaborate with passionate entrepreneurs who are looking to make a mark in the franchise industry. By partnering with Franchizerz, you can benefit from our expertise, resources, and a significant investment to help you launch and grow your franchise successfully.</p>
          </div>
          <div className={styles['form-fields']}>
            <div className={styles['input-box']}>
              <input
                className={`${styles['form-control']}`}
                id="name"
                name="name"
                placeholder="Full Name"
                type="text"
                required
              />
              <input
                className={`${styles['form-control']}`}
                id="email"
                name="email"
                placeholder="Email"
                type="email"
                required
              />
            </div>
            <div className={`${styles['input-box']} ${styles.contac}`}>
              <input
                className={`${styles['form-control']}`}
                type='tel'
                id="phone"
                name="phone"
                placeholder="Contact No"
                required
              />
            </div>
            <textarea
              className={`${styles['form-control']}`}
              name="query"
              id="query"
              cols="30"
              rows="5"
              placeholder="Tell us about your franchise idea"
              required
            ></textarea>
            <input type="submit" value="Let's Collaborate" className={styles['submit-btn']} />
          </div>
        </div>
      </form>
    </section>
  );
};

export default PartnerWithUs;
