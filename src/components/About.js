import React from "react";
import design from "../assets/images/icon-design.svg";
import webDevelopment from "../assets/images/icon-dev.svg";

export default function About() {
  return (
    <>
      <article className="about  active" data-page="about">
        <header>
          <h2 className="h2 article-title">About me</h2>
        </header>

        <section className="about-text">
          <p style={{ textAlign: "justify" }}>
            I'm a Front-End Developer based in India, specializing in web development. I am passionate about transforming complex problems
            into simple, elegant, and intuitive designs.
          </p>

          <p style={{ textAlign: "justify" }}>
            My role involves creating websites that are not only functional and user-friendly but also visually appealing. I ensure that
            each project receives a personal touch, making your product distinctive and engaging. My goal is to convey your message and
            identity in the most creative and effective manner possible.
          </p>
        </section>

        {/* Service */}

        <section className="service">
          <h3 className="h3 service-title">What i'm doing</h3>

          <ul className="service-list">
            {/* <li className="service-item">
              <div className="service-icon-box">
                <img src={design} alt="design icon" width="40" />
              </div>

              <div className="service-content-box">
                <h4 className="h4 service-item-title">Web design</h4>
                <p className="service-item-text">The most modern and high-quality design made at a professional level.</p>
              </div>
            </li> */}

            <li className="service-item">
              <div className="service-icon-box">
                <img src={webDevelopment} alt="Web development icon" width="40" />
              </div>

              <div className="service-content-box">
                <h4 className="h4 service-item-title">Web development</h4>
                <p className="service-item-text">High-quality development of sites at the professional level.</p>
              </div>
            </li>
          </ul>
        </section>

        {/* 
   testimonials */}

        {/* <section className="testimonials">
          <h3 className="h3 testimonials-title">Testimonials</h3>

          <ul className="testimonials-list has-scrollbar">
            <li className="testimonials-item">
              <div className="content-card" data-testimonials-item>
                <figure className="testimonials-avatar-box">
                  <img src="./assets/images/avatar-1.png" alt="" width="60" data-testimonials-avatar />
                </figure>

                <h4 className="h4 testimonials-item-title" data-testimonials-title></h4>

                <div className="testimonials-text" data-testimonials-text>
                  <p></p>
                </div>
              </div>
            </li>
          </ul>
        </section> */}

        {/* testimonials modal */}

        <div className="modal-container" data-modal-container>
          <div className="overlay" data-overlay></div>

          <section className="testimonials-modal">
            <button className="modal-close-btn" data-modal-close-btn>
              <ion-icon name="close-outline"></ion-icon>
            </button>

            <div className="modal-img-wrapper">
              <figure className="modal-avatar-box">
                <img src="./assets/images/avatar-1.png" alt="Daniel lewis" width="80" data-modal-img />
              </figure>

              <img src="./assets/images/icon-quote.svg" alt="quote icon" />
            </div>

            <div className="modal-content">
              <h4 className="h3 modal-title" data-modal-title>
                Daniel lewis
              </h4>

              <time dateTime="2021-06-14">14 June, 2021</time>

              <div data-modal-text>
                <p></p>
              </div>
            </div>
          </section>
        </div>

        {/* Clients */}

        <section className="clients">
          <h3 className="h3 clients-title">Clients</h3>

          <ul className="clients-list has-scrollbar">
            <li className="clients-item">
              <a href="#">
                <img src="./assets/images/logo-1-color.png" alt="client logo" />
              </a>
            </li>

            <li className="clients-item">
              <a href="#">
                <img src="./assets/images/logo-2-color.png" alt="client logo" />
              </a>
            </li>

            <li className="clients-item">
              <a href="#">
                <img src="./assets/images/logo-3-color.png" alt="client logo" />
              </a>
            </li>

            <li className="clients-item">
              <a href="#">
                <img src="./assets/images/logo-4-color.png" alt="client logo" />
              </a>
            </li>

            <li className="clients-item">
              <a href="#">
                <img src="./assets/images/logo-5-color.png" alt="client logo" />
              </a>
            </li>

            <li className="clients-item">
              <a href="#">
                <img src="./assets/images/logo-6-color.png" alt="client logo" />
              </a>
            </li>
          </ul>
        </section>
      </article>
    </>
  );
}
