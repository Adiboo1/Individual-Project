import React from 'react';
import styles from '../style';
import { Link } from "react-router-dom";

// Component used within the landing page, to house the 'call to action'
const CTA = () => (
  <section className={`${styles.flexCenter} ${styles.padding} flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
    <h2 className={styles.heading2}>Create an account now!</h2>
    <div className="flex-1 flex justify-between md:flex-row flex-col md:gap-40 text-justify md:text-left">
      <p className={`${styles.paragraph}`}>
        <span>
          If you want to join us or find out more, simply create an account (like we said, it’s
        </span>
        <span className='text-white'> 
          {' '}free
        </span>
        <span>
          ) and join us in creating a platform for everyone and spreading the word.
        </span>
      </p>
      {/* Button as a placeholder for future development, where the user will be directed to a page used for creating an account on the platform */}
      <div className={`${styles.flexCenter} ml-0 md:mt-0 mt-4`}>
        <Link to="/Signin">
          <button type="button" className="w-[150px] h-[50px] px-4 bg-blue-gradient rounded-[10px]">
            <p className="font-poppins font-medium text-[20px] text-black">Join Us</p>
          </button>
        </Link>
      </div>
    </div>
  </section>
);

export default CTA