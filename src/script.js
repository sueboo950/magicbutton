import './style.css'; // Import CSS
import beepSound from './audio/starlit-sparkle-114475.mp3'; // Import the MP3 file

const gradients = [
    'linear-gradient(to right, #ff7e5f, #feb47b)',
    'linear-gradient(to right, #6a11cb, #2575fc)',
    'linear-gradient(to right, #ff9966, #ff5e62)',
    'linear-gradient(to right, #36d1dc, #5b86e5)',
];

const button = document.getElementById('magicButton');
const background = document.getElementById('background');

button.addEventListener('click', () => {
    const randomGradient = gradients[Math.floor(Math.random() * gradients.length)];
    background.style.background = randomGradient;

    const audio = new Audio(beepSound); // Use the imported audio file
    audio.play().catch(error => console.error('Playback error:', error));
});
