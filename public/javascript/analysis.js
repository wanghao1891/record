$(document).ready(function(){
  $("#btn1").click(function(){
    $.get("/record", function(data){
      $('#test').html(data[0].item);
    });
  });

  //Chart.js
  /*  var lineChartData = {
   labels : ["January","February","March","April","May","June","July"],
   datasets : [
   {
   fillColor : "rgba(220,220,220,0.5)",
   strokeColor : "rgba(220,220,220,1)",
   pointColor : "rgba(220,220,220,1)",
   pointStrokeColor : "#fff",
   data : [65,59,90,81,56,55,40]
   },
   {
   fillColor : "rgba(151,187,205,0.5)",
   strokeColor : "rgba(151,187,205,1)",
   pointColor : "rgba(151,187,205,1)",
   pointStrokeColor : "#fff",
   data : [28,48,40,19,96,27,100]
   }
   ]
   };

   var context = $("#canvas").get(0).getContext("2d");
   var myLine = new Chart(context);
   myLine.Line(lineChartData);*/

  //Flotr2
  $.get("/record", function(res){
    var
    d1 = [],
    d2 = [],
    d3 = [],
    data,
    graph, i,
    container = $("#flotr2").get(0);

    // Data Generation
    for (i = 0; i < 15; i += 0.5) {
      d1.push([i, i + Math.sin(i+Math.PI)]);
      d2.push([i, i]);
      d3.push([i, 15-Math.cos(i)]);
    }

    data = [
      { data : d1, label : res[0].item },
      { data : d2, label :'x' },
      { data : d3, label :'15 - cos(x)' }
    ];


    // This function prepend each label with 'y = '
    function labelFn (label) {
      return 'y = ' + label;
    }

    // Draw graph
    graph = Flotr.draw(container, data, {
      legend : {
        position : 'se',            // Position the legend 'south-east'.
        //labelFormatter : labelFn,   // Format the labels.
        backgroundColor : '#D2E8FF' // A light blue background color.
      },
      HtmlText : false
    });
  });

  // CanvasJS
  $.get("/record", function(response){
    var chart = new CanvasJS.Chart("canvasjs");

    chart.options.zoomEnabled = false;
    chart.options.title = {text: "pq record"};
    chart.options.axisY2 = {
      valueFormatString:"0.0 bn",
      maximum: 1.2,
      interval: .2,
      interlacedColor: "#F5F5F5",
      gridColor: "#D7D7D7",
      tickColor: "#D7D7D7"
    };
    chart.options.legend = {
      verticalAlign: "bottom",
      horizontalAlign: "center",
      fontSize: 15,
      fontFamily: "Lucida Sans Unicode"
    };

    var serial1 = { //dataSeries - first quarter
      type: "line",
      lineThickness:3,
      //axisYType:"secondary",
      //showInLegend: true,
      name: "sleep"
    };

    serial1.dataPoints = [];

    for (i in response){
      var postdate = response[i].postdate.replace(/Z/, "");
      var arr_postdate = postdate.split("T");
      serial1.dataPoints.push({x: arr_postdate[0], y: arr_postdate[1]});
    }

    serial1.dataPoints = [
      {x: new Date(2014,1,2), y: 1},
      {x: new Date(2014,1,3), y: 2},
      {x: new Date(2014,1,4), y: 2},
      {x: new Date(2014,1,5), y: 2},
      {x: new Date(2014,1,6), y: 3},
      {x: new Date(2014,1,7), y: 2},
      {x: new Date(2014,1,8), y: 4},
      {x: new Date(2014,1,9), y: 2},
      {x: new Date(2014,1,10), y: 5}
    ];

    /*serial1.dataPoints = [
     { x: new Date(2010,0,3), y: 650 },
     { x: new Date(2010,0,5), y: 700 },
     { x: new Date(2010,0,7), y: 710 },
     { x: new Date(2010,0,9), y: 658 },
     { x: new Date(2010,0,11), y: 734 },
     { x: new Date(2010,0,13), y: 963 },
     { x: new Date(2010,0,15), y: 847 },
     { x: new Date(2010,0,17), y: 853 },
     { x: new Date(2010,0,19), y: 869 },
     { x: new Date(2010,0,21), y: 943 },
     { x: new Date(2010,0,23), y: 970 }
     ];*/

    /*serial1.dataPoints = [
     { x: new Date(2001, 0), y: 0 },
     { x: new Date(2002, 0), y: 0.001 },
     { x: new Date(2003, 0), y: 0.01},
     { x: new Date(2004, 0), y: 0.05 },
     { x: new Date(2005, 0), y: 0.1 },
     { x: new Date(2006, 0), y: 0.15 },
     { x: new Date(2007, 0), y: 0.22 },
     { x: new Date(2008, 0), y: 0.38  },
     { x: new Date(2009, 0), y: 0.56 },
     { x: new Date(2010, 0), y: 0.77 },
     { x: new Date(2011, 0), y: 0.91 },
     { x: new Date(2012, 0), y: 0.94 }
     ];*/

    var serial2 = {
      type: "line",
      lineThickness:3,
      showInLegend: true,
      name: "China",
      axisYType:"secondary"
    };

    serial2.dataPoints = [
      { x: new Date(2001, 00), y: 0.18 },
      { x: new Date(2002, 00), y: 0.2 },
      { x: new Date(2003, 0), y: 0.25},
      { x: new Date(2004, 0), y: 0.35 },
      { x: new Date(2005, 0), y: 0.42 },
      { x: new Date(2006, 0), y: 0.5 },
      { x: new Date(2007, 0), y: 0.58 },
      { x: new Date(2008, 0), y: 0.67  },
      { x: new Date(2009, 0), y: 0.78},
      { x: new Date(2010, 0), y: 0.88 },
      { x: new Date(2011, 0), y: 0.98 },
      { x: new Date(2012, 0), y: 1.04 }
    ];

    chart.options.data = [];
    chart.options.data.push(serial1);
    //chart.options.data.push(serial2);

    chart.render();
  });

  //test
  /*var limit = 100000;    //increase number of dataPoints by increasing this

   var y = 0;
   var data = []; var dataSeries = { type: "line" };
   var dataPoints = [];
   for (var i = 0; i < limit; i += 1) {
   y += (Math.random() * 10 - 5);
   dataPoints.push({
   x: i - limit / 2,
   y: y
   });
   }
   dataSeries.dataPoints = dataPoints;
   data.push(dataSeries);

   var chart = new CanvasJS.Chart("canvasjs1",
   {
   zoomEnabled: true,
   title:{
   text: "Stress Test: 100,000 Data Points"
   },
   axisX:{
   labelAngle: 30
   },

   axisY :{
   includeZero:false
   },

   data: data  // random generator below

   });

   chart.render();*/
});

