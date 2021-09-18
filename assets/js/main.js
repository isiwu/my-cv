'use strict';

const eventHandlerSetUp = function() {
  const elNavBarContainer = document.getElementById('navbar-list'),
  clickHandler = (evt) => {

    const target = evt.target,
    siblings = document.getElementsByClassName('main-nav');

    for (const elem of siblings) {
      elem.classList.remove('current');
    }

    target.classList.add('current');

  };
    
  elNavBarContainer.addEventListener('click', clickHandler, false);
}

window.addEventListener('load', eventHandlerSetUp, false);



