
let image = document.getElementById('image');
let turnOn = document.getElementById('turn-on');
let turnOff = document.getElementById('turn-off');

turnOn.addEventListener('click', () =>{
    // to change image src using DOM
    image.src = "bulb-on.png";
})

turnOff.addEventListener('click', () =>{
    image.src = "bulb-off.png";
})