
// External JavaScript - scripts.js

document.addEventListener('DOMContentLoaded', function () {
    // Example interactive feature - scrolling animation
    const heroBtn = document.querySelector('.btn-custom');
    heroBtn.addEventListener('click', function () {
        const targetSection = document.querySelector('#about');
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });

    // Add more interactive JS features here if needed
});


document.addEventListener('DOMContentLoaded', function () {
    const robot = document.createElement('div');
    robot.classList.add('robot');
    robot.textContent = '🤖';
    document.body.appendChild(robot);

    let xPos = 50;
    let yPos = 50;

    // Function to move the robot based on arrow key inputs
    document.addEventListener('keydown', function (event) {
        const step = 10;
        switch (event.key) {
            case 'w':
                yPos -= step;
                break;
            case 's':
                yPos += step;
                break;
            case 'a':
                xPos -= step;
                break;
            case 'd':
                xPos += step;
                break;
        }

        // Constrain within viewport boundaries
        xPos = Math.max(0, Math.min(window.innerWidth - 50, xPos));
        yPos = Math.max(0, Math.min(window.innerHeight - 50, yPos));

        robot.style.left = xPos + 'px';
        robot.style.top = yPos + 'px';
    });
});



