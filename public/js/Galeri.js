document.addEventListener('DOMContentLoaded', () => {
    const gallery = document.getElementById('gallery');
    const galleryItems = 8; // Number of gallery items

    for (let i = 1; i <= galleryItems; i++) {
        if (i % 4 === 1) {
            var row = document.createElement('div');
            row.className = 'gallery-row';
            gallery.appendChild(row);
        }

        const item = document.createElement('div');
        item.className = `gallery-item${i}`;
        row.appendChild(item);
    }

    
});

const header = document.querySelector('header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});


