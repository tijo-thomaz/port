import React from 'react'
import { Routes, Route } from "react-router-dom";
import About from '../../../about';
import Dashboard from '../../../dashboard';
import Home from '../../../home';
import NoRoutes from '../../../no-routes';
export function RouterModule() {
    return (
        <React.Fragment>
            <Routes>
                <Route path="/" element={<Dashboard />}>
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="*" element={<NoRoutes />} />
                </Route>
            </Routes>
        </React.Fragment>
    )
}
