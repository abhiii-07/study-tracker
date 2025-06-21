document.addEventListener("DOMContentLoaded", function () {
    console.log("cor.js is loaded!");

    const saveButton = document.getElementById("saveNotes");
    const viewButton = document.getElementById("viewNotes");
    const savedNotesContainer = document.getElementById("savedNotesContainer");
    const savedNotesList = document.getElementById("savedNotesList");

    saveButton.addEventListener("click", function () {
        console.log("Save button clicked!");

        const cues = document.getElementById("cues").value.trim();
        const notes = document.getElementById("notes").value.trim();
        const summary = document.getElementById("summary").value.trim();

        if (!cues && !notes && !summary) {
            alert("Please enter some notes before saving.");
            return;
        }

        const savedNotes = JSON.parse(localStorage.getItem("cornellNotes")) || [];
        
        const newNote = { cues, notes, summary };

        savedNotes.push(newNote);
        localStorage.setItem("cornellNotes", JSON.stringify(savedNotes));

        alert("Notes saved successfully!");
    });

    viewButton.addEventListener("click", function () {
        console.log("View Notes button clicked!");
        savedNotesContainer.classList.toggle("hidden");
        displaySavedNotes();
    });

    function displaySavedNotes() {
        console.log("Displaying saved notes...");
        savedNotesList.innerHTML = "";
        
        const savedNotes = JSON.parse(localStorage.getItem("cornellNotes")) || [];
        
        if (savedNotes.length === 0) {
            savedNotesList.innerHTML = "<li>No saved notes found.</li>";
            return;
        }

        savedNotes.forEach(note => {
            const listItem = document.createElement("li");
            listItem.innerHTML = `
                <strong>Cues:</strong> ${note.cues}<br>
                <strong>Notes:</strong> ${note.notes}<br>
                <strong>Summary:</strong> ${note.summary}<br>
                <hr>
            `;
            savedNotesList.appendChild(listItem);
        });
    }

    displaySavedNotes();
});
