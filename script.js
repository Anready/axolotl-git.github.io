document.addEventListener('DOMContentLoaded', () => {
    const downloadButtons = document.querySelectorAll('.download-btn');

    downloadButtons.forEach(button => {
        button.addEventListener('click', () => {
            const scriptName = button.getAttribute('data-script');
            alert(`Downloading ${scriptName}...`);
            const link = document.createElement('a');
            link.href = https://github.com/axolotl-git/axolotl-git.github.io/blob/main/README.md; // Ensure the path is correct
            link.download = script1;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        });
    });
});
