import React from 'react'
import styles from '../style';
import { NavLink as Link } from "react-router-dom";

// Component used within all the pages on the platform, with placeholder links to further pages, which will be implemented in future development
const Footer = () => (
    <div> 
      <ul className={`flex flex-col md:flex-row justify-center gap-2 md:gap-24 pb-4 pt-10 ${styles.paragraph}`}>
        <li className={`font-poppins font-normal cursor-pointer mr-10 text-[16px] text-white opacity-80 `}>
          <Link to="/Contact">Contact</Link>
        </li>
        <li className={`font-poppins font-normal cursor-pointer mr-10 text-[16px] text-white opacity-80 `}>
          <Link to="/SocialImpact">Social Impact</Link>
        </li>
        <li className={`font-poppins font-normal cursor-pointer mr-10 text-[16px] text-white opacity-80 `}>
          <Link to="/Support">Support</Link>
        </li>
        <li className={`font-poppins font-normal cursor-pointer text-[16px] text-white opacity-80 `}>
          <Link to="/TermsAndConditions">Terms and Conditions</Link>
        </li>
      </ul>
    </div>
);

export default Footer