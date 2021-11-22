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
/* harmony export */   "createHome": () => (/* binding */ createHome)
/* harmony export */ });

function createHome(){
    const home = document.createElement('div');
    home.classList.add('home');

    const h1Home = document.createElement('h1');
    h1Home.innerText = 'Treat Yourself';

    home.appendChild(h1Home);

    const line = document.createElement('hr');

    home.appendChild(line);

    const pHome = document.createElement('p');
    pHome.innerText = 'Apollonia Italian restaurant has been serving authentic Italian dishes in your neighborhood since 1989.';

    home.appendChild(pHome);

    return home;
}



/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createMenu": () => (/* binding */ createMenu)
/* harmony export */ });

function createMenu(){
    const menu = document.createElement('div');
    menu.classList.add('menu');

    const h1Menu = document.createElement('h1');
    h1Menu.innerText = 'OUR MENU';
    menu.appendChild(h1Menu);

    const line = document.createElement('hr');
    menu.appendChild(line);

    const dishes = document.createElement('div');
    dishes.classList.add('dishes')

    const margherita = createMenuItem('Pizza Margherita', '$15.00', 'Mozzarella cheese and fresh basil.');
    dishes.appendChild(margherita);

    for(let i = 0; i<9; i++){
        const margherita = createMenuItem('Pizza Margherita', '$15.00', 'Mozzarella cheese and fresh basil.');
        dishes.appendChild(margherita);
    }

    menu.appendChild(dishes);

    return menu;
}

function createMenuItem(name, price, description){
    const menuItem = document.createElement('div');
    menuItem.classList.add('menuItem');

    const itemTitle = document.createElement('div');
    itemTitle.classList.add('itemTitle');

    const h1Name = document.createElement('h1');
    h1Name.innerText = name;
    itemTitle.appendChild(h1Name);

    const h1Price = document.createElement('h1');
    h1Price.innerText = price;
    itemTitle.appendChild(h1Price);

    const itemDescription = document.createElement('div');
    itemDescription.classList.add('itemDescription');

    const pItem = document.createElement('p');
    pItem.innerText = description;
    itemDescription.appendChild(pItem);

    menuItem.appendChild(itemTitle);
    menuItem.appendChild(itemDescription);

    return menuItem;
}



/***/ }),

/***/ "./src/navbar.js":
/*!***********************!*\
  !*** ./src/navbar.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createNavbar": () => (/* binding */ createNavbar)
/* harmony export */ });

function createNavbar(){
    const header = document.createElement('header');

    const icon = document.createElement('div');
    icon.classList.add('icon');

    const h1Icon = document.createElement('h1');
    h1Icon.innerText = 'Apollonia';

    icon.appendChild(h1Icon);

    header.appendChild(icon);

    const navItems = document.createElement('ul');

    const homeItem = document.createElement('li'); 
    homeItem.innerText = 'Home';
    navItems.appendChild(homeItem);

    const menuItem = document.createElement('li'); 
    menuItem.innerText = 'Menu';
    navItems.appendChild(menuItem);

    const contactItem = document.createElement('li'); 
    contactItem.innerText = 'Contact';
    navItems.appendChild(contactItem);

    header.appendChild(navItems);

    return header;
}




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
/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navbar */ "./src/navbar.js");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ "./src/menu.js");




const contentContainer = document.querySelector('#content');


