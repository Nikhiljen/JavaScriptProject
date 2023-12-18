const button = document.querySelectorAll(".square_button");
const body = document.querySelector("body");
button.forEach(function (button) {
  button.addEventListener("click", function (event) {
    if (event.target.id === "grey") {
      body.style.backgroundColor = event.target.id;
    }
    if (event.target.id === "white") {
      body.style.backgroundColor = event.target.id;
    }
    if (event.target.id === "blue") {
      body.style.backgroundColor = event.target.id;
    }
    if (event.target.id === "yellow") {
      body.style.backgroundColor = event.target.id;
    }
  });
});
