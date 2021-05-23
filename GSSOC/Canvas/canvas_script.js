

const canvas = document.querySelector("#canvas");
const context= canvas.getContext("2d");


var width= localStorage.getItem("canvas_width");
var height= localStorage.getItem("canvas_height");



function createCanvas(){
    canvas.width=width;
    canvas.height=height;
    context.fillStyle="#fff";
    context.fillRect(0,0,canvas.width,canvas.height);
}
createCanvas();

function drawBoard(){
 
    context.beginPath();
    for(j=0;j<height;j+=20){
        for(i=0;i<width;i+=20){
            context.rect(i, j, 20, 20);
        }
    }
    context.globalAlpha=0.1;
    context.strokeStyle = "grey";
    context.stroke();
}

drawBoard();


/**
 * @description Downloads the pixel art drawn by user.
 *
 */
// reference to Download button in DOM.
var downloadBtn = document.getElementById("download-button");
var downloadLinkPNG = document.getElementById("png-download");
var downloadLinkJPEG = document.getElementById("jpeg-download");
// attaching click event listener to Download button
downloadLinkPNG.addEventListener("click", (e) => {
  e.preventDefault();
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
