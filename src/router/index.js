import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
function RouterModule({ navActive, imgSrc ,onNavButtonClick}) {
    return (
        <React.Fragment>
            <Routes>
                <Route path="/"  element={<Home navActive={navActive} imgSrc={imgSrc}  onNavButtonClick={onNavButtonClick}/>} />
                <Route path="/about" element={<About navActive={navActive} />} />
                {/* <Route path="/contact" element={<Contact navActive={navActive} />} /> */}
            </Routes>
        </React.Fragment>
    )
}

export default RouterModule