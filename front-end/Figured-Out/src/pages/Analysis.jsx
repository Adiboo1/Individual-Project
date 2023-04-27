import { React, useState, useEffect } from "react";
import styles from '../style';
import { CompanyInfo, CompanyAnalysis, SearchBar } from '../components';

// Variable holding the address to the server, for accessing API calls
const URL = "http://localhost:8000/";

// Analysis page, which displays the fundamental information about stocks, allows for comparison of two stocks and includes the machine learning feature of suggesting other stocks that the user may be interested in
const Analysis = () => {

  // Function used for testing, which simply logs the company's ticker symbol to the console.
  useEffect (() => {
    // console.log("Initial UseEffect: " + currentSymbol);
  }, []);

  // Variables used to store the ticket symbols of the current company being analysed and the next
  const [currentSymbol, setCurrentSymbol] = useState();
  const [nextSymbol, setNextSymbol] = useState("");

  // Variables holding the fundamental data for the company being analysed
  const [companyTicker, setCompanyTicker] = useState("Loading...");
  const [companyName, setCompanyName] = useState("Loading...");
  const [description, setDescription] = useState("Description currently unavailable...");
  const [companyValue, setCompanyValue] = useState("Loading...");
  const [valueChange, setValueChange] = useState("Loading...");
  const [valueChangeColor, setValueChangeColor] = useState(" ");
  const [weekHigh, setWeekHigh] = useState("Loading...");
  const [pERatio, setPERatio] = useState("Loading...");
  const [dividend, setDividend] = useState("Unavailable");
  const [marketCap, setMarketCap] = useState("Loading...");
  const [basicFinance, setBasicFinance] = useState("Loading...");

  const [priceHistory, setPriceHistory] = useState({});
  const [peHistory, setPeHistory] = useState({});
  const [divHistory, setDivHistory] = useState({});
  const [freeCashFlowHistory, setFreeCashFlowHistory] = useState({});

  // Object to hold the information about the two companies being compared (these should probably be created as a sub-class of a company object in the future)
  const [company1, setCompany1] = useState({
    stockName: "No Stock Selected",
    ticker: "Loading...",
    description: "Description currently unavailable...",
    companyValue: "Loading...",
    valueChange: "Loading...",
    valueChangeColor: " ",
    weekHigh: "Loading...",
    peRatio: "Loading...",
    dividend: "Loading...", 
    mktCap: "Loading...", 
    basicFinance: "Loading...",
    priceHistory: {},
    peHistory: {},
    divHistory: {}, 
    freeCashFlowHistory: {}
  });

  const [company2, setCompany2] = useState({
    stockName: "No Stock Selected",
    ticker: "Loading...",
    description: "Description currently unavailable...",
    companyValue: "Loading...",
    valueChange: "Loading...",
    valueChangeColor: " ",
    weekHigh: "Loading...",
    peRatio: "Loading...",
    dividend: "Loading...", 
    mktCap: "Loading...", 
    basicFinance: "Loading...",
    priceHistory: {},
    peHistory: {},
    divHistory: {}, 
    freeCashFlowHistory: {}
  });

  // Function used to set the company variables that are being compared
  function companySetting(newName) {
    if (company1.stockName == "No Stock Selected") {
      setCompany1({ ...company1,
        stockName: newName,
        ticker: companyTicker,
        description: "Description currently unavailable...",
        companyValue: companyValue,
        valueChange: valueChange,
        valueChangeColor: valueChangeColor,
        weekHigh: weekHigh,
        peRatio: pERatio,
        dividend: dividend, 
        mktCap: marketCap, 
        basicFinance: basicFinance,
        priceHistory: priceHistory,
        peHistory: peHistory,
        divHistory: divHistory, 
        freeCashFlowHistory: freeCashFlowHistory
      });
    }
    else {
      setCompany2({ ...company2,
        stockName: newName,
        ticker: companyTicker,
        description: "Description currently unavailable...",
        companyValue: companyValue,
        valueChange: valueChange,
        valueChangeColor: valueChangeColor,
        weekHigh: weekHigh,
        peRatio: pERatio,
        dividend: dividend, 
        mktCap: marketCap, 
        basicFinance: basicFinance,
        priceHistory: priceHistory,
        peHistory: peHistory,
        divHistory: divHistory, 
        freeCashFlowHistory: freeCashFlowHistory
      });
    }
  }

  // Function to clear the companies from the objects 
  function clearCompany(num) {
    if (num==1) {
      setCompany1({ ...company1,
        stockName: "No Stock Selected",
        ticker: "Loading...",
        description: "Description currently unavailable...",
        companyValue: "Loading...",
        valueChange: "Loading...",
        valueChangeColor: " ",
        weekHigh: "Loading...",
        peRatio: "Loading...",
        dividend: "Loading...", 
        mktCap: "Loading...", 
        basicFinance: "Loading...",
        priceHistory: {},
        peHistory: {},
        divHistory: {}, 
        freeCashFlowHistory: {}
      });
    }
    else {
      setCompany2({ ...company2,
        stockName: "No Stock Selected",
        ticker: "Loading...",
        description: "Description currently unavailable...",
        companyValue: "Loading...",
        valueChange: "Loading...",
        valueChangeColor: " ",
        weekHigh: "Loading...",
        peRatio: "Loading...",
        dividend: "Loading...", 
        mktCap: "Loading...", 
        basicFinance: "Loading...",
        priceHistory: {},
        peHistory: {},
        divHistory: {}, 
        freeCashFlowHistory: {}
      });
    }
  }

  // Function used by child components, when the user wants to add the company to the comparison page
  function returnCalled() {
    setCurrentSymbol(null);
  }

  // Function used upon initial loading of the page, to make the API calls 
  useEffect (() => {
    if (nextSymbol != ("")) {
      runCalls();
    }
  }, [nextSymbol]);

  // Function to set the next symbol
  function changeSymbol(symb) {
    setNextSymbol(symb);
  }

  // Function to make all the API calls, for the fundamental data to be fetched
  function runCalls() {
    const fetchData = async () => {
      // Fetch the data from APIs
      const resultDetails = await fetch(URL + "details/" + nextSymbol);
      const resultBasic = await fetch(URL + "basic/" + nextSymbol);
      const resultQuote = await fetch(URL + "quote/" + nextSymbol);
      
      // Convert the responses into a readable JSON and set the relavent variables based on this data
      resultDetails.json().then(json => {
          setCompanyTicker(json.data.ticker)
          setCompanyName(json.data.name)
      })

      resultBasic.json().then(json => {
          setWeekHigh("$" + json.data.metric["52WeekHigh"])
          setPERatio(json.data.series.annual["pe"][0]["v"].toFixed(2))
          setBasicFinance(json.data)
          setPriceHistory(json.data.series.quarterly.bookValue.reverse())
          setPeHistory(json.data.series.quarterly.peTTM.reverse())
          setDivHistory(json.data.series.annual.salesPerShare)
          setFreeCashFlowHistory(json.data.series.quarterly.fcfMargin.reverse())

          // Formatting for part of the data, so that it doesn't end up as a massive long number which is difficult to read
          const mktCap = json.data.metric["marketCapitalization"]
          if (mktCap > 999999) {
              let newMktCap = (mktCap/1000000)
              setMarketCap("$" + newMktCap.toFixed(2) + "T") 
          } else if (mktCap > 99999) {
              let newMktCap = (mktCap/1000)
              setMarketCap("$" + newMktCap.toFixed(2) + "B")
          } else {
              setMarketCap("$" + json.data.metric["marketCapitalization"] + "M")
          }
  
          const div = json.data.metric["dividendsPerShareTTM"]
          if (div == null) {
              setDividend("N/a") 
          } else {
              setDividend(json.data.metric["dividendsPerShareTTM"] + "%") 
          }
      })

      resultQuote.json().then(json => {
          setCompanyValue("$" + json.data.c)
          const quote = json.data.dp
          if (quote > 0) {
              setValueChange("+" + json.data.dp.toFixed(2))
              setValueChangeColor("text-green-500")
          } else if (quote < 0) {
              setValueChange(json.data.dp.toFixed(2))
              setValueChangeColor("text-red-500")
          } else {
              setValueChange(json.data.dp.toFixed(2))
          }
      })

      // Loading screen/icon...
      setCurrentSymbol(nextSymbol);
  }
    fetchData();
  };

  // Function to determine which content should be displayed - depending on whether the user has searched for a company or not
  function AnalysisContent() {
    if (currentSymbol==null) {
      return <CompanyAnalysis key={currentSymbol} company1={company1} company2={company2} clearCompany={clearCompany} />
    } else {
      return <CompanyInfo key={currentSymbol} symbol={currentSymbol} setComp={companySetting} return={returnCalled} companyTicker={companyTicker} companyName={companyName} description={description} companyValue={companyValue} valueChange={valueChange} valueChangeColor={valueChangeColor} weekHigh={weekHigh} pERatio={pERatio} dividend={dividend} marketCap={marketCap} basicFinance={basicFinance} priceHistory={priceHistory} peHistory={peHistory} divHistory={divHistory} freeCashFlowHistory={freeCashFlowHistory} changeSymbol={changeSymbol}/>
    }
  }

  return (
    <div className='bg-primary w-full overflow-hidden'>
      <div className={`bg-primary ${styles.flexStart} flex-col gap-2`}>
        <div className='text-white w-full flex justify-between pb-0'>
          <div>
            <h3 className={`${styles.heading3}`}>Analysis</h3>
          </div>
          <div className={`basis-1/2 sm:basis-2/5 md:basis-1/4`}>
            {/* Search bar component, allowing the user to search for stocks */}
            <SearchBar changeSymbol={changeSymbol}/>
          </div>
        </div>
        {AnalysisContent()}
      </div>
    </div>
  )
}

export default Analysis