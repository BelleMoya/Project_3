// Initialized arrays
let years = []
let AGRICULTURE=[]
let BEVERAGES = []
let FOOD = []
let FATS_OILS = []
let GRAINS=[]


// For loop to populate arrays
for (let i = 0; i < searchResults.length; i++) 
{
    row = searchResults[i];
    years.push(row.Year);
    AGRICULTURE.push(row.AGRICULTURE);
    BEVERAGES.push(row.BEVERAGES);
    FOOD.push(row.NONFUEL);
    FATS_OILS.push(row.FATS_OILS);
    GRAINS.push(row.GRAINS);
}

// Trace1 for the Greek Data
let trace1 = {
    x: years,
    y: AGRICULTURE,
    name: "Agriculture-Includes:Food,Beverages, Fat Oils, Grains-'",
    type: "markers",
    marker: {
      color:'#33CCCC',
      size: 12,
      line: {
        color:'black',
        width: 1
      }
    }, 
  };
    
  
  // Trace 2 for the Roman Data
let trace2 = {
    x: years,
    y:FOOD,
    name: "Food-Includes:Raw Materials,Agriculture,Metals & Minerals",
    type: "markers",
    marker: {
      color: '#99CC00',
      size: 12
    },
  };

  
let trace3 = {
    x: years,
    y:FATS_OILS,
    name: "Fat Oils-'Includes: Soybean Oils, Palm Oils, Coconut Oils",
    type: "markers",
    marker: {
      color: '#FF6600',
      size: 12
    },
  };

  let trace4 = {
        x: years,
        y:GRAINS,
        name: "Grains-Includes: Rice, Wheat, Maize, Barley",
        type: "markers",
        marker: {
          color: '#3366FF',
          size: 12
        },
    };
let trace5 ={
    x: years,
    y:BEVERAGES,
    name: "Beverages-Includes: Tea, Coffee, Coacoa",
    type: "markers",
    marker: {
      color: '#FF99CC',
      size: 12
    },
};

  // Create data array
 let data = [trace1, trace2, trace3, trace4,trace5];
  
  // Apply a title to the layout
  let layout = {
    title:'World Bank Commodity Price Data',
    xaxis: {
      title: 'Years',
      showgrid: true,
      zeroline: true
    },
    yaxis: {
      title: 'Calculating 100 for year 2010',
      showline: true
    }
  };
  
  // Render the plot to the div tag with id "plot"
  Plotly.newPlot("graphs", data, layout);