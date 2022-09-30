import React from 'react'
import front_img from '../../../assets/images/imgside.jpg'
import '../../../assets/scss/underdev.scss'
const UnderDevelopment = () => {
    return (
        <><div>
            <h1>Hello!!! {"    "}My name is <span className="text-lime">Tijo Thomaz</span></h1>
            <h2>I'm a{"  "}
                <span className="text-purple">
                    Frontend{" "}
                </span>
                Developer
            </h2>
            <h3>This Page is under development </h3>
            <span className="know-more">Know more about me
                <a href="https://www.linkedin.com/in/tijo-j-thomaz93/" target="_blank" rel="noopener noreferrer"
                >here</a>
            </span>
        </div><img src="https://cdn.dribbble.com/users/5457163/screenshots/11948207/project_22.png" /></>
    )
}

export default UnderDevelopment