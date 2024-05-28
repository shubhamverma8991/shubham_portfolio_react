import React from "react";

export default function Resume() {
  return (
    <>
      <article className="resume" data-page="resume">
        <header>
          <h2 className="h2 article-title">Resume</h2>
        </header>

        <section className="timeline">
          <div className="title-wrapper">
            <div className="icon-box">
              <ion-icon name="book-outline"></ion-icon>
            </div>

            <h3 className="h3">Experience</h3>
          </div>

          <ol className="timeline-list">
            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">
                Refactor Academy Pvt Ltd.
                <span>Software Development Engineer -2 (FED)</span>
                <span>July 2023 — Present</span>
              </h4>

              <ul className="timeline-text">
                <li>
                  Spearhed the development of the Co-leanding website, a critical platform utilized by banks fro lending the Operations and
                  fostering financial partnerships.
                </li>
                <li>
                  Desgined intutive and user-friendly interfaces to optimize interactions for Investors and Originators across multiple
                  lending modules, enhancing user experience.
                </li>
                <li>
                  Collborated cross-functionally to integrte various APIs into the platform, improving functionality and interoperability
                  with other systems.
                </li>
              </ul>
            </li>

            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">
                Makerobos Pvt Ltd.
                <span>Angular Developer</span>
                <span>March 2023 — May 2023</span>
              </h4>

              <ul className="timeline-text">
                <li>Spearhead the development of an e-commerce website for Ellementry.com .</li>
                <li>Implemented Router Guard to enable specific task execution from Chat and designated links.</li>
                <li>Collaborated with Google Analytics team to incorporated essential meta tags for website indexing and tracking.</li>
              </ul>
            </li>

            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">
                Born Commerce Pvt Ltd.
                <span>Software Developer (FED)</span>
                <span>Nov 2021 — Feb 2023</span>
              </h4>

              <ul className="timeline-text">
                <li>
                  Developed web pages showcasing various brand products and services for the Walmart project using HTML, CSS, JavaScript and
                  ReactJS.
                </li>
                <li>Utilized internal Walmart tools, Pronto and Tempo for testing and product page development</li>
                <li>Integrated web pages with third-party software to enhance functionality</li>
              </ul>
            </li>
          </ol>
        </section>

        <section className="timeline">
          <div className="title-wrapper">
            <div className="icon-box">
              <ion-icon name="book-outline"></ion-icon>
            </div>

            <h3 className="h3">Education</h3>
          </div>

          <ol className="timeline-list">
            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">
                Institue Of Advance Computing & Software Development<span>PG-DAC</span>
                <span>May 2021 — Nov 2021</span>
              </h4>

              <p className="timeline-text"></p>
            </li>

            <li className="timeline-item">
              <h4 className="h4 timeline-item-title">
                Chhattisgarh Swami Vivekanand Technical University <span>B.E</span>
                <span>2013 — 2017</span>
              </h4>

              <p className="timeline-text"></p>
            </li>
          </ol>
        </section>

        <section className="skill">
          <h3 className="h3 skills-title">My skills</h3>

          <ul className="skills-list content-card">
            <li className="skills-item">
              <div className="title-wrapper just_space_btw">
                <h5 className="h5">Web Development</h5>
                <data value="90">90%</data>
              </div>

              <div className="skill-progress-bg">
                <div className="skill-progress-fill" style={{ width: "90%" }}></div>
              </div>
            </li>

            <li className="skills-item">
              <div className="title-wrapper just_space_btw">
                <h5 className="h5">HTML / CSS</h5>
                <data value="85">85%</data>
              </div>

              <div className="skill-progress-bg">
                <div className="skill-progress-fill" style={{ width: "85%" }}></div>
              </div>
            </li>

            <li className="skills-item">
              <div className="title-wrapper just_space_btw">
                <h5 className="h5">JavaScript / TypeScript</h5>
                <data value="80">80%</data>
              </div>

              <div className="skill-progress-bg">
                <div className="skill-progress-fill" style={{ width: "80%" }}></div>
              </div>
            </li>

            <li className="skills-item">
              <div className="title-wrapper just_space_btw">
                <h5 className="h5">React Js</h5>
                <data value="70">70%</data>
              </div>

              <div className="skill-progress-bg">
                <div className="skill-progress-fill" style={{ width: "70%" }}></div>
              </div>
            </li>

            <li className="skills-item">
              <div className="title-wrapper just_space_btw">
                <h5 className="h5">Angular Js</h5>
                <data value="70">70%</data>
              </div>

              <div className="skill-progress-bg">
                <div className="skill-progress-fill" style={{ width: "70%" }}></div>
              </div>
            </li>

            <li className="skills-item">
              <div className="title-wrapper just_space_btw">
                <h5 className="h5">Next Js</h5>
                <data value="50">50%</data>
              </div>

              <div className="skill-progress-bg">
                <div className="skill-progress-fill" style={{ width: "50%" }}></div>
              </div>
            </li>
          </ul>
        </section>
      </article>
    </>
  );
}
