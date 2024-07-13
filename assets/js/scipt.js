const nav = document.getElementById("nav");
const menuButton = document.getElementById("menu-button");

nav.addEventListener("click", () => {
	nav.classList.add("open");
	menuButton.classList.add("open");
});

menuButton.addEventListener("click", () => {
	nav.classList.toggle("open");
	menuButton.classList.toggle("open");
});
