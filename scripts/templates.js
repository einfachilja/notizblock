// HTML Code in Template Function auslagern
function getNoteTemplate(indexNote) {
  return ` 
        <div class="content-card">
            <b>${allNotes.notesTitles[indexNote]}</b><br>
            ${allNotes.notes[indexNote]}
            <div class="content-card-box">
                <img class="icon" src="./assets/icons/archive.png" onclick="moveNote(${indexNote},'notes','archiveNotes')"  alt="">
                <img class="icon" src="./assets/icons/trash.png" onclick="moveNote(${indexNote}, 'notes', 'trashNotes')" alt="">
            </div>
        </div>
    `;
}

function getArchiveNoteTemplate(indexArchiveNote) {
  return ` 
    <div class="content-card" onclick="onclickProtection(event)">
        <b>${allNotes.archiveNotesTitles[indexArchiveNote]}</b><br>
        ${allNotes.archiveNotes[indexArchiveNote]}
        <div class="content-card-box">
            <img class="icon" src="./assets/icons/favicon.png" onclick="moveNote(${indexArchiveNote},'archiveNotes','notes')"  alt=""> 
            <img class="icon" src="./assets/icons/trash.png" onclick="moveNote(${indexArchiveNote},'archiveNotes','trashNotes')" alt="">
        </div>
    </div>
`;
}

// HTML Code in Template Function auslagern
function getTrashNoteTemplate(indexTrashNote) {
  return ` 
        <div class="content-card" onclick="onclickProtection(event)">
            <b>${allNotes.trashNotesTitles[indexTrashNote]}</b><br>
            ${allNotes.trashNotes[indexTrashNote]} 
            <div class="content-card-box">
                <img class="icon" src="./assets/icons/favicon.png" onclick="moveNote(${indexTrashNote},'trashNotes','notes')" alt="">
                <img class="icon" src="./assets/icons/trash.png" onclick="deleteNote(${indexTrashNote})" alt="">
            </div>
        </div>
    `;
}
