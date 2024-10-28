document.addEventListener('DOMContentLoaded', function() {
    // Image gallery modal functionality
    const galleryImages = document.querySelectorAll('.gallery');
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modalImg');

    galleryImages.forEach(image => {
        image.addEventListener('click', function() {
            modal.style.display = 'flex';
            modalImg.src = this.src;
        });
    });

    modal.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    // Form validation
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', function(event) {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (!name || !email || !message) {
            alert('Please fill in all fields.');
            event.preventDefault();
        }
    });
});
