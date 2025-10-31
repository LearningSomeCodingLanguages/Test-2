document.addEventListener('DOMContentLoaded', function() {
    const firstbutton = document.getElementById('a');
    const secondbutton = document.getElementById('b');

    firstButton.addEventListener('click', function() {
        firstbutton.style.display = 'none';
        secondButton.style.display = 'block';
    });
});
