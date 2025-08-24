import React, { useState } from "react";
import Footer from "../src/components/Footer/Footer";
import Navbar from "../src/components/Navbar/Navbar";
import Partners from "../src/components/Partners/Partners";
import Home from "./components/Home/Home";
import Pricepool from "./components/Pricepool/Pricepool";
import Registeration from "./components/Registeration/Registeration";
import Submit from "./components/Submit/Submit";
import Timeline from "./components/Timeline/Timeline";
import ContactUs from "./components/ContactUs/ContactUs";
import WhatIsMedusa from "./components/WhatIsMedusa/WhatIsMedusa";
import comingSoonImg from "./assets/Medusa 2.0/Banner/Coming Soon.jpg";

import {
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation,
} from "react-router-dom";

const MainSections = () => (
  <>
    {/* Remove <Banner /> if not needed */}
    <Home />
    <WhatIsMedusa />
    <Timeline />
    <Pricepool />
    <Partners />
    <ContactUs />
    <Footer />
  </>
);

const App = () => {
  const [showPopup, setShowPopup] = useState(true);

  return (
    <Router>
      <Navbar />
      {/* Coming Soon Popup */}
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
          {/* Responsive close button: top-right on desktop, top-center on mobile, with animation */}
          <button
            type="button"
            className={`fixed w-12 h-12 flex items-center justify-center rounded-full text-white font-bold text-4xl shadow-lg z-50 transition hover:bg-red-100 hover:text-red-700
              sm:right-3 sm:top-1
              ${window.innerWidth < 640 ? "left-1/2 -translate-x-1/2 top-2 animate-close-btn-mobile" : "right-4 top-1 animate-popup-in"}`}
            onClick={() => setShowPopup(false)}
            aria-label="Close"
            style={{
              lineHeight: "1",
              padding: 0,
              background: "transparent",
            }}
            id="popup-close-btn"
          >
            ×
          </button>
          {/* Popup window with animation from close button */}
          <div
            className="relative bg-transparent rounded-lg shadow-lg flex flex-col items-center border-4 border-white animate-popup-in"
            style={{
              willChange: "transform, opacity",
            }}
          >
            <img
              src={comingSoonImg}
              alt="Coming Soon"
              className="max-w-[90vw] max-h-[80vh] rounded-2xl"
            />
          </div>
          <style>
            {`
              @keyframes popup-in {
                0% {
                  opacity: 0;
                  transform: translate(
                    calc(var(--from-x, 0px)),
                    calc(var(--from-y, 0px))
                  ) scale(0.2);
                }
                80% {
                  opacity: 1;
                  transform: translate(0, 0) scale(1.05);
                }
                100% {
                  opacity: 1;
                  transform: translate(0, 0) scale(1);
                }
              }
              .animate-popup-in {
                animation: popup-in 0.6s cubic-bezier(0.22, 1, 0.36, 1);
                --from-x: 0px;
                --from-y: -40px;
              }
              @keyframes close-btn-mobile {
                0% {
                  opacity: 0;
                  transform: translateY(-60px) scale(0.2);
                }
                80% {
                  opacity: 1;
                  transform: translateY(8px) scale(1.05);
                }
                100% {
                  opacity: 1;
                  transform: translateY(0) scale(1);
                }
              }
              .animate-close-btn-mobile {
                animation: close-btn-mobile 0.6s cubic-bezier(0.22, 1, 0.36, 1);
              }
            `}
          </style>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                (function() {
                  var btn = document.getElementById('popup-close-btn');
                  var popup = document.querySelector('.animate-popup-in');
                  if (btn && popup) {
                    var rect = btn.getBoundingClientRect();
                    var centerX = window.innerWidth / 2;
                    var centerY = window.innerHeight / 2;
                    var fromX = rect.left + rect.width / 2 - centerX;
                    var fromY = rect.top + rect.height / 2 - centerY;
                    popup.style.setProperty('--from-x', fromX + 'px');
                    popup.style.setProperty('--from-y', fromY + 'px');
                  }
                })();
              `,
            }}
          />
        </div>
      )}
      <Routes>
        <Route path="/" element={<MainSections />} />
        <Route path="/hacker" element={<Submit />} />
        <Route path="/register" element={<Registeration />} />
      </Routes>
    </Router>
  );
};

export default App;