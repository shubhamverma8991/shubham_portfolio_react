import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const [activeButton, setActiveButton] = useState("about");

  const handleButtonClick = (buttonName) => {
    navigate("/" + (buttonName === "about" ? "" : buttonName));
    setActiveButton(buttonName);
  };

  const buttons = [
    { name: "about", label: "About" },
    { name: "resume", label: "Resume" },
    { name: "portfolio", label: "Portfolio" },
    { name: "blog", label: "Blog" },
    { name: "contact", label: "Contact" },
  ];

  return (
    <>
      <nav className="navbar">
        <ul className="navbar-list">
          {buttons.map((button) => (
            <li className="navbar-item" key={button.name}>
              <button
                className={`navbar-link ${activeButton === button.name ? "active" : ""}`}
                onClick={() => handleButtonClick(button.name)}
                data-nav-link
              >
                {button.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
