const lines = document.querySelectorAll('.reveal');
const resetBtn = document.getElementById('reset-btn');
const sticker = document.querySelector('.end-sticker');

lines.forEach((line, index) => {
    line.addEventListener('click', () => {
        // Reset all lines to covered state
        lines.forEach(l => {
            l.classList.remove('active');
            l.classList.add('covered');
        });

        // Set clicked line to active
        line.classList.remove('covered');
        line.classList.add('active');

        // If it's the last line, show the sticker
        if (index === lines.length - 1) {
            sticker.classList.add('sticker-visible');
        }
    });
});

resetBtn.addEventListener('click', () => {
    // Return to original state
    lines.forEach(l => {
        l.classList.remove('active', 'covered');
    });
    sticker.classList.remove('sticker-visible');
    
    // Smooth scroll back to top
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});