/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const content = document.getElementById('content');
const homeDiv = document.createElement('div');

const homeFunc = (homeDiv) => {
  const homeDivOne = document.createElement('div');
  const homeDivTwo = document.createElement('div');
  const heading = document.createElement('h1');
  const paragragh = document.createElement('p');

  homeDiv.id = 'home';
  homeDiv.classList.add(
    'top-bg',
    'homeContainer',
  );
  homeDivOne.classList.add('homeContent');
  homeDivTwo.classList.add('homeBox');
  heading.classList.add('homeTitle');
  paragragh.classList.add('homePg');

  heading.textContent = 'Welcome to Alorr!';
  paragragh.textContent = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam cupiditate, ipsum saepe odio sint neque facilis quod culpa animi, dolorem consequuntur consequatur. Ea, ex voluptatum! Quam, ratione dolorum? In, reiciendis nihil. Minima saepe iure ut ex praesentium. Quidem esse repellendus molestias similique expedita illum?';

  homeDivTwo.appendChild(heading);
  homeDivTwo.appendChild(paragragh);
  homeDivOne.appendChild(homeDivTwo);
  homeDiv.appendChild(homeDivOne);


  return homeDiv;
};

const showHome = () => {
  content.insertAdjacentElement('afterbegin', homeFunc(homeDiv));
}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showHome);

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "showMenu": () => (/* binding */ menuFunc)
/* harmony export */ });
const content = document.getElementById('content');
const menuDiv = document.createElement('div');

const image = () => {
  const imgOne = document.createElement('img');
  const imgTwo = document.createElement('img');
  imgOne.classList.add('gridImage');
  imgTwo.classList.add('gridImage');
  imgOne.src = '../assets/img/6.jpg';
  imgTwo.src = '../assets/img/11.png';

  return { imgOne, imgTwo };
};

const boxInfo = () => {
  const infoDiv = document.createElement('div');
  const infoTitle = document.createElement('h4');
  const infoSub = document.createElement('p');
  infoDiv.classList.add('grid-iv');
  infoTitle.classList.add('gridTitle');
  infoTitle.textContent = 'Peppered Rice';
  infoSub.classList.add('gridPg');
  infoSub.textContent = 'Doloremque omnis exercitationem nulla ratione perferendis, quam, incidunt earum assumenda eius.';
  return { infoDiv, infoTitle, infoSub };
};

function boxElement() {
  const box = [];
  let pic = true;
  for (let i = 0; i < 4; i += 1) {
    const boxContent = boxInfo().infoDiv;
    boxContent.appendChild(boxInfo().infoTitle);
    boxContent.appendChild(boxInfo().infoSub);
    const any = document.createElement('div');
    any.classList.add('gridItem');
    if (pic) {
      any.appendChild(image().imgOne);
      pic = false;
    } else {
      any.appendChild(image().imgTwo);
      pic = true;
    }
    any.appendChild(boxInfo().infoDiv);
    any.appendChild(boxContent);
    box.push(any);
  }
  return { box };
}

const menuFunc = (menuDiv) => {
  const heading = document.createElement('h2');
  const container = document.createElement('div');
  const gridBox = document.createElement('div');
  let box = boxElement();
  box = Object.entries(box);
  box = box[0][1];
  menuDiv.id = 'menu';
  menuDiv.classList.add(
    'menu-bg',
    'menuContainer'
  );
  heading.textContent = 'Special menu';
  heading.classList.add('menuTitle');
  container.classList.add('menu-v');
  gridBox.classList.add('menuGrid');

  menuDiv.appendChild(heading);
  menuDiv.appendChild(container);
  container.appendChild(gridBox);
  for (let a = 0; a < box.length; a += 1) {
    gridBox.appendChild(box[a]);
  }
  return menuDiv;
};

// const showMenu = () => {
//   content.insertAdjacentElement('afterbegin', menuFunc(menuDiv));
// }



/***/ }),

