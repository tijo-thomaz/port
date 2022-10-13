import React from 'react';
import { dataItem } from "../../data/static-data";
import imgSrc from '../../assets/images/tijo.png'
import resume from '../../assets/resume/tijo-cv.pdf'
function About({ navActive }) {
    const [active, setActive] = React.useState("education");
    const onTabButtonClick = (value) => {
        setActive(value)
    }
    return (
        <section className={`about-section sec-padding ${navActive ? 'fade-out' : ""}`}>
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
                                    <h4>{item.designation} {` - `}<span><a href={item.url} target='_blank' rel="noreferrer">{item.company}</a> </span></h4>
                                    <p></p>
                                </div>)}
                            </div>
                        </div>}

                        {/* <div className="btn">Contact Me</div> */}
                        <a href={resume} download="Tijo's Resume" target='_blank' rel="noreferrer" >    <div className="btn">Download Cv</div></a>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default About