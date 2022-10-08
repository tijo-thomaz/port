import * as React from "react";
import imgSrc from './assets/images/tijo.png'
import { dataItem } from "./data/static-data";
export default function App() {
  const [active, setActive] = React.useState("education")
  const onTabButtonClick = (value) => {
    setActive(value)
  }
  return (
    <React.Fragment>
      <main className="main">
        {/* Home Section start */}
        <section className="home-section align-item-center" style={{ display: "none" }}>
          <div className="container">
            <div className="row align-item-center">
              <div className="home-text">
                <p>Hi There I am</p>
                <h1>Tijo Thomas</h1>
                <h2>Frontend developer</h2>
                <div className="btn">more about me</div>
                <div className="btn">portfolio</div>
              </div>
              <div className="home-img">
                <div className="img-box">
                  <img src={imgSrc} alt="profile" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Home Section end */}
        {/* About Section start */}
        <section className="about-section sec-padding">
          <div className="container">
            <div className="row">
              <div className="section-title">
                <h2>about me</h2>
              </div>
            </div>
            <div className="row">
              <div className="about-img">
                <div className="img-box">
                  <img src={imgSrc} alt="profile" />
                </div>
              </div>
              <div className="about-text">
                <p>{dataItem.description}</p>
                <h3>Skills</h3>
                <div className="skills">
                  <div className="skill-item">HTML</div>
                  <div className="skill-item">CSS</div>
                  <div className="skill-item">JavaScript</div>
                  <div className="skill-item">React</div>
                  <div className="skill-item">Angular</div>
                  <div className="skill-item">TypeScript</div>
                  <div className="skill-item">Scss</div>
                  <div className="skill-item">React Native</div>
                </div>
                <div className="about-tabs">
                  <button type="button" className={`tab-item ${active && active === 'education' ? "active" : ""}`} data-target="#education" onClick={() => onTabButtonClick('education')}>education</button>
                  <button type="button" className={`tab-item ${active && active === 'experience' ? "active" : ""}`} data-target="#experience" onClick={() => onTabButtonClick('experience')}>experience</button>
                </div>
                {active && active === 'education' ? <div className="tab-content" id="education">
                  <div className="timeline">
                    {dataItem?.education?.map((item, index) => {
                      return <div key={index} className="timeline-item">
                        <span className="date">{item.date}</span>
                        <h4>{item.course} {` - `}<span>{item.university}</span></h4>
                        <p>{item.college}</p>
                      </div>
                    })}
                  </div>
                </div> : <div className="tab-content" id="experience">
                  <div className="timeline">
                    {dataItem?.experience?.map((item, index) => <div key={index} className="timeline-item">
                      <span className="date">{item.date}</span>
                      <h4>{item.designation} {` - `}<span>{item.company}</span></h4>
                      <p></p>
                    </div>)}
                  </div>
                </div>}

                <div className="btn">Contact Me</div>
                <div className="btn">Download Cv</div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </React.Fragment>

  );
}

