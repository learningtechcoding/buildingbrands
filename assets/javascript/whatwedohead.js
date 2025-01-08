const head = document.getElementById("animated-head1");
const container = document.getElementById("head-container1");
let scale = 1; // Initial scale for zooming
let scrollScale = 0.1; // Maximum scale reduction due to scrolling

// Mouse movement logic
container.addEventListener("mousemove", (event) => {
    const { width, height, left, top } = container.getBoundingClientRect();

    // Calculate mouse position relative to the container center
    const mouseX = event.clientX - left - width / 2;
    const mouseY = event.clientY - top - height / 2;

    // Normalize rotation angles
    const rotateX = -(mouseY / height) * 20;
    const rotateY = (mouseX / width) * 150;

    // Apply transformation
    head.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`;
});

// Reset the rotation when the mouse leaves the container
container.addEventListener("mouseleave", () => {
    head.style.transform = `rotateX(0deg) rotateY(0deg) scale(${scale})`;
});

// Mouse scroll (zoom in/out) logic
// container.addEventListener("wheel", (event) => {
//     event.preventDefault();  

     
//     if (event.deltaY < 0) {
//         scale = Math.min(scale + 0.1, 3);  
//     } else {
//         scale = Math.max(scale - 0.1, 0.5);  
//     }

   
//     head.style.transform = `scale(${scale})`;
// });

// Page scroll logic for zoom-out effect
window.addEventListener("scroll", () => {
    // Calculate scroll-based scale adjustment
    const zoomOutFactor = Math.min(window.scrollY * 0.0005, scrollScale); // Increased multiplier for stronger zoom-out

    // Adjust the scale with a pronounced zoom-out
    const adjustedScale = Math.max(scale - zoomOutFactor, 0.5); // Ensure scale doesn't go below 0.5
    head.style.transform = `scale(${adjustedScale})`;
});
 