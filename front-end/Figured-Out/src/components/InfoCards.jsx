import React from 'react';
import styles from '../style';

// Comppnent for the information about the site on the landing page, made of three seperate boxes, each discussing a different aspect of the site
const InfoCards = () => (
  <div className='flex flex-col md:flex-row justify-between gap-5 md:gap-20 '>
    <div className="py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2 basis-1/3 pb-6">
      <div className='text-center'>
        <h3 className={`${styles.heading3} text-gradient`}>Education</h3>
        <p className={`${styles.paragraph}`}>We provide beginner-friendly guidance on how to achieve financial literacy and security, as well as articles on a huge range of other topics related to all things finance. </p>
      </div>
    </div>
    <div className="py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2 basis-1/3 pb-6">
      <div className='text-center'>
      <h3 className={`${styles.heading3} text-gradient`}>Analysis</h3>
        <p className={`${styles.paragraph}`}>Analysis tools designed to enable extensive research on company fundamentals within the stock market, utilising machine learning to provide powerful insights. </p>
      </div>
    </div>
    {/* The platform currently doesn't have the following section, but this will be part of future development */}
    <div className="py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2 basis-1/3 pb-6">
      <div className='text-center'>
      <h3 className={`${styles.heading3} text-gradient`}>Portfolio</h3>
        <p className={`${styles.paragraph}`}>Having the ability for users to buy and sell on the stock market is a feature we would like to implement, but this takes a lot of paperwork and compliance so we're working on it... </p>
      </div>
    </div>
  </div>
);

export default InfoCards