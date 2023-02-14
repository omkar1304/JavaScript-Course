let tempLoad = () => {
    
    let temp = document.getElementById('temp');
    temp.innerHTML = '&#xf2cb';
    temp.style.color = 'green'; // to work with css using DOM

    setTimeout(() => {
        temp.innerHTML = '&#xf2ca';
    }, 1000)

    setTimeout(() => {
        temp.innerHTML = '&#xf2c9';
    }, 2000)

    setTimeout(() => {
        temp.innerHTML = '&#xf2c8';
        temp.style.color = 'red';
    }, 3000)

    setTimeout(() => {
        temp.innerHTML = '&#xf2c7';
    }, 4000)


}

setInterval(() => {
    tempLoad();
}, 5000);

tempLoad();