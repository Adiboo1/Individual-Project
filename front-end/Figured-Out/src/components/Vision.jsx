import React from 'react';
import styles from '../style';

// Component used on the landing page, which contains a small paragrapgh of marketing text outlining the reason behind the development of this platform
const Vision = () => (
  <div className={`pt-12 md:pt-20 flex flex-col justify-center text-justify gap-6`}>
    <p className={`${styles.paragraph}`}>We want to build a platform which provides financial guidance, analysis tools and beginner-friendly market interaction, with emphasis on making it accessible to everyone. We aim to achieve this by creating jargon-free content about the fundamental information you need, to understand the current global financial climate and what power you have to build financial security for yourself. We also provide the content we believe is essential for everyone for free and include analysis tools for those who want to dig deeper into the stock market, with the guidance you need built into the platform to support you all the way through the process. </p>
  </div>
);

export default Vision