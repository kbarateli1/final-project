//image Slider

let slideIndex = 0;
runSlides();

function runSlides() {
  let i;
  let slides = document.getElementsByClassName("profile-photo");
  let dots = document.getElementsByClassName("point");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(runSlides, 5000);
}



//charts


const skillsSection = document.querySelector(".mycharts");
const progressBars = document.querySelectorAll(".progress-percent");
function showProgress() {
	progressBars.forEach(progressBars => {
		const value = progressBar.dataset.progress;
		progressBars.style.opacity = 1;
		progressBars.style.width = `${value}%`;
	});
}
function hideProgress() {
	progressBars.forEach(p => {
		p.style.opacity = 0;
		p.style.width = 0;
	});
}
window.addEventListener("scroll", () => {
	const sectionPos = skillsSection.getBoundingClientRect().top;
	const screenPos = window.innerHeight / 2;
	if (sectionPos < screenPos) {
		showProgress();
	} else {
		hideProgress();
	}
})





//

let SlideIndex = 0;
showSlides(SlideIndex);

function plusSlides(n) {
	showSlides(SlideIndex += n);
}
function currentSlider(n) {
	showSlides(SlideIndex = n);
}
function showSlides(n) {
	let i;
	let x = document.getElementsByClassName("personRecommendations");
	let y = document.getElementsByClassName("slidepoints");
	if (n > x.length) { SlideIndex = 1 }
	if (n < 1) { SlideIndex = x.length }
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}

	x[SlideIndex - 1].style.display = "flex";
}








