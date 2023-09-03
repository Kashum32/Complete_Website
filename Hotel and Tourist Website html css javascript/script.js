

let navLinks = document.querySelector('.nav_links');

document.querySelector('#menuBar').onclick = () => {
    navLinks.classList.add('active');
}

document.querySelector('#closeBtn').onclick = () => {
    navLinks.classList.remove('active');
}