contentContainer.appendChild((0,_navbar__WEBPACK_IMPORTED_MODULE_0__.createNavbar)());
contentContainer.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_1__.createHome)());
contentContainer.appendChild((0,_menu__WEBPACK_IMPORTED_MODULE_2__.createMenu)());








})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkJBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsbUJBQW1CLEtBQUs7QUFDeEI7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckRBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRXdCOzs7Ozs7O1VDakN4QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNOd0M7QUFDSjtBQUNBOztBQUVwQzs7O0FBR0EsNkJBQTZCLHFEQUFZO0FBQ3pDLDZCQUE2QixpREFBVTtBQUN2Qyw2QkFBNkIsaURBQVUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbmF2YmFyLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmZ1bmN0aW9uIGNyZWF0ZUhvbWUoKXtcbiAgICBjb25zdCBob21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaG9tZS5jbGFzc0xpc3QuYWRkKCdob21lJyk7XG5cbiAgICBjb25zdCBoMUhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGgxSG9tZS5pbm5lclRleHQgPSAnVHJlYXQgWW91cnNlbGYnO1xuXG4gICAgaG9tZS5hcHBlbmRDaGlsZChoMUhvbWUpO1xuXG4gICAgY29uc3QgbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hyJyk7XG5cbiAgICBob21lLmFwcGVuZENoaWxkKGxpbmUpO1xuXG4gICAgY29uc3QgcEhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcEhvbWUuaW5uZXJUZXh0ID0gJ0Fwb2xsb25pYSBJdGFsaWFuIHJlc3RhdXJhbnQgaGFzIGJlZW4gc2VydmluZyBhdXRoZW50aWMgSXRhbGlhbiBkaXNoZXMgaW4geW91ciBuZWlnaGJvcmhvb2Qgc2luY2UgMTk4OS4nO1xuXG4gICAgaG9tZS5hcHBlbmRDaGlsZChwSG9tZSk7XG5cbiAgICByZXR1cm4gaG9tZTtcbn1cblxuZXhwb3J0IHsgY3JlYXRlSG9tZSB9OyIsIlxuZnVuY3Rpb24gY3JlYXRlTWVudSgpe1xuICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtZW51LmNsYXNzTGlzdC5hZGQoJ21lbnUnKTtcblxuICAgIGNvbnN0IGgxTWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgaDFNZW51LmlubmVyVGV4dCA9ICdPVVIgTUVOVSc7XG4gICAgbWVudS5hcHBlbmRDaGlsZChoMU1lbnUpO1xuXG4gICAgY29uc3QgbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hyJyk7XG4gICAgbWVudS5hcHBlbmRDaGlsZChsaW5lKTtcblxuICAgIGNvbnN0IGRpc2hlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpc2hlcy5jbGFzc0xpc3QuYWRkKCdkaXNoZXMnKVxuXG4gICAgY29uc3QgbWFyZ2hlcml0YSA9IGNyZWF0ZU1lbnVJdGVtKCdQaXp6YSBNYXJnaGVyaXRhJywgJyQxNS4wMCcsICdNb3p6YXJlbGxhIGNoZWVzZSBhbmQgZnJlc2ggYmFzaWwuJyk7XG4gICAgZGlzaGVzLmFwcGVuZENoaWxkKG1hcmdoZXJpdGEpO1xuXG4gICAgZm9yKGxldCBpID0gMDsgaTw5OyBpKyspe1xuICAgICAgICBjb25zdCBtYXJnaGVyaXRhID0gY3JlYXRlTWVudUl0ZW0oJ1BpenphIE1hcmdoZXJpdGEnLCAnJDE1LjAwJywgJ01venphcmVsbGEgY2hlZXNlIGFuZCBmcmVzaCBiYXNpbC4nKTtcbiAgICAgICAgZGlzaGVzLmFwcGVuZENoaWxkKG1hcmdoZXJpdGEpO1xuICAgIH1cblxuICAgIG1lbnUuYXBwZW5kQ2hpbGQoZGlzaGVzKTtcblxuICAgIHJldHVybiBtZW51O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVNZW51SXRlbShuYW1lLCBwcmljZSwgZGVzY3JpcHRpb24pe1xuICAgIGNvbnN0IG1lbnVJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWVudUl0ZW0uY2xhc3NMaXN0LmFkZCgnbWVudUl0ZW0nKTtcblxuICAgIGNvbnN0IGl0ZW1UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGl0ZW1UaXRsZS5jbGFzc0xpc3QuYWRkKCdpdGVtVGl0bGUnKTtcblxuICAgIGNvbnN0IGgxTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgaDFOYW1lLmlubmVyVGV4dCA9IG5hbWU7XG4gICAgaXRlbVRpdGxlLmFwcGVuZENoaWxkKGgxTmFtZSk7XG5cbiAgICBjb25zdCBoMVByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICBoMVByaWNlLmlubmVyVGV4dCA9IHByaWNlO1xuICAgIGl0ZW1UaXRsZS5hcHBlbmRDaGlsZChoMVByaWNlKTtcblxuICAgIGNvbnN0IGl0ZW1EZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGl0ZW1EZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCdpdGVtRGVzY3JpcHRpb24nKTtcblxuICAgIGNvbnN0IHBJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHBJdGVtLmlubmVyVGV4dCA9IGRlc2NyaXB0aW9uO1xuICAgIGl0ZW1EZXNjcmlwdGlvbi5hcHBlbmRDaGlsZChwSXRlbSk7XG5cbiAgICBtZW51SXRlbS5hcHBlbmRDaGlsZChpdGVtVGl0bGUpO1xuICAgIG1lbnVJdGVtLmFwcGVuZENoaWxkKGl0ZW1EZXNjcmlwdGlvbik7XG5cbiAgICByZXR1cm4gbWVudUl0ZW07XG59XG5cbmV4cG9ydCB7IGNyZWF0ZU1lbnUgfTsiLCJcbmZ1bmN0aW9uIGNyZWF0ZU5hdmJhcigpe1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xuXG4gICAgY29uc3QgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGljb24uY2xhc3NMaXN0LmFkZCgnaWNvbicpO1xuXG4gICAgY29uc3QgaDFJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICBoMUljb24uaW5uZXJUZXh0ID0gJ0Fwb2xsb25pYSc7XG5cbiAgICBpY29uLmFwcGVuZENoaWxkKGgxSWNvbik7XG5cbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoaWNvbik7XG5cbiAgICBjb25zdCBuYXZJdGVtcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG5cbiAgICBjb25zdCBob21lSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7IFxuICAgIGhvbWVJdGVtLmlubmVyVGV4dCA9ICdIb21lJztcbiAgICBuYXZJdGVtcy5hcHBlbmRDaGlsZChob21lSXRlbSk7XG5cbiAgICBjb25zdCBtZW51SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7IFxuICAgIG1lbnVJdGVtLmlubmVyVGV4dCA9ICdNZW51JztcbiAgICBuYXZJdGVtcy5hcHBlbmRDaGlsZChtZW51SXRlbSk7XG5cbiAgICBjb25zdCBjb250YWN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7IFxuICAgIGNvbnRhY3RJdGVtLmlubmVyVGV4dCA9ICdDb250YWN0JztcbiAgICBuYXZJdGVtcy5hcHBlbmRDaGlsZChjb250YWN0SXRlbSk7XG5cbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQobmF2SXRlbXMpO1xuXG4gICAgcmV0dXJuIGhlYWRlcjtcbn1cblxuZXhwb3J0IHsgY3JlYXRlTmF2YmFyIH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGNyZWF0ZU5hdmJhciB9IGZyb20gXCIuL25hdmJhclwiO1xuaW1wb3J0IHsgY3JlYXRlSG9tZSB9IGZyb20gXCIuL2hvbWVcIjtcbmltcG9ydCB7IGNyZWF0ZU1lbnUgfSBmcm9tIFwiLi9tZW51XCI7XG5cbmNvbnN0IGNvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuXG5cbmNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlTmF2YmFyKCkpO1xuY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVIb21lKCkpO1xuY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVNZW51KCkpO1xuXG5cblxuXG5cblxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=