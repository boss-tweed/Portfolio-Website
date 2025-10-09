//Functions that open and close the form
function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

//Displays the first image in slideshow
var slideIndex = 1;
showSlides(slideIndex);

//Function changes the slide when left or right arrows are pressed
function plusSlides(n) {
    showSlides(slideIndex += n);
}

//Function changes slide when dots are clicked
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var slides = document.getElementsByClassName("mySlides"); //Takes all elements w/ the class name mySlides and stores them in a var array
    var dots = document.getElementsByClassName("dot"); //Takes all elements w/ the class name dot and stores them in a var array
    if (n > slides.length) {slideIndex = 1}; //If n is greater than the length of the array "slides", the index is set to 1
    if (n < 1) {slideIndex = slides.length}; //If n is less than 1,  the index is to the length of the array "slides"
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; //This for loop takes each item in the array and sets display to none
    }
    for (i = 0; i<dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", ""); //This loop takes each item in the array and removes "active" which removes the active styling
    }
    slides[slideIndex - 1].style.display = "block"; //Displays the image in the slideshow
    dots[slideIndex - 1].className += " active"; //Adds the active sthyling to the the dot associated w/ the image
}

//Will create close the contact form when clicked off of it
document.addEventListener("click", function(event){
    //If clicks happens on cancel button or anywhere else other than the form it perform the closeForm() function
    if (event.target.matches(".cancel") || !event.target.closest(".form-popup") && !event.target.closest(".pop_up_button") && !event.target.closest(".contact")){
        closeForm()
    }
}, false)