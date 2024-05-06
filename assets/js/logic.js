const toggle = document.getElementById('toggle');
const body = document.body;

toggle.addEventListener('change', function() {
    if (toggle.checked) {
        body.classList.add('dark-mode');
        document.querySelector('.toggle-label').textContent = '🌙';
    } else {
        body.classList.remove('dark-mode');
        document.querySelector('.toggle-label').textContent = '☀️';
    }
});
