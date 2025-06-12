function play() {
	var num = Math.floor(Math.random() * 4) + 1;
	var audio = new Audio('media/' + num.toString() + '.ogg');
	audio.volume = 0.1;
	audio.play();
}

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
	acc[i].addEventListener("click", function() {

		for (var j = 0; j < acc.length; j++) { // Закрытие всех вкладок кроме выбранной (приводит к прыжкам экрана)
			if (acc[j] !== this) { 
				acc[j].classList.remove("active");
				acc[j].nextElementSibling.classList.remove("active");
			}
		}

		this.classList.toggle("active");
		this.nextElementSibling.classList.toggle("active");
	});
}