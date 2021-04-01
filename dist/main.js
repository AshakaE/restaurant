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
const contactFunc = (contactDiv) => {
  const contactDivOne = document.createElement('div');
  const contactDivTwo = document.createElement('div');
  const title = document.createElement('h2');
  const pOne = document.createElement('p');
  const pTwo = document.createElement('p');
  const sOne = document.createElement('span');
  const sTwo = document.createElement('span');

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

  return contactDiv;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contactFunc);

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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (homeFunc);

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
    'menuContainer',
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menuFunc);

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
const navFunc = (navDiv) => {
  const navOne = document.createElement('div');
  const navTwo = document.createElement('div');
  const navThree = document.createElement('div');

  navDiv.classList.add('tabs', 'nav-container');
  navOne.classList.add('home', 'nav-style', 'indicator');
  navOne.textContent = 'Home';
  navTwo.classList.add('menu', 'nav-style');
  navTwo.textContent = 'Menu';
  navThree.classList.add('contact', 'nav-style');
  navThree.textContent = 'Contact';

  navDiv.appendChild(navOne);
  navDiv.appendChild(navTwo);
  navDiv.appendChild(navThree);

  return navDiv;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (navFunc);

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
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ "./src/contact.js");
/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nav */ "./src/nav.js");





const content = document.getElementById('content');
const homeDiv = document.createElement('div');
const menuDiv = document.createElement('div');
const contactDiv = document.createElement('div');
const navDiv = document.createElement('div');

const showContent = () => {
  content.appendChild((0,_nav__WEBPACK_IMPORTED_MODULE_3__.default)(navDiv));
  content.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_0__.default)(homeDiv));
  content.appendChild((0,_menu__WEBPACK_IMPORTED_MODULE_1__.default)(menuDiv));
  content.appendChild((0,_contact__WEBPACK_IMPORTED_MODULE_2__.default)(contactDiv));
};

