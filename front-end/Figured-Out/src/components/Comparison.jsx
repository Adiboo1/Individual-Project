import { React, useState, useEffect } from 'react';
import styles from '../style';
import { Category, ChartComponent, DataLabel, LineSeries, Legend, SeriesCollectionDirective, SeriesDirective, Tooltip, Inject, DateTime } from '@syncfusion/ej2-react-charts';

// Component for displaying the comparison page content, allowing the user to compare two different stocks
const Comparison = (props) => {
    // Placeholder variable, for future development
    const [graphOption, setGraphOption] = useState("Default");
    
    // Variables for the graph component, to format the axis
    const primaryxAxis = { valueType: 'DateTime', labelFormat: 'MMM y', minimum: new Date(2018, 1, 1)};
    const primaryyAxis = {  };

    return (
        <div className='bg-primary w-full overflow-hidden'>
            <div className='flex flex-col sm:flex-row flex-wrap gap-5'>
                {/* Fundamentals of the first company */}
                <div className={`${styles.padding} bg-discount-gradient rounded-[10px] text-center flex-auto`}>
                    <h3 className={`${styles.heading3}`}>{props.company1.stockName}</h3>
                    <div className={`${styles.heading5} grid grid-cols-2 gap-5 pb-4 px-[10%] sm:px-0 justify-center lg:px-[20%]`}>
                        <div>
                            <p>Price</p>
                            <p className={`${styles.paragraph}`}>{props.company1.companyValue}</p>
                        </div>
                        <div>
                            <p>P/E Ratio</p>
                            <p className={`${styles.paragraph}`}>{props.company1.peRatio}</p>
                        </div>
                        <div>
                            <p>Div Yield</p>
                            <p className={`${styles.paragraph}`}>{props.company1.dividend}</p>
                        </div>
                        <div>
                            <p>Market Cap</p>
                            <p className={`${styles.paragraph}`}>{props.company1.mktCap}</p>
                        </div>
                    </div>
                    {/* Button to remove the company from the comparison, so that the user can add another */}
                    <button type="button" onClick={() => props.clearCompany(1)} className="w-auto h-auto px-4 bg-blue-gradient rounded-[10px]">
                        <p className={`${styles.paragraph} font-medium text-black`}>Remove</p>
                    </button>
                    <p className={`${styles.paragraph} pt-2 -mb-6`}>Note: This stock is the blue line.</p>
                </div>

                {/* Fundamentals of the second company */}
                <div className={`${styles.padding} bg-discount-gradient rounded-[10px] text-center flex-auto`}>
                    <h3 className={`${styles.heading3}`}>{props.company2.stockName}</h3>
                    <div className={`${styles.heading5} grid grid-cols-2 gap-5 pb-4 px-[10%] sm:px-0 justify-center lg:px-[20%]`}>
                        <div>
                            <p>Price</p>
                            <p className={`${styles.paragraph}`}>{props.company2.companyValue}</p>
                        </div>
                        <div>
                            <p>P/E Ratio</p>
                            <p className={`${styles.paragraph}`}>{props.company2.peRatio}</p>
                        </div>
                        <div>
                            <p>Div Yield</p>
                            <p className={`${styles.paragraph}`}>{props.company2.dividend}</p>
                        </div>
                        <div>
                            <p>Market Cap</p>
                            <p className={`${styles.paragraph}`}>{props.company2.mktCap}</p>
                        </div>
                    </div>
                    {/* Button to remove the second company from the comparison, so that the user can add another */}
                    <button type="button" onClick={() => props.clearCompany(2)} className="w-auto h-auto px-4 bg-blue-gradient rounded-[10px]">
                        <p className={`${styles.paragraph} font-medium text-black`}>Remove</p>
                    </button>
                    <p className={`${styles.paragraph} pt-2 -mb-6`}>Note: This stock is the grey line.</p>
                </div>
            </div>

            {/* Section for displaying the graphical data of both companies on the same graphs, for direct comparison */}
            <div className={`pt-5`}>
                <div className= {`${styles.padding} py-[6px] bg-discount-gradient rounded-[10px] basis-3/4 text-center h-fit`}>
                    <h3 className={`${styles.heading3}`}>Fundemental Graphs</h3>
                    <div className='grid grid-cols-4 md:gap-5'>
                        
                        <div className={`bg-graph h-60 rounded-[5px] ${styles.paragraph}`}>
                        <p>Price</p>
                        {/* Component from Syncfusion, for creating a line graph */}
                        <ChartComponent primaryXAxis={primaryxAxis} primaryYAxis={primaryyAxis} height="100%" width="100%">
                            <Inject services={[LineSeries, Tooltip, DataLabel, DateTime]}/>
                            <SeriesCollectionDirective>
                                <SeriesDirective 
                                dataSource={props.company1.priceHistory} 
                                xName='period' 
                                yName='v' 
                                name='Book Value'>
                                </SeriesDirective>
                                <SeriesDirective 
                                dataSource={props.company2.priceHistory} 
                                xName='period' 
                                yName='v' 
                                name='Book Value'>
                                </SeriesDirective>
                            </SeriesCollectionDirective>
                        </ChartComponent>
                        </div>
                        
                        <div className={`bg-graph h-60 rounded-[5px] ${styles.paragraph}`}>
                        <p>P/E Ratio</p>
                        <ChartComponent primaryXAxis={primaryxAxis} primaryYAxis={primaryyAxis} height="100%" width="100%">
                            <Inject services={[LineSeries, Tooltip, DataLabel, DateTime]}/>
                            <SeriesCollectionDirective>
                                <SeriesDirective 
                                dataSource={props.company1.peHistory} 
                                xName='period' 
                                yName='v' 
                                name='Book Value'>
                                </SeriesDirective>
                                <SeriesDirective 
                                dataSource={props.company2.peHistory} 
                                xName='period' 
                                yName='v' 
                                name='Book Value'>
                                </SeriesDirective>
                            </SeriesCollectionDirective>
                        </ChartComponent>
                        </div>
                        
                        <div className={`bg-graph h-60 rounded-[5px] ${styles.paragraph}`}>
                        <p>Dividend Yield</p>
                        <ChartComponent primaryXAxis={primaryxAxis} primaryYAxis={primaryyAxis} height="100%" width="100%">
                            <Inject services={[LineSeries, Tooltip, DataLabel, DateTime]}/>
                            <SeriesCollectionDirective>
                                <SeriesDirective 
                                dataSource={props.company1.divHistory} 
                                xName='period' 
                                yName='v' 
                                name='Book Value'>
                                </SeriesDirective>
                                <SeriesDirective 
                                dataSource={props.company2.divHistory} 
                                xName='period' 
                                yName='v' 
                                name='Book Value'>
                                </SeriesDirective>
                            </SeriesCollectionDirective>
                        </ChartComponent>
                        </div>
                        
                        <div className={`bg-graph h-60 rounded-[5px] ${styles.paragraph}`}>
                        <p>Free Cash Flow</p>
                        <ChartComponent primaryXAxis={primaryxAxis} primaryYAxis={primaryyAxis} height="100%" width="100%">
                            <Inject services={[LineSeries, Tooltip, DataLabel, DateTime]}/>
                            <SeriesCollectionDirective>
                                <SeriesDirective 
                                dataSource={props.company1.freeCashFlowHistory} 
                                xName='period' 
                                yName='v' 
                                name='Book Value'>
                                </SeriesDirective>
                                <SeriesDirective 
                                dataSource={props.company2.freeCashFlowHistory} 
                                xName='period' 
                                yName='v' 
                                name='Book Value'>
                                </SeriesDirective>
                            </SeriesCollectionDirective>
                        </ChartComponent>
                        </div>

                    </div>
                </div>
            </div>

            {/* The following sections are placeholders for future development */}
            <div className={`pt-5`}>
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
            <div className={`pt-5`}>
                <div className={`${styles.padding} ${styles.flexCenter}} flex-col bg-black-gradient-2 rounded-[20px] box-shadow text-center`}>
                    <h3 className={`${styles.heading3} text-gradient h-40`}>Analysis and Insights</h3>
                </div>
            </div>
        </div>
    )
}

export default Comparison
