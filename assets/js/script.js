const bottomWeatherSection = document.getElementById('bottomWeatherSection');
let startY = 0;
let lastY = 0;
let isMovedUp = false;

// Touch events for smaller devices
bottomWeatherSection.addEventListener('touchstart', (e) => {
    startY = e.touches[0].clientY;
});

bottomWeatherSection.addEventListener('touchmove', (e) => {
    let currentY = e.touches[0].clientY;
    let diffY = currentY - startY;

    if (diffY < 0) {
        bottomWeatherSection.style.transform = `translateY(${diffY}px)`;
    }

    lastY = currentY;
});

bottomWeatherSection.addEventListener('touchend', () => {
    if (lastY - startY < -100) {
        bottomWeatherSection.style.transition = 'transform 0.3s ease';
        bottomWeatherSection.style.transform = 'translateY(-40%)';
        isMovedUp = true;
    } else {
        bottomWeatherSection.style.transition = 'transform 0.3s ease';
        bottomWeatherSection.style.transform = 'translateY(0)';
        isMovedUp = false;
    }
});

// Click events for desktop
bottomWeatherSection.addEventListener('click', () => {
    if (isMovedUp) {
        bottomWeatherSection.style.transition = 'transform 0.3s ease';
        bottomWeatherSection.style.transform = 'translateY(0)';
        isMovedUp = false;
    } else {
        bottomWeatherSection.style.transition = 'transform 0.3s ease';
        bottomWeatherSection.style.transform = 'translateY(-40%)';
        isMovedUp = true;
    }
});
