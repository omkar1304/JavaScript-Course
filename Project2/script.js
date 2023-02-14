let setup = document.getElementById('setup');
let punchline = document.getElementById('punchline');
let nextButton = document.getElementById('next-button');


// Promises uses .then() and .catch method. basically it promise that either you will get result or error
//.then() will get success respones i.e. data 
//.catch will catch any error if we get any 

let generateJoke = () => {

    // setting header if in case getting HTML data as well so need to get JSON data from it
    const setHeader = {
        headers : {
            Accept : "application/json"
        }
    }

    // this how we can get the API using fetch method
    fetch('https://official-joke-api.appspot.com/random_joke', setHeader)
    .then((response) => {
        // fetch method returns HTML data so to convert HTML data into json we use -> json() method
        return response.json();
    })
    .then((data) => {
        // passing data to respective field in box
        setup.innerHTML = data.setup;
        punchline.innerHTML = data.punchline;
    })
    .catch((error) => {
        // catching error if any
        console.log(error);
    })
}

// if we click on this button it will generate new joke(it will call API again)
nextButton.addEventListener('click', generateJoke);
// calling for onetime as to show joke once page is up 
generateJoke();