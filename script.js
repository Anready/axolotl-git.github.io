document.addEventListener('DOMContentLoaded', () => {
    const downloadButtons = document.querySelectorAll('.download-btn');

    downloadButtons.forEach(button => {
        button.addEventListener('click', () => {
            const scriptName = button.getAttribute('data-script');
            alert(`Downloading ${scriptName}...`);
            // Here you can add logic to download the file
        });
    });
});
