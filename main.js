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
  const contactDivOne = document.createElement("div");
  const contactDivTwo = document.createElement("div");
  const title = document.createElement("h2");
  const pOne = document.createElement("p");
  const pTwo = document.createElement("p");
  const sOne = document.createElement("span");
  const sTwo = document.createElement("span");
  
  contactDiv.id = "contact";
  contactDiv.classList.add("contact-bg", "contactContainer");
  contactDivOne.classList.add("contactContent")
  contactDivTwo.classList.add("contactBox");
  title.classList.add("contactTitle");
  title.textContent = "Contact us"
  sOne.classList.add("contactSpan");
  sOne.textContent = "alorr@alorr.com";
  sTwo.classList.add("contactSpan");
  sTwo.textContent = "+234-111-000-17";
  pOne.textContent = "Email: ";
  pTwo.textContent = "Phone: ";

  contactDiv.appendChild(contactDivOne);
  contactDivOne.appendChild(contactDivTwo);
  contactDivTwo.appendChild(title);
  contactDivTwo.appendChild(pOne);
  contactDivTwo.appendChild(pTwo);
  pOne.appendChild(sOne);
  pTwo.appendChild(sTwo);

  return contactDiv
}

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
  const homeDivOne = document.createElement("div");
  const homeDivTwo = document.createElement("div");
  const heading = document.createElement("h1");
  const paragragh = document.createElement("p");

  homeDiv.id = "home";
  homeDiv.classList.add(
    "top-bg",
    "homeContainer"
  );
  homeDivOne.classList.add("homeContent",);
  homeDivTwo.classList.add("homeBox");
  heading.classList.add("homeTitle");
  paragragh.classList.add("homePg");
  
  heading.textContent = "Welcome to Alorr!";
  paragragh.textContent =
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam cupiditate, ipsum saepe odio sint neque facilis quod culpa animi, dolorem consequuntur consequatur. Ea, ex voluptatum! Quam, ratione dolorum? In, reiciendis nihil. Minima saepe iure ut ex praesentium. Quidem esse repellendus molestias similique expedita illum?";

  homeDivTwo.appendChild(heading);
  homeDivTwo.appendChild(paragragh);
  homeDivOne.appendChild(homeDivTwo);
  homeDiv.appendChild(homeDivOne);


  return homeDiv;
}

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
// import { info } from "autoprefixer";

function boxElement(){
  let box = [];
  let pic = true;
    for (let i = 0; i < 4; i += 1) {
      const boxContent = boxInfo().infoDiv
      boxContent.appendChild(boxInfo().infoTitle);
      boxContent.appendChild(boxInfo().infoSub);
      let any = document.createElement("div");
      any.classList.add("gridItem");
      if (pic) {
        any.appendChild(image().imgOne);
        pic = false
      } else {
        any.appendChild(image().imgTwo);
        pic = true
      }
      any.appendChild(boxInfo().infoDiv);
      any.appendChild(boxContent);
      box.push(any)
      // console.log(box[i]);
    };
    console.log(box)
    return {box};
  };

const image = () => {
  let imgOne = document.createElement("img");
  let imgTwo = document.createElement("img");
  imgOne.classList.add("gridImage");
  imgTwo.classList.add("gridImage");
  imgOne.src = "../assets/img/6.jpg";
  imgTwo.src = "../assets/img/11.png";

  return {imgOne, imgTwo};
};

const boxInfo = () => {
  const infoDiv = document.createElement("div");
  const infoTitle = document.createElement("h4");
  const infoSub = document.createElement("p");
  infoDiv.classList.add("grid-iv");
  infoTitle.classList.add("gridTitle");
  infoTitle.textContent = "Peppered Rice";
  infoSub.classList.add("gridPg");
  infoSub.textContent = "Doloremque omnis exercitationem nulla ratione perferendis, quam, incidunt earum assumenda eius.";
  return {infoDiv, infoTitle, infoSub};
};

const menuFunc = (menuDiv) => {
  const heading = document.createElement("h2");
  const container = document.createElement("div");
  const gridBox = document.createElement("div");
  let box = boxElement()
  box = Object.entries(box)
  console.log(box)
  box = box[0][1]
  menuDiv.id = "menu";
  menuDiv.classList.add(
    "menu-bg",
    "menuContainer"
  );
  
  heading.textContent = "Special menu";
  heading.classList.add("menuTitle");
  container.classList.add("menu-v");
  gridBox.classList.add("menuGrid");
  // console.log(box);
  // box.forEach(element => {  
  //   gridBox.appendChild(element);
  // });
  menuDiv.appendChild(heading);
  menuDiv.appendChild(container);
  container.appendChild(gridBox);
  console.log(box)
  for (let a = 0; a < box.length; a += 1) {

    gridBox.appendChild(box[a]); 
  }
  return menuDiv
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menuFunc);

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
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ "./src/home.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact.js */ "./src/contact.js");




