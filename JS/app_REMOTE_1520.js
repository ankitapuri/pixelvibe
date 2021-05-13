//preloader
let foldingCube = document.querySelector('.folding-cube');
window.addEventListener('load', function () {
  setTimeout(function(){ foldingCube.parentElement.removeChild(foldingCube);}, 3000);  
});
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
  var canvas = document.getElementById("canvas");
  var img = canvas.toDataURL("image/png");
  download(img);
});
downloadLinkJPEG.addEventListener("click", (e) => {
  e.preventDefault();
  var canvas = document.getElementById("canvas");
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

/**
 * @description Hides landing page components and makes canvas visible
 */
document.getElementById("submit").addEventListener(
  "click",
  (e) => {
    e.preventDefault();

    const sizePicker = document.getElementById("size-picker");
    sizePicker.classList.toggle("scale-up-center");
    sizePicker.classList.toggle("scale-down-center");

    const TIMEOUT_DURATION = 100; // milliSeconds
    setTimeout(() => {
      document.getElementById("size-picker").hidden = true;
      document.getElementById("canvas-div").hidden = false;
    }, TIMEOUT_DURATION);

    // These are configurations for the canvas for user-specific dimensions
    width = parseInt(document.getElementById("input-width").value);
    height = parseInt(document.getElementById("input-height").value);

    if (!width || !height) {
      alert("Please provide dimensions");
      document.getElementById("reset").click();
      return;
    }

    canvas.height = 20 * height;
    canvas.width = 20 * width;

    w = +canvas.width;
    h = +canvas.height;

    // displaying download button once everything is ready
    downloadBtn.style.display = "block";
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = "#fff"; /// set white fill style
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  },
  false
);

/**
 * @description Following few lines are setting up the canvas
 */
const canvas = document.querySelector("#canvas");
const context = canvas.getContext("2d");

// width and height needs to accept input values from
var width = 16;
var height = 16;
// default brush color upon loading the site
var brushColor = '#000000';
var prevBrushColor = '#000000';

canvas.height = 10 * height;
canvas.width = 10 * width;

var w = +canvas.width;
var h = +canvas.height;
// console.log(`Height ${height} Width ${width} ClientWIDTH ${canvas.clientWidth} `);    // DEBUG
context.globalAlpha = 1;
canvas.style.display = "block";

let isDrawing = false;
/**
 * @description This event listener responds to whenever site loads
 */
window.addEventListener("load", (e) => {
  canvas.addEventListener("mousedown", (e) => {
    isDrawing = true;
    draw(e);
  });
  canvas.addEventListener("mouseup", (e) => {
    isDrawing = false;
    context.beginPath();
  });
  canvas.addEventListener("mousemove", draw);
});

function draw(e) {
  // Mouse is not pressed
  if (!isDrawing) return;

  var rect = canvas.getBoundingClientRect();
  var x = e.clientX - rect.left;
  var y = e.clientY - rect.top;
  x = Math.floor((width * x) / canvas.clientWidth);
  y = Math.floor((height * y) / canvas.clientHeight);

  if (x >= 0 && x < width && y >= 0 && y < height) {
    context.fillStyle = brushColor;

    context.fillRect(
      Math.floor(x * (w / width)),
      Math.floor(y * (h / height)),
      Math.floor(canvas.width / width),
      Math.floor(canvas.height / height)
    );
  }
}

document.getElementById('palette').addEventListener('click', (e) => {
  
  const boxShadow = 'inset 0 0 6px #616161';
  brushColor = e.target.style.backgroundColor;
  prevBrushColor = brushColor;
  
  for (var child of document.getElementById('palette').children) {
    child.style.boxShadow = null;
  }

  if (e.target.className === 'palette-color') {
    e.target.style.boxShadow = boxShadow;
  }

  ersr.classList.remove("selected");
  brsh.classList.add("selected");
});

function myFunction(x) {
  x.classList.toggle("change");
  document.getElementById("myDropdown").classList.toggle("show");
}

dlt.addEventListener("click", ()=>{
  context.clearRect(0,0,canvas.width,canvas.height)
})

ersr.addEventListener("click", () => {
  ersr.classList.add("selected");
  brsh.classList.remove("selected");
  prevBrushColor = brushColor;
  brushColor = "white";
})

brsh.addEventListener("click", () => {
  ersr.classList.remove("selected");
  brsh.classList.add("selected");
  brushColor = prevBrushColor;
})