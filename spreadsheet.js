var GoogleSpreadsheet = require('google-spreadsheet');
var creds = require('./client_secret.json');
console.time()

// Create a document object using the ID of the spreadsheet - obtained from its URL.
var doc = new GoogleSpreadsheet('1i3ftftO09G9DDqcwaHzuHdSSRePTSEN_2RQRDnqVhk0');

// Authenticate with the Google Spreadsheets API.
doc.useServiceAccountAuth(creds, function (err) {

  // Get all of the rows from the spreadsheet.
  doc.getRows(1, function (err, rows) {
    console.log(rows);
  });
}); 
console.timeEnd()