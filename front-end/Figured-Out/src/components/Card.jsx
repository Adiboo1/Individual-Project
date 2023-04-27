import React from 'react';
import styles from '../style';

// Component used within the education page, which is planned to hold more features (including the ability to open the full article when clicked) in future development.
const Card = (props) => {
  return (
    <div className="py-[6px] px-4 bg-discount-gradient rounded-[10px] basis-1/3 cursor-pointer">
      <div className="py-[6px] px-2"> 
        <p className={`${styles.paragraph} pb-2 align-text-top`}>{props.category}</p>
        <h3 className={`${styles.eduHeading} text-gradient pb-8`}>{props.title}</h3>
        <p className={`${styles.paragraph} text-ellipsis`}>{props.description}</p>
      </div>
    </div>
  )
}

export default Card