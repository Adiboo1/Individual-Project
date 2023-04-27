import { React, useState, useEffect } from "react";
import styles from '../style';

// Component used to contain the machine learning feature
const Insight = (props) => {

    // Variables for each of the companies which are suggested to the user
    const [company1, setCompany1] = useState("");
    const [company2, setCompany2] = useState("");
    const [company3, setCompany3] = useState("");
    const [company4, setCompany4] = useState("");
    
    // Function to call the API and wait for the response before loading the content, otherwise there is an error thrown and the page doesn't load the content.
    const handleFetchData = async () => {
        // Await function ensures the response is received from the API call before continuing, so that the subsequent variables referenced are defined. 
        const response = await fetch("http://localhost:8000/labels/");
        // Convert the data into a readable JSON
        const data = await response.json();
        // Store the contents of the JSON as variables
        let stockNames = (Object.keys(data));
        let labels = (data);
        // Set other local variables, in order to filter the stocks
        let tick = props.currentStock;
        let value = parseInt(labels[tick]);
        let comps = [];
        let number = 0;
        // Filter the list of stocks, to just those with the same cluster value and not the same ticker symbol
        const results = stockNames.filter(stock => {
            if ((parseInt(labels[stock]) == value) && (stock != tick)) {
                if (number <= 3) {
                    comps[number] = stock;
                    number++;
                }
            }
        })
        // Set each of the company variables
        setCompany1(comps[0]);
        setCompany2(comps[1]);
        setCompany3(comps[2]);
        setCompany4(comps[3]);
    }
    
    // Note: This all has to be done within the same function as the setters for the variables do not take affect until the function is returned, so we have to carry out the logic with the local variables otherwise the setters will try to reference the undefined variables (which are yet to be returned from API) - this caused a lot of problems during development as it's a fairly complex ReactJS feature. 

    // Function to carry out the API fetching and initialisation upon the page loading
    useEffect(() => {
        handleFetchData();
    },[])

    // Function to handle the button click, when the user wants to explore one of the suggested stocks
    function handleClick(stock) {
        props.changeSymbol(stock);
    }

    return (
        <div>
            <h3 className={`${styles.padding}`}>Similar Stocks</h3>
            {/* List of buttons, allowing the user to further explore a suggested stock */}
            <ul className="text-left px-6 flex flex-col">
                <button key={company1} type='button' onClick={() => handleClick(company1)} className="text-left">
                    {company1}
                </button>
                <button key={company2} type='button' onClick={() => handleClick(company2)} className="text-left">
                    {company2}
                </button>
                <button key={company3} type='button' onClick={() => handleClick(company3)} className="text-left">
                    {company3}
                </button>
                <button key={company4} type='button' onClick={() => handleClick(company4)} className="text-left">
                    {company4}
                </button>
            </ul>     
        </div>
    )
}

export default Insight
