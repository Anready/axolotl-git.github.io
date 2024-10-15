# Yantra Launcher Script Hub

## Introduction

Welcome to the **Yantra Launcher Script Hub**, an unofficial project that gathers all LUA scripts created for Yantra Launcher by the community, making them easily accessible to everyone. This README file provides instructions on how to modify the project to add new scripts and manage their downloads.

## Project Structure

The project consists of:

- `index.html`: the main HTML file that contains the structure of the page.
- `styles.css`: the CSS file for styling the page.
- `script.js`: the JavaScript file for interactive logic, including the management of download buttons.

## Adding New Scripts

To add new scripts to the list of available scripts, follow these steps:

1. **Open the `index.html` file**: This file contains the structure of the web page.

2. **Find the script section**: Look for the section with the ID `script-list`. It should look similar to this:

    ```html
    <section id="script-list">
        <h2>Available Scripts</h2>
        <ul>
            <li>Script 1 - <button class="download-btn" data-script="script1.lua">Download</button></li>
            <li>Script 2 - <button class="download-btn" data-script="script2.lua">Download</button></li>
            <li>Script 3 - <button class="download-btn" data-script="script3.lua">Download</button></li> 
            <!-- Add more scripts here -->
        </ul>
    </section>
    ```

3. **Add a new list item**: For each new script you want to add, insert a new `<li>` element inside the `<ul>`. Here’s an example of how to add a new script:

    ```html
    <li>Script 4 - <button class="download-btn" data-script="script4.lua">Download</button></li>
    ```

4. **Save your changes**: After adding the new script, save the `index.html` file.

5. **Verify functionality**: Open the `index.html` file in your browser to ensure that the new script appears correctly in the list and that the download button works.

## Managing Downloads

The `script.js` file handles the interaction with the download buttons. Here’s how it works:

```javascript
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
```

### Modifications to `script.js`

If you want to implement the logic for the actual file download, you can replace the comment `// Here you can add logic to download the file` with the necessary code to handle the download. For example, you can use a link to download the file:

```javascript
const link = document.createElement('a');
link.href = scriptName; // Ensure the path is correct
link.download = scriptName;
document.body.appendChild(link);
link.click();
document.body.removeChild(link);
```


By following these steps, you can  add new scripts to the hub and manage their downloads. If you have any questions or suggestions, feel free to contact the project maintainer(axolotl-git) by sending an email at axolotl@ik.me .

Thank you for your contribution to the Yantra Launcher community! 