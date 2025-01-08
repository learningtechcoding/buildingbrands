document.addEventListener('mousemove', function(e) {
    const moveHeader = document.getElementById('move-header');
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    
    // Adjust the movement sensitivity (higher values will reduce movement)
    const moveAmountX = (mouseX / window.innerWidth) * 70 - 10; // Horizontal movement
    const moveAmountY = (mouseY / window.innerHeight) * 70 - 10; // Vertical movement
    
    moveHeader.style.transform = `translate(${moveAmountX}px, ${moveAmountY}px)`;
    });

    

    document.addEventListener('mousemove', function(e) {
        const moveHeader = document.getElementById('headmovement');
        const mouseX = e.clientX;
        const mouseY = e.clientY;
        
        // Adjust the movement sensitivity (higher values will reduce movement)
        const moveAmountX = (mouseX / window.innerWidth) * 70 - 10; // Horizontal movement
        const moveAmountY = (mouseY / window.innerHeight) * 70 - 10; // Vertical movement
        
        moveHeader.style.transform = `translate(${moveAmountX}px, ${moveAmountY}px)`;
        });



        document.addEventListener('mousemove', function(e) {
            const moveHeader = document.getElementById('animated-head');
            const mouseX = e.clientX;
            const mouseY = e.clientY;
            
            // Adjust the movement sensitivity (higher values will reduce movement)
            const moveAmountX = (mouseX / window.innerWidth) * 70 - 10; // Horizontal movement
            const moveAmountY = (mouseY / window.innerHeight) * 70 - 10; // Vertical movement
            
            moveHeader.style.transform = `translate(${moveAmountX}px, ${moveAmountY}px)`;
            });