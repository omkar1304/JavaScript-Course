let generateOutput = () => {
    
    // get the input and convert it into number using number constructor
    let input = document.getElementById('input').value;
    input = Number(input);

    // this is how we can get value from option in selected tag in HTML
    let selected = document.getElementById('select').value;
    
    // method to convert celsius to fahrenheit
    const CelToFah = (input) =>  Math.round((input * 9/5) + 32);
    // method to convert fahrenheit to celsius
    const FahToCel = (input) =>  Math.round((input - 32) * 5/9);

    // as per use selection we can return output
    if(selected == "Celsius"){
        let result = CelToFah(input);
        let output = document.getElementById('output');
        output.innerHTML = `${result} °F`;
    }
    else{
        let result = FahToCel(input);
        let output = document.getElementById('output');
        output.innerHTML = `${result} °C`;
    }
 }