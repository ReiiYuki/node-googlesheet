require('dotenv').config()

var GoogleSpreadsheet = require('google-spreadsheet');
var creds = require(process.env.CLIENT_CREDENTIAL);
console.time()

// Create a document object using the ID of the spreadsheet - obtained from its URL.
var doc = new GoogleSpreadsheet(process.env.SPREAD_SHEET_ID);

// Authenticate with the Google Spreadsheets API.
doc.useServiceAccountAuth(creds, function (err) {

  // Get all of the rows from the spreadsheet.
  doc.getRows(1, function (err, rows) {
    console.log(rows);
  });
}); 
console.timeEnd()
