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

  return contactDivOne;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL25hdi5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxXQUFXLEU7Ozs7Ozs7Ozs7Ozs7O0FDdkMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxRQUFRLEU7Ozs7Ozs7Ozs7Ozs7O0FDckJ2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixPQUFPO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLGdCQUFnQjtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxRQUFRLEU7Ozs7Ozs7Ozs7Ozs7O0FDeEV2QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxPQUFPLEU7Ozs7OztVQzlCdEI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7Ozs7Ozs7Ozs7Ozs7QUNOOEI7QUFDQTtBQUNGO0FBQ1E7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw2Q0FBTztBQUNQLCtDQUFRO0FBQ1I7QUFDQSxvQkFBb0IsMENBQVEsRUFBRSwwQ0FBUSxFQUFFLDZDQUFXO0FBQ25EO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixpQkFBaUI7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsaUJBQWlCO0FBQ2hDO0FBQ0EsQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgY29udGFjdEZ1bmMgPSAoKSA9PiB7XG4gIGNvbnN0IGNvbnRhY3REaXZPbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgY29udGFjdERpdlR3byA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gIGNvbnN0IHBPbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGNvbnN0IHBUd28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGNvbnN0IHNPbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIGNvbnN0IHNUd28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG5cbiAgY29udGFjdERpdi5pZCA9ICdjb250YWN0JztcbiAgY29udGFjdERpdi5jbGFzc0xpc3QuYWRkKCdjb250YWN0LWJnJywgJ2NvbnRhY3RDb250YWluZXInKTtcbiAgY29udGFjdERpdk9uZS5jbGFzc0xpc3QuYWRkKCdjb250YWN0Q29udGVudCcpO1xuICBjb250YWN0RGl2VHdvLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3RCb3gnKTtcbiAgdGl0bGUuY2xhc3NMaXN0LmFkZCgnY29udGFjdFRpdGxlJyk7XG4gIHRpdGxlLnRleHRDb250ZW50ID0gJ0NvbnRhY3QgdXMnO1xuICBzT25lLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3RTcGFuJyk7XG4gIHNPbmUudGV4dENvbnRlbnQgPSAnYWxvcnJAYWxvcnIuY29tJztcbiAgc1R3by5jbGFzc0xpc3QuYWRkKCdjb250YWN0U3BhbicpO1xuICBzVHdvLnRleHRDb250ZW50ID0gJysyMzQtMTExLTAwMC0xNyc7XG4gIHBPbmUudGV4dENvbnRlbnQgPSAnRW1haWw6ICc7XG4gIHBUd28udGV4dENvbnRlbnQgPSAnUGhvbmU6ICc7XG5cbiAgY29udGFjdERpdi5hcHBlbmRDaGlsZChjb250YWN0RGl2T25lKTtcbiAgY29udGFjdERpdk9uZS5hcHBlbmRDaGlsZChjb250YWN0RGl2VHdvKTtcbiAgY29udGFjdERpdlR3by5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gIGNvbnRhY3REaXZUd28uYXBwZW5kQ2hpbGQocE9uZSk7XG4gIGNvbnRhY3REaXZUd28uYXBwZW5kQ2hpbGQocFR3byk7XG4gIHBPbmUuYXBwZW5kQ2hpbGQoc09uZSk7XG4gIHBUd28uYXBwZW5kQ2hpbGQoc1R3byk7XG5cbiAgcmV0dXJuIGNvbnRhY3REaXZPbmU7XG59O1xuXG5jb25zdCBzaG93Q29udGFjdCA9ICgpID0+IHtcbiAgY29uc3QgaG9tZURpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNob21lJyk7XG4gIGNvbnN0IGggPSBjb250YWN0RnVuYygpO1xuICBob21lRGl2LmFwcGVuZENoaWxkKGgpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgc2hvd0NvbnRhY3Q7IiwiY29uc3QgaG9tZUZ1bmMgPSAoKSA9PiB7XG4gIGNvbnN0IGhvbWVEaXZPbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgaG9tZURpdlR3byA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgY29uc3QgcGFyYWdyYWdoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBob21lRGl2T25lLmNsYXNzTGlzdC5hZGQoJ2hvbWVDb250ZW50Jyk7XG4gIGhvbWVEaXZUd28uY2xhc3NMaXN0LmFkZCgnaG9tZUJveCcpO1xuICBoZWFkaW5nLmNsYXNzTGlzdC5hZGQoJ2hvbWVUaXRsZScpO1xuICBwYXJhZ3JhZ2guY2xhc3NMaXN0LmFkZCgnaG9tZVBnJyk7XG4gIGhlYWRpbmcudGV4dENvbnRlbnQgPSAnV2VsY29tZSB0byBBbG9yciEnO1xuICBwYXJhZ3JhZ2gudGV4dENvbnRlbnQgPSAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIsIGFkaXBpc2ljaW5nIGVsaXQuIFF1YW0gY3VwaWRpdGF0ZSwgaXBzdW0gc2FlcGUgb2RpbyBzaW50IG5lcXVlIGZhY2lsaXMgcXVvZCBjdWxwYSBhbmltaSwgZG9sb3JlbSBjb25zZXF1dW50dXIgY29uc2VxdWF0dXIuIEVhLCBleCB2b2x1cHRhdHVtISBRdWFtLCByYXRpb25lIGRvbG9ydW0/IEluLCByZWljaWVuZGlzIG5paGlsLiBNaW5pbWEgc2FlcGUgaXVyZSB1dCBleCBwcmFlc2VudGl1bS4gUXVpZGVtIGVzc2UgcmVwZWxsZW5kdXMgbW9sZXN0aWFzIHNpbWlsaXF1ZSBleHBlZGl0YSBpbGx1bT8nO1xuICBob21lRGl2VHdvLmFwcGVuZENoaWxkKGhlYWRpbmcpO1xuICBob21lRGl2VHdvLmFwcGVuZENoaWxkKHBhcmFncmFnaCk7XG4gIGhvbWVEaXZPbmUuYXBwZW5kQ2hpbGQoaG9tZURpdlR3byk7XG4gIHJldHVybiBob21lRGl2T25lO1xufTtcbmNvbnN0IHNob3dIb21lID0gKCkgPT4ge1xuICBjb25zdCBob21lRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2hvbWUnKTtcbiAgY29uc3QgaCA9IGhvbWVGdW5jKCk7XG4gIGhvbWVEaXYuYXBwZW5kQ2hpbGQoaCk7XG59O1xuZXhwb3J0IGRlZmF1bHQgc2hvd0hvbWU7IiwiY29uc3QgaW1hZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IGltZ09uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBjb25zdCBpbWdUd28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgaW1nT25lLmNsYXNzTGlzdC5hZGQoJ2dyaWRJbWFnZScpO1xuICBpbWdUd28uY2xhc3NMaXN0LmFkZCgnZ3JpZEltYWdlJyk7XG4gIGltZ09uZS5zcmMgPSAnLi4vYXNzZXRzL2ltZy82LmpwZyc7XG4gIGltZ1R3by5zcmMgPSAnLi4vYXNzZXRzL2ltZy8xMS5wbmcnO1xuICByZXR1cm4geyBpbWdPbmUsIGltZ1R3byB9O1xufTtcbmNvbnN0IGJveEluZm8gPSAoKSA9PiB7XG4gIGNvbnN0IGluZm9EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgaW5mb1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcbiAgY29uc3QgaW5mb1N1YiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgaW5mb0Rpdi5jbGFzc0xpc3QuYWRkKCdncmlkLWl2Jyk7XG4gIGluZm9UaXRsZS5jbGFzc0xpc3QuYWRkKCdncmlkVGl0bGUnKTtcbiAgaW5mb1RpdGxlLnRleHRDb250ZW50ID0gJ1BlcHBlcmVkIFJpY2UnO1xuICBpbmZvU3ViLmNsYXNzTGlzdC5hZGQoJ2dyaWRQZycpO1xuICBpbmZvU3ViLnRleHRDb250ZW50ID0gJ0RvbG9yZW1xdWUgb21uaXMgZXhlcmNpdGF0aW9uZW0gbnVsbGEgcmF0aW9uZSBwZXJmZXJlbmRpcywgcXVhbSwgaW5jaWR1bnQgZWFydW0gYXNzdW1lbmRhIGVpdXMuJztcbiAgcmV0dXJuIHsgaW5mb0RpdiwgaW5mb1RpdGxlLCBpbmZvU3ViIH07XG59O1xuZnVuY3Rpb24gYm94RWxlbWVudCgpIHtcbiAgY29uc3QgYm94ID0gW107XG4gIGxldCBwaWMgPSB0cnVlO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IDQ7IGkgKz0gMSkge1xuICAgIGNvbnN0IGJveENvbnRlbnQgPSBib3hJbmZvKCkuaW5mb0RpdjtcbiAgICBib3hDb250ZW50LmFwcGVuZENoaWxkKGJveEluZm8oKS5pbmZvVGl0bGUpO1xuICAgIGJveENvbnRlbnQuYXBwZW5kQ2hpbGQoYm94SW5mbygpLmluZm9TdWIpO1xuICAgIGNvbnN0IGFueSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGFueS5jbGFzc0xpc3QuYWRkKCdncmlkSXRlbScpO1xuICAgIGlmIChwaWMpIHtcbiAgICAgIGFueS5hcHBlbmRDaGlsZChpbWFnZSgpLmltZ09uZSk7XG4gICAgICBwaWMgPSBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgYW55LmFwcGVuZENoaWxkKGltYWdlKCkuaW1nVHdvKTtcbiAgICAgIHBpYyA9IHRydWU7XG4gICAgfVxuICAgIGFueS5hcHBlbmRDaGlsZChib3hJbmZvKCkuaW5mb0Rpdik7XG4gICAgYW55LmFwcGVuZENoaWxkKGJveENvbnRlbnQpO1xuICAgIGJveC5wdXNoKGFueSk7XG4gIH1cbiAgcmV0dXJuIHsgYm94IH07XG59XG5jb25zdCBtZW51RnVuYyA9ICgpID0+IHtcbiAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBncmlkQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IG1lbnVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbGV0IGJveCA9IGJveEVsZW1lbnQoKTtcbiAgYm94ID0gT2JqZWN0LmVudHJpZXMoYm94KTtcbiAgYm94ID0gYm94WzBdWzFdO1xuICBtZW51RGl2LmlkID0gJ21lbnUnO1xuICBtZW51RGl2LmNsYXNzTGlzdC5hZGQoXG4gICAgJ21lbnUtYmcnLFxuICAgICdtZW51Q29udGFpbmVyJ1xuICApO1xuICBoZWFkaW5nLnRleHRDb250ZW50ID0gJ1NwZWNpYWwgbWVudSc7XG4gIGhlYWRpbmcuY2xhc3NMaXN0LmFkZCgnbWVudVRpdGxlJyk7XG4gIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdtZW51LXYnKTtcbiAgZ3JpZEJveC5jbGFzc0xpc3QuYWRkKCdtZW51R3JpZCcpO1xuICBtZW51RGl2LmFwcGVuZENoaWxkKGhlYWRpbmcpO1xuICBtZW51RGl2LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChncmlkQm94KTtcbiAgZm9yIChsZXQgYSA9IDA7IGEgPCBib3gubGVuZ3RoOyBhICs9IDEpIHtcbiAgICBncmlkQm94LmFwcGVuZENoaWxkKGJveFthXSk7XG4gIH1cbiAgcmV0dXJuIG1lbnVEaXY7XG59O1xuY29uc3Qgc2hvd01lbnUgPSAoKSA9PiB7XG4gIGNvbnN0IGhvbWVEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaG9tZScpO1xuICBjb25zdCBoID0gbWVudUZ1bmMoKTtcbiAgaG9tZURpdi5hcHBlbmRDaGlsZChoKTtcbn1cbmV4cG9ydCBkZWZhdWx0IHNob3dNZW51OyIsImNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuY29uc3QgbmF2RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbmNvbnN0IG5hdkZ1bmMgPSAobmF2RGl2KSA9PiB7XG4gIGNvbnN0IG5hdk9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBuYXZUd28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgbmF2VGhyZWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICBuYXZEaXYuY2xhc3NMaXN0LmFkZCgndGFicycsICduYXYtY29udGFpbmVyJyk7XG4gIG5hdk9uZS5jbGFzc0xpc3QuYWRkKCdob21lJywgJ3RhYicsICduYXYtc3R5bGUnLCAnaW5kaWNhdG9yJyk7XG4gIG5hdk9uZS5pZCA9ICdobSc7XG4gIG5hdk9uZS50ZXh0Q29udGVudCA9ICdIb21lJztcbiAgbmF2VHdvLmNsYXNzTGlzdC5hZGQoJ21lbnUnLCAndGFiJywgJ25hdi1zdHlsZScpO1xuICBuYXZUd28uaWQgPSAnbW4nO1xuICBuYXZUd28udGV4dENvbnRlbnQgPSAnTWVudSc7XG4gIG5hdlRocmVlLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QnLCAndGFiJywgJ25hdi1zdHlsZScpO1xuICBuYXZUaHJlZS5pZCA9ICdjbic7XG4gIG5hdlRocmVlLnRleHRDb250ZW50ID0gJ0NvbnRhY3QnO1xuXG4gIG5hdkRpdi5hcHBlbmRDaGlsZChuYXZPbmUpO1xuICBuYXZEaXYuYXBwZW5kQ2hpbGQobmF2VHdvKTtcbiAgbmF2RGl2LmFwcGVuZENoaWxkKG5hdlRocmVlKTtcblxuICByZXR1cm4gbmF2RGl2O1xufVxuXG5jb25zdCBzaG93TmF2ID0gKCkgPT4ge1xuICBjb250ZW50Lmluc2VydEFkamFjZW50RWxlbWVudCgnYmVmb3JlYmVnaW4nLCBuYXZGdW5jKG5hdkRpdikpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgc2hvd05hdjsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBzaG93SG9tZSBmcm9tICcuL2hvbWUnO1xuaW1wb3J0IHNob3dNZW51IGZyb20gJy4vbWVudSc7XG5pbXBvcnQgc2hvd05hdiBmcm9tICcuL25hdic7XG5pbXBvcnQgc2hvd0NvbnRhY3QgZnJvbSAnLi9jb250YWN0JztcbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuY29uc3QgaG9tZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuaG9tZURpdi5pZCA9ICdob21lJztcbmhvbWVEaXYuY2xhc3NMaXN0LmFkZChcbiAgJ3RvcC1iZycsXG4gICdob21lQ29udGFpbmVyJyxcbik7XG5jb250ZW50LmFwcGVuZENoaWxkKGhvbWVEaXYpO1xuXG5zaG93TmF2KClcbnNob3dIb21lKClcbmNvbnN0IHRhYnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFiJyk7XG5jb25zdCB0YWJNZXRob2RzID0gW3Nob3dIb21lLCBzaG93TWVudSwgc2hvd0NvbnRhY3RdO1xuY29uc3QgaG9tZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNob21lJyk7XG5jb25zdCBvcGVuVGFiID0gKGluZGV4KSA9PiB7XG4gIGhvbWUuaW5uZXJIVE1MID0gJyc7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdGFicy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIHRhYnNbaV0uY2xhc3NMaXN0LnJlbW92ZSgnaW5kaWNhdG9yJyk7XG4gIH1cbiAgdGFic1tpbmRleF0uY2xhc3NMaXN0LmFkZCgnaW5kaWNhdG9yJyk7XG4gIHRhYk1ldGhvZHNbaW5kZXhdKCk7XG59O1xuZm9yIChsZXQgaSA9IDA7IGkgPCB0YWJzLmxlbmd0aDsgaSArPSAxKSB7XG4gIHRhYnNbaV0ub25jbGljayA9IG9wZW5UYWIuYmluZChudWxsLCBpKTtcbn0iXSwic291cmNlUm9vdCI6IiJ9