import React from 'react'
import { Routes, Route, useLocation } from "react-router-dom";

import App from "../App";
import { Portfolio, AboutUs, NotFound, Home, Legals } from "../pages";

import { AnimatePresence } from 'framer-motion'

export default function AnimatedRoutes() {
    const location = useLocation();
    return (
        <AnimatePresence>
            <Routes location={location} key={location.key}>
                <Route path="/" element={<App />}>
                    <Route index element={<Home />} />
                    <Route path="/portfolio" element={<Portfolio />} />
                    <Route path="/aboutus" element={<AboutUs />} />
                    <Route path="/legals" element={<Legals />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </AnimatePresence>
    )
}
