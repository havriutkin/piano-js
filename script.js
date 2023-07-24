// Notes array
const notes = ['C2', 'Db2', 'D2', 'Eb2', 'E2', 'F2', 'Gb2', 'G2', 'Ab2', 'A2', 'Bb2', 'B2',
                'C3', 'Db3', 'D3', 'Eb3', 'E3', 'F3', 'Gb3', 'G3', 'Ab3', 'A3', 'Bb3', 'B3',
                'C4', 'Db4', 'D4', 'Eb4', 'E4', 'F4', 'Gb4', 'G4', 'Ab4', 'A4', 'Bb4', 'B4'];


// Function plays note
function playNote(event){
    const sound = new Audio('./res/sounds/' + event.target.id + '.mp3');
    sound.play();
}

// Get buttons and add event handlers
const buttons = [];
notes.forEach(note => {
    buttons.push(document.getElementById(note));
    buttons[buttons.length - 1].addEventListener('mousedown', playNote);
});