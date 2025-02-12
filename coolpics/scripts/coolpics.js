function showMenu(e) {
    // get the nav menu element
    nav = document.querySelector('header > nav');
    // if (nav.classList.contains('hide')) {
    //     nav.classList.remove('hide');
    // }
    // else {
    //     nav.classList.add('hide')
    // }
    nav.classList.toggle('hide');
}

function handleResize() {
    // get the nav menu element
    nav = document.querySelector('header > nav');
    if (window.innerWidth > 700) {
        nav.classList.remove('hide');
    }
    else {
        nav.classList.add('hide');
    }
}

function viewerTemplate(path, altText) {
    return `<div class="viewer">
    <button class="close-viewer">X</button>
    <img src="${path}" alt="${altText}">
  </div>`;
}

function closeViewer() {
    // get viewer object
    document.querySelector('.viewer').classList.add('hide');
}

function viewHandler(event) {
    // create a variable to hold the element that was clicked on from event.target
    img = event.target

    // get the src attribute from that element and 'split' it on the "-"
    src = img.src.split('-');

    // construct the new image file name by adding "-full.jpeg" to the first part of the array from the previous step
    src = src[0] + '-full.jpeg';

    // insert the viewerTemplate into the top of the body element
    // (element.insertAdjacentHTML("afterbegin", htmltoinsert))
    document.querySelector('body').insertAdjacentHTML('afterbegin', viewerTemplate(src, "Norris basin located in Yellowstone National Park"))

    // add a listener to the close button (X) that calls a function called closeViewer when clicked
    closeButton = document.querySelector('.close-viewer').addEventListener('click', closeViewer);
}

// add event listenters
handleResize();
document.querySelector('#btn-menu').addEventListener('click', showMenu);
window.addEventListener("resize", handleResize);
document.querySelector('.gallery').addEventListener('click', viewHandler);