$(function () {
  $('#highchartsjs').highcharts({
    chart: {
      type: 'spline'
    },
    title: {
      text: 'Snow depth at Vikjafjellet, Norway'
    },
    subtitle: {
      text: 'Irregular time data in Highcharts JS'
    },
    xAxis: {
      type: 'datetime',
      dateTimeLabelFormats: { // don't display the dummy year
        month: '%Y %e. %b',
        year: '%b'
      }
    },
    yAxis: {
      type: 'datetime',
      dateTimeLabelFormats: { // don't display the dummy year
        second: '%H:%M:%S'
      },
      title: {
        text: 'Time'
      }
    },
    tooltip: {
      formatter: function() {
        return '<b>'+ this.series.name +'</b><br/>'+
          Highcharts.dateFormat('%Y %e. %b', this.x) +': '+ Highcharts.dateFormat('%H:%M:%S', this.y);
      }
    },

    series: [{
      name: 'Sleep',
      data: [
        [Date.UTC(2013,  9,  9), Date.UTC(2013,  9,  9, 0, 0, 0)],
        [Date.UTC(2013,  9, 14), Date.UTC(2013,  9, 14, 1, 0, 0)],
        [Date.UTC(2013, 10, 28), Date.UTC(2013,  9, 14, 2, 0, 0)],
        [Date.UTC(2013, 11, 12), Date.UTC(2013, 11, 12, 3, 0, 0)],
        [Date.UTC(2014,  0,  1), Date.UTC(2014,  0,  1, 5, 0, 0)]
      ]
    }]
  });
});
