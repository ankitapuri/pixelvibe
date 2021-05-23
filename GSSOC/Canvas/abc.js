const canvas = document.querySelector("canvas");
const context= canvas.getContext("2d");

var width=200;
var height=300;
// var w = +canvas.width;
//  var h = +canvas.height;

function createCanvas(){
    // canvas.width=width;
    // canvas.height=height;
    context.fillStyle="#fff";
    context.fillRect(0,0,canvas.width,canvas.height);
}
createCanvas();

// let isDrawing = false;
// /**
//  * @description This event listener responds to whenever site loads
//  */
// window.addEventListener("load", (e) => {
//   canvas.addEventListener("mousedown", (e) => {
//     isDrawing = true;
//     draw(e);
//   });
//   canvas.addEventListener("mouseup", (e) => {
//     isDrawing = false;
//     context.beginPath();
//   });
//   canvas.addEventListener("mousemove", draw);
// });

// function draw(e) {
//   // Mouse is not pressed
//   if (!isDrawing) return;

//   var rect = canvas.getBoundingClientRect();
//   var x = e.clientX - rect.left;
//   var y = e.clientY - rect.top;
//   x = Math.floor((width * x) / canvas.clientWidth);
//   y = Math.floor((height * y) / canvas.clientHeight);

//   if (x >= 0 && x < width && y >= 0 && y < height) {
//     context.fillStyle = "black";

//     context.fillRect(
//       Math.floor(x * (w / width)),
//       Math.floor(y * (h / height)),
//       Math.floor(canvas.width / width),
//       Math.floor(canvas.height / height)
//     );
//   }
// }



// the canvas logic should be done once somewhere else 
// var w = 200;
// var h = 100;
// // grid step
// var step = 20; 
// var canvasElementId = 'grid';


// var canvas = document.getElementById("canvas");
// // this is how you resize the canvas
// canvas.width  = w;
// canvas.height = h;

// var ctx = canvas.getContext('2d');


// the render logic should be focusing on the rendering 
// var drawGrid = function(ctx, w, h, step) {
//     ctx.beginPath(); 
//     for (var x=0;x<=w;x+=step) {
//             ctx.moveTo(x, 0);
//             ctx.lineTo(x, h);
//     }
//     // set the color of the line
//     ctx.strokeStyle = 'rgb(0,0,0)';
//     ctx.lineWidth = 1;
//     // the stroke will actually paint the current path 
//     ctx.stroke(); 
//     // for the sake of the example 2nd path
//     ctx.beginPath(); 
//     for (var y=0;y<=h;y+=step) {
//             ctx.moveTo(0, y);
//             ctx.lineTo(w, y);
//     }
//     // set the color of the line
//     ctx.strokeStyle = '#000';
//     // just for fun
//     ctx.lineWidth = 5;
//     // for your original question - you need to stroke only once
//     ctx.stroke(); 
// };


// drawGrid(context, w, h, step);

var w = width/20;
// Box height
var h = height/20;
// Padding
var p = 10;

// var canvas = document.getElementById("canvas");
// var context = canvas.getContext("2d");
function drawBoard(color,lineWidth,number){
    // for (var x = 0; x <= bw; x += 5) {
    //     context.moveTo(0.5 + x + p, p);
    //     context.lineTo(0.5 + x + p, bh + p);
    // }

    // for (var x = 0; x <= bh; x += 40) {
    //     context.moveTo(p, 0.5 + x + p);
    //     context.lineTo(bw + p, 0.5 + x + p);
    
    context.globalAlpha = number;
    context.lineWidth = lineWidth ;
    context.strokeStyle = color;
    console.log(number);
    
    for(j=0;j<height;j+=20){
        for(i=0;i<width;i+=20){
            context.strokeRect(i, j, 20, 20);
        }
    }

    // context.stroke();
}

 drawBoard("grey",2,0.1);
 drawBoard("white",0,0.0);

 context.globalAlpha = 1;
context.fillStyle = "purple";
context.fillRect(0, 0, 20, 20);
context.fillRect(0, 20, 20, 20);
context.fillRect(20, 0, 20, 20);





// reference to Download button in DOM.
var downloadBtn = document.getElementById("download-button");
var downloadLinkPNG = document.getElementById("png-download");
var downloadLinkJPEG = document.getElementById("jpeg-download");
// attaching click event listener to Download button
downloadLinkPNG.addEventListener("click", (e) => {
  e.preventDefault();
  drawBoard("blue",0,0.0);
  var img = canvas.toDataURL("image/png");
  download(img);
});
downloadLinkJPEG.addEventListener("click", (e) => {
  e.preventDefault();
  var img = canvas.toDataURL("image/jpeg");
  download(img);
});





/**
 *
 * @param {String} img
 * @description utility function to download image of provided dataURL
 */
var download = function (img) {
    
  var link = document.createElement("a");
  link.download = "pixelvibe";
  link.href = img;
  link.click();

  
};
context.restore();