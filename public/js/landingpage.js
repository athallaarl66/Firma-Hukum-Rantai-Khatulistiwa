const header = document.querySelector('header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Get the popup
var popup = document.getElementById("consultationPopup");

// Get the buttons that open the popup
var btns = document.querySelectorAll(".option button");

// Get the <span> element that closes the popup
var span = document.getElementsByClassName("close")[0];

// Get the button inside the popup
var submitBtn = document.getElementById("submitConsultation");

// When the user clicks on the buttons, open the popup
btns.forEach(btn => {
    btn.onclick = function() {
        popup.style.display = "block";
    };
});

// When the user clicks on <span> (x), close the popup
span.onclick = function() {
    popup.style.display = "none";
};

// When the user clicks on the submit button inside the popup, open WhatsApp
submitBtn.onclick = function() {
    var phoneNumber = "6282187338002"; // Ganti dengan nomor WhatsApp Anda
    var message = "Halo, saya ingin memesan konsultasi hukum."; // Pesan otomatis
    var whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
    popup.style.display = "none";
};

// When the user clicks anywhere outside of the popup, close it
window.onclick = function(event) {
    if (event.target == popup) {
        popup.style.display = "none";
    }
};

// image for landing
document.addEventListener('DOMContentLoaded', function() {
  const slides = document.querySelectorAll('.slide');
  const navButtons = document.querySelectorAll('.nav-btnhero');
  let currentIndex = 0;
  let autoSlideInterval = setInterval(showNextSlide, 5000); // Change slide every 5 seconds

  function showNextSlide() {
      slides[currentIndex].classList.remove('active');
      navButtons[currentIndex].classList.remove('active');
      currentIndex = (currentIndex + 1) % slides.length;
      slides[currentIndex].classList.add('active');
      navButtons[currentIndex].classList.add('active');
      updateSlidePosition();
  }

  function updateSlidePosition() {
      const offset = -currentIndex * 100;
      document.querySelector('.slides').style.transform = `translateX(${offset}%)`;
  }

  navButtons.forEach((button, index) => {
      button.addEventListener('click', () => {
          clearInterval(autoSlideInterval); // Stop auto-slide when user clicks
          slides[currentIndex].classList.remove('active');
          navButtons[currentIndex].classList.remove('active');
          currentIndex = index;
          slides[currentIndex].classList.add('active');
          navButtons[currentIndex].classList.add('active');
          updateSlidePosition();
          autoSlideInterval = setInterval(showNextSlide, 5000); // Restart auto-slide
      });
  });
});

    // komentar
    document.addEventListener('DOMContentLoaded', function () {
        const prevBtn = document.querySelector('.nav-btn.prev');
        const nextBtn = document.querySelector('.nav-btn.next');
        const slider = document.querySelector('.comments-slider');
        const comments = document.querySelectorAll('.comment');
        
        let currentIndex = 0;
        
        function updateSliderPosition() {
            const offset = -currentIndex * 100;
            slider.style.transform = `translateX(${offset}%)`;
        
            comments.forEach((comment, index) => {
                comment.classList.remove('active');
                if (index === currentIndex) {
                    comment.classList.add('active');
                }
            });
        }
        
        nextBtn.addEventListener('click', () => {
            if (currentIndex < comments.length - 1) {
                currentIndex++;
                updateSliderPosition();
            }
        });
        
        prevBtn.addEventListener('click', () => {
            if (currentIndex > 0) {
                currentIndex--;
                updateSliderPosition();
            }
        });
        
});
