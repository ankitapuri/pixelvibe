// //variable declarations
// const table = document.getElementById("pixel_canvas");
// let gridHeight, gridWidth;
//
// //draw the grid when Submit is clicked or Enter/Return key is pressed
// const sizePicker = document.querySelector("#size-picker");
// sizePicker.addEventListener("submit", function(e) {
//     e.preventDefault();
//     makeGrid();
// });
//
// /**
//  * @description Draws the grid based on the user input for grid height and width
//  * @param void
//  * @return void
//  */
// function makeGrid() {
//   //clear the existing table rows
//   table.innerHTML = '';
//
//   //get the user input values for grid height and grid width
//   gridHeight = document.getElementById("input-height").value;
//   gridWidth = document.getElementById("input-width").value;
//
//   //draw table grid and add event listener for each cell
//   for (let i = 0; i < gridHeight; i++) {
//     let row = table.insertRow(i);
//     for (let j = 0; j < gridWidth; j++) {
//       let cell = row.insertCell(j);
//
//     }
//   }
// }

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
    }, TIMEOUT_DURATION)

}, false);
