// Store our API endpoint as queryUrl.
var queryUrl = "../Cost of Living/templates/static/data/Cost_of_Living.geoJSON";


// Perform a GET request to the query URL/
d3.json("../Cost of Living/templates/static/data/Cost_of_Living.geoJSON").then(function (data) {
  // Once we get a response, send the data.features object to the createFeatures function.
  console.log(data.features);
});

// Perform a GET request to the query URL/
d3.json("../Cost of Living/templates/static/data/Cost_of_Living.geoJSON").then(function (data) {
  // Once we get a response, send the data.features object to the createFeatures function.
  createFeatures(data.features);
});

function markerSize(mag) {
  return mag / 4;
}

function markerColor(depth) {
  return depth > 150 ? 'chartreuse' :
    depth > 100 ? 'yellow' :
      depth > 75 ? 'orange' :
        depth > 50 ? 'red' :
          depth > 0 ? 'brown' :
            'brown';
}

function createFeatures(citydata) {

  var cities = L.geoJSON(citydata, {
    // Define a function we want to run once for each feature in the features array
    // Give each feature a popup describing the place and time of the earthquake
    onEachFeature: function (feature, layer) {
      layer.bindPopup(`<h3>City:${feature.properties.City}</h3><hr><p>Country:${feature.properties.Country}</p><hr><p>Currency Code:${(feature.properties.Currency_Code)}</p><hr><p>Currency Name:${(feature.properties.Currency_Name)}</p>`)
    }, pointToLayer: function (feature, latlng) {
      return new L.circleMarker(latlng,
        {
          radius: markerSize(feature.properties.Cost_of_Living_Index),
          fillColor: markerColor(feature.properties.Local_Purchasing_Power_Index),
          fillOpacity: 0.7,
          stroke: true,
          color: 'black',
          weight: 0.5
        })
    }
  });

  // Send our earthquakes layer to the createMap function/
  createMap(cities);
}


function createMap(cities) {

  // Create the base layers.
  var street = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  })

  var topo = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
  });

  var satellite = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}@2x.png?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 17,
    id: "mapbox.satellite",
    accessToken: config.API_KEY
  });

  var grayscale = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 17,
    id: "mapbox.light",
    accessToken: config.API_KEY
  });

  // Create a baseMaps object.
  var baseMaps = {
    "Satellite": satellite,
    "Topographic Map": topo,
    "Street Map": street,
    "Grayscale": grayscale
  };

  // Create an overlay object to hold our overlay.
  var overlayMaps = {
    Cities: cities,
  };

  // Create our map, giving it the streetmap and earthquakes layers to display on load.
  var myMap = L.map("map", {
    center: [
      30.00, 0.00
    ],
    zoom: 2.5,
    layers: [satellite, cities]
  });

  // Create a layer/legend control.
  // Pass it our baseMaps and overlayMaps.
  // Add the layer control to the map.
  L.control.layers(baseMaps, overlayMaps, {
    collapsed: false
  }).addTo(myMap);



  var info = L.control({
    position: "bottomright"
  });

  info.onAdd = function () {
    var div = L.DomUtil.create("div", "legend");
    return div;
  }

  info.addTo(myMap);

  document.querySelector(".legend").innerHTML = displayLegend();
}
function displayLegend() {
  var legendInfo = [{
    limit: "Local Purchasing Power: 0-50",
    color: "brown"
  }, {
    limit: "Local Purchasing Power: 51-75",
    color: "red"
  }, {
    limit: "Local Purchasing Power: 76-100",
    color: "orange"
  }, {
    limit: "Local Purchasing Power: 101-150",
    color: "yellow"
  }, {
    limit: "Local Purchasing Power: 151+",
    color: "chartreuse"
  }];

  var header = "<h3>Local Purchasing Power</h3><hr>";

  var strng = "";

  for (i = 0; i < legendInfo.length; i++) {
    strng += "<p style = \"background-color: " + legendInfo[i].color + "\">" + legendInfo[i].limit + "</p>";
  }

  return header + strng + "<h4>Note: Marker Size represents Cost of Living Index</h4>";

}
