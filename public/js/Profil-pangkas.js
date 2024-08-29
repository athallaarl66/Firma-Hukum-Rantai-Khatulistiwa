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
