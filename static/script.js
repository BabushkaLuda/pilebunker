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
		this.classList.toggle("active");
		var panel = this.nextElementSibling;
		if (panel.style.display === "block") {
			panel.style.display = "none";
		}
		else {
			panel.style.display = "block";
		}
	});
}