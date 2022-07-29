var data = [{
    id: '0.0',
    parent: '',
    name: 'The World Commodity Price Index'
  }, {
    id: '1.3',
    parent: '0.0',
    name: 'Energy'
  }, {
    id: '1.1',
    parent: '0.0',
    name: 'Non-Energy'
  }, {
    id: '1.2',
    parent: '0.0',
    name: 'Precious Metals'
  },
  
  /* Energy */
  {
    id: '2.1',
    parent: '1.3',
    name: 'Coal',
    value: '4.7%',
  },
   {
    id: '2.2',
    parent: '1.1',
    name: 'Crude Oil',
    value: '84.6%',
  }, 
  
  {
    id: '2.3',
    parent: '1.1',
    name: 'Natural Gas',
    value: '10.8%',
  }

 
  /***********/
  
  
  Highcharts.chart('container', {
  
    chart: {
      height: '100%'
    },
  
    // Let the center circle be transparent
    colors: ['transparent'].concat(Highcharts.getOptions().colors),
  
    title: {
      text: 'World population 2017'
    },
  
   
  
    series: [{
      type: 'sunburst',
      data: data,
      name: 'Root',
      allowDrillToNode: true,
      cursor: 'pointer',
      dataLabels: {
        format: '{point.name}',
        filter: {
          property: 'innerArcLength',
          operator: '>',
          value: 16
        },
        rotationMode: 'circular'
      },
      levels: [{
        level: 1,
        levelIsConstant: false,
        dataLabels: {
          filter: {
            property: 'outerArcLength',
            operator: '>',
            value: 64
          }
        }
      }, {
        level: 2,
        colorByPoint: true
      },
      {
        level: 3,
        colorVariation: {
          key: 'brightness',
          to: -0.5
        }
      }, {
        level: 4,
        colorVariation: {
          key: 'brightness',
          to: 0.5
        }
      }]
  
    }],
  
    tooltip: {
      headerFormat: '',
      pointFormat: 'The population of <b>{point.name}</b> is <b>{point.value}</b>'
    }
  });