const content = document.getElementById("content");
const homeDiv = document.createElement("div");
const menuDivv = document.createElement("div");
const contactDiv = document.createElement("div");

const showContent = () => {
  content.appendChild((0,_home_js__WEBPACK_IMPORTED_MODULE_0__.default)(homeDiv));
  // console.log(menuFunc(menuDivv));
  content.appendChild((0,_menu_js__WEBPACK_IMPORTED_MODULE_1__.default)(menuDivv));
  content.appendChild((0,_contact_js__WEBPACK_IMPORTED_MODULE_2__.default)(contactDiv));
};

showContent();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGlFQUFlLFc7Ozs7Ozs7Ozs7Ozs7O0FDakNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQSxpRUFBZSxROzs7Ozs7Ozs7Ozs7OztBQzdCZixXQUFXLE9BQU87O0FBRWxCO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixPQUFPO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFVBQVU7QUFDVjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsZ0JBQWdCOztBQUVqQyxnQztBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxROzs7Ozs7VUNuRmY7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7Ozs7Ozs7Ozs7OztBQ05nQztBQUNBO0FBQ007O0FBRXRDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esc0JBQXNCLGlEQUFRO0FBQzlCO0FBQ0Esc0JBQXNCLGlEQUFRO0FBQzlCLHNCQUFzQixvREFBVztBQUNqQzs7QUFFQSxjIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBjb250YWN0RnVuYyA9IChjb250YWN0RGl2KSA9PiB7XG4gIGNvbnN0IGNvbnRhY3REaXZPbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBjb250YWN0RGl2VHdvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gIGNvbnN0IHBPbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgY29uc3QgcFR3byA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBjb25zdCBzT25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIGNvbnN0IHNUd28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgXG4gIGNvbnRhY3REaXYuaWQgPSBcImNvbnRhY3RcIjtcbiAgY29udGFjdERpdi5jbGFzc0xpc3QuYWRkKFwiY29udGFjdC1iZ1wiLCBcImNvbnRhY3RDb250YWluZXJcIik7XG4gIGNvbnRhY3REaXZPbmUuY2xhc3NMaXN0LmFkZChcImNvbnRhY3RDb250ZW50XCIpXG4gIGNvbnRhY3REaXZUd28uY2xhc3NMaXN0LmFkZChcImNvbnRhY3RCb3hcIik7XG4gIHRpdGxlLmNsYXNzTGlzdC5hZGQoXCJjb250YWN0VGl0bGVcIik7XG4gIHRpdGxlLnRleHRDb250ZW50ID0gXCJDb250YWN0IHVzXCJcbiAgc09uZS5jbGFzc0xpc3QuYWRkKFwiY29udGFjdFNwYW5cIik7XG4gIHNPbmUudGV4dENvbnRlbnQgPSBcImFsb3JyQGFsb3JyLmNvbVwiO1xuICBzVHdvLmNsYXNzTGlzdC5hZGQoXCJjb250YWN0U3BhblwiKTtcbiAgc1R3by50ZXh0Q29udGVudCA9IFwiKzIzNC0xMTEtMDAwLTE3XCI7XG4gIHBPbmUudGV4dENvbnRlbnQgPSBcIkVtYWlsOiBcIjtcbiAgcFR3by50ZXh0Q29udGVudCA9IFwiUGhvbmU6IFwiO1xuXG4gIGNvbnRhY3REaXYuYXBwZW5kQ2hpbGQoY29udGFjdERpdk9uZSk7XG4gIGNvbnRhY3REaXZPbmUuYXBwZW5kQ2hpbGQoY29udGFjdERpdlR3byk7XG4gIGNvbnRhY3REaXZUd28uYXBwZW5kQ2hpbGQodGl0bGUpO1xuICBjb250YWN0RGl2VHdvLmFwcGVuZENoaWxkKHBPbmUpO1xuICBjb250YWN0RGl2VHdvLmFwcGVuZENoaWxkKHBUd28pO1xuICBwT25lLmFwcGVuZENoaWxkKHNPbmUpO1xuICBwVHdvLmFwcGVuZENoaWxkKHNUd28pO1xuXG4gIHJldHVybiBjb250YWN0RGl2XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRhY3RGdW5jIiwiY29uc3QgaG9tZUZ1bmMgPSAoaG9tZURpdikgPT4ge1xuICBjb25zdCBob21lRGl2T25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgaG9tZURpdlR3byA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gIGNvbnN0IHBhcmFncmFnaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuXG4gIGhvbWVEaXYuaWQgPSBcImhvbWVcIjtcbiAgaG9tZURpdi5jbGFzc0xpc3QuYWRkKFxuICAgIFwidG9wLWJnXCIsXG4gICAgXCJob21lQ29udGFpbmVyXCJcbiAgKTtcbiAgaG9tZURpdk9uZS5jbGFzc0xpc3QuYWRkKFwiaG9tZUNvbnRlbnRcIiwpO1xuICBob21lRGl2VHdvLmNsYXNzTGlzdC5hZGQoXCJob21lQm94XCIpO1xuICBoZWFkaW5nLmNsYXNzTGlzdC5hZGQoXCJob21lVGl0bGVcIik7XG4gIHBhcmFncmFnaC5jbGFzc0xpc3QuYWRkKFwiaG9tZVBnXCIpO1xuICBcbiAgaGVhZGluZy50ZXh0Q29udGVudCA9IFwiV2VsY29tZSB0byBBbG9yciFcIjtcbiAgcGFyYWdyYWdoLnRleHRDb250ZW50ID1cbiAgICBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyLCBhZGlwaXNpY2luZyBlbGl0LiBRdWFtIGN1cGlkaXRhdGUsIGlwc3VtIHNhZXBlIG9kaW8gc2ludCBuZXF1ZSBmYWNpbGlzIHF1b2QgY3VscGEgYW5pbWksIGRvbG9yZW0gY29uc2VxdXVudHVyIGNvbnNlcXVhdHVyLiBFYSwgZXggdm9sdXB0YXR1bSEgUXVhbSwgcmF0aW9uZSBkb2xvcnVtPyBJbiwgcmVpY2llbmRpcyBuaWhpbC4gTWluaW1hIHNhZXBlIGl1cmUgdXQgZXggcHJhZXNlbnRpdW0uIFF1aWRlbSBlc3NlIHJlcGVsbGVuZHVzIG1vbGVzdGlhcyBzaW1pbGlxdWUgZXhwZWRpdGEgaWxsdW0/XCI7XG5cbiAgaG9tZURpdlR3by5hcHBlbmRDaGlsZChoZWFkaW5nKTtcbiAgaG9tZURpdlR3by5hcHBlbmRDaGlsZChwYXJhZ3JhZ2gpO1xuICBob21lRGl2T25lLmFwcGVuZENoaWxkKGhvbWVEaXZUd28pO1xuICBob21lRGl2LmFwcGVuZENoaWxkKGhvbWVEaXZPbmUpO1xuXG5cbiAgcmV0dXJuIGhvbWVEaXY7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGhvbWVGdW5jIiwiLy8gaW1wb3J0IHsgaW5mbyB9IGZyb20gXCJhdXRvcHJlZml4ZXJcIjtcblxuZnVuY3Rpb24gYm94RWxlbWVudCgpe1xuICBsZXQgYm94ID0gW107XG4gIGxldCBwaWMgPSB0cnVlO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNDsgaSArPSAxKSB7XG4gICAgICBjb25zdCBib3hDb250ZW50ID0gYm94SW5mbygpLmluZm9EaXZcbiAgICAgIGJveENvbnRlbnQuYXBwZW5kQ2hpbGQoYm94SW5mbygpLmluZm9UaXRsZSk7XG4gICAgICBib3hDb250ZW50LmFwcGVuZENoaWxkKGJveEluZm8oKS5pbmZvU3ViKTtcbiAgICAgIGxldCBhbnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgYW55LmNsYXNzTGlzdC5hZGQoXCJncmlkSXRlbVwiKTtcbiAgICAgIGlmIChwaWMpIHtcbiAgICAgICAgYW55LmFwcGVuZENoaWxkKGltYWdlKCkuaW1nT25lKTtcbiAgICAgICAgcGljID0gZmFsc2VcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFueS5hcHBlbmRDaGlsZChpbWFnZSgpLmltZ1R3byk7XG4gICAgICAgIHBpYyA9IHRydWVcbiAgICAgIH1cbiAgICAgIGFueS5hcHBlbmRDaGlsZChib3hJbmZvKCkuaW5mb0Rpdik7XG4gICAgICBhbnkuYXBwZW5kQ2hpbGQoYm94Q29udGVudCk7XG4gICAgICBib3gucHVzaChhbnkpXG4gICAgICAvLyBjb25zb2xlLmxvZyhib3hbaV0pO1xuICAgIH07XG4gICAgY29uc29sZS5sb2coYm94KVxuICAgIHJldHVybiB7Ym94fTtcbiAgfTtcblxuY29uc3QgaW1hZ2UgPSAoKSA9PiB7XG4gIGxldCBpbWdPbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICBsZXQgaW1nVHdvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgaW1nT25lLmNsYXNzTGlzdC5hZGQoXCJncmlkSW1hZ2VcIik7XG4gIGltZ1R3by5jbGFzc0xpc3QuYWRkKFwiZ3JpZEltYWdlXCIpO1xuICBpbWdPbmUuc3JjID0gXCIuLi9hc3NldHMvaW1nLzYuanBnXCI7XG4gIGltZ1R3by5zcmMgPSBcIi4uL2Fzc2V0cy9pbWcvMTEucG5nXCI7XG5cbiAgcmV0dXJuIHtpbWdPbmUsIGltZ1R3b307XG59O1xuXG5jb25zdCBib3hJbmZvID0gKCkgPT4ge1xuICBjb25zdCBpbmZvRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgaW5mb1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg0XCIpO1xuICBjb25zdCBpbmZvU3ViID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGluZm9EaXYuY2xhc3NMaXN0LmFkZChcImdyaWQtaXZcIik7XG4gIGluZm9UaXRsZS5jbGFzc0xpc3QuYWRkKFwiZ3JpZFRpdGxlXCIpO1xuICBpbmZvVGl0bGUudGV4dENvbnRlbnQgPSBcIlBlcHBlcmVkIFJpY2VcIjtcbiAgaW5mb1N1Yi5jbGFzc0xpc3QuYWRkKFwiZ3JpZFBnXCIpO1xuICBpbmZvU3ViLnRleHRDb250ZW50ID0gXCJEb2xvcmVtcXVlIG9tbmlzIGV4ZXJjaXRhdGlvbmVtIG51bGxhIHJhdGlvbmUgcGVyZmVyZW5kaXMsIHF1YW0sIGluY2lkdW50IGVhcnVtIGFzc3VtZW5kYSBlaXVzLlwiO1xuICByZXR1cm4ge2luZm9EaXYsIGluZm9UaXRsZSwgaW5mb1N1Yn07XG59O1xuXG5jb25zdCBtZW51RnVuYyA9IChtZW51RGl2KSA9PiB7XG4gIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGdyaWRCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBsZXQgYm94ID0gYm94RWxlbWVudCgpXG4gIGJveCA9IE9iamVjdC5lbnRyaWVzKGJveClcbiAgY29uc29sZS5sb2coYm94KVxuICBib3ggPSBib3hbMF1bMV1cbiAgbWVudURpdi5pZCA9IFwibWVudVwiO1xuICBtZW51RGl2LmNsYXNzTGlzdC5hZGQoXG4gICAgXCJtZW51LWJnXCIsXG4gICAgXCJtZW51Q29udGFpbmVyXCJcbiAgKTtcbiAgXG4gIGhlYWRpbmcudGV4dENvbnRlbnQgPSBcIlNwZWNpYWwgbWVudVwiO1xuICBoZWFkaW5nLmNsYXNzTGlzdC5hZGQoXCJtZW51VGl0bGVcIik7XG4gIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibWVudS12XCIpO1xuICBncmlkQm94LmNsYXNzTGlzdC5hZGQoXCJtZW51R3JpZFwiKTtcbiAgLy8gY29uc29sZS5sb2coYm94KTtcbiAgLy8gYm94LmZvckVhY2goZWxlbWVudCA9PiB7ICBcbiAgLy8gICBncmlkQm94LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICAvLyB9KTtcbiAgbWVudURpdi5hcHBlbmRDaGlsZChoZWFkaW5nKTtcbiAgbWVudURpdi5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZ3JpZEJveCk7XG4gIGNvbnNvbGUubG9nKGJveClcbiAgZm9yIChsZXQgYSA9IDA7IGEgPCBib3gubGVuZ3RoOyBhICs9IDEpIHtcblxuICAgIGdyaWRCb3guYXBwZW5kQ2hpbGQoYm94W2FdKTsgXG4gIH1cbiAgcmV0dXJuIG1lbnVEaXZcbn1cblxuZXhwb3J0IGRlZmF1bHQgbWVudUZ1bmMiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBob21lRnVuYyBmcm9tICcuL2hvbWUuanMnXG5pbXBvcnQgbWVudUZ1bmMgZnJvbSAnLi9tZW51LmpzJ1xuaW1wb3J0IGNvbnRhY3RGdW5jIGZyb20gJy4vY29udGFjdC5qcydcblxuY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcbmNvbnN0IGhvbWVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuY29uc3QgbWVudURpdnYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuY29uc3QgY29udGFjdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbmNvbnN0IHNob3dDb250ZW50ID0gKCkgPT4ge1xuICBjb250ZW50LmFwcGVuZENoaWxkKGhvbWVGdW5jKGhvbWVEaXYpKTtcbiAgLy8gY29uc29sZS5sb2cobWVudUZ1bmMobWVudURpdnYpKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChtZW51RnVuYyhtZW51RGl2dikpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGNvbnRhY3RGdW5jKGNvbnRhY3REaXYpKTtcbn07XG5cbnNob3dDb250ZW50KCk7Il0sInNvdXJjZVJvb3QiOiIifQ==