/***/ "./src/nav.js":
/*!********************!*\
  !*** ./src/nav.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const content = document.getElementById('content');
const navDiv = document.createElement('div');

const navFunc = (navDiv) => {
  const navOne = document.createElement('div');
  const navTwo = document.createElement('div');
  const navThree = document.createElement('div');

  navDiv.classList.add('tabs', 'nav-container');
  navOne.classList.add('home', 'tab', 'nav-style', 'indicator');
  navOne.id = 'hm';
  navOne.textContent = 'Home';
  navTwo.classList.add('menu', 'tab', 'nav-style');
  navTwo.id = 'mn';
  navTwo.textContent = 'Menu';
  navThree.classList.add('contact', 'tab', 'nav-style');
  navThree.id = 'cn';
  navThree.textContent = 'Contact';

  navDiv.appendChild(navOne);
  navDiv.appendChild(navTwo);
  navDiv.appendChild(navThree);

  return navDiv;
}

const showNav = () => {
  // content.appendChild(navFunc(navDiv));
  content.insertAdjacentElement('beforebegin', navFunc(navDiv));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showNav);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nav */ "./src/nav.js");





const content = document.getElementById('content');

const renderPage = (location, page) => {
  location.replaceChildren()
  page();
};
(0,_nav__WEBPACK_IMPORTED_MODULE_2__.default)()
;(0,_home__WEBPACK_IMPORTED_MODULE_0__.default)()
// const tabButton = document.querySelectorAll('.tab');

//   const home = document.getElementById('hm');
//   const one = document.getElementById('home');
//   const menu = document.getElementById('mn');
//   const two = document.getElementById('menu');
//   const contact = document.getElementById('cn');

  // tabButton.forEach((button) => {
  //   button.addEventListener('click', (e) => {
  //     if (e.target.textContent === 'Home') {
  //      home.classList.add('indicator') 
  //      menu.classList.remove('indicator') 
  //      contact.classList.remove('indicator') 
  //       one.classList.add('show')
  //     }
  //     if (e.target.textContent === 'Menu') {
  //       home.classList.remove('indicator') 
  //       menu.classList.add('indicator') 
  //       contact.classList.remove('indicator') 
  //       one.classList.add('hide')
  //       showMenu().remove()
  //       showMenu()
  //       // renderPage(content, showMenu)
  //     }
  //     if (e.target.textContent === 'Contact') {
  //      home.classList.remove('indicator') 
  //      menu.classList.remove('indicator') 
  //      contact.classList.add('indicator') 
        
  //     }
  //   });
  // });

// const item = document.querySelector('.item');  
const tabs = document.querySelectorAll('.tab');
const tabMethods = [_home__WEBPACK_IMPORTED_MODULE_0__.default, _menu__WEBPACK_IMPORTED_MODULE_1__.default];

const openTab = (index) => {
  content.innerHTML = '';

  for (let i = 0; i < tabs.length; i += 1) {
    tabs[i].classList.remove('indicator');
  }

  tabs[index].classList.add('indicator');
  tabMethods[index]();
};

