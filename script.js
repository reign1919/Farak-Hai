// script.js
const listenButton = document.getElementById('listenButton');
const popup = document.getElementById('popup');
const albumArt = document.getElementById('albumArt');
const audioPlayer = document.getElementById('audioPlayer');

listenButton.addEventListener('click', () => {
    // Show the popup
    popup.classList.remove('hidden');

    // Set album art (replace with actual path)
    albumArt.src = 'WhatsApp Image 2024-05-11 at 14.21.14.jpeg';

    // Set audio source (replace with actual path)
    audioPlayer.src = 'Untitled song (5).mp3';
});

// Hide the popup when clicking outside or on the back button
popup.addEventListener('click', (event) => {
    if (event.target === popup || event.target.id === 'backButton') {
        popup.classList.add('hidden');
        audioPlayer.pause(); // Pause audio when closing popup
    }
});
