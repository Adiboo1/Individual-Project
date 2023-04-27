import { React, useState, useEffect } from 'react';
import styles from '../style';
import { LineChart } from '../components';
import { RadioButtonComponent, CheckBoxComponent } from '@syncfusion/ej2-react-buttons';

const Graph = ( props ) => {

    const [graphOption, setGraphOption] = useState("Default");

    // Boolean variables, stating whether the checkboxes are selected for each dataset
    const [priceCheck, setPriceCheck] = useState(true);
    const [pECheck, setPECheck] = useState(false);
    const [divCheck, setDivCheck] = useState(false);
    const [cashFlowCheck, setCashFlowCheck] = useState(false);

    // Functions for handling the checkbox selection status change 
    const handlePriceCheckChange = () => {
        setPriceCheck(!priceCheck); 
      };

    const handlePECheck = () => {
        setPECheck(!pECheck); 
    };

    const handleDivCheck = () => {
        setDivCheck(!divCheck); 
    };

    const handleCashFlowCheck = () => {
        setCashFlowCheck(!cashFlowCheck); 
    };

    // Function used for testing purposes, just logging messages to the console
    useEffect(() => {
        //console.log("props: " + JSON.stringify(props.data.series.quarterly.bookValue));
        //console.log(JSON.stringify(props.priceHistory));
    },[graphOption]);

    return (
        <div className='flex flex-col md:flex-row justify-between gap-5 md:gap-6 pt-5'>
            <div className='px-4 py-4 bg-graph rounded-[10px] basis-3/4 text-center'>
                <div className='h-full'>
                    {/* Component for the line graph */}
                    <LineChart type={graphOption} priceHistory={props.priceHistory} peHistory={props.peHistory} divHistory={props.divHistory} freeCashFlowHistory={props.freeCashFlowHistory} priceCheck={priceCheck} pECheck={pECheck} divCheck={divCheck} cashFlowCheck={cashFlowCheck} />
                </div>
            </div>
            {/* Section holding the graph options, which are just checkboxes currently, to control what data is being displayed on the graph */}
            <div className={`${styles.padding} xl:px-8 bg-discount-gradient rounded-[10px] basis-1/4`}>
                <h3 className={`${styles.heading3} text-center`}>Graph Options</h3>
                <div className={`${styles.heading5} grid grid-cols-1 md:gap-5`}>                
                    <ul>
                        <li className='pb-2'><CheckBoxComponent label=" Price" name="priceCheck" onChange={handlePriceCheckChange} cssClass="e-custom" checked={true}/></li>
                        <li className='pb-2'><CheckBoxComponent label=" P/E Ratio" name="pECheck" onChange={handlePECheck} cssClass="e-custom"/></li>
                        <li className='pb-2'><CheckBoxComponent label=" Dividend Yield" name="divCheck" onChange={handleDivCheck} cssClass="e-custom"/></li>
                        <li className='pb-2'><CheckBoxComponent label=" Free Cash Flow" name="cashFlowCheck" onChange={handleCashFlowCheck} cssClass="e-custom"/></li>
                    </ul>                                
                </div>
            </div>
        </div>
    )
}

export default Graph