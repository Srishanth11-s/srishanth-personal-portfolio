// Select all navigation links inside the navbar
document.querySelectorAll('nav ul li a').forEach(anchor => {

    // Add click event listener to each navigation link
    anchor.addEventListener('click', function(e) {

        // Prevent default anchor jump behavior
        e.preventDefault();

        // Scroll smoothly to the selected section
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});