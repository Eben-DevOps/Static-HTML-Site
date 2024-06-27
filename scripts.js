// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Select all elements with the class 'btn' (assuming your buttons have this class)
    const buttons = document.querySelectorAll('.btn');

    // Loop through each button to add event listeners
    buttons.forEach(button => {
        // Add event listener for mouseenter (hover in)
        button.addEventListener('mouseenter', function() {
            // Change background color and text color on hover
            button.style.backgroundColor = '#005f69';
            button.style.color = '#fff';
            button.style.transition = 'background-color 0.3s ease, color 0.3s ease'; // Smooth transition
        });

        // Add event listener for mouseleave (hover out)
        button.addEventListener('mouseleave', function() {
            // Restore original background color and text color
            button.style.backgroundColor = '#007B8A';
            button.style.color = '#fff';
        });
    });
});
