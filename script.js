document.addEventListener('DOMContentLoaded', function() {
document.getElementById('a').addEventListener('click', function() {
    this.style.display = 'none'; // Hide button1
    document.getElementById('button2').style.display = 'block'; // Show button2
});

document.getElementById('b').addEventListener('click', function() {
    this.style.display = 'none'; // Hide button2
    document.getElementById('button3').style.display = 'block'; // Show button3
});

document.getElementById('c').addEventListener('click', function() {
    this.style.display = 'none'; // Hide button3
    document.getElementById('button4').style.display = 'block'; // Show button4
});

document.getElementById('d').addEventListener('click', function() {
    this.style.display = 'none'; // Hide button4
    document.getElementById('button5').style.display = 'block'; // Show button5
});

document.getElementById('e').addEventListener('click', function() {
    this.style.display = 'none'; // Hide button5
    document.getElementById('f').style.display = 'block'; // Show button6
});
