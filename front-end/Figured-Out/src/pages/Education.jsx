import React from 'react';
import styles from '../style';
import { Card } from '../components';

// Page containing the educational articles, for the users to be able to gain the financial knowledge they need in order to use the platform well
// Note: All the article cards are currently placeholders, as the actual articles will be developed in the future
const Education = () => {
  return (
    <div className='bg-primary w-full overflow-hidden'>
      <div className={`bg-primary ${styles.flexStart} flex-col gap-2`}>

        <div className='text-white w-full flex justify-between pb-0'>
            <h3 className={`${styles.heading3}`}>Education</h3>
        </div>

        <div className='flex flex-col lg:flex-row justify-center gap-8 pb-6'>
          {/* Card component, containing the information about the article, which is currently passed to it via props as it is a placeholder */}
          <Card title={"Getting to Know this Platform"} category={"Beginners Guide"} description={"Where to find information and how to use the tools on this platform and where to get help and support if you need it."}/>
          {/* Card component, containing the information about the article, which is currently passed to it via props as it is a placeholder */}
          <Card title={"What Stock Brokers Offer"} category={"Promotion"} description={"What do they offer and how to use the services they offer. This article is sponsored by MadeUpName."}/>
        </div>

        {/* Category heading and read more button */}
        <div className='bg-white w-full h-0.5 mt-6'/>
        <div className='text-white w-full flex justify-between'>
          <h3 className={styles.heading3}>Financial Literacy</h3>
          {/* Placeholder, which will allow the user to expand the list of articles with future development */}
          <button className=""> 
            <p className={`${styles.paragraph} w-32`}>Read more...</p>
          </button>
        </div>
        
        <div className='flex flex-col lg:flex-row justify-between gap-5 pb-6'>
          {/* Card component, containing the information about the article, which is currently passed to it via props as it is a placeholder */}
          <Card title={"Where to Keep Your Savings"} category={"Financial Literacy"} description={"There are many ways to keep your money safe, this article explains all the options available."}/>
          {/* Card component, containing the information about the article, which is currently passed to it via props as it is a placeholder */}
          <Card title={"Inflation and Interest"} category={"Financial Literacy"} description={"What is inflation, how is it linked to interest and how to use the law of compounding to your advantage."}/>
          {/* Card component, containing the information about the article, which is currently passed to it via props as it is a placeholder */}
          <Card title={"What is the Stock Market?"} category={"Financial Literacy"} description={"The stock market can be a scary place for beginners, but it really isn't as bad as it sounds when you know more about it."}/>
          <div className='max-xl:hidden bg-discount-gradient rounded-[10px] basis-1/3'>
            {/* Card component, containing the information about the article, which is currently passed to it via props as it is a placeholder */}
            <Card title={"What is a Recession?"} category={"Financial Literacy"} description={"How it affects you and what you should consider and do differently when the country is in one."}/>
          </div>
        </div>

        {/* Category heading and read more button */}
        <div className='bg-white w-full h-0.5 mt-6'/>
        <div className='text-white w-full flex justify-between'>
          <h3 className={styles.heading3}>Investment Guidance</h3>
          {/* Placeholder, which will allow the user to expand the list of articles with future development */}
          <button className=""> 
            <p className={`${styles.paragraph} w-32`}>Read more...</p>
          </button>
        </div>  
        
        <div className='flex flex-col lg:flex-row justify-between gap-5 pb-6'>
          {/* Card component, containing the information about the article, which is currently passed to it via props as it is a placeholder */}
          <Card title={"Why You Should Invest"} category={"Beginners Guide"} description={"Learn about the benefits and risks involved in investing."}/>
          {/* Card component, containing the information about the article, which is currently passed to it via props as it is a placeholder */}
          <Card title={"Types of Stock and Dividends"} category={"Beginners Guide"} description={"This article will explain what all the different options there are on the stock market and how to earn a passive income from dividends."}/>
          {/* Card component, containing the information about the article, which is currently passed to it via props as it is a placeholder */}
          <Card title={"Macro Economics"} category={"Advanced Guide"} description={"We explain the types of macroeconomics and how they affect the prices of asset, making them important factors to consider."}/>
          <div className='max-xl:hidden bg-discount-gradient rounded-[10px] basis-1/3'>
          {/* Card component, containing the information about the article, which is currently passed to it via props as it is a placeholder */}
          <Card title={"How to Analyse Stocks"} category={"Beginners Guide"} description={"We discuss the fundementals and techniques used, to decide which options you should invest in."}/>
          </div>
        </div>

        {/* Category heading and read more button */}
        <div className='bg-white w-full h-0.5 mt-6'/>
        <div className='text-white w-full flex justify-between'>
          <h3 className={styles.heading3}>News</h3>
          {/* Placeholder, which will allow the user to expand the list of articles with future development */}
          <button className=""> 
            <p className={`${styles.paragraph} w-32`}>Read more...</p>
          </button>
        </div>  
        
        <div className='flex flex-col lg:flex-row justify-between gap-5 pb-6'>
        {/* Card component, containing the information about the article, which is currently passed to it via props as it is a placeholder */}
        <Card title={"Current Financial Crisis"} category={"News"} description={"All the information you need on the current financial climate the world is in and how it affects you."}/>
          {/* Card component, containing the information about the article, which is currently passed to it via props as it is a placeholder */}
          <Card title={"Joe Blog's Story"} category={"Promotion"} description={"Popular influencer Joe Blogs talks about their story and how they help keep investors up to date with all the current financial news. This article is sponsored by Joe Blogs."}/>
          {/* Card component, containing the information about the article, which is currently passed to it via props as it is a placeholder */}
          <Card title={"Cost of Living"} category={"News"} description={"The price of food remains high in the UK, but supermarkets are saying the prices will start to ease soon."}/>
          <div className='max-xl:hidden bg-discount-gradient rounded-[10px] basis-1/3'>
            {/* Card component, containing the information about the article, which is currently passed to it via props as it is a placeholder */}
            <Card title={"The Future of Cryptocurrency"} category={"News"} description={"We take a deep dive into what the future holds for cryptocurrency and discuss what the experts are saying."}/>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Education