const nav = document.getElementById("nav");
const menuButton = document.getElementById("menu-button");

menuButton.addEventListener("click", () => {
	nav.classList.toggle("open");
	menuButton.classList.toggle("open");
});
