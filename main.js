
// Example: Add a simple fade-in effect on page load
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.container').style.opacity = 0;
    setTimeout(() => {
        document.querySelector('.container').style.transition = "opacity 2s";
        document.querySelector('.container').style.opacity = 1;
    }, 500);
});
