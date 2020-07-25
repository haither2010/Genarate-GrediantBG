var body = document.querySelector('body');
var color1 = document.getElementById('colorInput1');
var color2 = document.getElementById('colorInput2');
var h3 = document.querySelector('h3');

color1.addEventListener('input', function() {

    body.style.background = 'linear-gradient(to right, ' + color1.value + ', ' + color2.value + ')';
    h3.textContent = '( Changed Colour code: ' + color1.value + ', ' + color2.value + ')';
});

color2.addEventListener('input', function() {

    body.style.background = 'linear-gradient(to right, ' + color1.value + ', ' + color2.value + ')';
    h3.textContent = '( Changed Colour code: ' + color1.value + ', ' + color2.value + ')';
});


