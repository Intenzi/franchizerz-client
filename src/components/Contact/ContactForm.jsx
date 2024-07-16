import React from 'react';
import styles from './ContactForm.module.css'; // Import your CSS Modules file for styling
import "bootstrap/dist/css/bootstrap.min.css";

const ContactForm = () => {
  return (
    <section className={styles.contact} id="contact">
      <h2 className={styles.heading}>
        Contact <span>Us!</span>
        <hr className={styles['horizontal-line']} />
      </h2>

      <form>
        <div className={styles['form-container']}>
          <div className={styles.content}>
            <h3>Get in touch</h3>
            <address>
              <strong>Email:</strong>{' '}
              <a href="mailto:example@example.com">example@example.com</a>
              <br />
              <strong>Phone:</strong> +1234567890
            </address>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vehicula nibh vel tempus ultrices.</p>
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
              placeholder="Query"
              required
            ></textarea>
            <input type="submit" value="Send Message" className={styles['submit-btn']} />
          </div>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;
