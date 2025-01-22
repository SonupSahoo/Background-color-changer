let button = document.querySelectorAll(".box");
let body = document.querySelector("body");

button.forEach(function (box) {
  box.addEventListener("click", function (color) {
    if (color.target.id === "b1") {
      body.style.backgroundColor = "red";
    }
    if (color.target.id === "b2") {
      body.style.backgroundColor = "green";
    }
    if (color.target.id === "b3") {
      body.style.backgroundColor = "yellow";
    }
    if (color.target.id === "b4") {
      body.style.backgroundColor = "blue";
    }
    if (color.target.id === "b5") {
      body.style.backgroundColor = "pink";
    }
  });
});
