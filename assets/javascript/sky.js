 
document.addEventListener('DOMContentLoaded', function() {
const canvas = document.getElementById('sky');
const ctx = canvas.getContext('2d');

// Set canvas to full browser width and height
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Star settings
const numberOfStars = 200;
let stars = [];

// Helper function to generate a random number
function random(min, max) {
return Math.random() * (max - min) + min;
}

// Initialize stars with properties
function initStars() {
for (let i = 0; i < numberOfStars; i++) {
stars.push({
x: random(0, canvas.width),
y: random(0, canvas.height),
radius: random(0.5, 3),
opacity: random(0.5, 1),
increment: random(0.01, 0.02) * (Math.random() < 0.5 ? 1 : -1)
});
}
}

// Draw stars with gradually updating opacities
function updateStars() {
ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
stars.forEach(star => {
star.opacity += star.increment;
if (star.opacity <= 0.1 || star.opacity >= 1) {
star.increment = -star.increment; // Reverse the increment direction
}
ctx.beginPath();
ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2, false);
ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
ctx.fill();
});
}

function updateSky() {
updateStars();
requestAnimationFrame(updateSky); // Smoother transitions
}

initStars();
updateSky();
});
 