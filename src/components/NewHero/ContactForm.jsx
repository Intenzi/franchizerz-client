import React from 'react';
import '../styles/ContactForm.css'; // Import your CSS file for styling

const ContactForm = () => {
  return (
    <section className="contact" id="contact">
      <h2 className="heading">
        Contact <span>Me!</span>
        <hr className="horizontal-line" />
      </h2>

      <form>
        <div className="form-container">
          <div className="content">
            <h3>Get in touch</h3>
            <address>
              <strong>Email:</strong>{' '}
              <a href="mailto:example@example.com">example@example.com</a>
              <br />
              <strong>Phone:</strong> +1234567890
            </address>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vehicula nibh vel tempus ultrices.</p>
          </div>
          <div className="form-fields">
            <div className="input-box small-inputs">
              <input
                className="form-control"
                id="name"
                name="name"
                placeholder="Full Name"
                type="text"
                required
              />
              <input
                className="form-control"
                id="email"
                name="email"
                placeholder="Email"
                type="email"
                required
              />
            </div>
            <div className="input-box small-inputs contac">
              <input
                className="form-control "
                id="phone"
                name="phone"
                placeholder="Contact No"
                type="text"
                required
              />
            </div>
            <textarea
              className="form-control"
              name="query"
              id="query"
              cols="30"
              rows="5"
              placeholder="Query"
              required
            ></textarea>
            <input type="submit" value="Send Message" className="" style={{border:"1px solid black", backgroundColor:"#0f38" , borderRadius:"5px",padding:"10px", marginTop:"15px"}} />
          </div>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;
