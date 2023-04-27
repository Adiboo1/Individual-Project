import { React, useState, useEffect } from "react";
import styles from '../style';

// Component within all the analysis pages, allowing users to search for stocks
const SearchBar = ({ changeSymbol }) => {

    // Variables holding the data returned by an API call
    const [stocksObject, setStocksObject] = useState();
    const [stockList, setStockList] = useState([]);
    const [stockNames, setStockNames] = useState([]);
    // Variable used to determine if the user is currently searching for something
    const [searching, setSearching] = useState(false);
    // Variable to store the user's current search
    const [searchContent, setSearchContent] = useState("");

    // Function to determine if the box containing the search suggestions should be displayed or not
    function ShowSearching() {
        if (searching) {
            return;
        }
        else {
            return "hidden";
        }
    }

    // Function to fetch the API call, and return a JSON file with a list of stocks
    useEffect(() => {
        const fetchData = async () => {
            const resultList = await fetch("http://localhost:8000/list/");
            resultList.json().then(json => {
                setStockNames(Object.keys(json));
                setStocksObject(json);
            })
        }

        fetchData();
    }, []);
    
    // Function to filter the stocks within the list based on the user's input
    const handleChange = (e) => {        
        const results = stockNames.filter(stock => {
            if (e === "") {
                setSearching(false);
                return;
            }
            else {
                setSearching(true);
                return stock.toLowerCase().includes(e.toLowerCase());
            }
        })
        setSearchContent(e);
        setStockList(results);
    }

    // Function to handle the user clicking on one of the options, in order to explore the specified stock
    function handleClick(stock) {
        changeSymbol(stocksObject[stock].Symbol);
        clearContent();
    }

    // Function to clear the input text box
    function clearContent() {
        setSearchContent("");
        setSearching(false);
    }

    return (
        <div className={`px-1 rounded-[10px] h-full py-1 w-full`}>
            <div className="flex">
                {/* Input box, for the user to search by typing in the name of a company */}
                <input className={`${styles.paragraph} bg-searchBar text-white w-full rounded-[10px] py-2 px-4`} placeholder="Search" value={searchContent} onChange={event => handleChange(event.target.value)} /> 
                {/* Button used to clear the input box in the form of an X */}
                <button type='button' onClick={() => clearContent()} className={`${styles.paragraph} px-2 -m-8`}>x</button>
            </div>
            {/* Section which is only displayed when the user is searching for a stock, which contains the filtered stocks as search suggestions */}
            <div className={`${ShowSearching()} px-4 py-2 bg-searchBar z-10 absolute my-1 rounded-xl`}>
                {stockList.slice(0, 3).map(filteredName => (
                    <li key={filteredName} className={`${styles.paragraph} list-none py-1`}>
                        {/* Button which allows the user to open the page for that company */}
                        <button key={filteredName} type='button' onClick={() => handleClick(filteredName)} className="text-left">
                            {filteredName}
                        </button>
                    </li>
                ))}
            </div>
        </div>
    )
}

export default SearchBar