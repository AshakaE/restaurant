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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL25hdi5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLFdBQVcsRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDckMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxRQUFRLEU7Ozs7Ozs7Ozs7Ozs7O0FDckJ2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixPQUFPO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLGdCQUFnQjtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxRQUFRLEU7Ozs7Ozs7Ozs7Ozs7O0FDeEV2QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxPQUFPLEVBQUM7Ozs7Ozs7O1VDOUJ2QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7Ozs7Ozs7Ozs7OztBQ044QjtBQUNBO0FBQ0Y7QUFDUTs7QUFFcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw2Q0FBTztBQUNQLCtDQUFRO0FBQ1I7QUFDQSxvQkFBb0IsMENBQVEsRUFBRSwwQ0FBUSxFQUFFLDZDQUFXO0FBQ25EO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixpQkFBaUI7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsaUJBQWlCO0FBQ2hDO0FBQ0EsQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgY29udGFjdEZ1bmMgPSAoKSA9PiB7XG4gIGNvbnN0IGNvbnRhY3REaXZPbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgY29udGFjdERpdlR3byA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gIGNvbnN0IHBPbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGNvbnN0IHBUd28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGNvbnN0IHNPbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIGNvbnN0IHNUd28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIGNvbnN0IGNvbnRhY3REaXY9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb250YWN0RGl2LmlkID0gJ2NvbnRhY3QnO1xuICBjb250YWN0RGl2LmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QtYmcnLCAnY29udGFjdENvbnRhaW5lcicpO1xuICBjb250YWN0RGl2T25lLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3RDb250ZW50Jyk7XG4gIGNvbnRhY3REaXZUd28uY2xhc3NMaXN0LmFkZCgnY29udGFjdEJveCcpO1xuICB0aXRsZS5jbGFzc0xpc3QuYWRkKCdjb250YWN0VGl0bGUnKTtcbiAgdGl0bGUudGV4dENvbnRlbnQgPSAnQ29udGFjdCB1cyc7XG4gIHNPbmUuY2xhc3NMaXN0LmFkZCgnY29udGFjdFNwYW4nKTtcbiAgc09uZS50ZXh0Q29udGVudCA9ICdhbG9yckBhbG9yci5jb20nO1xuICBzVHdvLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3RTcGFuJyk7XG4gIHNUd28udGV4dENvbnRlbnQgPSAnKzIzNC0xMTEtMDAwLTE3JztcbiAgcE9uZS50ZXh0Q29udGVudCA9ICdFbWFpbDogJztcbiAgcFR3by50ZXh0Q29udGVudCA9ICdQaG9uZTogJztcbiAgY29udGFjdERpdi5hcHBlbmRDaGlsZChjb250YWN0RGl2T25lKTtcbiAgY29udGFjdERpdk9uZS5hcHBlbmRDaGlsZChjb250YWN0RGl2VHdvKTtcbiAgY29udGFjdERpdlR3by5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gIGNvbnRhY3REaXZUd28uYXBwZW5kQ2hpbGQocE9uZSk7XG4gIGNvbnRhY3REaXZUd28uYXBwZW5kQ2hpbGQocFR3byk7XG4gIHBPbmUuYXBwZW5kQ2hpbGQoc09uZSk7XG4gIHBUd28uYXBwZW5kQ2hpbGQoc1R3byk7XG4gIGNvbnRhY3REaXYuc3R5bGUgPSAnd2lkdGg6MTAwdnc7J1xuICByZXR1cm4gY29udGFjdERpdjtcbn07XG5jb25zdCBzaG93Q29udGFjdCA9ICgpID0+IHtcbiAgY29uc3QgaG9tZURpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNob21lJyk7XG4gIGNvbnN0IGggPSBjb250YWN0RnVuYygpO1xuICBob21lRGl2LmFwcGVuZENoaWxkKGgpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgc2hvd0NvbnRhY3Q7XG4iLCJjb25zdCBob21lRnVuYyA9ICgpID0+IHtcbiAgY29uc3QgaG9tZURpdk9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBob21lRGl2VHdvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICBjb25zdCBwYXJhZ3JhZ2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGhvbWVEaXZPbmUuY2xhc3NMaXN0LmFkZCgnaG9tZUNvbnRlbnQnKTtcbiAgaG9tZURpdlR3by5jbGFzc0xpc3QuYWRkKCdob21lQm94Jyk7XG4gIGhlYWRpbmcuY2xhc3NMaXN0LmFkZCgnaG9tZVRpdGxlJyk7XG4gIHBhcmFncmFnaC5jbGFzc0xpc3QuYWRkKCdob21lUGcnKTtcbiAgaGVhZGluZy50ZXh0Q29udGVudCA9ICdXZWxjb21lIHRvIEFsb3JyISc7XG4gIHBhcmFncmFnaC50ZXh0Q29udGVudCA9ICdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciwgYWRpcGlzaWNpbmcgZWxpdC4gUXVhbSBjdXBpZGl0YXRlLCBpcHN1bSBzYWVwZSBvZGlvIHNpbnQgbmVxdWUgZmFjaWxpcyBxdW9kIGN1bHBhIGFuaW1pLCBkb2xvcmVtIGNvbnNlcXV1bnR1ciBjb25zZXF1YXR1ci4gRWEsIGV4IHZvbHVwdGF0dW0hIFF1YW0sIHJhdGlvbmUgZG9sb3J1bT8gSW4sIHJlaWNpZW5kaXMgbmloaWwuIE1pbmltYSBzYWVwZSBpdXJlIHV0IGV4IHByYWVzZW50aXVtLiBRdWlkZW0gZXNzZSByZXBlbGxlbmR1cyBtb2xlc3RpYXMgc2ltaWxpcXVlIGV4cGVkaXRhIGlsbHVtPyc7XG4gIGhvbWVEaXZUd28uYXBwZW5kQ2hpbGQoaGVhZGluZyk7XG4gIGhvbWVEaXZUd28uYXBwZW5kQ2hpbGQocGFyYWdyYWdoKTtcbiAgaG9tZURpdk9uZS5hcHBlbmRDaGlsZChob21lRGl2VHdvKTtcbiAgcmV0dXJuIGhvbWVEaXZPbmU7XG59O1xuY29uc3Qgc2hvd0hvbWUgPSAoKSA9PiB7XG4gIGNvbnN0IGhvbWVEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaG9tZScpO1xuICBjb25zdCBoID0gaG9tZUZ1bmMoKTtcbiAgaG9tZURpdi5hcHBlbmRDaGlsZChoKTtcbn07XG5leHBvcnQgZGVmYXVsdCBzaG93SG9tZTsiLCJjb25zdCBpbWFnZSA9ICgpID0+IHtcbiAgY29uc3QgaW1nT25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIGNvbnN0IGltZ1R3byA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBpbWdPbmUuY2xhc3NMaXN0LmFkZCgnZ3JpZEltYWdlJyk7XG4gIGltZ1R3by5jbGFzc0xpc3QuYWRkKCdncmlkSW1hZ2UnKTtcbiAgaW1nT25lLnNyYyA9ICcuLi9hc3NldHMvaW1nLzYuanBnJztcbiAgaW1nVHdvLnNyYyA9ICcuLi9hc3NldHMvaW1nLzExLnBuZyc7XG4gIHJldHVybiB7IGltZ09uZSwgaW1nVHdvIH07XG59O1xuY29uc3QgYm94SW5mbyA9ICgpID0+IHtcbiAgY29uc3QgaW5mb0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBpbmZvVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xuICBjb25zdCBpbmZvU3ViID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBpbmZvRGl2LmNsYXNzTGlzdC5hZGQoJ2dyaWQtaXYnKTtcbiAgaW5mb1RpdGxlLmNsYXNzTGlzdC5hZGQoJ2dyaWRUaXRsZScpO1xuICBpbmZvVGl0bGUudGV4dENvbnRlbnQgPSAnUGVwcGVyZWQgUmljZSc7XG4gIGluZm9TdWIuY2xhc3NMaXN0LmFkZCgnZ3JpZFBnJyk7XG4gIGluZm9TdWIudGV4dENvbnRlbnQgPSAnRG9sb3JlbXF1ZSBvbW5pcyBleGVyY2l0YXRpb25lbSBudWxsYSByYXRpb25lIHBlcmZlcmVuZGlzLCBxdWFtLCBpbmNpZHVudCBlYXJ1bSBhc3N1bWVuZGEgZWl1cy4nO1xuICByZXR1cm4geyBpbmZvRGl2LCBpbmZvVGl0bGUsIGluZm9TdWIgfTtcbn07XG5mdW5jdGlvbiBib3hFbGVtZW50KCkge1xuICBjb25zdCBib3ggPSBbXTtcbiAgbGV0IHBpYyA9IHRydWU7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgNDsgaSArPSAxKSB7XG4gICAgY29uc3QgYm94Q29udGVudCA9IGJveEluZm8oKS5pbmZvRGl2O1xuICAgIGJveENvbnRlbnQuYXBwZW5kQ2hpbGQoYm94SW5mbygpLmluZm9UaXRsZSk7XG4gICAgYm94Q29udGVudC5hcHBlbmRDaGlsZChib3hJbmZvKCkuaW5mb1N1Yik7XG4gICAgY29uc3QgYW55ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYW55LmNsYXNzTGlzdC5hZGQoJ2dyaWRJdGVtJyk7XG4gICAgaWYgKHBpYykge1xuICAgICAgYW55LmFwcGVuZENoaWxkKGltYWdlKCkuaW1nT25lKTtcbiAgICAgIHBpYyA9IGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICBhbnkuYXBwZW5kQ2hpbGQoaW1hZ2UoKS5pbWdUd28pO1xuICAgICAgcGljID0gdHJ1ZTtcbiAgICB9XG4gICAgYW55LmFwcGVuZENoaWxkKGJveEluZm8oKS5pbmZvRGl2KTtcbiAgICBhbnkuYXBwZW5kQ2hpbGQoYm94Q29udGVudCk7XG4gICAgYm94LnB1c2goYW55KTtcbiAgfVxuICByZXR1cm4geyBib3ggfTtcbn1cbmNvbnN0IG1lbnVGdW5jID0gKCkgPT4ge1xuICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IGdyaWRCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgbWVudURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBsZXQgYm94ID0gYm94RWxlbWVudCgpO1xuICBib3ggPSBPYmplY3QuZW50cmllcyhib3gpO1xuICBib3ggPSBib3hbMF1bMV07XG4gIG1lbnVEaXYuaWQgPSAnbWVudSc7XG4gIG1lbnVEaXYuY2xhc3NMaXN0LmFkZChcbiAgICAnbWVudS1iZycsXG4gICAgJ21lbnVDb250YWluZXInXG4gICk7XG4gIGhlYWRpbmcudGV4dENvbnRlbnQgPSAnU3BlY2lhbCBtZW51JztcbiAgaGVhZGluZy5jbGFzc0xpc3QuYWRkKCdtZW51VGl0bGUnKTtcbiAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ21lbnUtdicpO1xuICBncmlkQm94LmNsYXNzTGlzdC5hZGQoJ21lbnVHcmlkJyk7XG4gIG1lbnVEaXYuYXBwZW5kQ2hpbGQoaGVhZGluZyk7XG4gIG1lbnVEaXYuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGdyaWRCb3gpO1xuICBmb3IgKGxldCBhID0gMDsgYSA8IGJveC5sZW5ndGg7IGEgKz0gMSkge1xuICAgIGdyaWRCb3guYXBwZW5kQ2hpbGQoYm94W2FdKTtcbiAgfVxuICByZXR1cm4gbWVudURpdjtcbn07XG5jb25zdCBzaG93TWVudSA9ICgpID0+IHtcbiAgY29uc3QgaG9tZURpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNob21lJyk7XG4gIGNvbnN0IGggPSBtZW51RnVuYygpO1xuICBob21lRGl2LmFwcGVuZENoaWxkKGgpO1xufVxuZXhwb3J0IGRlZmF1bHQgc2hvd01lbnU7IiwiY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG5jb25zdCBuYXZEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuY29uc3QgbmF2RnVuYyA9IChuYXZEaXYpID0+IHtcbiAgY29uc3QgbmF2T25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IG5hdlR3byA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBuYXZUaHJlZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gIG5hdkRpdi5jbGFzc0xpc3QuYWRkKCd0YWJzJywgJ25hdi1jb250YWluZXInKTtcbiAgbmF2T25lLmNsYXNzTGlzdC5hZGQoJ2hvbWUnLCAndGFiJywgJ25hdi1zdHlsZScsICdpbmRpY2F0b3InKTtcbiAgbmF2T25lLmlkID0gJ2htJztcbiAgbmF2T25lLnRleHRDb250ZW50ID0gJ0hvbWUnO1xuICBuYXZUd28uY2xhc3NMaXN0LmFkZCgnbWVudScsICd0YWInLCAnbmF2LXN0eWxlJyk7XG4gIG5hdlR3by5pZCA9ICdtbic7XG4gIG5hdlR3by50ZXh0Q29udGVudCA9ICdNZW51JztcbiAgbmF2VGhyZWUuY2xhc3NMaXN0LmFkZCgnY29udGFjdCcsICd0YWInLCAnbmF2LXN0eWxlJyk7XG4gIG5hdlRocmVlLmlkID0gJ2NuJztcbiAgbmF2VGhyZWUudGV4dENvbnRlbnQgPSAnQ29udGFjdCc7XG5cbiAgbmF2RGl2LmFwcGVuZENoaWxkKG5hdk9uZSk7XG4gIG5hdkRpdi5hcHBlbmRDaGlsZChuYXZUd28pO1xuICBuYXZEaXYuYXBwZW5kQ2hpbGQobmF2VGhyZWUpO1xuXG4gIHJldHVybiBuYXZEaXY7XG59XG5cbmNvbnN0IHNob3dOYXYgPSAoKSA9PiB7XG4gIGNvbnRlbnQuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCdiZWZvcmViZWdpbicsIG5hdkZ1bmMobmF2RGl2KSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBzaG93TmF2O1xuXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBzaG93SG9tZSBmcm9tICcuL2hvbWUnO1xuaW1wb3J0IHNob3dNZW51IGZyb20gJy4vbWVudSc7XG5pbXBvcnQgc2hvd05hdiBmcm9tICcuL25hdic7XG5pbXBvcnQgc2hvd0NvbnRhY3QgZnJvbSAnLi9jb250YWN0JztcblxuY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG5jb25zdCBob21lRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5ob21lRGl2LmlkID0gJ2hvbWUnO1xuaG9tZURpdi5jbGFzc0xpc3QuYWRkKFxuICAndG9wLWJnJyxcbiAgJ2hvbWVDb250YWluZXInLFxuKTtcbmNvbnRlbnQuYXBwZW5kQ2hpbGQoaG9tZURpdik7XG5cbnNob3dOYXYoKVxuc2hvd0hvbWUoKVxuY29uc3QgdGFicyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YWInKTtcbmNvbnN0IHRhYk1ldGhvZHMgPSBbc2hvd0hvbWUsIHNob3dNZW51LCBzaG93Q29udGFjdF07XG5jb25zdCBob21lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2hvbWUnKTtcbmNvbnN0IG9wZW5UYWIgPSAoaW5kZXgpID0+IHtcbiAgaG9tZS5pbm5lckhUTUwgPSAnJztcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YWJzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgdGFic1tpXS5jbGFzc0xpc3QucmVtb3ZlKCdpbmRpY2F0b3InKTtcbiAgfVxuICB0YWJzW2luZGV4XS5jbGFzc0xpc3QuYWRkKCdpbmRpY2F0b3InKTtcbiAgdGFiTWV0aG9kc1tpbmRleF0oKTtcbn07XG5mb3IgKGxldCBpID0gMDsgaSA8IHRhYnMubGVuZ3RoOyBpICs9IDEpIHtcbiAgdGFic1tpXS5vbmNsaWNrID0gb3BlblRhYi5iaW5kKG51bGwsIGkpO1xufSJdLCJzb3VyY2VSb290IjoiIn0=