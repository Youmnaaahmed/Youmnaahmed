function toggleDetails(detailsId) {
    const details = document.getElementById(detailsId);
    if (details.style.display === 'none' || details.style.display === '') {
        details.style.display = 'block';
    } else {
        details.style.display = 'none';
    }
}

function hideDetails(detailsId) {
    const details = document.getElementById(detailsId);
    details.style.display = 'none';
}
