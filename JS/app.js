/**
 * @description Hides landing page components and makes canvas visible
 */
document.getElementById("submit").addEventListener("click", (e) => {
    e.preventDefault();

    const sizePicker = document.getElementById("size-picker")
    sizePicker.classList.toggle("scale-up-center");
    sizePicker.classList.toggle("scale-down-center");

    const TIMEOUT_DURATION = 100;  // milliSeconds
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

    canvas.height = 10 * height;
    canvas.width = 10 * width;

    w = +canvas.width;
    h = +canvas.height;

}, false);

/**
 * @description Following few lines are setting up the canvas
 */
const canvas = document.querySelector("#canvas");
const context = canvas.getContext("2d");

// width and height needs to accept input values from
const width = 16;
const height = 16;

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

})

function draw(e) {
    // Mouse is not pressed
    if (!isDrawing) return;

    var rect = canvas.getBoundingClientRect();
    var x = e.clientX - rect.left;
    var y = e.clientY - rect.top;
    x = Math.floor(width * x / canvas.clientWidth);
    y = Math.floor(height * y / canvas.clientHeight);

    if (x >= 0 && x < width && y >= 0 && y < height) {
        context.fillStyle = "black";

        context.fillRect(
            Math.floor(x * (w / width)),
            Math.floor(y * (h / height)),
            Math.floor(canvas.width / width),
            Math.floor(canvas.height / height)
        )
    }
}
