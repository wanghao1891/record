/*
 * Create coordinate system.
 */
function createCoordinateSystem(canvas){
  //Coordinate origin
  var origin = {
    x: 100,
    y: canvas.height - 120
  };

  var context = canvas.getContext('2d');

  context.lineWidth = 2;

  context.beginPath();
  context.moveTo(origin.x, 0);
  context.lineTo(origin.x, origin.y);
  context.lineTo(canvas.width, origin.y);

  context.textAlign = 'center';
  context.textBaseline = 'middle';
  //context.fillStyle = 'blue';

  var interval = 0;
  for(var i=0;i<24;i++){
    var x = origin.x + interval,
        y = origin.y;

    context.moveTo(x, y);
    context.lineTo(x, y - 10);
    interval += (canvas.width - 200)/24;
    context.fillText(i + ':00', x, y + 10);
  }

  context.stroke();
}

/*
 * Render timeline data
 * date = [{x:'00:00', y:'2014-01-06', z: 'sleep'}]
 */
function renderTimeline(canvas, data){
  var context = canvas.getContext('2d');

  var x = 100,
      y = canvas.height - 120;

  for (p in data){
    context.beginPath();
    if(p.x == '00:00'){
      x += (canvas.width - 200)/24;
    }
    context.moveTo(p.x, p.y);
  }
}

$(document).ready(function(){
  $("#btn1").click(function(){
    $.get("/record", function(data){
      $('#test').html(data[0].item);
    });
  });

  //Coordinate system
  var canvas = $('#timeline').get(0);
  createCoordinateSystem(canvas);

  //Timeline
  /*var canvas = document.getElementById('timeline');
   var context = canvas.getContext('2d');

   context.strokeStyle = '#ff0000';

   context.beginPath();
   context.moveTo(60, 0);
   context.lineTo(60, 180);
   context.lineTo(1140, 180);

   context.textAlign = 'center';
   context.textBaseline = 'middle';
   context.fillStyle = 'blue';

   var start = 60;
   for(var i=0;i<24;i++){
   context.moveTo(start, 180);
   context.lineTo(start, 170);
   context.fillText(i + ':00', start, 190);
   start += 40;
   }

   context.moveTo(60, 140);
   context.lineTo(70, 140);
   context.textAlign = 'left';
   context.fillText('2014-01-05', 0, 140);

   context.lineWidth = 2;
   context.stroke();

   context.beginPath();
   context.strokeStyle = '#8A2BE2';
   context.lineWidth = 2;
   context.moveTo(60, 140);
   context.lineTo(340, 140);
   context.stroke();

   context.beginPath();
   context.arc(340, 140, 3, 0, 2 * Math.PI, false);
   context.fillStyle = 'red';
   context.fill();
   context.stroke();

   context.beginPath();
   context.strokeStyle = '#DC143C';
   context.lineWidth = 2;
   context.moveTo(340, 140);
   context.lineTo(420, 140);
   context.stroke();

   context.beginPath();
   context.arc(420, 140, 3, 0, 2 * Math.PI, false);
   context.fillStyle = 'red';
   context.fill();
   //  context.lineWidth = 5;
   //  context.strokeStyle = '#003300';
   context.stroke();

   context.beginPath();
   context.strokeStyle = '#8A2BE2';
   context.lineWidth = 2;
   context.moveTo(420, 140);
   context.lineTo(460, 140);
   context.stroke();

   context.beginPath();
   context.arc(460, 140, 3, 0, 2 * Math.PI, false);
   context.fillStyle = 'red';
   context.fill();
   context.stroke();

   context.beginPath();
   context.strokeStyle = '#DC143C';
   context.lineWidth = 2;
   context.moveTo(460, 140);
   context.lineTo(500, 140);
   context.stroke();

   context.beginPath();
   context.arc(500, 140, 3, 0, 2 * Math.PI, false);
   context.fillStyle = 'red';
   context.fill();
   context.stroke();

   //Rectangle
   context.beginPath();
   context.rect((canvas.width / 2) - 100, 230, 200, 30);
   context.strokeStyle = '#ADD8E6';
   context.stroke();

   context.beginPath();
   context.moveTo((canvas.width / 2) - 90, 245);
   context.lineTo((canvas.width / 2) - 70, 245);
   context.strokeStyle = '8A2BE2';
   context.stroke();

   context.textAlign = 'left';
   context.fillStyle = 'black';
   context.fillText('Sleep', (canvas.width / 2) - 60, 245);

   context.beginPath();
   context.moveTo((canvas.width / 2) + 10, 245);
   context.lineTo((canvas.width / 2) + 30, 245);
   context.strokeStyle = '#DC143C';
   context.stroke();

   context.textAlign = 'left';
   context.fillStyle = 'black';
   context.fillText('Play', (canvas.width / 2) + 40, 245);*/
});
