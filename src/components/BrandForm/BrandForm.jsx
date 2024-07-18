import React from "react";
import styles from "../../components/BrandForm/BrandForm.module.css";

const BrandForm = ({ brandName }) => {
  return (
    <div className={styles.brand_form_container}>
      <h2 className={styles.heading}>
        Interested in {brandName} franchise? Fill your details.
      </h2>
      <form className={styles.brand_form}>
        <div className={styles.form_group}>
          <input type="text" name="name" placeholder="Full Name" required />
        </div>
        <div className={styles.form_group}>
          <input type="text" name="contact" placeholder="Contact No" required />
        </div>
        <div className={styles.form_group}>
          <input type="email" name="email" placeholder="Email" required />
        </div>
        <div className={styles.form_group}>
          <input type="text" name="city" placeholder="City" required />
        </div>
        <div className={styles.form_group}>
          <textarea
            name="requirements"
            placeholder="Requirements"
            rows="5"
            required
          ></textarea>
        </div>
        <div className={styles.form_group}>
          <button type="submit" className={styles.submit_btn}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default BrandForm;
