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
  const contactDiv = document.createElement('div');
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
  contactDiv.style = 'width:100vw;';
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
  const [[, bx]] = box;
  menuDiv.id = 'menu';
  menuDiv.classList.add(
    'menu-bg',
    'menuContainer',
  );
  heading.textContent = 'Special menu';
  heading.classList.add('menuTitle');
  container.classList.add('menu-v');
  gridBox.classList.add('menuGrid');
  menuDiv.appendChild(heading);
  menuDiv.appendChild(container);
  container.appendChild(gridBox);
  for (let a = 0; a < bx.length; a += 1) {
    gridBox.appendChild(bx[a]);
  }
  return menuDiv;
};
const showMenu = () => {
  const homeDiv = document.querySelector('#home');
  const h = menuFunc();
  homeDiv.appendChild(h);
};
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
};

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

(0,_nav__WEBPACK_IMPORTED_MODULE_2__.default)();
(0,_home__WEBPACK_IMPORTED_MODULE_0__.default)();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL25hdi5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLFdBQVcsRTs7Ozs7Ozs7Ozs7Ozs7QUNyQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLFFBQVEsRTs7Ozs7Ozs7Ozs7Ozs7QUNyQnZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLE9BQU87QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsZUFBZTtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxRQUFRLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ3hFeEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsT0FBTyxFOzs7Ozs7VUM5QnRCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7Ozs7Ozs7Ozs7Ozs7O0FDTjhCO0FBQ0E7QUFDRjtBQUNROztBQUVwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDZDQUFPO0FBQ1AsOENBQVE7QUFDUjtBQUNBLG9CQUFvQiwwQ0FBUSxFQUFFLDBDQUFRLEVBQUUsNkNBQVc7QUFDbkQ7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLGlCQUFpQjtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxpQkFBaUI7QUFDaEM7QUFDQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgY29udGFjdEZ1bmMgPSAoKSA9PiB7XG4gIGNvbnN0IGNvbnRhY3REaXZPbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgY29udGFjdERpdlR3byA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gIGNvbnN0IHBPbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGNvbnN0IHBUd28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGNvbnN0IHNPbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIGNvbnN0IHNUd28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIGNvbnN0IGNvbnRhY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29udGFjdERpdi5pZCA9ICdjb250YWN0JztcbiAgY29udGFjdERpdi5jbGFzc0xpc3QuYWRkKCdjb250YWN0LWJnJywgJ2NvbnRhY3RDb250YWluZXInKTtcbiAgY29udGFjdERpdk9uZS5jbGFzc0xpc3QuYWRkKCdjb250YWN0Q29udGVudCcpO1xuICBjb250YWN0RGl2VHdvLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3RCb3gnKTtcbiAgdGl0bGUuY2xhc3NMaXN0LmFkZCgnY29udGFjdFRpdGxlJyk7XG4gIHRpdGxlLnRleHRDb250ZW50ID0gJ0NvbnRhY3QgdXMnO1xuICBzT25lLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3RTcGFuJyk7XG4gIHNPbmUudGV4dENvbnRlbnQgPSAnYWxvcnJAYWxvcnIuY29tJztcbiAgc1R3by5jbGFzc0xpc3QuYWRkKCdjb250YWN0U3BhbicpO1xuICBzVHdvLnRleHRDb250ZW50ID0gJysyMzQtMTExLTAwMC0xNyc7XG4gIHBPbmUudGV4dENvbnRlbnQgPSAnRW1haWw6ICc7XG4gIHBUd28udGV4dENvbnRlbnQgPSAnUGhvbmU6ICc7XG4gIGNvbnRhY3REaXYuYXBwZW5kQ2hpbGQoY29udGFjdERpdk9uZSk7XG4gIGNvbnRhY3REaXZPbmUuYXBwZW5kQ2hpbGQoY29udGFjdERpdlR3byk7XG4gIGNvbnRhY3REaXZUd28uYXBwZW5kQ2hpbGQodGl0bGUpO1xuICBjb250YWN0RGl2VHdvLmFwcGVuZENoaWxkKHBPbmUpO1xuICBjb250YWN0RGl2VHdvLmFwcGVuZENoaWxkKHBUd28pO1xuICBwT25lLmFwcGVuZENoaWxkKHNPbmUpO1xuICBwVHdvLmFwcGVuZENoaWxkKHNUd28pO1xuICBjb250YWN0RGl2LnN0eWxlID0gJ3dpZHRoOjEwMHZ3Oyc7XG4gIHJldHVybiBjb250YWN0RGl2O1xufTtcbmNvbnN0IHNob3dDb250YWN0ID0gKCkgPT4ge1xuICBjb25zdCBob21lRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2hvbWUnKTtcbiAgY29uc3QgaCA9IGNvbnRhY3RGdW5jKCk7XG4gIGhvbWVEaXYuYXBwZW5kQ2hpbGQoaCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBzaG93Q29udGFjdDsiLCJjb25zdCBob21lRnVuYyA9ICgpID0+IHtcbiAgY29uc3QgaG9tZURpdk9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBob21lRGl2VHdvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICBjb25zdCBwYXJhZ3JhZ2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGhvbWVEaXZPbmUuY2xhc3NMaXN0LmFkZCgnaG9tZUNvbnRlbnQnKTtcbiAgaG9tZURpdlR3by5jbGFzc0xpc3QuYWRkKCdob21lQm94Jyk7XG4gIGhlYWRpbmcuY2xhc3NMaXN0LmFkZCgnaG9tZVRpdGxlJyk7XG4gIHBhcmFncmFnaC5jbGFzc0xpc3QuYWRkKCdob21lUGcnKTtcbiAgaGVhZGluZy50ZXh0Q29udGVudCA9ICdXZWxjb21lIHRvIEFsb3JyISc7XG4gIHBhcmFncmFnaC50ZXh0Q29udGVudCA9ICdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciwgYWRpcGlzaWNpbmcgZWxpdC4gUXVhbSBjdXBpZGl0YXRlLCBpcHN1bSBzYWVwZSBvZGlvIHNpbnQgbmVxdWUgZmFjaWxpcyBxdW9kIGN1bHBhIGFuaW1pLCBkb2xvcmVtIGNvbnNlcXV1bnR1ciBjb25zZXF1YXR1ci4gRWEsIGV4IHZvbHVwdGF0dW0hIFF1YW0sIHJhdGlvbmUgZG9sb3J1bT8gSW4sIHJlaWNpZW5kaXMgbmloaWwuIE1pbmltYSBzYWVwZSBpdXJlIHV0IGV4IHByYWVzZW50aXVtLiBRdWlkZW0gZXNzZSByZXBlbGxlbmR1cyBtb2xlc3RpYXMgc2ltaWxpcXVlIGV4cGVkaXRhIGlsbHVtPyc7XG4gIGhvbWVEaXZUd28uYXBwZW5kQ2hpbGQoaGVhZGluZyk7XG4gIGhvbWVEaXZUd28uYXBwZW5kQ2hpbGQocGFyYWdyYWdoKTtcbiAgaG9tZURpdk9uZS5hcHBlbmRDaGlsZChob21lRGl2VHdvKTtcbiAgcmV0dXJuIGhvbWVEaXZPbmU7XG59O1xuY29uc3Qgc2hvd0hvbWUgPSAoKSA9PiB7XG4gIGNvbnN0IGhvbWVEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaG9tZScpO1xuICBjb25zdCBoID0gaG9tZUZ1bmMoKTtcbiAgaG9tZURpdi5hcHBlbmRDaGlsZChoKTtcbn07XG5leHBvcnQgZGVmYXVsdCBzaG93SG9tZTsiLCJjb25zdCBpbWFnZSA9ICgpID0+IHtcbiAgY29uc3QgaW1nT25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIGNvbnN0IGltZ1R3byA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBpbWdPbmUuY2xhc3NMaXN0LmFkZCgnZ3JpZEltYWdlJyk7XG4gIGltZ1R3by5jbGFzc0xpc3QuYWRkKCdncmlkSW1hZ2UnKTtcbiAgaW1nT25lLnNyYyA9ICcuLi9hc3NldHMvaW1nLzYuanBnJztcbiAgaW1nVHdvLnNyYyA9ICcuLi9hc3NldHMvaW1nLzExLnBuZyc7XG4gIHJldHVybiB7IGltZ09uZSwgaW1nVHdvIH07XG59O1xuY29uc3QgYm94SW5mbyA9ICgpID0+IHtcbiAgY29uc3QgaW5mb0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBpbmZvVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xuICBjb25zdCBpbmZvU3ViID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBpbmZvRGl2LmNsYXNzTGlzdC5hZGQoJ2dyaWQtaXYnKTtcbiAgaW5mb1RpdGxlLmNsYXNzTGlzdC5hZGQoJ2dyaWRUaXRsZScpO1xuICBpbmZvVGl0bGUudGV4dENvbnRlbnQgPSAnUGVwcGVyZWQgUmljZSc7XG4gIGluZm9TdWIuY2xhc3NMaXN0LmFkZCgnZ3JpZFBnJyk7XG4gIGluZm9TdWIudGV4dENvbnRlbnQgPSAnRG9sb3JlbXF1ZSBvbW5pcyBleGVyY2l0YXRpb25lbSBudWxsYSByYXRpb25lIHBlcmZlcmVuZGlzLCBxdWFtLCBpbmNpZHVudCBlYXJ1bSBhc3N1bWVuZGEgZWl1cy4nO1xuICByZXR1cm4geyBpbmZvRGl2LCBpbmZvVGl0bGUsIGluZm9TdWIgfTtcbn07XG5mdW5jdGlvbiBib3hFbGVtZW50KCkge1xuICBjb25zdCBib3ggPSBbXTtcbiAgbGV0IHBpYyA9IHRydWU7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgNDsgaSArPSAxKSB7XG4gICAgY29uc3QgYm94Q29udGVudCA9IGJveEluZm8oKS5pbmZvRGl2O1xuICAgIGJveENvbnRlbnQuYXBwZW5kQ2hpbGQoYm94SW5mbygpLmluZm9UaXRsZSk7XG4gICAgYm94Q29udGVudC5hcHBlbmRDaGlsZChib3hJbmZvKCkuaW5mb1N1Yik7XG4gICAgY29uc3QgYW55ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYW55LmNsYXNzTGlzdC5hZGQoJ2dyaWRJdGVtJyk7XG4gICAgaWYgKHBpYykge1xuICAgICAgYW55LmFwcGVuZENoaWxkKGltYWdlKCkuaW1nT25lKTtcbiAgICAgIHBpYyA9IGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICBhbnkuYXBwZW5kQ2hpbGQoaW1hZ2UoKS5pbWdUd28pO1xuICAgICAgcGljID0gdHJ1ZTtcbiAgICB9XG4gICAgYW55LmFwcGVuZENoaWxkKGJveEluZm8oKS5pbmZvRGl2KTtcbiAgICBhbnkuYXBwZW5kQ2hpbGQoYm94Q29udGVudCk7XG4gICAgYm94LnB1c2goYW55KTtcbiAgfVxuICByZXR1cm4geyBib3ggfTtcbn1cbmNvbnN0IG1lbnVGdW5jID0gKCkgPT4ge1xuICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IGdyaWRCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgbWVudURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBsZXQgYm94ID0gYm94RWxlbWVudCgpO1xuICBib3ggPSBPYmplY3QuZW50cmllcyhib3gpO1xuICBjb25zdCBbWywgYnhdXSA9IGJveDtcbiAgbWVudURpdi5pZCA9ICdtZW51JztcbiAgbWVudURpdi5jbGFzc0xpc3QuYWRkKFxuICAgICdtZW51LWJnJyxcbiAgICAnbWVudUNvbnRhaW5lcicsXG4gICk7XG4gIGhlYWRpbmcudGV4dENvbnRlbnQgPSAnU3BlY2lhbCBtZW51JztcbiAgaGVhZGluZy5jbGFzc0xpc3QuYWRkKCdtZW51VGl0bGUnKTtcbiAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ21lbnUtdicpO1xuICBncmlkQm94LmNsYXNzTGlzdC5hZGQoJ21lbnVHcmlkJyk7XG4gIG1lbnVEaXYuYXBwZW5kQ2hpbGQoaGVhZGluZyk7XG4gIG1lbnVEaXYuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGdyaWRCb3gpO1xuICBmb3IgKGxldCBhID0gMDsgYSA8IGJ4Lmxlbmd0aDsgYSArPSAxKSB7XG4gICAgZ3JpZEJveC5hcHBlbmRDaGlsZChieFthXSk7XG4gIH1cbiAgcmV0dXJuIG1lbnVEaXY7XG59O1xuY29uc3Qgc2hvd01lbnUgPSAoKSA9PiB7XG4gIGNvbnN0IGhvbWVEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaG9tZScpO1xuICBjb25zdCBoID0gbWVudUZ1bmMoKTtcbiAgaG9tZURpdi5hcHBlbmRDaGlsZChoKTtcbn07XG5leHBvcnQgZGVmYXVsdCBzaG93TWVudTtcbiIsImNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuY29uc3QgbmF2RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbmNvbnN0IG5hdkZ1bmMgPSAobmF2RGl2KSA9PiB7XG4gIGNvbnN0IG5hdk9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBuYXZUd28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgbmF2VGhyZWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICBuYXZEaXYuY2xhc3NMaXN0LmFkZCgndGFicycsICduYXYtY29udGFpbmVyJyk7XG4gIG5hdk9uZS5jbGFzc0xpc3QuYWRkKCdob21lJywgJ3RhYicsICduYXYtc3R5bGUnLCAnaW5kaWNhdG9yJyk7XG4gIG5hdk9uZS5pZCA9ICdobSc7XG4gIG5hdk9uZS50ZXh0Q29udGVudCA9ICdIb21lJztcbiAgbmF2VHdvLmNsYXNzTGlzdC5hZGQoJ21lbnUnLCAndGFiJywgJ25hdi1zdHlsZScpO1xuICBuYXZUd28uaWQgPSAnbW4nO1xuICBuYXZUd28udGV4dENvbnRlbnQgPSAnTWVudSc7XG4gIG5hdlRocmVlLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QnLCAndGFiJywgJ25hdi1zdHlsZScpO1xuICBuYXZUaHJlZS5pZCA9ICdjbic7XG4gIG5hdlRocmVlLnRleHRDb250ZW50ID0gJ0NvbnRhY3QnO1xuXG4gIG5hdkRpdi5hcHBlbmRDaGlsZChuYXZPbmUpO1xuICBuYXZEaXYuYXBwZW5kQ2hpbGQobmF2VHdvKTtcbiAgbmF2RGl2LmFwcGVuZENoaWxkKG5hdlRocmVlKTtcblxuICByZXR1cm4gbmF2RGl2O1xufTtcblxuY29uc3Qgc2hvd05hdiA9ICgpID0+IHtcbiAgY29udGVudC5pbnNlcnRBZGphY2VudEVsZW1lbnQoJ2JlZm9yZWJlZ2luJywgbmF2RnVuYyhuYXZEaXYpKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHNob3dOYXY7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgc2hvd0hvbWUgZnJvbSAnLi9ob21lJztcbmltcG9ydCBzaG93TWVudSBmcm9tICcuL21lbnUnO1xuaW1wb3J0IHNob3dOYXYgZnJvbSAnLi9uYXYnO1xuaW1wb3J0IHNob3dDb250YWN0IGZyb20gJy4vY29udGFjdCc7XG5cbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuY29uc3QgaG9tZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuaG9tZURpdi5pZCA9ICdob21lJztcbmhvbWVEaXYuY2xhc3NMaXN0LmFkZChcbiAgJ3RvcC1iZycsXG4gICdob21lQ29udGFpbmVyJyxcbik7XG5jb250ZW50LmFwcGVuZENoaWxkKGhvbWVEaXYpO1xuXG5zaG93TmF2KCk7XG5zaG93SG9tZSgpO1xuY29uc3QgdGFicyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YWInKTtcbmNvbnN0IHRhYk1ldGhvZHMgPSBbc2hvd0hvbWUsIHNob3dNZW51LCBzaG93Q29udGFjdF07XG5jb25zdCBob21lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2hvbWUnKTtcbmNvbnN0IG9wZW5UYWIgPSAoaW5kZXgpID0+IHtcbiAgaG9tZS5pbm5lckhUTUwgPSAnJztcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YWJzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgdGFic1tpXS5jbGFzc0xpc3QucmVtb3ZlKCdpbmRpY2F0b3InKTtcbiAgfVxuICB0YWJzW2luZGV4XS5jbGFzc0xpc3QuYWRkKCdpbmRpY2F0b3InKTtcbiAgdGFiTWV0aG9kc1tpbmRleF0oKTtcbn07XG5mb3IgKGxldCBpID0gMDsgaSA8IHRhYnMubGVuZ3RoOyBpICs9IDEpIHtcbiAgdGFic1tpXS5vbmNsaWNrID0gb3BlblRhYi5iaW5kKG51bGwsIGkpO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==