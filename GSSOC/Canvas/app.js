document.getElementById("reset").addEventListener("click",function(){
  location.reload();
});


document.getElementById("submit").addEventListener(
    "click",
    (e) => {
      e.preventDefault();
      var width = parseInt(document.getElementById("input-width").value);
      var height = parseInt(document.getElementById("input-height").value);
      height = 20 * height;
      width = 20 * width;

       localStorage.setItem("canvas_width",width);
       localStorage.setItem("canvas_height",height);

       window.document.location="canvas.html";
    }
)