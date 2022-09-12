// let burgerBtn = document.querySelector(".burger");
let navLinks = document.querySelector("nav ul");
let navRight = document.querySelector(".nav-right");

function openNav() {
	navLinks.classList.toggle("show-nav");
	navRight.classList.toggle("show-nav");
}
