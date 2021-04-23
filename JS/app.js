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
    context.fillStyle = "black";

    context.fillRect(
      Math.floor(x * (w / width)),
      Math.floor(y * (h / height)),
      Math.floor(canvas.width / width),
      Math.floor(canvas.height / height)
    );
  }
}

document.getElementById("submit").onclick = () => {
  var width = document.getElementById("input-width").value;
  var height = document.getElementById("input-height").value;
};

document.getElementsByClassName("settings")[0].addEventListener('click',()=>{
     let styleclass=document.getElementsByClassName("StyleSwitcher")[0].classList;

     if(styleclass.contains("unhideStylenav"))
     {
       styleclass.remove("unhideStylenav");
     }
     else{
       styleclass.add("unhideStylenav");
     }

})

document.getElementById("circlestyle1").addEventListener("click", () => {
    
     document.getElementsByClassName("section-heading")[0].style.color="red";
     document.getElementsByClassName("form-group wagnasty-webfont")[0].style.color="red";
     document.getElementById("wagnasty").style.color="red";
    
});
document.getElementById("circlestyle2").addEventListener("click", () => {
  
     document.getElementsByClassName("section-heading")[0].style.color =
       "rgb(32, 165, 241)";
     document.getElementsByClassName(
       "form-group wagnasty-webfont"
     )[0].style.color = "rgb(32, 165, 241)";
     document.getElementById("wagnasty").style.color = "rgb(32, 165, 241)";

});
document.getElementById("circlestyle3").addEventListener("click", () => {
  document.getElementsByClassName("section-heading")[0].style.color =
    " rgb(255, 100, 10)";
  document.getElementsByClassName(
    "form-group wagnasty-webfont"
  )[0].style.color = " rgb(255, 100, 10)";
  document.getElementById("wagnasty").style.color = " rgb(255, 100, 10)";
});
document.getElementById("circlestyle4").addEventListener("click", () => {

   document.getElementsByClassName("section-heading")[0].style.color =
     "rgb(255, 251, 13)";
   document.getElementsByClassName(
     "form-group wagnasty-webfont"
   )[0].style.color = "rgb(255, 251, 13)";
   document.getElementById("wagnasty").style.color = "rgb(255, 251, 13)";

});
document.getElementById("circlestyle5").addEventListener("click", () => {
  
   document.getElementsByClassName("section-heading")[0].style.color =
     "rgb(5, 255, 5)";
   document.getElementsByClassName(
     "form-group wagnasty-webfont"
   )[0].style.color = "rgb(5, 255, 5)";
   document.getElementById("wagnasty").style.color = "rgb(5, 255, 5)";
});

document.getElementById("dar").addEventListener("click",()=>{
      document.getElementsByTagName("body")[0].style.backgroundColor= "#0d1117";
});

document.getElementById("lid").addEventListener("click", () => {
  document.getElementsByTagName("body")[0].style.backgroundColor = "#fdb1bb";
});