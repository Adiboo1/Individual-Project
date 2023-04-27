const express = require("express");
const cors = require("cors");
const app = express();
var request = require('request');

// Access to the JSON file stored within the assets directory
const stockList = require("./assets/stockList.json");       
const stockLabels = require("./assets/stockLabels.json")

// Setting variables for accessing Finnhub API
const finnhub = require('finnhub');
const api_key = finnhub.ApiClient.instance.authentications['api_key'];
api_key.apiKey = "cdlqveiad3i9qbphkkm0cdlqveiad3i9qbphkkmg"
const finnhubClient = new finnhub.DefaultApi()

app.use(cors());
app.use(express.json());

// Test function, to check if the server is responding
app.get("/message", (req, res) => {
  res.json({ message: "Hello from server!" });
});

// Set the port for the server to run on
app.listen(8000, () => {
  console.log(`Server is running on port 8000.`);
});


// External API calls
app.get("/details/:symbol", (req, res) => {

    finnhubClient.companyProfile2({'symbol': req.params.symbol}, (error, data, response) => {
        res.json({ data });
        //console.log(data)
    });
});

app.get("/basic/:symbol", (req, res) => {

    finnhubClient.companyBasicFinancials(req.params.symbol, "all", (error, data, response) => {
        res.json({ data });
        //console.log(data)
    });
});

app.get("/quote/:symbol", (req, res) => {

    finnhubClient.quote(req.params.symbol, (error, data, response) => {
        res.json({ data });
        //console.log(data)
      });
});

app.get("/search/:input", (req, res) => {
    console.log(req.params.input);

    finnhubClient.symbolSearch(req.params.input, (error, data, response) => {
        res.json({ data });
        //console.log(data)
      });
});

app.get("/searchAlpha/:input", (req, res) => {
    console.log(req.params.input);
    var url = ('https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=' + req.params.input + '&apikey=8AZ44WH40LDLC9VS');
    request.get({ url: url, json: true, headers: {'User-Agent': 'request'}}, (err, response, data) => {
        //console.log(data);
        res.json(data);
    });
});

// Internal API calls
app.get("/list", (req, res) => {
    //console.log(stockList);
    res.json(stockList);  
});

app.get("/labels", (req, res) => {
    //console.log(stockLabels);
    res.json(stockLabels);  
});

