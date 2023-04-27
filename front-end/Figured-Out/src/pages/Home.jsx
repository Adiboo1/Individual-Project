import React from 'react';
import styles from '../style';
import { map } from '../assets';
import { Hero, InfoCards, Vision, CTA } from '../components';

// Landing page (the first thing new users will see when they open the platform)
const Home = () => {
  return (
    <div className={`bg-primary w-full overflow-hidden`}>
      <div className={`bg-primary ${styles.flexStart}`}>
        {/* Logo */}
          <Hero />
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <h2 className={`pt-[0] ${styles.heading2}`}>
            What does this platform offer?
          </h2>
          <div className='flex-row mt-4'>
            {/* Cards, each containing information about the platform */}
            <InfoCards />
          </div>
          <div className={`${styles.paddingY} relative flex w-full h-500px`}>
            <img
              src={map}
              alt='map'
              className='w-full h-full object-contain opacity-50 absolute'
            />
            <h2 className={`absolute ${styles.heading2}`}>
              What's our vision?
            </h2>
            {/* Marketing paragraph */}
            <Vision />
          </div>
          {/* Call to action, intended to encourage the user to create an account. This is currently a placeholder. */}
          <CTA /> 
        </div>
      </div>
    </div>
  )
}

export default Home