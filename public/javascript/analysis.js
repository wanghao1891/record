$(document).ready(function(){
  $("#btn1").click(function(){
    $.get("/record", function(data){
      $('#test').html(data[0].item);
    });
  });

  //Rgraph
  // Create the Gantt chart. Note the (October 2012) change in how the events data is specified.
  // You now give the data as an argument to the constructor.
  /*var gantt = new RGraph.Gantt('rgraph', [
   [31, 28, null, 'Richard'],
   [31, 28, null, 'Fred'],
   [59, 14, null, 'Barney'],
   [59, 21, null, 'Gloria'],
   [59, 31, null, 'Paul'],
   [80, 21, null, 'Harry'],
   [94, 7, null, 'Shane'],
   [120, 14, null, 'Barry'],
   [130, 14, null, 'Cynthia'],
   [211, 61, null, 'Graham'],
   [334, 31, null, 'Paul']
   ])

   // Configure the chart to appear as you want.
   .Set('xmax', 365)
   .Set('gutter.left', 75)
   .Set('labels', ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'])
   .Set('title', 'Holiday schedule for Xyz Ltd')
   .Set('defaultcolor', 'rgba(255,0,0,1)')
   .Set('tooltips', ["<b>Richard</b><br />Richard is going on holiday to Malta.<br />He'll be away for 28 days.",
   "<b>Fred</b><br />Fred is also going away for 28 days",
   "<b>Barney</b><br />Barney is off work for two weeks",
   "<b>Gloria</b><br />Gloria is off for 3 weeks",
   "<b>Paul</b><br /> Away for 31 days",
   "<b>Harry</b><br />Away for three weeks",
   "<b>Shane</b><br />Away for one week",
   "<b>Barry</b><br />Away for two weeks",
   "<b>Cynthia</b><br />Away for two weeks",
   "<b>Graham</b><br />Away for August and September",
   "<b>Paul</b><br />Away for 31 days"])

   .Set('vbars', [
   [0, 31, 'rgba(192,255,192,0.5)'],
   [59, 31, 'rgba(192,255,192,0.5)'],
   [120, 31, 'rgba(192,255,192,0.5)'],
   [181, 31, 'rgba(192,255,192,0.5)'],
   [243, 30, 'rgba(192,255,192,0.5)'],
   [304, 30, 'rgba(192,255,192,0.5)']
   ])

   // Now call the .Draw() method to draw the chart.
   .Draw();*/

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
  /*$.get("/record", function(res){
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
   ];*/

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

  /*var serial2 = {
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
   });*/

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

  //Flotr2 timeline
  (function basic_timeline(container) {

    var
    d1        = [[1, 4, 2]],
    d2        = [[3, 4, 0]],
    d3        = [[5, 4, 2], [5, 2, 3.3]],
    d4        = [[7, 4, 2]],
    d5        = [[9, 4, 2]],
    data      = [],
    timeline  = { show : true, barWidth : .5 },
    markers   = [],
    labels    = ['2014-01-05 Sleep', '2014-01-04 Eat', '2014-01-03 Pee & Poo', '2014-01-02', '2014-01-01'],
    i, graph, point;

    // Timeline
    Flotr._.each([d1, d2, d3, d4, d5], function (d) {
      data.push({
        data : d,
        timeline : Flotr._.clone(timeline)
      });
    });

    // Markers
    Flotr._.each([d1, d2, d3, d4, d5], function (d) {
      point = d[0];
      markers.push([point[0], point[1]]);
    });
    data.push({
      data: markers,
      markers: {
        show: true,
        position: 'rm',
        fontSize: 11,
        labelFormatter : function (o) { return labels[o.index]; }
      }
    });

    // Draw Graph
    graph = Flotr.draw(container, data, {
      xaxis: {
        noTicks: 3,
        tickFormatter: function (x) {
          var
          x = parseInt(x),
          months = ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00', '23:59'];
          return months[(x-1)%12];
        }
      },
      yaxis: {
        showLabels : false
      },
      grid: {
        horizontalLines : false
      }
    });
  })(document.getElementById("flotr2-timeline"));
});

