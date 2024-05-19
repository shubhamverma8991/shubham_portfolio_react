import React, { useState } from "react";
import personDetails from "../../assets/info/personalDetail.json";
import image from "../../assets/images/my-avatar.png";
import "ionicons";

export default function SidebarCom() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <div>
      <aside className={`sidebar ${isSidebarOpen ? "active" : ""}`} data-sidebar>
        <div className="sidebar-info">
          <figure className="avatar-box">
            <img src={image} alt={personDetails.name} width="80" />
          </figure>

          <div className="info-content">
            <h1 className="name" title={personDetails.name}>
              {personDetails.name}
            </h1>

            <p className="title">{personDetails.title}</p>
          </div>

          <button className="info_more-btn" data-sidebar-btn onClick={toggleSidebar}>
            <span>Show Contacts</span>

            {/* <ion-icon name="chevron-down"></ion-icon> */}
          </button>
        </div>

        <div className="sidebar-info_more">
          <div className="separator"></div>

          <ul className="contacts-list">
            <li className="contact-item">
              <div className="icon-box">
                <ion-icon name="mail-outline"></ion-icon>
              </div>

              <div className="contact-info">
                <p className="contact-title">Email</p>

                <a href={`mailto:${personDetails.email}`} className="contact-link">
                  {personDetails.email}
                </a>
              </div>
            </li>

            <li className="contact-item">
              <div className="icon-box">
                <ion-icon name="phone-portrait-outline"></ion-icon>
              </div>

              <div className="contact-info">
                <p className="contact-title">Phone</p>

                <a href={`tel:+91${personDetails.phnumber}`} className="contact-link">
                  {personDetails.phnumber}
                </a>
              </div>
            </li>

            <li className="contact-item">
              <div className="icon-box">
                <ion-icon name="calendar-outline"></ion-icon>
              </div>

              <div className="contact-info">
                <p className="contact-title">Birthday</p>

                <time dateTime="1995-10-08">{personDetails.dob}</time>
              </div>
            </li>

            <li className="contact-item">
              <div className="icon-box">
                <ion-icon name="location-outline"></ion-icon>
              </div>

              <div className="contact-info">
                <p className="contact-title">Location</p>

                <address>{personDetails.location}</address>
              </div>
            </li>
          </ul>

          <div className="separator"></div>

          <ul className="social-list">
            {/* <li className="social-item">
              <a href="#" className="social-link">
                <ion-icon name="logo-facebook"></ion-icon>
              </a>
            </li> */}

            <li className="social-item">
              <a href="#" className="social-link">
                <ion-icon name="logo-twitter"></ion-icon>
              </a>
            </li>

            <li className="social-item">
              <a href="#" className="social-link">
                <ion-icon name="logo-instagram"></ion-icon>
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
}
