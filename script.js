document.addEventListener('DOMContentLoaded', () => {
    const scriptList = document.getElementById('script-list');

    // load file YAML
    fetch('scripts.yaml')
        .then(response => response.text())
        .then(yamlText => {
            const data = jsyaml.load(yamlText);
            const scripts = data.scripts;

            // add scripts to the list
            scripts.forEach(script => {
                const li = document.createElement('li');
                li.innerHTML = `${script.name} - <button class="download-btn" data-url="${script.url}">Download</button>`;
                scriptList.querySelector('ul').appendChild(li);
            });

            // add click event to download button
            const downloadButtons = document.querySelectorAll('.download-btn');
            downloadButtons.forEach(button => {
                button.addEventListener('click', () => {
                    const scriptUrl = button.getAttribute('data-url');
                    alert(`Downloading ${scriptUrl}...`);
                    const link = document.createElement('a');
                    link.href = scriptUrl;
                    link.download = scriptUrl.split('/').pop(); // Estrae il nome del file dall'URL
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                });
            });
        })
        .catch(error => console.error('Error loading YAML file:', error));
});
