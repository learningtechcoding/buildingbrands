
const videoPlayer = document.getElementById('videoPlayer');
const staticEffect = document.getElementById('staticEffect');
const powerButton = document.getElementById('powerButton');
const volumeButton = document.getElementById('volumeButton');
let isPowered = true;
let isMuted = true;

// Power button functionality
powerButton.addEventListener('click', () => {
    isPowered = !isPowered;
    if (isPowered) {
        videoPlayer.play();
        staticEffect.style.display = 'none';
    } else {
        videoPlayer.pause();
        staticEffect.style.display = 'block';
    }
});

// Volume button functionality
volumeButton.addEventListener('click', () => {
    if (isPowered) {
        isMuted = !isMuted;
        videoPlayer.muted = isMuted;
    }
});

// Add static effect when video ends (if not looping)
videoPlayer.addEventListener('ended', () => {
    staticEffect.style.display = 'block';
});

// Initialize video
videoPlayer.play().catch(function(error) {
    console.log("Video autoplay failed:", error);
});

// CRT power on effect
function powerOnEffect() {
    staticEffect.style.display = 'block';
    setTimeout(() => {
        staticEffect.style.display = 'none';
    }, 1000);
}

// Run power on effect when page loads
window.addEventListener('load', powerOnEffect);
 