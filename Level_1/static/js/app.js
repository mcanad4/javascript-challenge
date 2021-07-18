// from data.js
var tableData = data;

// YOUR CODE HERE!
// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the ufo data from data.js
console.log(data);

// Loop Through `data` and console.log each ufo report object
data.forEach(function(ufoReport) {
    console.log(ufoReport);
  });

// Use d3 to append one table row `tr` for each ufo report object
data.forEach(function(ufoReport) {
    console.log(ufoReport);
    var row = tbody.append("tr");
  });  

// Use `Object.entries` to console.log each ufo report value
data.forEach(function(ufoReport) {
    console.log(ufoReport);
    var row = tbody.append("tr");
  
    Object.entries(ufoReport).forEach(function([key, value]) {
      console.log(key, value);
    });
  });

// Use d3 to append 1 cell per ufo report value (datetime, city, state, country
// shape, durationMinutes, comments)
data.forEach(function(ufoReport) {
    console.log(ufoReport);
    var row = tbody.append("tr");
  
    Object.entries(ufoReport).forEach(function([key, value]) {
      console.log(key, value);
      // Append a cell to the row for each value
      // in the ufo report object
      var cell = row.append("td");
    });
  });

// Use d3 to update each cell's text with
// ufo report values (datetime, city, state, country
// shape, durationMinutes, comments)
data.forEach(function(ufoReport) {
    console.log(ufoReport);
    var row = tbody.append("tr");
    Object.entries(ufoReport).forEach(function([key, value]) {
      console.log(key, value);
      // Append a cell to the row for each value
      // in the ufo report object
      var cell = row.append("td");
      cell.text(value);
    });
  });
  
// Getting a reference to the input element on the page with the id property set to 'input-field'
var inputField = d3.select("#datetime");

// Input fields can trigger a change event when new text is entered.
inputField.on("change", function() {
    var newText = d3.event.target.value;
    console.log(newText);
  });

