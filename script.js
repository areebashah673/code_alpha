const playlist = [
    { title: "Song 1", src: "Song 1.mp3" },  
    { title: "Song 2", src: "song2.mp3" },
  {title:"song ",src: ""},
    { title: "Song 3", src: "path/to/song3.mp3" }
];

let currentTrack = 0;
const audio = document.getElementById('audio');
const playlistElement = document.getElementById('playlist');

// Populate playlist
playlist.forEach((track, index) => {
    const li = document.createElement('li');
    li.className = 'list-group-item';
    li.innerText = track.title;
    li.addEventListener('click', () => playTrack(index));
    playlistElement.appendChild(li);
});

// Play selected track
function playTrack(index) {
    currentTrack = index;
    audio.src = playlist[currentTrack].src;
    audio.play();
}

// Control buttons
document.getElementById('play').addEventListener('click', () => audio.play());
document.getElementById('pause').addEventListener('click', () => audio.pause());
document.getElementById('prev').addEventListener('click', playPrev);
document.getElementById('next').addEventListener('click', playNext);

// Volume control
document.getElementById('volumeControl').addEventListener('input', (e) => {
    audio.volume = e.target.value;
});

function playPrev() {
    currentTrack = (currentTrack - 1 + playlist.length) % playlist.length;
    playTrack(currentTrack);
}

function playNext() {
    currentTrack = (currentTrack + 1) % playlist.length;
    playTrack(currentTrack);
}
