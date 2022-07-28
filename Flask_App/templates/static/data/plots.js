// Initialized arrays
let years = []
let ENERGY = []
let NONFUEL = []
let PRECIOUSMET = []

// For loop to populate arrays
for (let i = 0; i < searchResults.length; i++) {
  row = searchResults[i];
  years.push(row.Year);
  ENERGY.push(row.ENERGY);
  NONFUEL.push(row.NONFUEL);
  PRECIOUSMET.push(row.PRECIOUSMET);
}

var trace1 = {
    x: years,
    y: ENERGY,
    mode: 'markers',
    name: 'Energy',
    text: 'Includes: Coal, Crude Oil, Natural Gas',
    marker: {
      color: 'rgb(164, 194, 244)',
      size: 12,
      line: {
        color: 'white',
        width: 0.5
      }
    },
    type: 'scatter'
  };
  
  var trace2 = {
    x: years,
    y: NONFUEL,
    mode: 'markers',
    name: 'Non-Energy',
    text: ["Inclueds:Raw Materials,Agriculture,Metals & Minerals],
    marker: {
      color: 'rgb(255, 217, 102)',
      size: 12
    },
    type: 'scatter'
  };
  
  var trace3 = {
    x: years,
    y: PRECIOUSMET,
    mode: 'markers',
    name: 'Precious Metals',
    text: ['Includes: Gold, Platinum, Silver'],
    marker: {
      color: 'rgb(234, 153, 153)',
      size: 12
    },
    type: 'scatter'
  };
  
  var trace4 = {
    x: [19097, 18601, 15595, 13546, 12026, 7434, 5419],
    y: [43, 47, 56, 80, 86, 93, 80],
    mode: 'markers',
    name: 'Latin America',
    text: ['Chile', 'Argentina', 'Mexico', 'Venezuela', 'Venezuela', 'El Salvador', 'Bolivia'],
    marker: {
      color: 'rgb(142, 124, 195)',
      size: 12
    },
    type: 'scatter'
  };
  
  var data = [trace1, trace2, trace3, trace4];
  
  var layout = {
    title: 'World Bank Commodity Price Data',
    xaxis: {
      title: 'Years',
      showgrid: false,
      zeroline: false
    },
    yaxis: {
      title: 'Calculating 100 for year 2010',
      showline: false
    }
  };
  
  Plotly.newPlot('plot', data, layout);
  