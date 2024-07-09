import React from 'react';
import '../styles/BrandForm.css';

const BrandForm = ({ brandName }) => {
  return (
    <div className="brand-form-container">
      <h2 className="heading">
        Interested in {brandName} franchise? Fill your details.
      </h2>
      <form className="brand-form">
        <div className="form-group">
          <input type="text" name="name" placeholder="Full Name" required />
        </div>
        <div className="form-group">
          <input type="text" name="contact" placeholder="Contact No" required />
        </div>
        <div className="form-group">
          <input type="email" name="email" placeholder="Email" required />
        </div>
        <div className="form-group">
          <input type="text" name="city" placeholder="City" required />
        </div>
        <div className="form-group">
          <textarea name="requirements" placeholder="Requirements" rows="5" required></textarea>
        </div>
        <div className="form-group">
          <button type="submit" className="submit-btn">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default BrandForm;
