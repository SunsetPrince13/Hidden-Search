var button = document.querySelector(".search_reveal");
var input = document.querySelector(".search_field");

button.addEventListener("click", () => {
    input.classList.toggle("active");
});