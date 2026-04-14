// scripts.js

document.addEventListener('DOMContentLoaded', function() {
    // Mobile navigation toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });

    // Product image slider functionality
    const sliders = document.querySelectorAll('.product-slider');
    sliders.forEach(slider => {
        const images = slider.querySelectorAll('img');
        let currentIndex = 0;

        function showImage(index) {
            images.forEach((img, i) => {
                img.style.display = i === index ? 'block' : 'none';
            });
        }

        showImage(currentIndex);

        const nextButton = slider.querySelector('.next');
        const prevButton = slider.querySelector('.prev');

        nextButton.addEventListener('click', function() {
            currentIndex = (currentIndex + 1) % images.length;
            showImage(currentIndex);
        });

        prevButton.addEventListener('click', function() {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            showImage(currentIndex);
        });
    });

    // Form validation for newsletter sign-up
    const newsletterForm = document.querySelector('.newsletter-form');
    newsletterForm.addEventListener('submit', function(event) {
        const emailInput = newsletterForm.querySelector('input[type="email"]');
        if (!emailInput.value) {
            event.preventDefault();
            alert('Please enter a valid email address.');
        }
    });
});