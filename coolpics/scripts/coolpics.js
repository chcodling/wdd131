function showMenu(e) {
    // get the nav menu element
    nav = document.querySelector(head > nav);
    if (nav.classList.contains('hide')) {
        nav.classList.remove('hide');
    }
    else {
        nav.classList.add('hide')
    }
}

// add event for menu button
document.querySelector('#btn-menu').addEventListener('click', showMenu);