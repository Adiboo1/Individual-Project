import { React, useEffect } from 'react';
import styles from './style';
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { Navbar, Footer } from './components';
import { Home, Education, Analysis, Portfolio, Contact, Signin, SocialImpact,  Support, TermsAndConditions } from './pages';
import ScrollToTop from "./components/ScrollToTop";

const App = () => (
  <Router>
    <div className='bg-primary w-full overflow-hidden'>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
          <ScrollToTop />
          <Routes>
          <Route path="/" element={<Home />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/Education" element={<Education />} />
            <Route path="/Analysis" element={<Analysis />} />
            <Route path="/Portfolio" element={<Portfolio />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Signin" element={<Signin />} />
            <Route path="/SocialImpact" element={<SocialImpact />} />
            <Route path="/Support" element={<Support />} />
            <Route path="/TermsAndConditions" element={<TermsAndConditions />} />
          </Routes>
          <Footer /> 
        </div>
      </div>
    </div>
  </Router>
);

export default App