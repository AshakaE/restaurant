/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const contactFunc = () => {
  const contactDivOne = document.createElement('div');
  const contactDivTwo = document.createElement('div');
  const title = document.createElement('h2');
  const pOne = document.createElement('p');
  const pTwo = document.createElement('p');
  const sOne = document.createElement('span');
  const sTwo = document.createElement('span');
  const contactDiv= document.createElement('div');
  contactDiv.id = 'contact';
  contactDiv.classList.add('contact-bg', 'contactContainer');
  contactDivOne.classList.add('contactContent');
  contactDivTwo.classList.add('contactBox');
  title.classList.add('contactTitle');
  title.textContent = 'Contact us';
  sOne.classList.add('contactSpan');
  sOne.textContent = 'alorr@alorr.com';
  sTwo.classList.add('contactSpan');
  sTwo.textContent = '+234-111-000-17';
  pOne.textContent = 'Email: ';
  pTwo.textContent = 'Phone: ';
  contactDiv.appendChild(contactDivOne);
  contactDivOne.appendChild(contactDivTwo);
  contactDivTwo.appendChild(title);
  contactDivTwo.appendChild(pOne);
  contactDivTwo.appendChild(pTwo);
  pOne.appendChild(sOne);
  pTwo.appendChild(sTwo);
  contactDiv.style = 'width:100vw;'
  return contactDiv;
};
const showContact = () => {
  const homeDiv = document.querySelector('#home');
  const h = contactFunc();
  homeDiv.appendChild(h);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showContact);

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const homeFunc = () => {
  const homeDivOne = document.createElement('div');
  const homeDivTwo = document.createElement('div');
  const heading = document.createElement('h1');
  const paragragh = document.createElement('p');
  homeDivOne.classList.add('homeContent');
  homeDivTwo.classList.add('homeBox');
  heading.classList.add('homeTitle');
  paragragh.classList.add('homePg');
  heading.textContent = 'Welcome to Alorr!';
  paragragh.textContent = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam cupiditate, ipsum saepe odio sint neque facilis quod culpa animi, dolorem consequuntur consequatur. Ea, ex voluptatum! Quam, ratione dolorum? In, reiciendis nihil. Minima saepe iure ut ex praesentium. Quidem esse repellendus molestias similique expedita illum?';
  homeDivTwo.appendChild(heading);
  homeDivTwo.appendChild(paragragh);
  homeDivOne.appendChild(homeDivTwo);
  return homeDivOne;
};
const showHome = () => {
  const homeDiv = document.querySelector('#home');
  const h = homeFunc();
  homeDiv.appendChild(h);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showHome);

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
const menuFunc = () => {
  const heading = document.createElement('h2');
  const container = document.createElement('div');
  const gridBox = document.createElement('div');
  const menuDiv = document.createElement('div');
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
const showMenu = () => {
  const homeDiv = document.querySelector('#home');
  const h = menuFunc();
  homeDiv.appendChild(h);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showMenu);

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
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact */ "./src/contact.js");





const content = document.getElementById('content');
const homeDiv = document.createElement('div');
homeDiv.id = 'home';
homeDiv.classList.add(
  'top-bg',
  'homeContainer',
);
content.appendChild(homeDiv);

