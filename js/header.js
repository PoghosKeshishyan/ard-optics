// SELECTORS
const menuBar = document.querySelector('#menu-bar');
const navbar = document.querySelector('.navbar');
const dropdowns = document.querySelectorAll('.dropdown > a');
const searchBtn = document.querySelector('#search-btn');
const searchBar = document.querySelector('.search-bar-container');

// EVENT LISTENERS
document.addEventListener('DOMContentLoaded', init);
menuBar.addEventListener('click', toggleMenuBar)
searchBtn.addEventListener('click', toggleSearchBar);


// FUNCTIONS
function init() {
    dropdowns.forEach(link => {
        link.addEventListener('click', handlerDropdown);
    });
}

function toggleMenuBar() {
    navbar.classList.toggle('active');
}

function handlerDropdown(event) {
    event.preventDefault();

    if (window.innerWidth < 768) {
        const dropdown = event.currentTarget.parentElement;
        const submenu = dropdown.querySelector('.submenu');

        if (submenu) {
            submenu.classList.toggle('active');
        }

        const icons = event.currentTarget.querySelectorAll('i');
        icons.forEach(icon => icon.classList.toggle('fa-xmark'));
    }
}

function toggleSearchBar(event) {
    event.target.classList.toggle('fa-xmark');
    searchBar.classList.toggle('active');
}