for (let i = 0; i < tabs.length; i += 1) {
  tabs[i].onclick = openTab.bind(null, i);
}
  
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvbmF2LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0EsaUVBQWUsUUFBUSxFOzs7Ozs7Ozs7Ozs7OztBQ3BDdkI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxVQUFVO0FBQ1Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixPQUFPO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLGdCQUFnQjtBQUNqQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3RUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxPQUFPLEU7Ozs7OztVQy9CdEI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7Ozs7Ozs7Ozs7Ozs7QUNMOEI7QUFDQTtBQUNGOztBQUU1Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUFPO0FBQ1AsK0NBQVE7QUFDUjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFFBQVE7QUFDUixNQUFNOztBQUVOLGdEO0FBQ0E7QUFDQSxvQkFBb0IsMENBQVEsRUFBRSwwQ0FBUTs7QUFFdEM7QUFDQTs7QUFFQSxpQkFBaUIsaUJBQWlCO0FBQ2xDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGVBQWUsaUJBQWlCO0FBQ2hDO0FBQ0EiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuY29uc3QgaG9tZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG5jb25zdCBob21lRnVuYyA9IChob21lRGl2KSA9PiB7XG4gIGNvbnN0IGhvbWVEaXZPbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgaG9tZURpdlR3byA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgY29uc3QgcGFyYWdyYWdoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuXG4gIGhvbWVEaXYuaWQgPSAnaG9tZSc7XG4gIGhvbWVEaXYuY2xhc3NMaXN0LmFkZChcbiAgICAndG9wLWJnJyxcbiAgICAnaG9tZUNvbnRhaW5lcicsXG4gICk7XG4gIGhvbWVEaXZPbmUuY2xhc3NMaXN0LmFkZCgnaG9tZUNvbnRlbnQnKTtcbiAgaG9tZURpdlR3by5jbGFzc0xpc3QuYWRkKCdob21lQm94Jyk7XG4gIGhlYWRpbmcuY2xhc3NMaXN0LmFkZCgnaG9tZVRpdGxlJyk7XG4gIHBhcmFncmFnaC5jbGFzc0xpc3QuYWRkKCdob21lUGcnKTtcblxuICBoZWFkaW5nLnRleHRDb250ZW50ID0gJ1dlbGNvbWUgdG8gQWxvcnIhJztcbiAgcGFyYWdyYWdoLnRleHRDb250ZW50ID0gJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyLCBhZGlwaXNpY2luZyBlbGl0LiBRdWFtIGN1cGlkaXRhdGUsIGlwc3VtIHNhZXBlIG9kaW8gc2ludCBuZXF1ZSBmYWNpbGlzIHF1b2QgY3VscGEgYW5pbWksIGRvbG9yZW0gY29uc2VxdXVudHVyIGNvbnNlcXVhdHVyLiBFYSwgZXggdm9sdXB0YXR1bSEgUXVhbSwgcmF0aW9uZSBkb2xvcnVtPyBJbiwgcmVpY2llbmRpcyBuaWhpbC4gTWluaW1hIHNhZXBlIGl1cmUgdXQgZXggcHJhZXNlbnRpdW0uIFF1aWRlbSBlc3NlIHJlcGVsbGVuZHVzIG1vbGVzdGlhcyBzaW1pbGlxdWUgZXhwZWRpdGEgaWxsdW0/JztcblxuICBob21lRGl2VHdvLmFwcGVuZENoaWxkKGhlYWRpbmcpO1xuICBob21lRGl2VHdvLmFwcGVuZENoaWxkKHBhcmFncmFnaCk7XG4gIGhvbWVEaXZPbmUuYXBwZW5kQ2hpbGQoaG9tZURpdlR3byk7XG4gIGhvbWVEaXYuYXBwZW5kQ2hpbGQoaG9tZURpdk9uZSk7XG5cblxuICByZXR1cm4gaG9tZURpdjtcbn07XG5cbmNvbnN0IHNob3dIb21lID0gKCkgPT4ge1xuICBjb250ZW50Lmluc2VydEFkamFjZW50RWxlbWVudCgnYWZ0ZXJiZWdpbicsIGhvbWVGdW5jKGhvbWVEaXYpKTtcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBzaG93SG9tZTsiLCJjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbmNvbnN0IG1lbnVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuY29uc3QgaW1hZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IGltZ09uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBjb25zdCBpbWdUd28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgaW1nT25lLmNsYXNzTGlzdC5hZGQoJ2dyaWRJbWFnZScpO1xuICBpbWdUd28uY2xhc3NMaXN0LmFkZCgnZ3JpZEltYWdlJyk7XG4gIGltZ09uZS5zcmMgPSAnLi4vYXNzZXRzL2ltZy82LmpwZyc7XG4gIGltZ1R3by5zcmMgPSAnLi4vYXNzZXRzL2ltZy8xMS5wbmcnO1xuXG4gIHJldHVybiB7IGltZ09uZSwgaW1nVHdvIH07XG59O1xuXG5jb25zdCBib3hJbmZvID0gKCkgPT4ge1xuICBjb25zdCBpbmZvRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IGluZm9UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XG4gIGNvbnN0IGluZm9TdWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGluZm9EaXYuY2xhc3NMaXN0LmFkZCgnZ3JpZC1pdicpO1xuICBpbmZvVGl0bGUuY2xhc3NMaXN0LmFkZCgnZ3JpZFRpdGxlJyk7XG4gIGluZm9UaXRsZS50ZXh0Q29udGVudCA9ICdQZXBwZXJlZCBSaWNlJztcbiAgaW5mb1N1Yi5jbGFzc0xpc3QuYWRkKCdncmlkUGcnKTtcbiAgaW5mb1N1Yi50ZXh0Q29udGVudCA9ICdEb2xvcmVtcXVlIG9tbmlzIGV4ZXJjaXRhdGlvbmVtIG51bGxhIHJhdGlvbmUgcGVyZmVyZW5kaXMsIHF1YW0sIGluY2lkdW50IGVhcnVtIGFzc3VtZW5kYSBlaXVzLic7XG4gIHJldHVybiB7IGluZm9EaXYsIGluZm9UaXRsZSwgaW5mb1N1YiB9O1xufTtcblxuZnVuY3Rpb24gYm94RWxlbWVudCgpIHtcbiAgY29uc3QgYm94ID0gW107XG4gIGxldCBwaWMgPSB0cnVlO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IDQ7IGkgKz0gMSkge1xuICAgIGNvbnN0IGJveENvbnRlbnQgPSBib3hJbmZvKCkuaW5mb0RpdjtcbiAgICBib3hDb250ZW50LmFwcGVuZENoaWxkKGJveEluZm8oKS5pbmZvVGl0bGUpO1xuICAgIGJveENvbnRlbnQuYXBwZW5kQ2hpbGQoYm94SW5mbygpLmluZm9TdWIpO1xuICAgIGNvbnN0IGFueSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGFueS5jbGFzc0xpc3QuYWRkKCdncmlkSXRlbScpO1xuICAgIGlmIChwaWMpIHtcbiAgICAgIGFueS5hcHBlbmRDaGlsZChpbWFnZSgpLmltZ09uZSk7XG4gICAgICBwaWMgPSBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgYW55LmFwcGVuZENoaWxkKGltYWdlKCkuaW1nVHdvKTtcbiAgICAgIHBpYyA9IHRydWU7XG4gICAgfVxuICAgIGFueS5hcHBlbmRDaGlsZChib3hJbmZvKCkuaW5mb0Rpdik7XG4gICAgYW55LmFwcGVuZENoaWxkKGJveENvbnRlbnQpO1xuICAgIGJveC5wdXNoKGFueSk7XG4gIH1cbiAgcmV0dXJuIHsgYm94IH07XG59XG5cbmNvbnN0IG1lbnVGdW5jID0gKG1lbnVEaXYpID0+IHtcbiAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBncmlkQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGxldCBib3ggPSBib3hFbGVtZW50KCk7XG4gIGJveCA9IE9iamVjdC5lbnRyaWVzKGJveCk7XG4gIGJveCA9IGJveFswXVsxXTtcbiAgbWVudURpdi5pZCA9ICdtZW51JztcbiAgbWVudURpdi5jbGFzc0xpc3QuYWRkKFxuICAgICdtZW51LWJnJyxcbiAgICAnbWVudUNvbnRhaW5lcidcbiAgKTtcbiAgaGVhZGluZy50ZXh0Q29udGVudCA9ICdTcGVjaWFsIG1lbnUnO1xuICBoZWFkaW5nLmNsYXNzTGlzdC5hZGQoJ21lbnVUaXRsZScpO1xuICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbWVudS12Jyk7XG4gIGdyaWRCb3guY2xhc3NMaXN0LmFkZCgnbWVudUdyaWQnKTtcblxuICBtZW51RGl2LmFwcGVuZENoaWxkKGhlYWRpbmcpO1xuICBtZW51RGl2LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChncmlkQm94KTtcbiAgZm9yIChsZXQgYSA9IDA7IGEgPCBib3gubGVuZ3RoOyBhICs9IDEpIHtcbiAgICBncmlkQm94LmFwcGVuZENoaWxkKGJveFthXSk7XG4gIH1cbiAgcmV0dXJuIG1lbnVEaXY7XG59O1xuXG4vLyBjb25zdCBzaG93TWVudSA9ICgpID0+IHtcbi8vICAgY29udGVudC5pbnNlcnRBZGphY2VudEVsZW1lbnQoJ2FmdGVyYmVnaW4nLCBtZW51RnVuYyhtZW51RGl2KSk7XG4vLyB9XG5cbmV4cG9ydCB7bWVudUZ1bmMgYXMgc2hvd01lbnV9OyIsImNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuY29uc3QgbmF2RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbmNvbnN0IG5hdkZ1bmMgPSAobmF2RGl2KSA9PiB7XG4gIGNvbnN0IG5hdk9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBuYXZUd28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgbmF2VGhyZWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICBuYXZEaXYuY2xhc3NMaXN0LmFkZCgndGFicycsICduYXYtY29udGFpbmVyJyk7XG4gIG5hdk9uZS5jbGFzc0xpc3QuYWRkKCdob21lJywgJ3RhYicsICduYXYtc3R5bGUnLCAnaW5kaWNhdG9yJyk7XG4gIG5hdk9uZS5pZCA9ICdobSc7XG4gIG5hdk9uZS50ZXh0Q29udGVudCA9ICdIb21lJztcbiAgbmF2VHdvLmNsYXNzTGlzdC5hZGQoJ21lbnUnLCAndGFiJywgJ25hdi1zdHlsZScpO1xuICBuYXZUd28uaWQgPSAnbW4nO1xuICBuYXZUd28udGV4dENvbnRlbnQgPSAnTWVudSc7XG4gIG5hdlRocmVlLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QnLCAndGFiJywgJ25hdi1zdHlsZScpO1xuICBuYXZUaHJlZS5pZCA9ICdjbic7XG4gIG5hdlRocmVlLnRleHRDb250ZW50ID0gJ0NvbnRhY3QnO1xuXG4gIG5hdkRpdi5hcHBlbmRDaGlsZChuYXZPbmUpO1xuICBuYXZEaXYuYXBwZW5kQ2hpbGQobmF2VHdvKTtcbiAgbmF2RGl2LmFwcGVuZENoaWxkKG5hdlRocmVlKTtcblxuICByZXR1cm4gbmF2RGl2O1xufVxuXG5jb25zdCBzaG93TmF2ID0gKCkgPT4ge1xuICAvLyBjb250ZW50LmFwcGVuZENoaWxkKG5hdkZ1bmMobmF2RGl2KSk7XG4gIGNvbnRlbnQuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCdiZWZvcmViZWdpbicsIG5hdkZ1bmMobmF2RGl2KSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBzaG93TmF2OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiXG5pbXBvcnQgc2hvd0hvbWUgZnJvbSAnLi9ob21lJztcbmltcG9ydCBzaG93TWVudSBmcm9tICcuL21lbnUnO1xuaW1wb3J0IHNob3dOYXYgZnJvbSAnLi9uYXYnO1xuXG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcblxuY29uc3QgcmVuZGVyUGFnZSA9IChsb2NhdGlvbiwgcGFnZSkgPT4ge1xuICBsb2NhdGlvbi5yZXBsYWNlQ2hpbGRyZW4oKVxuICBwYWdlKCk7XG59O1xuc2hvd05hdigpXG5zaG93SG9tZSgpXG4vLyBjb25zdCB0YWJCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFiJyk7XG5cbi8vICAgY29uc3QgaG9tZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdobScpO1xuLy8gICBjb25zdCBvbmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaG9tZScpO1xuLy8gICBjb25zdCBtZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21uJyk7XG4vLyAgIGNvbnN0IHR3byA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZW51Jyk7XG4vLyAgIGNvbnN0IGNvbnRhY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY24nKTtcblxuICAvLyB0YWJCdXR0b24uZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gIC8vICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgLy8gICAgIGlmIChlLnRhcmdldC50ZXh0Q29udGVudCA9PT0gJ0hvbWUnKSB7XG4gIC8vICAgICAgaG9tZS5jbGFzc0xpc3QuYWRkKCdpbmRpY2F0b3InKSBcbiAgLy8gICAgICBtZW51LmNsYXNzTGlzdC5yZW1vdmUoJ2luZGljYXRvcicpIFxuICAvLyAgICAgIGNvbnRhY3QuY2xhc3NMaXN0LnJlbW92ZSgnaW5kaWNhdG9yJykgXG4gIC8vICAgICAgIG9uZS5jbGFzc0xpc3QuYWRkKCdzaG93JylcbiAgLy8gICAgIH1cbiAgLy8gICAgIGlmIChlLnRhcmdldC50ZXh0Q29udGVudCA9PT0gJ01lbnUnKSB7XG4gIC8vICAgICAgIGhvbWUuY2xhc3NMaXN0LnJlbW92ZSgnaW5kaWNhdG9yJykgXG4gIC8vICAgICAgIG1lbnUuY2xhc3NMaXN0LmFkZCgnaW5kaWNhdG9yJykgXG4gIC8vICAgICAgIGNvbnRhY3QuY2xhc3NMaXN0LnJlbW92ZSgnaW5kaWNhdG9yJykgXG4gIC8vICAgICAgIG9uZS5jbGFzc0xpc3QuYWRkKCdoaWRlJylcbiAgLy8gICAgICAgc2hvd01lbnUoKS5yZW1vdmUoKVxuICAvLyAgICAgICBzaG93TWVudSgpXG4gIC8vICAgICAgIC8vIHJlbmRlclBhZ2UoY29udGVudCwgc2hvd01lbnUpXG4gIC8vICAgICB9XG4gIC8vICAgICBpZiAoZS50YXJnZXQudGV4dENvbnRlbnQgPT09ICdDb250YWN0Jykge1xuICAvLyAgICAgIGhvbWUuY2xhc3NMaXN0LnJlbW92ZSgnaW5kaWNhdG9yJykgXG4gIC8vICAgICAgbWVudS5jbGFzc0xpc3QucmVtb3ZlKCdpbmRpY2F0b3InKSBcbiAgLy8gICAgICBjb250YWN0LmNsYXNzTGlzdC5hZGQoJ2luZGljYXRvcicpIFxuICAgICAgICBcbiAgLy8gICAgIH1cbiAgLy8gICB9KTtcbiAgLy8gfSk7XG5cbi8vIGNvbnN0IGl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaXRlbScpOyAgXG5jb25zdCB0YWJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhYicpO1xuY29uc3QgdGFiTWV0aG9kcyA9IFtzaG93SG9tZSwgc2hvd01lbnVdO1xuXG5jb25zdCBvcGVuVGFiID0gKGluZGV4KSA9PiB7XG4gIGNvbnRlbnQuaW5uZXJIVE1MID0gJyc7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YWJzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgdGFic1tpXS5jbGFzc0xpc3QucmVtb3ZlKCdpbmRpY2F0b3InKTtcbiAgfVxuXG4gIHRhYnNbaW5kZXhdLmNsYXNzTGlzdC5hZGQoJ2luZGljYXRvcicpO1xuICB0YWJNZXRob2RzW2luZGV4XSgpO1xufTtcblxuZm9yIChsZXQgaSA9IDA7IGkgPCB0YWJzLmxlbmd0aDsgaSArPSAxKSB7XG4gIHRhYnNbaV0ub25jbGljayA9IG9wZW5UYWIuYmluZChudWxsLCBpKTtcbn1cbiAgIl0sInNvdXJjZVJvb3QiOiIifQ==