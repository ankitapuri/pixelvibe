
const foldingCube = document.querySelector('.folding-cube');              //preloader
const submit  = document.getElementById("submit");                        //submit
const downloadBtn = document.getElementById("download-button");           //Download 
const downloadLinkPNG = document.getElementById("png-download");          //Download 
const downloadLinkJPEG = document.getElementById("jpeg-download");        //Download 
const palette = document.getElementById('palette')                        //palette
const clear=document.getElementById('dlt')                                //clear

const canvas = document.querySelector("#canvas");
const context = canvas.getContext("2d");

context.globalAlpha = 1;
canvas.style.display = "block";

// Global Variables
let brushColor = '#000000';         // default brush color (black)
let isDrawing = false;

//preloader
window.addEventListener('load', function () {
  setTimeout(function () { foldingCube.parentElement.removeChild(foldingCube); }, 3000);
});

// On Submit
submit.addEventListener("click",(e) => {
    e.preventDefault();

    const sizePicker = document.getElementById("size-picker");
    sizePicker.classList.toggle("scale-up-center");
    sizePicker.classList.toggle("scale-down-center");

    const TIMEOUT_DURATION = 100;                       // milliSeconds
    setTimeout(() => {
      document.getElementById("size-picker").hidden = true;                   
      document.getElementById("canvas-div").hidden = false;                  // displaying canvas
    }, TIMEOUT_DURATION);

    width = parseInt(document.getElementById("input-width").value);           //user input width
    height = parseInt(document.getElementById("input-height").value);         //user input - height

    if (!width || !height) {
      alert("Please provide dimensions");
      document.getElementById("reset").click();
      return;
    }

    canvas.height = 20 * height;
    canvas.width = 20 * width;

    w = +canvas.width;
    h = +canvas.height;

    downloadBtn.style.display = "block";              // displaying download button

    context.fillStyle = "#fff";                        // set white fill style
    context.fillRect(0, 0, canvas.width, canvas.height);
  },
  false
);

<<<<<<< HEAD
//Get Mouse Position
=======
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
>>>>>>> upstream/main
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

//Draw Function
function draw(e) {
  if (!isDrawing)              // Mouse is not pressed
    return;

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

<<<<<<< HEAD

//Color palette
palette.addEventListener('click', (e) => {
  const boxShadow = 'inset 0 0 6px #616161';
  brushColor = e.target.style.backgroundColor;

=======
document.getElementById('palette').addEventListener('click', (e) => {
  
  const boxShadow = 'inset 0 0 6px #616161';
  brushColor = e.target.style.backgroundColor;
  prevBrushColor = brushColor;
  
>>>>>>> upstream/main
  for (var child of document.getElementById('palette').children) {
    child.style.boxShadow = null;
  }

  if (e.target.className === 'palette-color') {
    e.target.style.boxShadow = boxShadow;
  }
<<<<<<< HEAD
});


//Download Image
downloadLinkPNG.addEventListener("click", (e) => {          //PNG
  e.preventDefault();
  
  var img = canvas.toDataURL("image/png");
  download(img);
});
downloadLinkJPEG.addEventListener("click", (e) => {        //JPEG
  e.preventDefault();
  var img = canvas.toDataURL("image/jpeg");
  download(img);
});

var download = function (img) {
  var link = document.createElement("a");
  link.download = "pixelvibe";
  link.href = img;
  link.click();
};
=======

  ersr.classList.remove("selected");
  brsh.classList.add("selected");
});
>>>>>>> upstream/main


//Dropdown Menu
function showDropdownMenu(list) {
  list.classList.toggle("change");
  document.getElementById("myDropdown").classList.toggle("show");
}

//Clear Canvas
clear.addEventListener("click", ()=>{
  context.clearRect(0,0,canvas.width,canvas.height)
})
<<<<<<< HEAD
=======

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
>>>>>>> upstream/main
