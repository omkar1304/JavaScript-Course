// to add note on page
let addNote = document.getElementById('addNote');

// to store notes in Local storage
let storeNotes = () => {

    // we are storing all notes in textarea so we can get all in form array
    let notes = document.querySelectorAll('textarea');
    let store = [];

    // putting all values from notes into store array
    notes.forEach((note) => {
        return store.push(note.value); // note.value ? as its pasing wholw html tag so getting specif value from it
    })

    // using localStorage() we can store data as key:value pair -> it accepts string as key and value
    localStorage.setItem('notes', JSON.stringify(store)); // converting data to string using JSON.stringify()
}

// to generate notes 
let generateNote = (text = '') => {

    // first we have to create div with 'note-box' class

    // to create HTML tags using JS 
    let note = document.createElement('div');
    // by using classList.add('className') we can add class to that HTML tag
    note.classList.add('note-box');

    // adding HTML data to above created div
    let htmlData = `
                    <div class="button-container">
                    <button id="edit">Edit</button>
                    <button id="delete">Delete</button>
                    </div>
                    <br><br><br><br>
                    <div class="main ${text ? "" : "hidden"}"></div>
                    <textarea class="${text ? "hidden" : ""}"></textarea>
                    `    
    note.insertAdjacentHTML('afterbegin', htmlData);
    

    // getting DOM of every HTML tag from htmlData
    // here instead of document we using note as we havent attach above div to document so note is parent of above htmlData
    let editButton = note.querySelector('#edit');
    let deleteButton = note.querySelector('#delete');
    let mainDiv = note.querySelector('.main');
    let textArea = note.querySelector('textarea');

    // if there is any text then pass it to main and textarea tag
    mainDiv.innerHTML = text;
    textArea.value = text;

    // if anyone click on delete then note will get deleted
    deleteButton.addEventListener('click', () => {
        note.remove(); // using remove button we can delete created note
        storeNotes(); // and also we want to delete it from Local storage so calling that fucntion so data will get updated
    });

    // if anyone click on edit button then either main div or textarea will get actived
    // if there is no text then we have to add some text so textarea will get actived using toggle if its hidden
    // if there is text then we have to just display it so main div will get activetd using togg;e if its hidden
    editButton.addEventListener('click', () => {
        // toggle -> active if not activeted already and vice versa
        mainDiv.classList.toggle('hidden');
        textArea.classList.toggle('hidden');
    });

    // whenever we perform any change(entered any text) then value will get added to main div
    textArea.addEventListener('change', (event) => {
        let value = event.target.value;
        mainDiv.innerHTML = value;
        storeNotes();
    });

    // at the end we will add note div to document
    document.body.appendChild(note);

}

// passing stored notes to the browser to display ->

// converting json value to string so we can pass that note as text to generateNote.
const notes = JSON.parse(localStorage.getItem('notes'));
if(notes){
    notes.forEach((note) => generateNote(note));
}

// to add note box 
addNote.addEventListener('click', () => generateNote());