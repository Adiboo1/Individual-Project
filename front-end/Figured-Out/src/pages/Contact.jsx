import React from 'react';
import styles from '../style';

// Placeholder page, which will be developed in the future
const Contact = () => {
  return (
    <div className='bg-primary w-full overflow-hidden'>
      <div className={`bg-primary ${styles.flexStart} flex-col gap-2 pb-80`}>
        
        <div className='text-white w-full h-screen'>
          <h3 className={styles.heading3}>Contact</h3>
          <p className={`${styles.paragraph}`}>This page hasn't been finished yet...</p>
          <p className={`${styles.paragraph} pt-3`}>
            <span>
              If you would like to contact us, please email: 
            </span>
            <span className='text-white' href="mailto:contact@figured-out-finance.com"> 
              {' '} {/* This creates a blank space between the text */}
              <button onClick={() => window.location = 'mailto:contact@figured-out-finance.com'}>contact@figured-out-finance.com</button>
            </span>
          </p>
        </div>

      </div>
    </div>
  )
}

export default Contact