$(function () {
  $('#highchartsjs').highcharts({
    chart: {
      type: 'spline'
    },
    title: {
      text: 'pq record'
    },
    subtitle: {
      text: 'sleep, eat'
    },
    xAxis: {
      tickInterval: 1,
      title: {
        text: "Frequence"
      }
    },
    yAxis: {
      type: 'datetime',
      minRange: 60000,
      dateTimeLabelFormats: { // don't display the dummy year
        // millisecond: '%H:%M:%S.%L',
        second: '%H:%M:%S'
        // minute: '%H:%M',
        // hour: '%H:%M',
        // day: '%e. %b',
        // week: '%e. %b',
        // month: '%b \'%y %H:%M:%S',
        // year: '%Y'
      },
      title: {
        text: 'Time'
      }
    },
    tooltip: {
      formatter: function() {
        return '<b>'+ this.series.name +'</b><br/>'+
          this.x +': '+ Highcharts.dateFormat('%H:%M:%S', this.y);
      }
    },

    series: [{
      name: 'Sleep 2014-1-3',
      data: [
        Date.UTC(2014, 1, 3, 1, 10, 10),
        Date.UTC(2014, 1, 3, 2, 10, 10),
        Date.UTC(2014, 1, 3, 3, 10, 10),
        Date.UTC(2014, 1, 3, 4, 0, 0),
        Date.UTC(2014, 1, 3, 5, 0, 0)
      ],
      pointStart: 1
    },
             {
               name: 'Sleep 2014-1-4',
               data: [
                 Date.UTC(2014, 1, 3, 1, 20, 10),
                 Date.UTC(2014, 1, 3, 2, 00, 10),
                 Date.UTC(2014, 1, 3, 3, 30, 10),
                 Date.UTC(2014, 1, 3, 4, 10, 0),
                 Date.UTC(2014, 1, 3, 5, 20, 0)
               ],
               pointStart: 1
             }]
  });
});

$(function () {
  $('#highchartsjs1').highcharts({
    chart: {
      type: 'spline'
    },
    title: {
      text: 'pq record'
    },
    subtitle: {
      text: 'sleep, eat'
    },
    xAxis: {
      type: 'datetime',
      dateTimeLabelFormats: {
        second: '%H:%M:%S'
      },
      title: {
        text: "Time"
      }
    },
    yAxis: {
      type: 'datetime',
      dateTimeLabelFormats: {
        day: '%e of %b'
      },
      title: {
        text: 'Year'
      }
    },
    tooltip: {
      formatter: function() {
        return '<b>'+ this.series.name +'</b><br/>'+
          this.x +': '+ Highcharts.dateFormat('%H:%M:%S', this.y);
      }
    },

    series: [{
      name: 'Sleep 2014-1-3',
      data: [
        [Date.UTC(2014, 1, 3, 1, 10, 10), Date.UTC(2014, 1, 3)],
        [Date.UTC(2014, 1, 3, 2, 10, 10), Date.UTC(2014, 1, 3)],
        [Date.UTC(2014, 1, 3, 3, 10, 10), Date.UTC(2014, 1, 3)],
        [Date.UTC(2014, 1, 3, 4, 0, 0), Date.UTC(2014, 1, 3)],
        [Date.UTC(2014, 1, 3, 5, 0, 0), Date.UTC(2014, 1, 3)]
      ],
      pointStart: 1
    }, {
      name: 'Sleep 2014-1-4',
      data: [
        [Date.UTC(2014, 1, 4, 1, 10, 10), Date.UTC(2014, 1, 4)],
        [Date.UTC(2014, 1, 4, 2, 10, 10), Date.UTC(2014, 1, 4)],
        [Date.UTC(2014, 1, 4, 3, 10, 10), Date.UTC(2014, 1, 4)],
        [Date.UTC(2014, 1, 4, 4, 0, 0), Date.UTC(2014, 1, 4)],
        [Date.UTC(2014, 1, 4, 5, 0, 0), Date.UTC(2014, 1, 4)]
      ],
      pointStart: 1
    } ]
  });
});

$(function () {
  $('#highchartsjs2').highcharts({
    chart: {
      type: 'bar'
    },
    title: {
      text: 'Stacked bar chart'
    },
    xAxis: {
      categories: ['2014-01-01', '2014-01-02', '2014-01-03']
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Total fruit consumption'
      }
    },
    legend: {
      backgroundColor: '#FFFFFF',
      reversed: true
    },
    plotOptions: {
      series: {
        stacking: 'normal'
      }
    },
    series: [{
      name: 'Sleep',
      data: [5, 4, 7]
    }, {
      name: 'Eat',
      data: [2, 2, 3]
    }, {
      name: 'Pee & Poo',
      data: [3, 4, 4]
    }]
  });
});
