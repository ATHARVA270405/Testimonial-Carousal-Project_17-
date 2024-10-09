let currentIndex = 0;
const containers = document.querySelectorAll('.container > div');
const prevButton = document.querySelector('.prev-btn');
const nextButton = document.querySelector('.next-btn');

// Function to show the current image by resizing the active container
function showActiveContainer(index) {
    containers.forEach((container, i) => {
        container.classList.toggle('active', i === index); // Toggle 'active' class
    });
}

// Previous button click event
prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? containers.length - 1 : currentIndex - 1;
    showActiveContainer(currentIndex);
});

// Next button click event
nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex === containers.length - 1) ? 0 : currentIndex + 1;
    showActiveContainer(currentIndex);
});

// Auto-scroll feature (optional)
setInterval(() => {
    nextButton.click();
}, 5000); // Change every 5 seconds
