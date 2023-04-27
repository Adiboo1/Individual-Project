import { React, useState, useEffect } from 'react';
import styles from '../style';
import { Link } from "react-router-dom";
import { Graph, Comparison } from '../components';

// Component used within the Analysis page, where it determines which content to load - based on whether there is a stock currently selected or not. 
const CompanyAnalysis = (props) => {

    const [numberOfCompanies, setNumberOfCompanies] = useState(0);

    useEffect(() => {
        // If either of the props contains a company name, increase the numberOfCompanies variable
        if (props.company1.stockName!="No Stock Selected") {
            setNumberOfCompanies(numberOfCompanies+1);
        }
        if (props.company2.stockName!="No Stock Selected") {
            setNumberOfCompanies(numberOfCompanies+1);
        }
    }, []);

    // Function used to determine whether there are any companies or not, which dictates what content is loaded
    function noCompany() {
        if (numberOfCompanies == 0) {
            return "hidden";
        }
        else {
            return;
        }
    }

    return (
        <div className='bg-primary w-full overflow-hidden'>
            <div className='flex flex-col sm:flex-row flex-wrap gap-5'>

                <div className={`${ numberOfCompanies>0 ? "hidden" : "flex" }`}>
                    <div className= {`${styles.padding} py-[6px] bg-discount-gradient rounded-[10px] text-center`}>
                        <h3 className={`${styles.heading3}`}>Try searching for a company...</h3>
                        {/* Instruction on how to use Analysis page, in case user doesn't know how to as the target users are beginners. */}
                        <p className={`${styles.paragraph} ${styles.padding}`}>This is the Analysis page, where you can compare multiple company fundementals on the same graph. This will populate as you add stocks for comparison, but there are currently no stocks selected for analysis.
                        </p>
                    </div>
                </div>
                <div className={`${ numberOfCompanies>0 ? "hidden" : "flex" } h-screen`}>
                </div>

                <div className={`${noCompany()} ${styles.padding} w-full`}>
                    {/* Component with content used for comparing two stocks. */}
                    <Comparison company1={props.company1} company2={props.company2} clearCompany={props.clearCompany} />
                </div>
            </div>
        </div>
    )
}

export default CompanyAnalysis