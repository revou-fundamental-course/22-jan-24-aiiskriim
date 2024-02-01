const slides = document.querySelectorAll(".slides img");
let slideIndex = 0;
let intervalid = null;

//initializeSlider();
document.addEventListener("DOMContentLoaded", initializeSlider);

function initializeSlider(){
    if(slides.length > 0){
    slides[slideIndex].classList.add("displaySlide");
    intervalid = setInterval(nextSlide, 5000);
    console.log(intervalid);
    }
}
function showSlide(index){

    if(index >= slides.length){
        slideIndex = 0;
    }
    else if(index < 0){
        slideIndex = slides.length - 1;
    }

    slides.forEach(slide => {
        slide.classList.remove("displaySlide");
    });
    slides[slideIndex].classList.add("displaySlide");
}
function prevslide(){
    clearInterval(intervalid);
    slideIndex--;
    showSlide(slideIndex);
}
function nextslide(){
    slideIndex++;
    showSlide(slideIndex);
}

const inputName = document.getElementById('input-name');
const inputEmail = document.getElementById('input-email');

const button = document.getElementById('send');

button.addEventListener('click', function() {
    let name = inputName.value;
    let email = inputEmail.value;

    if (!name) {
        const nameError = document.getElementById('name-error');
        nameError.classList.add('error-message');

        nameError.innerText = "Nama harus diisi!"
    }

    if (!email) {
        const emailError = document.getElementById('email-error');
        emailError.classList.add('error-message');

        emailError.innerText = "Email harus diisi!"
    }
})


