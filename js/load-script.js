document.addEventListener("DOMContentLoaded", function () {
    loadComponent("header", "header.html");
    loadComponent("footer", "footer.html");
    // loadComponent("#main_div_left", "leftside.html");
});

function loadComponent(tag, file) {
    fetch(file)
        .then(response => response.text())
        .then(data => document.querySelector(tag).innerHTML = data)
        .catch(error => console.error(`Error loading ${file}:`, error));
}