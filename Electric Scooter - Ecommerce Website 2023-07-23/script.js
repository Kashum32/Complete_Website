

let navBar = document.querySelector('.navBar');

document.querySelector('#menuBar').onclick = () => {
    navBar.classList.add('active');
}

document.querySelector('#closeBtn').onclick = () => {
    navBar.classList.remove('active');
}

