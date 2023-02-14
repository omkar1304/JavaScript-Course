let setup = document.getElementById('setup');
let punchline = document.getElementById('punchline');
let nextButton = document.getElementById('next-button');

// to avoid use promises we can use async await feature ->
// basically await hold the code to execute until its line done
// and await only works with async function


// async - await with normal function ->
// async function generateJoke(){
//     let response = await fetch('https://official-joke-api.appspot.com/random_joke');
//     let data = await response.json();
//     console.log(data.setup);
// }

// async - await with arrow function ->
let generateJoke = async () => {

    // this how we can get the API using fetch method
    // add await before that so code will stop there until we get the data
    let response = await fetch('https://official-joke-api.appspot.com/random_joke');
    // fetch method returns HTML data so to convert HTML data into json we use -> json() method
    let data = await response.json();
    
    // passing data to respective field in box
    setup.innerHTML = data.setup;
    punchline.innerHTML = data.punchline;

}

// if we click on this button it will generate new joke(it will call API again)
nextButton.addEventListener('click', generateJoke);
// calling for onetime as to show joke once page is up 
generateJoke();