// Ensure the DOM is fully loaded before executing any script
document.addEventListener('DOMContentLoaded', function() {
    // Native JavaScript version

    // Select the color mode elements
    var colorModeElements = document.querySelectorAll('.color-mode');

    // Add click event listener to each color mode element
    colorModeElements.forEach(function(colorModeElement) {
        colorModeElement.addEventListener('click', function() {
            // Toggle the 'active' class on the color mode icon
            var colorModeIcons = document.querySelectorAll('.color-mode-icon');
            colorModeIcons.forEach(function(icon) {
                icon.classList.toggle('active');
            });

            // Toggle the 'dark-mode' class on the body element
            document.body.classList.toggle('dark-mode');
        });
    });

// HEADER - Headroom.js (hide/show nav on scoll)

    // Sélectionner l'élément navbar
    var navbar = document.querySelector('.navbar');
            
    // Créer une instance de Headroom.js
    var headroom = new Headroom(navbar);
    
    // Initialiser Headroom.js
    headroom.init();
  
});//End of the DOM