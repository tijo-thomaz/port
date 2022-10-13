import React from 'react'
import { useNavigate } from "react-router-dom";
function Home({navActive,imgSrc}) {
    let navigate = useNavigate();
    const navigateToAbout=()=>{
        navigate(`/about`);
    }
    return (
        <section className={`home-section align-item-center ${navActive ? 'fade-out' : ""}`}  >
            <div className="container">
                <div className="row align-item-center">
                    <div className="home-text">
                        <p>Hi There I am</p>
                        <h1>Tijo Thomas</h1>
                        <h2>Frontend developer</h2>
                        <div className="btn" onClick={navigateToAbout}>more about me</div>
                        {/* <div className="btn">portfolio</div> */}
                    </div>
                    <div className="home-img">
                        <div className="img-box">
                            <img src={imgSrc} alt="profile" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home