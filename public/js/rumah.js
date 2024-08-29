let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("demo");
    let captionText = document.getElementById("caption");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    captionText.innerHTML = dots[slideIndex - 1].alt;
}

const nextButton = document.querySelector(".next-button");
const consultationModal = document.getElementById("consultation-modal");
const closeButton = document.querySelector(".close");
const okButton = document.querySelector(".ok-button");

nextButton.addEventListener("click", () => {
  consultationModal.style.display = "block";
});

closeButton.addEventListener("click", () => {
  consultationModal.style.display = "none";
});

okButton.addEventListener("click", () => {
  // Handle OK button click logic here, e.g., submit form data
  console.log("OK button clicked");
  consultationModal.style.display = "none";
});

// Function to show the modal
function showModal() {
  consultationModal.style.display = "block";
}

// Function to hide the modal
function hideModal() {
  consultationModal.style.display = "none";
}

// Add event listeners to the buttons
nextButton.addEventListener("click", showModal);
closeButton.addEventListener("click", hideModal);
okButton.addEventListener("click", hideModal);

// Add the main class to the modal
consultationModal.classList.add("main");
