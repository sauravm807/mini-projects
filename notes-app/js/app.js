"use Strict";
showNotes();

document.querySelector("#addBtn").addEventListener("click", function (e) {
    let addTxt = document.querySelector("#addTxt");
    let addTitle = document.querySelector("#addTitle");
    let notes = localStorage.getItem("notes");
    let notesObj;
    if (!notes) {
        //creating an empty array called notesObj if local storage has no key called notes
        notesObj = [];
    } else {
        //assiging the value of notes of local storage to notesObj 
        notesObj = JSON.parse(notes);
    }
    let myObj = {
        title: addTitle.value,
        text: addTxt.value
    };
    if ((addTxt.value.length) && (addTitle.value)) {
        notesObj.push(myObj);
    }
    localStorage.setItem("notes", JSON.stringify(notesObj)); //setting notes in the local storage
    addTxt.value = "";
    addTitle.value = "";
    showNotes();
});

// function to add and display notes
function showNotes() {
    let notes = localStorage.getItem("notes");
    let notesObj;
    if (!notes) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }

    let html = "";
    for (let i = 0; i < notesObj.length; i++) {
        html += ` <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">${i + 1, notesObj[i].title}</h5>
                        <p class="card-text">${notesObj[i].text}</p>
                        <button class="btn btn-primary my-1" onclick="deleteNotes(${i})" >Delete Note</button>
                    </div>
                 </div> `;
    }
    let notesContainer = document.getElementById("notes");
    notesContainer.append(html);
    if (notesObj.length) {
        notesContainer.innerHTML = html;
    } else {
        notesContainer.innerText = `Nothing added in the notes. Use Add Note to add a note.`
    }
}

//function to delete notes
function deleteNotes(index) {
    let notes = localStorage.getItem("notes");
    let notesObj;
    if (!notes) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();
}

//Searching notes
let search = document.querySelector("#search")
search.addEventListener("input", function () {
    let searchVal = search.value.toLowerCase();
    let noteCards = document.getElementsByClassName("noteCard");
    Array.from(noteCards).forEach((elem) => {
        let para = elem.getElementsByTagName("p")[0].innerText.toLowerCase();
        if (para.includes(searchVal)) {
            elem.style.display = "block";
        } else {
            elem.style.display = "none";
        }
    })
});