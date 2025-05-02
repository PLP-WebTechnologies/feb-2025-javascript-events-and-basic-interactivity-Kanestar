// Wait for the DOM to be fully loaded before running our JavaScript
document.addEventListener('DOMContentLoaded', function() {
    
    // 1. Click Event Example
    const clickButton = document.getElementById('click-me');
    const clickMessage = document.getElementById('click-message');
    
    clickButton.addEventListener('click', function() {
        clickMessage.textContent = "You clicked the button! Great job!";
        clickMessage.style.color = "#2ecc71";
        
        // Change button color temporarily
        clickButton.style.backgroundColor = "#e74c3c";
        setTimeout(function() {
            clickButton.style.backgroundColor = "#3498db";
        }, 500);
    });
    
    // 2. Hover Event Example
    const hoverBox = document.getElementById('hover-box');
    
    hoverBox.addEventListener('mouseenter', function() {
        hoverBox.textContent = "You're hovering over me!";
    });
    
    hoverBox.addEventListener('mouseleave', function() {
        hoverBox.textContent = "Hover over me again!";
    });
    
    // 3. Keypress Event Example
    const keypressMessage = document.getElementById('keypress-message');
    
    document.addEventListener('keydown', function(event) {
        keypressMessage.textContent = `You pressed: ${event.key}`;
        keypressMessage.style.color = "#3498db";
        
        // Clear the message after 2 seconds
        setTimeout(function() {
            keypressMessage.textContent = "";
        }, 2000);
    });
    
    // 4. Simple Image Gallery
    const galleryImage = document.getElementById('gallery-image');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    
    const images = [
        "https://via.placeholder.com/400x200?text=Image+1",
        "https://via.placeholder.com/400x200?text=Image+2",
        "https://via.placeholder.com/400x200?text=Image+3"
    ];
    
    let currentImageIndex = 0;
    
    function showImage(index) {
        galleryImage.src = images[index];
    }
    
    prevBtn.addEventListener('click', function() {
        currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
        showImage(currentImageIndex);
    });
    
    nextBtn.addEventListener('click', function() {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        showImage(currentImageIndex);
    });
    
    // 5. Form Validation
    const simpleForm = document.getElementById('simple-form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const nameError = document.getElementById('name-error');
    const emailError = document.getElementById('email-error');
    
    // Validate name field
    nameInput.addEventListener('input', function() {
        if (nameInput.value.length < 2) {
            nameError.textContent = "Name must be at least 2 characters";
        } else {
            nameError.textContent = "";
        }
    });
    
    // Validate email field
    emailInput.addEventListener('input', function() {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(emailInput.value)) {
            emailError.textContent = "Please enter a valid email";
        } else {
            emailError.textContent = "";
        }
    });
    
    // Form submission
    simpleForm.addEventListener('submit', function(event) {
        let isValid = true;
        
        // Check name
        if (nameInput.value.length < 2) {
            nameError.textContent = "Name is required";
            isValid = false;
        }
        
        // Check email
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(emailInput.value)) {
            emailError.textContent = "Valid email is required";
            isValid = false;
        }
        
        if (!isValid) {
            event.preventDefault(); // Prevent form submission
            alert("Please fix the errors in the form");
        } else {
            alert("Form submitted successfully!");
            // In a real app, you would submit the form to a server here
        }
    });
});