const carrouselControl = document.getElementsByClassName('cc');
const carrouselControlArrow = document.getElementsByClassName('cc-arrow');
const carrouselItems = document.getElementsByClassName('cc-item');

let carrouselActive = 0;
const carrouselData = [
	{
		name: 'Séance Enfant',
		img: 'childs',
		description: 'Bienvenue à notre séance de sophorlogie pour enfants! Découvrons ensemble des techniques ludiques pour se détendre, mieux se concentrer et s\'épanouir.'
	},
	{
		name: 'Séance Adolescent',
		img: 'teenager',
		description: 'Bienvenue à notre séance de sophorlogie pour enfants! Découvrons ensemble des techniques ludiques pour se détendre, mieux se concentrer et s\'épanouir.'
	},
	{
		name: 'Séance Adulte',
		img: 'adults',
		description: 'Bienvenue à notre séance de sophorlogie pour enfants! Découvrons ensemble des techniques ludiques pour se détendre, mieux se concentrer et s\'épanouir.'
	},
	{
		name: 'Séance de Groupe',
		img: 'group',
		description: 'Bienvenue à notre séance de sophorlogie pour enfants! Découvrons ensemble des techniques ludiques pour se détendre, mieux se concentrer et s\'épanouir.'
	},
];

const setCarouselActive = i => {
	if (carrouselActive == i) return;
	carrouselActive = i;

	carrouselItems.forEach(el => {
		el.classList.add('transparent');
	});

	setTimeout(() => {
		carrouselItems[0].textContent = carrouselData[carrouselActive].name;
		carrouselItems[1].textContent = carrouselData[carrouselActive].description;
		carrouselItems[3].src = `assets/img/shop/${carrouselData[carrouselActive].img}.webp`;

		setTimeout(() => {
			carrouselItems.forEach(el => {
				el.classList.remove('transparent');
			});
		}, 10);
	}, 400);

	carrouselControl.forEach(el => {
		el.classList.remove('active');
	});
	carrouselControl[carrouselActive].classList.add('active');
}

for (let i = 0; i < carrouselControl.length; i++) {
	carrouselControl[i].addEventListener('click', () => setCarouselActive(i));
}

for (let i = 0; i < carrouselControlArrow.length; i++) {
	carrouselControlArrow[i].addEventListener('click', () => {
		if (i == 0) {
			if (carrouselActive == 0) {
				setCarouselActive(3);
			} else {
				setCarouselActive(carrouselActive - 1);
			}
		} else {
			if (carrouselActive == 3) {
				setCarouselActive(0);
			} else {
				setCarouselActive(carrouselActive + 1);
			}
		}
	});
}