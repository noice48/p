
// Dark mode toggle functionality
        const darkModeToggle = document.querySelector('.dark-mode-toggle');
    const toggleCircle = document.querySelector('.toggle-circle');
    const headerSection = document.querySelector('.header-section');
    const profileTitle = document.querySelector('.profile-title');
    const seeWork = document.querySelector('.see-work');
    const archiveLink = document.querySelector('.archive-link');

    let isDarkMode = false;

    darkModeToggle.addEventListener('click', () => {
        isDarkMode = !isDarkMode;
        
        if (isDarkMode) {
            document.body.classList.add("dark-mode");
            toggleCircle.style.transform = 'translateX(24px)'; // Move to the right
        } else {
            document.body.classList.remove("dark-mode");
            toggleCircle.style.transform = 'translateX(0)'; // Move back to the left
        }
    });