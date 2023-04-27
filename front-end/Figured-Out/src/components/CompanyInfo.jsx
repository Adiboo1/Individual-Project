import { React, useState, useEffect } from 'react';
import styles from '../style';
import { Graph, Insight } from '../components';

// Component to load the company's fundamental information
const CompanyInfo = (props) => {

    // Function used to add a company to the comparison page, when a button is clicked
    function addToAnalysis() {
        // Call function passed down to this component by parent, to add this company to the comparison page
        props.setComp(props.companyTicker);
        // Call another function passed down, which causes the content to be reloaded so that it shows the comparison page when you click the button 
        props.return();
    }

    return (
    <div className='w-full'>
        <script src="lib.js"></script>
        {/* Company basic information, with a button to add the company to the comparison page */}
        <div className='flex flex-col md:flex-row justify-between gap-5 md:gap-6'>
            <div className={`${styles.padding} bg-discount-gradient rounded-[10px] basis-2/3 text-center`}>
                <h3 className={`${styles.heading3}`}>{props.companyName}</h3>
                <div className='flex-col md:flex md:flex-row justify-around'>
                    <p className={`${styles.heading5} w-auto text-[20px] md:text-[22px]`}>{props.companyTicker}</p>
                    <div className='flex flex-row gap-4 justify-center'>
                        <p className={`${styles.heading5} w-auto text-[20px] md:text-[22px]`}>{props.companyValue}</p>
                        <p className={`${styles.heading5} w-auto text-[20px] md:text-[22px] ${props.valueChangeColor}`}>{props.valueChange}%</p>
                    </div>
                    <div className={`${styles.flexCenter} ml-0 md:mt-0 mt-4`}>
                        {/* Button allowing the user to add the company to the comparison page */}
                        <button type="button" onClick={() => addToAnalysis()} className="w-auto h-auto px-4 bg-blue-gradient rounded-[10px]">
                            <p className={`${styles.paragraph} font-medium text-black`}>Add to Analysis</p>
                        </button>
                    </div>
                </div>
                <p className={`${styles.paragraph} pt-4`}>{props.description}</p>
            </div>
            {/* Company fundamentals */}
            <div className={`${styles.padding} bg-discount-gradient rounded-[10px] basis-1/3 text-center`}>
                <h3 className={`${styles.heading3}`}>Fundementals</h3>
                <div className={`${styles.heading5} grid grid-cols-2 gap-5`}>
                    <div>
                        <p>P/E Ratio</p>
                        <p className={`${styles.paragraph}`}>{props.pERatio}</p>
                    </div>
                    <div>
                        <p>Div Yield</p>
                        <p className={`${styles.paragraph}`}>{props.dividend}</p>
                    </div>
                    <div>
                        <p>Market Cap</p>
                        <p className={`${styles.paragraph}`}>{props.marketCap}</p>
                    </div>
                    <div>
                        <p>52-week High</p>
                        <p className={`${styles.paragraph}`}>{props.weekHigh}</p>
                    </div>
                </div>
            </div>
        </div>

        {/* Main graph on the analysis page, allowing the user to display different data */}
        <Graph data={props.basicFinance} priceHistory={props.priceHistory} peHistory={props.peHistory} divHistory={props.divHistory} freeCashFlowHistory={props.freeCashFlowHistory} />

        {/* Section to house the insights (with the machine learning feature) */}
        <div className='pt-5'>
            <div className= {`${styles.padding} py-[6px] bg-black-gradient-2 rounded-[20px] box-shadow basis-3/4 text-center h-fit`}>
                <h3 className={`${styles.heading3}`}>Analysis and Insights</h3>
                <div className='grid grid-cols-4 md:gap-5 px-6'>
                    <div className={`bg-graph h-60 rounded-[5px] ${styles.paragraph}`}>
                        <Insight currentStock={props.companyTicker} changeSymbol={props.changeSymbol}/>
                    </div>
                    {/* The following nested divs are placeholders for future development */}
                    <div className={`bg-graph h-60 rounded-[5px] ${styles.paragraph}`}>
                        <p>Insight</p>
                    </div>
                    <div className={`bg-graph h-60 rounded-[5px] ${styles.paragraph}`}>
                        <p>Insight</p>
                    </div>
                    <div className={`bg-graph h-60 rounded-[5px] ${styles.paragraph}`}>
                        <p>Insight</p>
                    </div>
                </div>
            </div>
        </div>

        {/* The following section is a placeholder for future development */}
        <div className='pt-5'>
            <div className= {`${styles.padding} py-[6px] bg-discount-gradient rounded-[10px] basis-3/4 text-center h-fit`}>
                <h3 className={`${styles.heading3}`}>Advanced Graphs</h3>
                <div className='grid grid-cols-4 md:gap-5 px-6'>
                    <p className={`bg-graph h-40 rounded-[5px] ${styles.paragraph}`}>Graph</p>
                    <p className={`bg-graph h-40 rounded-[5px] ${styles.paragraph}`}>Graph</p>
                    <p className={`bg-graph h-40 rounded-[5px] ${styles.paragraph}`}>Graph</p>
                    <p className={`bg-graph h-40 rounded-[5px] ${styles.paragraph}`}>Graph</p>
                </div>
            </div>
        </div>

        <div className='text-white'> 
            
        </div>
    </div>
)};

export default CompanyInfo