(0,_nav__WEBPACK_IMPORTED_MODULE_2__.default)()
;(0,_home__WEBPACK_IMPORTED_MODULE_0__.default)()
const tabs = document.querySelectorAll('.tab');
const tabMethods = [_home__WEBPACK_IMPORTED_MODULE_0__.default, _menu__WEBPACK_IMPORTED_MODULE_1__.default, _contact__WEBPACK_IMPORTED_MODULE_3__.default];
const home = document.querySelector('#home');
const openTab = (index) => {
  home.innerHTML = '';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL25hdi5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLFdBQVcsRTs7Ozs7Ozs7Ozs7Ozs7QUNyQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLFFBQVEsRTs7Ozs7Ozs7Ozs7Ozs7QUNyQnZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLE9BQU87QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsZ0JBQWdCO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLFFBQVEsRTs7Ozs7Ozs7Ozs7Ozs7QUN4RXZCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGlFQUFlLE9BQU8sRTs7Ozs7O1VDOUJ0QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7Ozs7Ozs7Ozs7OztBQ044QjtBQUNBO0FBQ0Y7QUFDUTs7QUFFcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw2Q0FBTztBQUNQLCtDQUFRO0FBQ1I7QUFDQSxvQkFBb0IsMENBQVEsRUFBRSwwQ0FBUSxFQUFFLDZDQUFXO0FBQ25EO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixpQkFBaUI7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsaUJBQWlCO0FBQ2hDO0FBQ0EiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGNvbnRhY3RGdW5jID0gKCkgPT4ge1xuICBjb25zdCBjb250YWN0RGl2T25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IGNvbnRhY3REaXZUd28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICBjb25zdCBwT25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBjb25zdCBwVHdvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBjb25zdCBzT25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBjb25zdCBzVHdvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBjb25zdCBjb250YWN0RGl2PSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29udGFjdERpdi5pZCA9ICdjb250YWN0JztcbiAgY29udGFjdERpdi5jbGFzc0xpc3QuYWRkKCdjb250YWN0LWJnJywgJ2NvbnRhY3RDb250YWluZXInKTtcbiAgY29udGFjdERpdk9uZS5jbGFzc0xpc3QuYWRkKCdjb250YWN0Q29udGVudCcpO1xuICBjb250YWN0RGl2VHdvLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3RCb3gnKTtcbiAgdGl0bGUuY2xhc3NMaXN0LmFkZCgnY29udGFjdFRpdGxlJyk7XG4gIHRpdGxlLnRleHRDb250ZW50ID0gJ0NvbnRhY3QgdXMnO1xuICBzT25lLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3RTcGFuJyk7XG4gIHNPbmUudGV4dENvbnRlbnQgPSAnYWxvcnJAYWxvcnIuY29tJztcbiAgc1R3by5jbGFzc0xpc3QuYWRkKCdjb250YWN0U3BhbicpO1xuICBzVHdvLnRleHRDb250ZW50ID0gJysyMzQtMTExLTAwMC0xNyc7XG4gIHBPbmUudGV4dENvbnRlbnQgPSAnRW1haWw6ICc7XG4gIHBUd28udGV4dENvbnRlbnQgPSAnUGhvbmU6ICc7XG4gIGNvbnRhY3REaXYuYXBwZW5kQ2hpbGQoY29udGFjdERpdk9uZSk7XG4gIGNvbnRhY3REaXZPbmUuYXBwZW5kQ2hpbGQoY29udGFjdERpdlR3byk7XG4gIGNvbnRhY3REaXZUd28uYXBwZW5kQ2hpbGQodGl0bGUpO1xuICBjb250YWN0RGl2VHdvLmFwcGVuZENoaWxkKHBPbmUpO1xuICBjb250YWN0RGl2VHdvLmFwcGVuZENoaWxkKHBUd28pO1xuICBwT25lLmFwcGVuZENoaWxkKHNPbmUpO1xuICBwVHdvLmFwcGVuZENoaWxkKHNUd28pO1xuICBjb250YWN0RGl2LnN0eWxlID0gJ3dpZHRoOjEwMHZ3OydcbiAgcmV0dXJuIGNvbnRhY3REaXY7XG59O1xuY29uc3Qgc2hvd0NvbnRhY3QgPSAoKSA9PiB7XG4gIGNvbnN0IGhvbWVEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaG9tZScpO1xuICBjb25zdCBoID0gY29udGFjdEZ1bmMoKTtcbiAgaG9tZURpdi5hcHBlbmRDaGlsZChoKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHNob3dDb250YWN0OyIsImNvbnN0IGhvbWVGdW5jID0gKCkgPT4ge1xuICBjb25zdCBob21lRGl2T25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IGhvbWVEaXZUd28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gIGNvbnN0IHBhcmFncmFnaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgaG9tZURpdk9uZS5jbGFzc0xpc3QuYWRkKCdob21lQ29udGVudCcpO1xuICBob21lRGl2VHdvLmNsYXNzTGlzdC5hZGQoJ2hvbWVCb3gnKTtcbiAgaGVhZGluZy5jbGFzc0xpc3QuYWRkKCdob21lVGl0bGUnKTtcbiAgcGFyYWdyYWdoLmNsYXNzTGlzdC5hZGQoJ2hvbWVQZycpO1xuICBoZWFkaW5nLnRleHRDb250ZW50ID0gJ1dlbGNvbWUgdG8gQWxvcnIhJztcbiAgcGFyYWdyYWdoLnRleHRDb250ZW50ID0gJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyLCBhZGlwaXNpY2luZyBlbGl0LiBRdWFtIGN1cGlkaXRhdGUsIGlwc3VtIHNhZXBlIG9kaW8gc2ludCBuZXF1ZSBmYWNpbGlzIHF1b2QgY3VscGEgYW5pbWksIGRvbG9yZW0gY29uc2VxdXVudHVyIGNvbnNlcXVhdHVyLiBFYSwgZXggdm9sdXB0YXR1bSEgUXVhbSwgcmF0aW9uZSBkb2xvcnVtPyBJbiwgcmVpY2llbmRpcyBuaWhpbC4gTWluaW1hIHNhZXBlIGl1cmUgdXQgZXggcHJhZXNlbnRpdW0uIFF1aWRlbSBlc3NlIHJlcGVsbGVuZHVzIG1vbGVzdGlhcyBzaW1pbGlxdWUgZXhwZWRpdGEgaWxsdW0/JztcbiAgaG9tZURpdlR3by5hcHBlbmRDaGlsZChoZWFkaW5nKTtcbiAgaG9tZURpdlR3by5hcHBlbmRDaGlsZChwYXJhZ3JhZ2gpO1xuICBob21lRGl2T25lLmFwcGVuZENoaWxkKGhvbWVEaXZUd28pO1xuICByZXR1cm4gaG9tZURpdk9uZTtcbn07XG5jb25zdCBzaG93SG9tZSA9ICgpID0+IHtcbiAgY29uc3QgaG9tZURpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNob21lJyk7XG4gIGNvbnN0IGggPSBob21lRnVuYygpO1xuICBob21lRGl2LmFwcGVuZENoaWxkKGgpO1xufTtcbmV4cG9ydCBkZWZhdWx0IHNob3dIb21lOyIsImNvbnN0IGltYWdlID0gKCkgPT4ge1xuICBjb25zdCBpbWdPbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgY29uc3QgaW1nVHdvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIGltZ09uZS5jbGFzc0xpc3QuYWRkKCdncmlkSW1hZ2UnKTtcbiAgaW1nVHdvLmNsYXNzTGlzdC5hZGQoJ2dyaWRJbWFnZScpO1xuICBpbWdPbmUuc3JjID0gJy4uL2Fzc2V0cy9pbWcvNi5qcGcnO1xuICBpbWdUd28uc3JjID0gJy4uL2Fzc2V0cy9pbWcvMTEucG5nJztcbiAgcmV0dXJuIHsgaW1nT25lLCBpbWdUd28gfTtcbn07XG5jb25zdCBib3hJbmZvID0gKCkgPT4ge1xuICBjb25zdCBpbmZvRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IGluZm9UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XG4gIGNvbnN0IGluZm9TdWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGluZm9EaXYuY2xhc3NMaXN0LmFkZCgnZ3JpZC1pdicpO1xuICBpbmZvVGl0bGUuY2xhc3NMaXN0LmFkZCgnZ3JpZFRpdGxlJyk7XG4gIGluZm9UaXRsZS50ZXh0Q29udGVudCA9ICdQZXBwZXJlZCBSaWNlJztcbiAgaW5mb1N1Yi5jbGFzc0xpc3QuYWRkKCdncmlkUGcnKTtcbiAgaW5mb1N1Yi50ZXh0Q29udGVudCA9ICdEb2xvcmVtcXVlIG9tbmlzIGV4ZXJjaXRhdGlvbmVtIG51bGxhIHJhdGlvbmUgcGVyZmVyZW5kaXMsIHF1YW0sIGluY2lkdW50IGVhcnVtIGFzc3VtZW5kYSBlaXVzLic7XG4gIHJldHVybiB7IGluZm9EaXYsIGluZm9UaXRsZSwgaW5mb1N1YiB9O1xufTtcbmZ1bmN0aW9uIGJveEVsZW1lbnQoKSB7XG4gIGNvbnN0IGJveCA9IFtdO1xuICBsZXQgcGljID0gdHJ1ZTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCA0OyBpICs9IDEpIHtcbiAgICBjb25zdCBib3hDb250ZW50ID0gYm94SW5mbygpLmluZm9EaXY7XG4gICAgYm94Q29udGVudC5hcHBlbmRDaGlsZChib3hJbmZvKCkuaW5mb1RpdGxlKTtcbiAgICBib3hDb250ZW50LmFwcGVuZENoaWxkKGJveEluZm8oKS5pbmZvU3ViKTtcbiAgICBjb25zdCBhbnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBhbnkuY2xhc3NMaXN0LmFkZCgnZ3JpZEl0ZW0nKTtcbiAgICBpZiAocGljKSB7XG4gICAgICBhbnkuYXBwZW5kQ2hpbGQoaW1hZ2UoKS5pbWdPbmUpO1xuICAgICAgcGljID0gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFueS5hcHBlbmRDaGlsZChpbWFnZSgpLmltZ1R3byk7XG4gICAgICBwaWMgPSB0cnVlO1xuICAgIH1cbiAgICBhbnkuYXBwZW5kQ2hpbGQoYm94SW5mbygpLmluZm9EaXYpO1xuICAgIGFueS5hcHBlbmRDaGlsZChib3hDb250ZW50KTtcbiAgICBib3gucHVzaChhbnkpO1xuICB9XG4gIHJldHVybiB7IGJveCB9O1xufVxuY29uc3QgbWVudUZ1bmMgPSAoKSA9PiB7XG4gIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgZ3JpZEJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBtZW51RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGxldCBib3ggPSBib3hFbGVtZW50KCk7XG4gIGJveCA9IE9iamVjdC5lbnRyaWVzKGJveCk7XG4gIGJveCA9IGJveFswXVsxXTtcbiAgbWVudURpdi5pZCA9ICdtZW51JztcbiAgbWVudURpdi5jbGFzc0xpc3QuYWRkKFxuICAgICdtZW51LWJnJyxcbiAgICAnbWVudUNvbnRhaW5lcidcbiAgKTtcbiAgaGVhZGluZy50ZXh0Q29udGVudCA9ICdTcGVjaWFsIG1lbnUnO1xuICBoZWFkaW5nLmNsYXNzTGlzdC5hZGQoJ21lbnVUaXRsZScpO1xuICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbWVudS12Jyk7XG4gIGdyaWRCb3guY2xhc3NMaXN0LmFkZCgnbWVudUdyaWQnKTtcbiAgbWVudURpdi5hcHBlbmRDaGlsZChoZWFkaW5nKTtcbiAgbWVudURpdi5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZ3JpZEJveCk7XG4gIGZvciAobGV0IGEgPSAwOyBhIDwgYm94Lmxlbmd0aDsgYSArPSAxKSB7XG4gICAgZ3JpZEJveC5hcHBlbmRDaGlsZChib3hbYV0pO1xuICB9XG4gIHJldHVybiBtZW51RGl2O1xufTtcbmNvbnN0IHNob3dNZW51ID0gKCkgPT4ge1xuICBjb25zdCBob21lRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2hvbWUnKTtcbiAgY29uc3QgaCA9IG1lbnVGdW5jKCk7XG4gIGhvbWVEaXYuYXBwZW5kQ2hpbGQoaCk7XG59XG5leHBvcnQgZGVmYXVsdCBzaG93TWVudTsiLCJjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbmNvbnN0IG5hdkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG5jb25zdCBuYXZGdW5jID0gKG5hdkRpdikgPT4ge1xuICBjb25zdCBuYXZPbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgbmF2VHdvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IG5hdlRocmVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgbmF2RGl2LmNsYXNzTGlzdC5hZGQoJ3RhYnMnLCAnbmF2LWNvbnRhaW5lcicpO1xuICBuYXZPbmUuY2xhc3NMaXN0LmFkZCgnaG9tZScsICd0YWInLCAnbmF2LXN0eWxlJywgJ2luZGljYXRvcicpO1xuICBuYXZPbmUuaWQgPSAnaG0nO1xuICBuYXZPbmUudGV4dENvbnRlbnQgPSAnSG9tZSc7XG4gIG5hdlR3by5jbGFzc0xpc3QuYWRkKCdtZW51JywgJ3RhYicsICduYXYtc3R5bGUnKTtcbiAgbmF2VHdvLmlkID0gJ21uJztcbiAgbmF2VHdvLnRleHRDb250ZW50ID0gJ01lbnUnO1xuICBuYXZUaHJlZS5jbGFzc0xpc3QuYWRkKCdjb250YWN0JywgJ3RhYicsICduYXYtc3R5bGUnKTtcbiAgbmF2VGhyZWUuaWQgPSAnY24nO1xuICBuYXZUaHJlZS50ZXh0Q29udGVudCA9ICdDb250YWN0JztcblxuICBuYXZEaXYuYXBwZW5kQ2hpbGQobmF2T25lKTtcbiAgbmF2RGl2LmFwcGVuZENoaWxkKG5hdlR3byk7XG4gIG5hdkRpdi5hcHBlbmRDaGlsZChuYXZUaHJlZSk7XG5cbiAgcmV0dXJuIG5hdkRpdjtcbn1cblxuY29uc3Qgc2hvd05hdiA9ICgpID0+IHtcbiAgY29udGVudC5pbnNlcnRBZGphY2VudEVsZW1lbnQoJ2JlZm9yZWJlZ2luJywgbmF2RnVuYyhuYXZEaXYpKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHNob3dOYXY7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgc2hvd0hvbWUgZnJvbSAnLi9ob21lJztcbmltcG9ydCBzaG93TWVudSBmcm9tICcuL21lbnUnO1xuaW1wb3J0IHNob3dOYXYgZnJvbSAnLi9uYXYnO1xuaW1wb3J0IHNob3dDb250YWN0IGZyb20gJy4vY29udGFjdCc7XG5cbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuY29uc3QgaG9tZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuaG9tZURpdi5pZCA9ICdob21lJztcbmhvbWVEaXYuY2xhc3NMaXN0LmFkZChcbiAgJ3RvcC1iZycsXG4gICdob21lQ29udGFpbmVyJyxcbik7XG5jb250ZW50LmFwcGVuZENoaWxkKGhvbWVEaXYpO1xuXG5zaG93TmF2KClcbnNob3dIb21lKClcbmNvbnN0IHRhYnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFiJyk7XG5jb25zdCB0YWJNZXRob2RzID0gW3Nob3dIb21lLCBzaG93TWVudSwgc2hvd0NvbnRhY3RdO1xuY29uc3QgaG9tZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNob21lJyk7XG5jb25zdCBvcGVuVGFiID0gKGluZGV4KSA9PiB7XG4gIGhvbWUuaW5uZXJIVE1MID0gJyc7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdGFicy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIHRhYnNbaV0uY2xhc3NMaXN0LnJlbW92ZSgnaW5kaWNhdG9yJyk7XG4gIH1cbiAgdGFic1tpbmRleF0uY2xhc3NMaXN0LmFkZCgnaW5kaWNhdG9yJyk7XG4gIHRhYk1ldGhvZHNbaW5kZXhdKCk7XG59O1xuZm9yIChsZXQgaSA9IDA7IGkgPCB0YWJzLmxlbmd0aDsgaSArPSAxKSB7XG4gIHRhYnNbaV0ub25jbGljayA9IG9wZW5UYWIuYmluZChudWxsLCBpKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=