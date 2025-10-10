const nameButton = document.getElementById('chaylon');

const image = document.getElementById('portrait-image');

let toggle = false;

nameButton.addEventListener('click', function(){
    if (toggle === false) {
        image.src = 'images/chaylon-crayon.png';
        toggle = true
    } else {
        image.src = 'images/chaylon.png';
        toggle = false
    }
    
    
});