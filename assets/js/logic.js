// Get the element to be used for the toggle switch
const toggle = document.getElementById('toggle');
const body = document.body;


// Add an event listener to the toggle switch
toggle.addEventListener('change', function() {
    if (toggle.checked) {
        body.classList.add('dark-mode');                                    // If checked, add the 'dark-mode' class to the body element
        document.querySelector('.toggle-label').textContent = '🌙';         // Change the text content of the toggle label to a moon emoji
    } else {
        body.classList.remove('dark-mode');                                 // If not checked, remove the 'dark-mode' class from the body element
        document.querySelector('.toggle-label').textContent = '☀️';          // Change the text content of the toggle label to a sun emoji
    }
});
