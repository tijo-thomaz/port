import React from 'react'
import { Routes, Route, BrowserRouter, } from "react-router-dom";
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
function RouterModule({ navActive, imgSrc, onNavButtonClick }) {
    return (
        <React.Fragment>
            < BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home navActive={navActive} imgSrc={imgSrc} onNavButtonClick={onNavButtonClick} />} />
                    <Route path="/about" element={<About navActive={navActive} />} />
                    {/* <Route path="/contact" element={<Contact navActive={navActive} />} /> */}
                </Routes>
            </BrowserRouter>
        </React.Fragment>
    )
}

export default RouterModule