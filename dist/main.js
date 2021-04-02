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
const content = document.getElementById('content');
const contactDiv = document.createElement('div');

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

const showContact = () => {
  content.insertAdjacentElement('afterbegin', contactFunc(contactDiv));
}

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
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
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

const showMenu = () => {
  content.insertAdjacentElement('afterbegin', menuFunc(menuDiv));
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
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contact */ "./src/contact.js");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nav */ "./src/nav.js");




// import {showNav, showContent} from './page'

(0,_nav__WEBPACK_IMPORTED_MODULE_3__.default)()
// showContact()
// showMenu()
// showHome()
// showContent()

const content = document.querySelector('#content');
const tabs = document.querySelectorAll('.tab');
const tabMethods = [_home__WEBPACK_IMPORTED_MODULE_1__.default, _menu__WEBPACK_IMPORTED_MODULE_2__.default, _contact__WEBPACK_IMPORTED_MODULE_0__.default];

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL25hdi5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsV0FBVyxFOzs7Ozs7Ozs7Ozs7OztBQ3hDMUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0EsaUVBQWUsUUFBUSxFOzs7Ozs7Ozs7Ozs7OztBQ3BDdkI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxVQUFVO0FBQ1Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixPQUFPO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLGdCQUFnQjtBQUNqQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsUUFBUSxFOzs7Ozs7Ozs7Ozs7OztBQy9FdkI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxPQUFPLEU7Ozs7OztVQy9CdEI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7Ozs7Ozs7Ozs7Ozs7QUNOb0M7QUFDTjtBQUNBO0FBQ0Y7QUFDNUIsV0FBVyxxQkFBcUI7O0FBRWhDLDZDQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG9CQUFvQiwwQ0FBUSxFQUFFLDBDQUFRLEVBQUUsNkNBQVc7O0FBRW5EO0FBQ0E7O0FBRUEsaUJBQWlCLGlCQUFpQjtBQUNsQztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxlQUFlLGlCQUFpQjtBQUNoQztBQUNBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbmNvbnN0IGNvbnRhY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuY29uc3QgY29udGFjdEZ1bmMgPSAoY29udGFjdERpdikgPT4ge1xuICBjb25zdCBjb250YWN0RGl2T25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IGNvbnRhY3REaXZUd28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICBjb25zdCBwT25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBjb25zdCBwVHdvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBjb25zdCBzT25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBjb25zdCBzVHdvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuXG4gIGNvbnRhY3REaXYuaWQgPSAnY29udGFjdCc7XG4gIGNvbnRhY3REaXYuY2xhc3NMaXN0LmFkZCgnY29udGFjdC1iZycsICdjb250YWN0Q29udGFpbmVyJyk7XG4gIGNvbnRhY3REaXZPbmUuY2xhc3NMaXN0LmFkZCgnY29udGFjdENvbnRlbnQnKTtcbiAgY29udGFjdERpdlR3by5jbGFzc0xpc3QuYWRkKCdjb250YWN0Qm94Jyk7XG4gIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3RUaXRsZScpO1xuICB0aXRsZS50ZXh0Q29udGVudCA9ICdDb250YWN0IHVzJztcbiAgc09uZS5jbGFzc0xpc3QuYWRkKCdjb250YWN0U3BhbicpO1xuICBzT25lLnRleHRDb250ZW50ID0gJ2Fsb3JyQGFsb3JyLmNvbSc7XG4gIHNUd28uY2xhc3NMaXN0LmFkZCgnY29udGFjdFNwYW4nKTtcbiAgc1R3by50ZXh0Q29udGVudCA9ICcrMjM0LTExMS0wMDAtMTcnO1xuICBwT25lLnRleHRDb250ZW50ID0gJ0VtYWlsOiAnO1xuICBwVHdvLnRleHRDb250ZW50ID0gJ1Bob25lOiAnO1xuXG4gIGNvbnRhY3REaXYuYXBwZW5kQ2hpbGQoY29udGFjdERpdk9uZSk7XG4gIGNvbnRhY3REaXZPbmUuYXBwZW5kQ2hpbGQoY29udGFjdERpdlR3byk7XG4gIGNvbnRhY3REaXZUd28uYXBwZW5kQ2hpbGQodGl0bGUpO1xuICBjb250YWN0RGl2VHdvLmFwcGVuZENoaWxkKHBPbmUpO1xuICBjb250YWN0RGl2VHdvLmFwcGVuZENoaWxkKHBUd28pO1xuICBwT25lLmFwcGVuZENoaWxkKHNPbmUpO1xuICBwVHdvLmFwcGVuZENoaWxkKHNUd28pO1xuXG4gIHJldHVybiBjb250YWN0RGl2O1xufTtcblxuY29uc3Qgc2hvd0NvbnRhY3QgPSAoKSA9PiB7XG4gIGNvbnRlbnQuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCdhZnRlcmJlZ2luJywgY29udGFjdEZ1bmMoY29udGFjdERpdikpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBzaG93Q29udGFjdDsiLCJjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbmNvbnN0IGhvbWVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuY29uc3QgaG9tZUZ1bmMgPSAoaG9tZURpdikgPT4ge1xuICBjb25zdCBob21lRGl2T25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IGhvbWVEaXZUd28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gIGNvbnN0IHBhcmFncmFnaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcblxuICBob21lRGl2LmlkID0gJ2hvbWUnO1xuICBob21lRGl2LmNsYXNzTGlzdC5hZGQoXG4gICAgJ3RvcC1iZycsXG4gICAgJ2hvbWVDb250YWluZXInLFxuICApO1xuICBob21lRGl2T25lLmNsYXNzTGlzdC5hZGQoJ2hvbWVDb250ZW50Jyk7XG4gIGhvbWVEaXZUd28uY2xhc3NMaXN0LmFkZCgnaG9tZUJveCcpO1xuICBoZWFkaW5nLmNsYXNzTGlzdC5hZGQoJ2hvbWVUaXRsZScpO1xuICBwYXJhZ3JhZ2guY2xhc3NMaXN0LmFkZCgnaG9tZVBnJyk7XG5cbiAgaGVhZGluZy50ZXh0Q29udGVudCA9ICdXZWxjb21lIHRvIEFsb3JyISc7XG4gIHBhcmFncmFnaC50ZXh0Q29udGVudCA9ICdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciwgYWRpcGlzaWNpbmcgZWxpdC4gUXVhbSBjdXBpZGl0YXRlLCBpcHN1bSBzYWVwZSBvZGlvIHNpbnQgbmVxdWUgZmFjaWxpcyBxdW9kIGN1bHBhIGFuaW1pLCBkb2xvcmVtIGNvbnNlcXV1bnR1ciBjb25zZXF1YXR1ci4gRWEsIGV4IHZvbHVwdGF0dW0hIFF1YW0sIHJhdGlvbmUgZG9sb3J1bT8gSW4sIHJlaWNpZW5kaXMgbmloaWwuIE1pbmltYSBzYWVwZSBpdXJlIHV0IGV4IHByYWVzZW50aXVtLiBRdWlkZW0gZXNzZSByZXBlbGxlbmR1cyBtb2xlc3RpYXMgc2ltaWxpcXVlIGV4cGVkaXRhIGlsbHVtPyc7XG5cbiAgaG9tZURpdlR3by5hcHBlbmRDaGlsZChoZWFkaW5nKTtcbiAgaG9tZURpdlR3by5hcHBlbmRDaGlsZChwYXJhZ3JhZ2gpO1xuICBob21lRGl2T25lLmFwcGVuZENoaWxkKGhvbWVEaXZUd28pO1xuICBob21lRGl2LmFwcGVuZENoaWxkKGhvbWVEaXZPbmUpO1xuXG5cbiAgcmV0dXJuIGhvbWVEaXY7XG59O1xuXG5jb25zdCBzaG93SG9tZSA9ICgpID0+IHtcbiAgY29udGVudC5pbnNlcnRBZGphY2VudEVsZW1lbnQoJ2FmdGVyYmVnaW4nLCBob21lRnVuYyhob21lRGl2KSk7XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgc2hvd0hvbWU7IiwiY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG5jb25zdCBtZW51RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbmNvbnN0IGltYWdlID0gKCkgPT4ge1xuICBjb25zdCBpbWdPbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgY29uc3QgaW1nVHdvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIGltZ09uZS5jbGFzc0xpc3QuYWRkKCdncmlkSW1hZ2UnKTtcbiAgaW1nVHdvLmNsYXNzTGlzdC5hZGQoJ2dyaWRJbWFnZScpO1xuICBpbWdPbmUuc3JjID0gJy4uL2Fzc2V0cy9pbWcvNi5qcGcnO1xuICBpbWdUd28uc3JjID0gJy4uL2Fzc2V0cy9pbWcvMTEucG5nJztcblxuICByZXR1cm4geyBpbWdPbmUsIGltZ1R3byB9O1xufTtcblxuY29uc3QgYm94SW5mbyA9ICgpID0+IHtcbiAgY29uc3QgaW5mb0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBpbmZvVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xuICBjb25zdCBpbmZvU3ViID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBpbmZvRGl2LmNsYXNzTGlzdC5hZGQoJ2dyaWQtaXYnKTtcbiAgaW5mb1RpdGxlLmNsYXNzTGlzdC5hZGQoJ2dyaWRUaXRsZScpO1xuICBpbmZvVGl0bGUudGV4dENvbnRlbnQgPSAnUGVwcGVyZWQgUmljZSc7XG4gIGluZm9TdWIuY2xhc3NMaXN0LmFkZCgnZ3JpZFBnJyk7XG4gIGluZm9TdWIudGV4dENvbnRlbnQgPSAnRG9sb3JlbXF1ZSBvbW5pcyBleGVyY2l0YXRpb25lbSBudWxsYSByYXRpb25lIHBlcmZlcmVuZGlzLCBxdWFtLCBpbmNpZHVudCBlYXJ1bSBhc3N1bWVuZGEgZWl1cy4nO1xuICByZXR1cm4geyBpbmZvRGl2LCBpbmZvVGl0bGUsIGluZm9TdWIgfTtcbn07XG5cbmZ1bmN0aW9uIGJveEVsZW1lbnQoKSB7XG4gIGNvbnN0IGJveCA9IFtdO1xuICBsZXQgcGljID0gdHJ1ZTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCA0OyBpICs9IDEpIHtcbiAgICBjb25zdCBib3hDb250ZW50ID0gYm94SW5mbygpLmluZm9EaXY7XG4gICAgYm94Q29udGVudC5hcHBlbmRDaGlsZChib3hJbmZvKCkuaW5mb1RpdGxlKTtcbiAgICBib3hDb250ZW50LmFwcGVuZENoaWxkKGJveEluZm8oKS5pbmZvU3ViKTtcbiAgICBjb25zdCBhbnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBhbnkuY2xhc3NMaXN0LmFkZCgnZ3JpZEl0ZW0nKTtcbiAgICBpZiAocGljKSB7XG4gICAgICBhbnkuYXBwZW5kQ2hpbGQoaW1hZ2UoKS5pbWdPbmUpO1xuICAgICAgcGljID0gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFueS5hcHBlbmRDaGlsZChpbWFnZSgpLmltZ1R3byk7XG4gICAgICBwaWMgPSB0cnVlO1xuICAgIH1cbiAgICBhbnkuYXBwZW5kQ2hpbGQoYm94SW5mbygpLmluZm9EaXYpO1xuICAgIGFueS5hcHBlbmRDaGlsZChib3hDb250ZW50KTtcbiAgICBib3gucHVzaChhbnkpO1xuICB9XG4gIHJldHVybiB7IGJveCB9O1xufVxuXG5jb25zdCBtZW51RnVuYyA9IChtZW51RGl2KSA9PiB7XG4gIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgZ3JpZEJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBsZXQgYm94ID0gYm94RWxlbWVudCgpO1xuICBib3ggPSBPYmplY3QuZW50cmllcyhib3gpO1xuICBib3ggPSBib3hbMF1bMV07XG4gIG1lbnVEaXYuaWQgPSAnbWVudSc7XG4gIG1lbnVEaXYuY2xhc3NMaXN0LmFkZChcbiAgICAnbWVudS1iZycsXG4gICAgJ21lbnVDb250YWluZXInXG4gICk7XG4gIGhlYWRpbmcudGV4dENvbnRlbnQgPSAnU3BlY2lhbCBtZW51JztcbiAgaGVhZGluZy5jbGFzc0xpc3QuYWRkKCdtZW51VGl0bGUnKTtcbiAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ21lbnUtdicpO1xuICBncmlkQm94LmNsYXNzTGlzdC5hZGQoJ21lbnVHcmlkJyk7XG5cbiAgbWVudURpdi5hcHBlbmRDaGlsZChoZWFkaW5nKTtcbiAgbWVudURpdi5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZ3JpZEJveCk7XG4gIGZvciAobGV0IGEgPSAwOyBhIDwgYm94Lmxlbmd0aDsgYSArPSAxKSB7XG4gICAgZ3JpZEJveC5hcHBlbmRDaGlsZChib3hbYV0pO1xuICB9XG4gIHJldHVybiBtZW51RGl2O1xufTtcblxuY29uc3Qgc2hvd01lbnUgPSAoKSA9PiB7XG4gIGNvbnRlbnQuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCdhZnRlcmJlZ2luJywgbWVudUZ1bmMobWVudURpdikpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBzaG93TWVudTsiLCJjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbmNvbnN0IG5hdkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG5jb25zdCBuYXZGdW5jID0gKG5hdkRpdikgPT4ge1xuICBjb25zdCBuYXZPbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgbmF2VHdvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IG5hdlRocmVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgbmF2RGl2LmNsYXNzTGlzdC5hZGQoJ3RhYnMnLCAnbmF2LWNvbnRhaW5lcicpO1xuICBuYXZPbmUuY2xhc3NMaXN0LmFkZCgnaG9tZScsICd0YWInLCAnbmF2LXN0eWxlJywgJ2luZGljYXRvcicpO1xuICBuYXZPbmUuaWQgPSAnaG0nO1xuICBuYXZPbmUudGV4dENvbnRlbnQgPSAnSG9tZSc7XG4gIG5hdlR3by5jbGFzc0xpc3QuYWRkKCdtZW51JywgJ3RhYicsICduYXYtc3R5bGUnKTtcbiAgbmF2VHdvLmlkID0gJ21uJztcbiAgbmF2VHdvLnRleHRDb250ZW50ID0gJ01lbnUnO1xuICBuYXZUaHJlZS5jbGFzc0xpc3QuYWRkKCdjb250YWN0JywgJ3RhYicsICduYXYtc3R5bGUnKTtcbiAgbmF2VGhyZWUuaWQgPSAnY24nO1xuICBuYXZUaHJlZS50ZXh0Q29udGVudCA9ICdDb250YWN0JztcblxuICBuYXZEaXYuYXBwZW5kQ2hpbGQobmF2T25lKTtcbiAgbmF2RGl2LmFwcGVuZENoaWxkKG5hdlR3byk7XG4gIG5hdkRpdi5hcHBlbmRDaGlsZChuYXZUaHJlZSk7XG5cbiAgcmV0dXJuIG5hdkRpdjtcbn1cblxuY29uc3Qgc2hvd05hdiA9ICgpID0+IHtcbiAgLy8gY29udGVudC5hcHBlbmRDaGlsZChuYXZGdW5jKG5hdkRpdikpO1xuICBjb250ZW50Lmluc2VydEFkamFjZW50RWxlbWVudCgnYmVmb3JlYmVnaW4nLCBuYXZGdW5jKG5hdkRpdikpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgc2hvd05hdjsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBzaG93Q29udGFjdCBmcm9tICcuL2NvbnRhY3QnO1xuaW1wb3J0IHNob3dIb21lIGZyb20gJy4vaG9tZSc7XG5pbXBvcnQgc2hvd01lbnUgZnJvbSAnLi9tZW51JztcbmltcG9ydCBzaG93TmF2IGZyb20gJy4vbmF2Jztcbi8vIGltcG9ydCB7c2hvd05hdiwgc2hvd0NvbnRlbnR9IGZyb20gJy4vcGFnZSdcblxuc2hvd05hdigpXG4vLyBzaG93Q29udGFjdCgpXG4vLyBzaG93TWVudSgpXG4vLyBzaG93SG9tZSgpXG4vLyBzaG93Q29udGVudCgpXG5cbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuY29uc3QgdGFicyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YWInKTtcbmNvbnN0IHRhYk1ldGhvZHMgPSBbc2hvd0hvbWUsIHNob3dNZW51LCBzaG93Q29udGFjdF07XG5cbmNvbnN0IG9wZW5UYWIgPSAoaW5kZXgpID0+IHtcbiAgY29udGVudC5pbm5lckhUTUwgPSAnJztcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHRhYnMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICB0YWJzW2ldLmNsYXNzTGlzdC5yZW1vdmUoJ2luZGljYXRvcicpO1xuICB9XG5cbiAgdGFic1tpbmRleF0uY2xhc3NMaXN0LmFkZCgnaW5kaWNhdG9yJyk7XG4gIHRhYk1ldGhvZHNbaW5kZXhdKCk7XG59O1xuXG5mb3IgKGxldCBpID0gMDsgaSA8IHRhYnMubGVuZ3RoOyBpICs9IDEpIHtcbiAgdGFic1tpXS5vbmNsaWNrID0gb3BlblRhYi5iaW5kKG51bGwsIGkpO1xufVxuICAiXSwic291cmNlUm9vdCI6IiJ9