showContent();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL25hdi5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaUVBQWUsV0FBVyxFOzs7Ozs7Ozs7Ozs7OztBQ2pDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQSxpRUFBZSxRQUFRLEU7Ozs7Ozs7Ozs7Ozs7OztBQzNCdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsVUFBVTtBQUNWOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsT0FBTztBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixnQkFBZ0I7QUFDakM7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsUUFBUSxFOzs7Ozs7Ozs7Ozs7OztBQ3pFdkI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaUVBQWUsT0FBTyxFOzs7Ozs7VUNwQnRCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7Ozs7Ozs7Ozs7Ozs7O0FDTjhCO0FBQ0E7QUFDTTtBQUNSOztBQUU1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esc0JBQXNCLDZDQUFPO0FBQzdCLHNCQUFzQiw4Q0FBUTtBQUM5QixzQkFBc0IsOENBQVE7QUFDOUIsc0JBQXNCLGlEQUFXO0FBQ2pDOztBQUVBLGMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGNvbnRhY3RGdW5jID0gKGNvbnRhY3REaXYpID0+IHtcbiAgY29uc3QgY29udGFjdERpdk9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBjb250YWN0RGl2VHdvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgY29uc3QgcE9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgY29uc3QgcFR3byA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgY29uc3Qgc09uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgY29uc3Qgc1R3byA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcblxuICBjb250YWN0RGl2LmlkID0gJ2NvbnRhY3QnO1xuICBjb250YWN0RGl2LmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QtYmcnLCAnY29udGFjdENvbnRhaW5lcicpO1xuICBjb250YWN0RGl2T25lLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3RDb250ZW50Jyk7XG4gIGNvbnRhY3REaXZUd28uY2xhc3NMaXN0LmFkZCgnY29udGFjdEJveCcpO1xuICB0aXRsZS5jbGFzc0xpc3QuYWRkKCdjb250YWN0VGl0bGUnKTtcbiAgdGl0bGUudGV4dENvbnRlbnQgPSAnQ29udGFjdCB1cyc7XG4gIHNPbmUuY2xhc3NMaXN0LmFkZCgnY29udGFjdFNwYW4nKTtcbiAgc09uZS50ZXh0Q29udGVudCA9ICdhbG9yckBhbG9yci5jb20nO1xuICBzVHdvLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3RTcGFuJyk7XG4gIHNUd28udGV4dENvbnRlbnQgPSAnKzIzNC0xMTEtMDAwLTE3JztcbiAgcE9uZS50ZXh0Q29udGVudCA9ICdFbWFpbDogJztcbiAgcFR3by50ZXh0Q29udGVudCA9ICdQaG9uZTogJztcblxuICBjb250YWN0RGl2LmFwcGVuZENoaWxkKGNvbnRhY3REaXZPbmUpO1xuICBjb250YWN0RGl2T25lLmFwcGVuZENoaWxkKGNvbnRhY3REaXZUd28pO1xuICBjb250YWN0RGl2VHdvLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgY29udGFjdERpdlR3by5hcHBlbmRDaGlsZChwT25lKTtcbiAgY29udGFjdERpdlR3by5hcHBlbmRDaGlsZChwVHdvKTtcbiAgcE9uZS5hcHBlbmRDaGlsZChzT25lKTtcbiAgcFR3by5hcHBlbmRDaGlsZChzVHdvKTtcblxuICByZXR1cm4gY29udGFjdERpdjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRhY3RGdW5jOyIsImNvbnN0IGhvbWVGdW5jID0gKGhvbWVEaXYpID0+IHtcbiAgY29uc3QgaG9tZURpdk9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBob21lRGl2VHdvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICBjb25zdCBwYXJhZ3JhZ2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5cbiAgaG9tZURpdi5pZCA9ICdob21lJztcbiAgaG9tZURpdi5jbGFzc0xpc3QuYWRkKFxuICAgICd0b3AtYmcnLFxuICAgICdob21lQ29udGFpbmVyJyxcbiAgKTtcbiAgaG9tZURpdk9uZS5jbGFzc0xpc3QuYWRkKCdob21lQ29udGVudCcpO1xuICBob21lRGl2VHdvLmNsYXNzTGlzdC5hZGQoJ2hvbWVCb3gnKTtcbiAgaGVhZGluZy5jbGFzc0xpc3QuYWRkKCdob21lVGl0bGUnKTtcbiAgcGFyYWdyYWdoLmNsYXNzTGlzdC5hZGQoJ2hvbWVQZycpO1xuXG4gIGhlYWRpbmcudGV4dENvbnRlbnQgPSAnV2VsY29tZSB0byBBbG9yciEnO1xuICBwYXJhZ3JhZ2gudGV4dENvbnRlbnQgPSAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIsIGFkaXBpc2ljaW5nIGVsaXQuIFF1YW0gY3VwaWRpdGF0ZSwgaXBzdW0gc2FlcGUgb2RpbyBzaW50IG5lcXVlIGZhY2lsaXMgcXVvZCBjdWxwYSBhbmltaSwgZG9sb3JlbSBjb25zZXF1dW50dXIgY29uc2VxdWF0dXIuIEVhLCBleCB2b2x1cHRhdHVtISBRdWFtLCByYXRpb25lIGRvbG9ydW0/IEluLCByZWljaWVuZGlzIG5paGlsLiBNaW5pbWEgc2FlcGUgaXVyZSB1dCBleCBwcmFlc2VudGl1bS4gUXVpZGVtIGVzc2UgcmVwZWxsZW5kdXMgbW9sZXN0aWFzIHNpbWlsaXF1ZSBleHBlZGl0YSBpbGx1bT8nO1xuXG4gIGhvbWVEaXZUd28uYXBwZW5kQ2hpbGQoaGVhZGluZyk7XG4gIGhvbWVEaXZUd28uYXBwZW5kQ2hpbGQocGFyYWdyYWdoKTtcbiAgaG9tZURpdk9uZS5hcHBlbmRDaGlsZChob21lRGl2VHdvKTtcbiAgaG9tZURpdi5hcHBlbmRDaGlsZChob21lRGl2T25lKTtcblxuXG4gIHJldHVybiBob21lRGl2O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgaG9tZUZ1bmM7IiwiXG5jb25zdCBpbWFnZSA9ICgpID0+IHtcbiAgY29uc3QgaW1nT25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIGNvbnN0IGltZ1R3byA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBpbWdPbmUuY2xhc3NMaXN0LmFkZCgnZ3JpZEltYWdlJyk7XG4gIGltZ1R3by5jbGFzc0xpc3QuYWRkKCdncmlkSW1hZ2UnKTtcbiAgaW1nT25lLnNyYyA9ICcuLi9hc3NldHMvaW1nLzYuanBnJztcbiAgaW1nVHdvLnNyYyA9ICcuLi9hc3NldHMvaW1nLzExLnBuZyc7XG5cbiAgcmV0dXJuIHsgaW1nT25lLCBpbWdUd28gfTtcbn07XG5cbmNvbnN0IGJveEluZm8gPSAoKSA9PiB7XG4gIGNvbnN0IGluZm9EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgaW5mb1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcbiAgY29uc3QgaW5mb1N1YiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgaW5mb0Rpdi5jbGFzc0xpc3QuYWRkKCdncmlkLWl2Jyk7XG4gIGluZm9UaXRsZS5jbGFzc0xpc3QuYWRkKCdncmlkVGl0bGUnKTtcbiAgaW5mb1RpdGxlLnRleHRDb250ZW50ID0gJ1BlcHBlcmVkIFJpY2UnO1xuICBpbmZvU3ViLmNsYXNzTGlzdC5hZGQoJ2dyaWRQZycpO1xuICBpbmZvU3ViLnRleHRDb250ZW50ID0gJ0RvbG9yZW1xdWUgb21uaXMgZXhlcmNpdGF0aW9uZW0gbnVsbGEgcmF0aW9uZSBwZXJmZXJlbmRpcywgcXVhbSwgaW5jaWR1bnQgZWFydW0gYXNzdW1lbmRhIGVpdXMuJztcbiAgcmV0dXJuIHsgaW5mb0RpdiwgaW5mb1RpdGxlLCBpbmZvU3ViIH07XG59O1xuXG5mdW5jdGlvbiBib3hFbGVtZW50KCkge1xuICBjb25zdCBib3ggPSBbXTtcbiAgbGV0IHBpYyA9IHRydWU7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgNDsgaSArPSAxKSB7XG4gICAgY29uc3QgYm94Q29udGVudCA9IGJveEluZm8oKS5pbmZvRGl2O1xuICAgIGJveENvbnRlbnQuYXBwZW5kQ2hpbGQoYm94SW5mbygpLmluZm9UaXRsZSk7XG4gICAgYm94Q29udGVudC5hcHBlbmRDaGlsZChib3hJbmZvKCkuaW5mb1N1Yik7XG4gICAgY29uc3QgYW55ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYW55LmNsYXNzTGlzdC5hZGQoJ2dyaWRJdGVtJyk7XG4gICAgaWYgKHBpYykge1xuICAgICAgYW55LmFwcGVuZENoaWxkKGltYWdlKCkuaW1nT25lKTtcbiAgICAgIHBpYyA9IGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICBhbnkuYXBwZW5kQ2hpbGQoaW1hZ2UoKS5pbWdUd28pO1xuICAgICAgcGljID0gdHJ1ZTtcbiAgICB9XG4gICAgYW55LmFwcGVuZENoaWxkKGJveEluZm8oKS5pbmZvRGl2KTtcbiAgICBhbnkuYXBwZW5kQ2hpbGQoYm94Q29udGVudCk7XG4gICAgYm94LnB1c2goYW55KTtcbiAgfVxuICByZXR1cm4geyBib3ggfTtcbn1cblxuY29uc3QgbWVudUZ1bmMgPSAobWVudURpdikgPT4ge1xuICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IGdyaWRCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbGV0IGJveCA9IGJveEVsZW1lbnQoKTtcbiAgYm94ID0gT2JqZWN0LmVudHJpZXMoYm94KTtcbiAgYm94ID0gYm94WzBdWzFdO1xuICBtZW51RGl2LmlkID0gJ21lbnUnO1xuICBtZW51RGl2LmNsYXNzTGlzdC5hZGQoXG4gICAgJ21lbnUtYmcnLFxuICAgICdtZW51Q29udGFpbmVyJyxcbiAgKTtcbiAgaGVhZGluZy50ZXh0Q29udGVudCA9ICdTcGVjaWFsIG1lbnUnO1xuICBoZWFkaW5nLmNsYXNzTGlzdC5hZGQoJ21lbnVUaXRsZScpO1xuICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbWVudS12Jyk7XG4gIGdyaWRCb3guY2xhc3NMaXN0LmFkZCgnbWVudUdyaWQnKTtcblxuICBtZW51RGl2LmFwcGVuZENoaWxkKGhlYWRpbmcpO1xuICBtZW51RGl2LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChncmlkQm94KTtcbiAgZm9yIChsZXQgYSA9IDA7IGEgPCBib3gubGVuZ3RoOyBhICs9IDEpIHtcbiAgICBncmlkQm94LmFwcGVuZENoaWxkKGJveFthXSk7XG4gIH1cbiAgcmV0dXJuIG1lbnVEaXY7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBtZW51RnVuYzsiLCJjb25zdCBuYXZGdW5jID0gKG5hdkRpdikgPT4ge1xuICBjb25zdCBuYXZPbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgbmF2VHdvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IG5hdlRocmVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgbmF2RGl2LmNsYXNzTGlzdC5hZGQoJ3RhYnMnLCAnbmF2LWNvbnRhaW5lcicpO1xuICBuYXZPbmUuY2xhc3NMaXN0LmFkZCgnaG9tZScsICduYXYtc3R5bGUnLCAnaW5kaWNhdG9yJyk7XG4gIG5hdk9uZS50ZXh0Q29udGVudCA9ICdIb21lJztcbiAgbmF2VHdvLmNsYXNzTGlzdC5hZGQoJ21lbnUnLCAnbmF2LXN0eWxlJyk7XG4gIG5hdlR3by50ZXh0Q29udGVudCA9ICdNZW51JztcbiAgbmF2VGhyZWUuY2xhc3NMaXN0LmFkZCgnY29udGFjdCcsICduYXYtc3R5bGUnKTtcbiAgbmF2VGhyZWUudGV4dENvbnRlbnQgPSAnQ29udGFjdCc7XG5cbiAgbmF2RGl2LmFwcGVuZENoaWxkKG5hdk9uZSk7XG4gIG5hdkRpdi5hcHBlbmRDaGlsZChuYXZUd28pO1xuICBuYXZEaXYuYXBwZW5kQ2hpbGQobmF2VGhyZWUpO1xuXG4gIHJldHVybiBuYXZEaXY7XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5hdkZ1bmM7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgaG9tZUZ1bmMgZnJvbSAnLi9ob21lJztcbmltcG9ydCBtZW51RnVuYyBmcm9tICcuL21lbnUnO1xuaW1wb3J0IGNvbnRhY3RGdW5jIGZyb20gJy4vY29udGFjdCc7XG5pbXBvcnQgbmF2RnVuYyBmcm9tICcuL25hdic7XG5cbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuY29uc3QgaG9tZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuY29uc3QgbWVudURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuY29uc3QgY29udGFjdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuY29uc3QgbmF2RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbmNvbnN0IHNob3dDb250ZW50ID0gKCkgPT4ge1xuICBjb250ZW50LmFwcGVuZENoaWxkKG5hdkZ1bmMobmF2RGl2KSk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaG9tZUZ1bmMoaG9tZURpdikpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKG1lbnVGdW5jKG1lbnVEaXYpKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChjb250YWN0RnVuYyhjb250YWN0RGl2KSk7XG59O1xuXG5zaG93Q29udGVudCgpOyJdLCJzb3VyY2VSb290IjoiIn0=