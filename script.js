// notizen anzeigen lassen
// ich brauche notizen
// Einträge aus Array in ein Objekt übertragen
let allNotes = {
  notesTitles: ["Projektidee", "Wochenendplan", "Reiseideen", "Watchlist"],
  notes: ["WG-Einkaufs-App mit geteilten Listen", "Fahrrad, Steuer, Mama anrufen", "Sardinien, Lissabon, Sansibar", "Blade Runner, EEAAO, Handmaiden"],
  archiveNotesTitles: [],
  archiveNotes: [],
  trashNotesTitles: [],
  trashNotes: [],
};

function init() {
  getFromLocalStorage(); // Beim Neuladen wird aus dem Local Storage abgerufen
  renderNotes(); // Beim Neuladen wird die renderNotes() Funktion gestartet
  renderTrashNotes(); // Beim Neuladen wird die renderTrahsNotes() Funktion gestartet
  renderArchiveNotes();
}

//-> wann werden sie angezeigt?
function renderNotes() {
  // ich muss definieren wo sie anzuzeigen sind
  let contentRef = document.getElementById("content");
  contentRef.innerHTML = "";

  for (
    let indexNote = 0;
    indexNote < allNotes.notesTitles.length;
    indexNote++
  ) {
    contentRef.innerHTML += getNoteTemplate(indexNote);
  }
}

//-> render function zum anzeigen der Archive notes
function renderArchiveNotes() {
  let archiveContentRef = document.getElementById("archive_content");
  archiveContentRef.innerHTML = "";

  for (
    let indexArchiveNote = 0;
    indexArchiveNote < allNotes.archiveNotes.length;
    indexArchiveNote++
  ) {
    archiveContentRef.innerHTML += getArchiveNoteTemplate(indexArchiveNote);
  }
}

//-> render function zum anzeigen der trash notes
function renderTrashNotes() {
  // ich muss definieren wo sie anzuzeigen sind
  let trashContentRef = document.getElementById("trash_content");
  trashContentRef.innerHTML = "";

  for (
    let indexTrashNote = 0;
    indexTrashNote < allNotes.trashNotes.length;
    indexTrashNote++
  ) {
    trashContentRef.innerHTML += getTrashNoteTemplate(indexTrashNote);
  }
}

// Overlay ein- und ausblenden
function openOverlay(id) {
  document.getElementById(id).classList.remove("overlay-closed");
}

function closeOverlay(id) {
  document.getElementById(id).classList.add("overlay-closed");
}

function onclickProtection(event) {
  event.stopPropagation();
}

// notizen hinzufügen
// eingabe vom user definieren
// eingabe auslesen
// eingabe speichern
// eingabe anzeigen lassen
function addNote() {
  let titleInputRef = document.getElementById("title_input");
  let noteInputRef = document.getElementById("note_input");
  let titleInput = titleInputRef.value;
  let noteInput = noteInputRef.value;

  allNotes.notesTitles.push(titleInput); // Neuen Wert in Array notesTitles pushen
  allNotes.notes.push(noteInput); // Neuen Wert in Array notes pushen

  saveToLocalStorage();
  renderNotes(); // Neu landen der Notizen

  titleInputRef.value = ""; // Eingabe Titel leeren
  noteInputRef.value = ""; // Eingabe Nachricht leeren
}

// notizen verschieben
// welche notiz muss verschoben werden und wohin
// wann muss die notiz verschoben werden
// anzeige updaten
function moveNote(indexNote, startKey, destinationKey) {
  let noteTitle = allNotes[startKey + "Titles"].splice(indexNote, 1); // Splice returned den "gelöschten" wert
  allNotes[destinationKey + 'Titles'].push(noteTitle[0]); // Mit Index 0, sonst pushen wir es als Array, was nicht gut ist!

  let note = allNotes[startKey].splice(indexNote, 1); // Splice returned den "gelöschten" wert
  allNotes[destinationKey].push(note[0]); // Mit Index 0, sonst pushen wir es als Array, was nicht gut ist!
  saveToLocalStorage();
  renderNotes();
  renderArchiveNotes();
  renderTrashNotes();
}

// notizen löschen
// welche notiz muss gelöscht werden
// wann muss die notiz gelöscht werden
// anzeige updaten
function deleteNote(indexTrashNote) {
  allNotes.trashNotesTitles.splice(indexTrashNote, 1); // splice-Methode, die in TrashNotesTitles 1 Element mit dem index indesTrahsNote löscht usw.
  allNotes.trashNotes.splice(indexTrashNote, 1);
  saveToLocalStorage(); // Änderung in den local Storage speichern
  renderNotes(); // Nach Änderung renderNotes() laden und Veränderung zu sehen
  renderTrashNotes(); // Nach Änderung renderTrashNotes laden um Veränderung zu sehen
}

// notiz in local storage speichern
function saveToLocalStorage() {
  localStorage.setItem("notesTitles", JSON.stringify(allNotes.notesTitles));
  localStorage.setItem("notes", JSON.stringify(allNotes.notes));
  localStorage.setItem("trashNotesTitles", JSON.stringify(allNotes.trashNotesTitles));
  localStorage.setItem("trashNotes", JSON.stringify(allNotes.trashNotes));
  localStorage.setItem("archiveNotesTitles", JSON.stringify(allNotes.archiveNotesTitles));
  localStorage.setItem("archiveNotes", JSON.stringify(allNotes.archiveNotes));
}

// notiz aus local storage laden
function getFromLocalStorage() {
  let myNotesTitles = JSON.parse(localStorage.getItem("notesTitles"));
  let myNotes = JSON.parse(localStorage.getItem("notes"));
  let myTrashNotesTitles = JSON.parse(localStorage.getItem("trashNotesTitles"));
  let myTrashNotes = JSON.parse(localStorage.getItem("trashNotes"));
  let myArchiveNotesTitles = JSON.parse(
    localStorage.getItem("archiveNotesTitles"));
  let myArchiveNotes = JSON.parse(localStorage.getItem("archiveNotes"));

  // if Abfrage, wenn das neue array null ist, damit es richtig ausgeführt wird (umgekehrte logik)
  if (myTrashNotesTitles !== null) {
    allNotes.notesTitles = myNotesTitles;
    allNotes.notes = myNotes;
    allNotes.trashNotesTitles = myTrashNotesTitles;
    allNotes.trashNotes = myTrashNotes;
    allNotes.archiveNotesTitles = myArchiveNotesTitles;
    allNotes.archiveNotes = myArchiveNotes;
  }
}
