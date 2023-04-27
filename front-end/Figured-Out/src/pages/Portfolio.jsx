import React from 'react';
import styles from '../style';

// Placeholder page, which will be developed in the future
const Portfolio = () => {
  return (
    <div className='bg-primary w-full overflow-hidden'>
      <div className={`bg-primary ${styles.flexStart} flex-col gap-2`}>
        
        <div className='text-white w-full h-screen'>
            <h3 className={styles.heading3}>Portfolio</h3>
            <p className={`${styles.paragraph}`}>This page hasn't been made yet...</p>
        </div>        
      </div>
    </div>
  )
}

export default Portfolio