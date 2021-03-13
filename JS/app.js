//variable declarations
const table = document.getElementById("pixel_canvas");
let gridHeight, gridWidth;

//draw the grid when Submit is clicked or Enter/Return key is pressed
const sizePicker = document.querySelector("#sizePicker");
sizePicker.addEventListener("submit", function(e) {
    e.preventDefault();
    makeGrid();
});
// When you click on submit button it shows grid.
/**
 * @description Draws the grid based on the user input for grid height and width
 * @param void
 * @return void
 */
function makeGrid() {

  //clear the existing table rows
  table.innerHTML = '';

  //get the user input values for grid height and grid width
  gridHeight = document.getElementById("input-height").value;
  gridWidth = document.getElementById("input-width").value;

  //draw table grid and add event listener for each cell
  for (let i = 0; i < gridHeight; i++) {
    let row = table.insertRow(i);
    for (let j = 0; j < gridWidth; j++) {
      let cell = row.insertCell(j);

   
    }
  }
}