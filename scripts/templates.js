// HTML Code in Template Function auslagern
function getNoteTemplate(indexNote) {
  return ` 
        <div class="content-card">
            <b>${notesTitles[indexNote]}</b><br>
            ${notes[indexNote]}
            <div class="content-card-box">
                <img class="icon" src="./assets/icons/archive.png" onclick="noteToArchive(${indexNote})"  alt="">
                <img class="icon" src="./assets/icons/trash.png" onclick="noteToTrash(${indexNote})" alt="">
            </div>
        </div>
    `;
}

function getArchiveNoteTemplate(indexArchiveNote) {
    return ` 
    <div class="content-card" onclick="onclickProtection(event)">
        <b>${archiveNotesTitles[indexArchiveNote]}</b><br>
        ${archiveNotes[indexArchiveNote]}
        <div class="content-card-box">
            <img class="icon" src="./assets/icons/favicon.png" onclick="archiveNoteToNote(${indexArchiveNote})"  alt=""> 
            <img class="icon" src="./assets/icons/trash.png" onclick="archiveNoteToTrash(${indexArchiveNote})" alt="">
        </div>
    </div>
`;
}

// HTML Code in Template Function auslagern
function getTrashNoteTemplate(indexTrashNote) {
  return ` 
        <div class="content-card" onclick="onclickProtection(event)">
            <b>${trashNotesTitles[indexTrashNote]}</b><br>
            ${trashNotes[indexTrashNote]} 
            <div class="content-card-box">
                <img class="icon" src="./assets/icons/favicon.png" onclick="trashNoteToNote(${indexTrashNote})" alt="">
                <img class="icon" src="./assets/icons/trash.png" onclick="deleteNote(${indexTrashNote})" alt="">
            </div>
        </div>
    `;
}
