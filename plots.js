
// Initialized arrays
let YEAR = []
let ENERGY = []
let NONFUEL = []
let PRECIOUSMET = []

// For loop to populate arrays
for (let i = 0; i < searchResults.length; i++) {
  row = searchResults[i];
  YEAR.push(row.Year);
  ENERGY.push(row.ENERGY);
  NONFUEL.push(row.NONFUEL);
  PRECIOUSMET.push(row.PRECIOUSMET);
}

// Trace1 for the Greek Data
let trace1 = {
    x: YEAR,
    y: ENERGY,
    name: "Energy-Includes: Coal, Crude Oil, Natural Gas'",
    type: "markers",
    marker: {
      color: 'rgb(164, 194, 244)',
      size: 12,
      line: {
        color: 'white',
        width: 0.5
      }
    }, 
  };
    
  
  // Trace 2 for the Roman Data
  let trace2 = {
    x: YEAR,
    y: NONFUEL,
    name: "Non-Fuel-Includes:Raw Materials,Agriculture,Metals & Minerals",
    type: "markers",
    marker: {
      color: 'rgb(255, 217, 102)',
      size: 12
    },
  };

  
  let trace3 = {
    x: YEAR,
    y:PRECIOUSMET,
    name: "Precious Metals-'Includes: Gold, Platinum, Silver",
    type: "markers",
    marker: {
      color: 'rgb(234, 153, 153)',
      size: 12
    },
  };

  // Create data array
  let data = [trace1, trace2, trace3];
  
  // Apply a title to the layout
  let layout = {
    title:'World Bank Inflation Data',
    xaxis: {
      title: 'Years',
      showgrid: true,
      zeroline: true
    },
    yaxis: {
      title: 'Cost of Inflation',
      showline: true
    }
  };
// Render the plot to the div tag with id "plot"
Plotly.newPlot("plots", data, layout);

 