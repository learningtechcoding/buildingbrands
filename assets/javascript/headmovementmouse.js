document.addEventListener('mousemove', function(e) {
    const moveHeader = document.getElementById('move-header');
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    // Get the screen width to check if it's mobile
    const isMobile = window.innerWidth <= 768;

    // Adjust the movement sensitivity (higher values will reduce movement)
    const moveAmountX = isMobile ? 0 : (mouseX / window.innerWidth) * 70 - 10; // Disable horizontal movement on mobile
    const moveAmountY = (mouseY / window.innerHeight) * 70 - 10; // Vertical movement remains the same

    moveHeader.style.transform = `translate(${moveAmountX}px, ${moveAmountY}px)`;
});

        

    document.addEventListener('mousemove', function(e) {
        const moveHeader = document.getElementById('headmovement');
        const mouseX = e.clientX;
        const mouseY = e.clientY;
        

        const isMobile = window.innerWidth <= 768;
        // Adjust the movement sensitivity (higher values will reduce movement)
        const moveAmountX = isMobile ? 0 : (mouseX / window.innerWidth) * 70 - 10; // Disable horizontal movement on mobile
        const moveAmountY = (mouseY / window.innerHeight) * 70 - 10; // Vertical movement remains the same
        
        moveHeader.style.transform = `translate(${moveAmountX}px, ${moveAmountY}px)`;
        });



        document.addEventListener('mousemove', function(e) {
            const moveHeader = document.getElementById('animated-head');
            const mouseX = e.clientX;
            const mouseY = e.clientY;
            
           // Get the screen width to check if it's mobile
    const isMobile = window.innerWidth <= 768;

    // Adjust the movement sensitivity (higher values will reduce movement)
    const moveAmountX = isMobile ? 0 : (mouseX / window.innerWidth) * 70 - 10; // Disable horizontal movement on mobile
    const moveAmountY = (mouseY / window.innerHeight) * 70 - 10; // Vertical movement remains the same
            
            moveHeader.style.transform = `translate(${moveAmountX}px, ${moveAmountY}px)`;
            });