import { React, useState, useEffect } from 'react';
import { ChartComponent, DataLabel, LineSeries, Legend, SeriesCollectionDirective, SeriesDirective, Tooltip, Inject, DateTime } from '@syncfusion/ej2-react-charts';

// Component to implement the line graph within the analysis page displaying the company fundamentals
const LineChart = (props) => {

    // Variables for the graph component, to format the axis
    const primaryxAxis = { valueType: 'DateTime', title: 'Months', labelFormat: 'MMM y', minimum: new Date(2018, 1, 1)};
    const primaryyAxis = { title: 'Value' };

    // Function to return the relavent data to the graph component, allowing it to contain multiple datasets. 
    function GraphContent(data) {
        // Switch statement checks which datasets the user wants displayed within the graph
        switch(data) {
            case "priceCheck":
                if (props.priceCheck || props.type == "price") {
                    return <SeriesDirective 
                    dataSource={props.priceHistory} 
                    xName='period' 
                    yName='v' 
                    name='Book Value'>
                    </SeriesDirective>
                }
            break;
            case "pECheck":
                if (props.pECheck || props.type == "pe") {
                    return <SeriesDirective 
                    dataSource={props.peHistory} 
                    xName='period' 
                    yName='v' 
                    name='Book Value'>
                    </SeriesDirective>
                }
            break;
            case "divCheck":
                if (props.divCheck || props.type == "div") {
                    return <SeriesDirective 
                    dataSource={props.divHistory} 
                    xName='period' 
                    yName='v' 
                    name='Book Value'>
                    </SeriesDirective>
                }
            break;
            case "cashFlowCheck":
                if (props.cashFlowCheck || props.type == "cashFlow") {
                    return <SeriesDirective 
                    dataSource={props.freeCashFlowHistory} 
                    xName='period' 
                    yName='v' 
                    name='Book Value'>
                    </SeriesDirective>
                }
            break;
        }
    }

    return (
        <div>
            {/* Graph component from Syncfusion */}
            <ChartComponent id='charts' primaryXAxis={primaryxAxis} primaryYAxis={primaryyAxis} height={props.height} width={props.width}>
                <Inject services={[LineSeries, Tooltip, DataLabel, DateTime]}/>
                <SeriesCollectionDirective>
                    {GraphContent("priceCheck")}
                    {GraphContent("peHistory")}
                    {GraphContent("divCheck")}
                    {GraphContent("cashFlowCheck")}
                </SeriesCollectionDirective>
            </ChartComponent>

            
        </div>
    )
}

export default LineChart