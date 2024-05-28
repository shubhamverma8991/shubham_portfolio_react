import React from "react";
import project1 from "../assets/images/project-1.png";
import project2 from "../assets/images/project-2.png";

export default function Portfolio() {
  return (
    <>
      <article className="portfolio" data-page="portfolio">
        <header>
          <h2 className="h2 article-title">Portfolio</h2>
        </header>

        <section className="projects">
          {/* <ul className="filter-list">
            <li className="filter-item">
              <button className="active" data-filter-btn>
                All
              </button>
            </li>

            <li className="filter-item">
              <button data-filter-btn>Web design</button>
            </li>

            <li className="filter-item">
              <button data-filter-btn>Applications</button>
            </li>

            <li className="filter-item">
              <button data-filter-btn>Web development</button>
            </li>
          </ul> */}

          {/* <div className="filter-select-box">
            <button className="filter-select" data-select>
              <div className="select-value" data-selecct-value>
                Select category
              </div>

              <div className="select-icon">
                <ion-icon name="chevron-down"></ion-icon>
              </div>
            </button>

            <ul className="select-list">
              <li className="select-item">
                <button data-select-item>All</button>
              </li>

              <li className="select-item">
                <button data-select-item>Web design</button>
              </li>

              <li className="select-item">
                <button data-select-item>Applications</button>
              </li>

              <li className="select-item">
                <button data-select-item>Web development</button>
              </li>
            </ul>
          </div> */}

          <ul className="project-list">
            {/* Portfolio */}
            <li className="project-item  active" data-filter-item data-category="web development">
              <a target="_blank" href="https://shubhamhere.netlify.app">
                <figure className="project-img">
                  <div className="project-item-icon-box">
                    <ion-icon name="eye-outline"></ion-icon>
                  </div>

                  <img src={project1} alt="portfolio" loading="lazy" />
                </figure>

                <h3 className="project-title">Personal Portfolio</h3>

                <p className="project-category">Web development</p>
              </a>
            </li>
            {/* bhoji */}
            <li className="project-item  active" data-filter-item data-category="web development">
              <a target="_blank" href="https://bhoji.netlify.app">
                <figure className="project-img">
                  <div className="project-item-icon-box">
                    <ion-icon name="eye-outline"></ion-icon>
                  </div>

                  <img src={project2} alt="bhoji" loading="lazy" />
                </figure>

                <h3 className="project-title">Bhoji Enterprises</h3>

                <p className="project-category">Web development</p>
              </a>
            </li>
          </ul>
        </section>
      </article>
    </>
  );
}
