import React, { useEffect, useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  useEffect(() => {
    const { name, email, message } = formData;
    const isFormValid = name && email && message;
    setIsButtonDisabled(!isFormValid);
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <>
      <article className="contact" data-page="contact">
        <header>
          <h2 className="h2 article-title">Contact</h2>
        </header>

        <section className="mapbox" data-mapbox>
          <figure>
            {/* <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d199666.5651251294!2d-121.58334177520186!3d38.56165006739519!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x809ac672b28397f9%3A0x921f6aaa74197fdb!2sSacramento%2C%20CA%2C%20USA!5e0!3m2!1sen!2sbd!4v1647608789441!5m2!1sen!2sbd"
              width="400"
              height="300"
              loading="lazy"
            ></iframe> */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.90089981537!2d77.46612532514631!3d12.953945613629573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1716871887589!5m2!1sen!2sin"
              width="400"
              height="300"
              //   style="border:0;"
              //   allowfullscreen=""
              loading="lazy"
              //   referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </figure>
        </section>

        <section className="contact-form">
          <h3 className="h3 form-title">Contact Form</h3>

          <form action="https://api.web3forms.com/submit" method="POST" className="form" data-form>
            <input type="hidden" name="access_key" value="42877094-c145-4d98-8d73-b2500fbffe99" />
            <input type="hidden" name="subject" value="Resume Contact Us" />
            <div className="input-wrapper">
              <input
                type="text"
                name="name"
                className="form-input"
                placeholder="Full name"
                required
                data-form-input
                onChange={handleChange}
              />

              <input
                type="email"
                name="email"
                className="form-input"
                placeholder="Email address"
                required
                data-form-input
                onChange={handleChange}
              />
            </div>

            <textarea
              name="message"
              className="form-input"
              placeholder="Your Message"
              required
              data-form-input
              onChange={handleChange}
            ></textarea>
            <input type="hidden" name="redirect" value="https://web3forms.com/success" />
            <button className="form-btn" type="submit" disabled={isButtonDisabled} data-form-btn>
              <ion-icon name="paper-plane"></ion-icon>
              <span>Send Message</span>
            </button>
          </form>
        </section>
      </article>
    </>
  );
};

export default ContactSection;
