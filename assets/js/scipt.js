const nav = document.getElementById("nav");
const menuButton = document.getElementById("menu-button");

nav.addEventListener("click", () => {
	openNav();
});

menuButton.addEventListener("click", () => {
	if (nav.classList.contains("open")) {
		closeNav();
	} else {
		openNav();
	}
});


const openNav = () => {
	nav.classList.add("open");
	menuButton.classList.add("open");

	setTimeout(() => {
		nav.classList.add("isOpen");
	}, 300);
}

const closeNav = () => {
	nav.classList.remove("isOpen");

	setTimeout(() => {
		nav.classList.remove("open");
		menuButton.classList.remove("open");
	}, 300);
}