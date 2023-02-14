// it will return DOM of every myIcon class
let counters = document.querySelectorAll('.myIcon');

counters.forEach((counter) => {

    // settingg up initial value
    counter.innerHTML = 0;

    let updateCounter = () => {

        // fetching start value and converting it into number from string using Number constructor
        let startValue = Number(counter.innerHTML);
        // by using DOM we can fetch attribute value using getAttribute method and convert it into Number
        let endValue = Number(counter.getAttribute('data-target'));
        // to inc start value by some incrementor number
        let inc = endValue / 100;

        // if start value is less than end value then update start value with inc and call again update counter function
        if(startValue < endValue){
            counter.innerHTML = `${startValue + inc}`
            setTimeout(updateCounter, 5); // this is asyc method it will run in background and will allow to process next DOM simultaneously
        }
        // else put end value in counter DOM
        else{
            counter.innerHTML = endValue;
        }
    }

    // to call intialliy when page loads
    updateCounter();
})


