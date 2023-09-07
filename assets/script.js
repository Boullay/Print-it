
const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const arrow_left = document.querySelector(".arrow_left");
const arrow_right = document.querySelector(".arrow_right");
const divbanner = document.querySelector("#banner");
const bannerimg = document.querySelector(".banner-img");
const textbanner = document.querySelector(".textbanner");
const dots = document.getElementsByClassName("dot");
let i = 0 ;

arrow_right.addEventListener("click", function() {
	if(i < slides.length - 1){
		i++;
		carousel();
	}
	else {
		i = 0;
		carousel();
	}

})

arrow_left.addEventListener("click", function() {
	if(i > 0){
		i--;
		carousel();
	} else {
		i = slides.length -1;
		carousel ();
	}
});

for (let x = 0; x < dots.length; x++) {
	dots[x].addEventListener ("click", function() {
		i = x;
		carousel();
	})
}

setInterval (() => {
	if (i=== slides.length - 1) {
		i = 0
	}else {
		i++;
	}

	carousel();
}, 7000)


function carousel () {
	bannerimg.src = "./assets/images/slideshow/" + slides[i].image;
	textbanner.innerHTML = slides[i].tagLine;
	for (let j = 0; j < dots.length; j++){
		dots[j].className = 'dot'
	}
	dots[i].className = 'dot dot_selected'
}

