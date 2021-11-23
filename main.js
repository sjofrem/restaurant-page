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
/* harmony export */   "createContact": () => (/* binding */ createContact)
/* harmony export */ });

function createContact(){
    const contact = document.createElement('div');
    contact.classList.add('contact');

    const h1Contact = document.createElement('h1');
    h1Contact.innerText = 'CONTACT US';
    contact.appendChild(h1Contact);

    const line = document.createElement('hr');
    contact.appendChild(line);

    const contactItems = document.createElement('div');
    contactItems.classList.add('contactItems');

    const location = createItem('./img/location.jpeg', 'Location:', '3447 Bird Street, Dixon, New Mexico');
    contactItems.appendChild(location);

    const hours = createItem('./img/clock.jpeg', 'Open Hours:', 'Monday to Saturday - 11:00 to 00:00');
    contactItems.appendChild(hours);

    const email = createItem('./img/email.jpeg', 'Email:', 'info@apollonia.com');
    contactItems.appendChild(email);

    const call = createItem('./img/phone.jpeg', 'Call:', '+1 202 555 0174');
    contactItems.appendChild(call);

    contact.appendChild(contactItems);

    return contact;
}

function createItem(file, title, description){

    const itemContainer = document.createElement('div');
    itemContainer.classList.add('itemContainer');

    const iconContainer = document.createElement('div');
    iconContainer.classList.add('iconContainer');

    const img = document.createElement('img');
    img.src = file;
    iconContainer.appendChild(img);

    itemContainer.appendChild(iconContainer);

    const textContainer = document.createElement('div');
    textContainer.classList.add('textContainer');

    const h1Item = document.createElement('h1');
    h1Item.innerText = title;
    textContainer.appendChild(h1Item);

    const pItem = document.createElement('p');
    pItem.innerText = description;
    textContainer.appendChild(pItem);

    itemContainer.appendChild(textContainer);

    

    return itemContainer;

}



/***/ }),

/***/ "./src/footer.js":
/*!***********************!*\
  !*** ./src/footer.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createFooter": () => (/* binding */ createFooter)
/* harmony export */ });

function createFooter(){
    const footer = document.createElement('footer');
    
    const pFooter = document.createElement('p');
    pFooter.innerText = '© 2021.Apollonia.All rights reserved. Design by sjofrem';

    footer.appendChild(pFooter);

    const link = document.createElement('a');
    link.href = 'https://github.com/sjofrem';

    const img = document.createElement('img');
    img.classList.add('github');
    img.src = 'https://cdn-icons-png.flaticon.com/512/25/25231.png';
    link.appendChild(img);

    footer.appendChild(link);

    return footer;
}



/***/ }),

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

    for(let i = 0; i<7; i++){
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
    homeItem.classList.add('homeBtn');
    homeItem.innerText = 'Home';
    navItems.appendChild(homeItem);

    const menuItem = document.createElement('li'); 
    menuItem.classList.add('menuBtn');
    menuItem.innerText = 'Menu';
    navItems.appendChild(menuItem);

    const contactItem = document.createElement('li'); 
    contactItem.classList.add('contactBtn');
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
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact */ "./src/contact.js");
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footer */ "./src/footer.js");






function clearHTML (){
    const home = document.querySelector('.home');
    const menu = document.querySelector('.menu');
    const contact = document.querySelector('.contact');
    if(home){
        home.remove();
    }
    else if(menu){
        menu.remove();
    }
    else{
        contact.remove();
    }
}

const contentContainer = document.querySelector('#content');

contentContainer.appendChild((0,_navbar__WEBPACK_IMPORTED_MODULE_0__.createNavbar)());
contentContainer.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_1__.createHome)());

const home = document.querySelector('.homeBtn');
const menu = document.querySelector('.menuBtn');
const contact = document.querySelector('.contactBtn');

home.addEventListener('click', () => {
    clearHTML();
    contentContainer.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_1__.createHome)());
});
menu.addEventListener('click', () => {
    clearHTML();
    contentContainer.appendChild((0,_menu__WEBPACK_IMPORTED_MODULE_2__.createMenu)());
});
contact.addEventListener('click', () => {
    clearHTML();
    contentContainer.appendChild((0,_contact__WEBPACK_IMPORTED_MODULE_3__.createContact)());
});










})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ25CQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkJBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsbUJBQW1CLEtBQUs7QUFDeEI7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckRBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRXdCOzs7Ozs7O1VDcEN4QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7OztBQ053QztBQUNKO0FBQ0E7QUFDTTtBQUNGOztBQUV4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLDZCQUE2QixxREFBWTtBQUN6Qyw2QkFBNkIsaURBQVU7O0FBRXZDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUNBQWlDLGlEQUFVO0FBQzNDLENBQUM7QUFDRDtBQUNBO0FBQ0EsaUNBQWlDLGlEQUFVO0FBQzNDLENBQUM7QUFDRDtBQUNBO0FBQ0EsaUNBQWlDLHVEQUFhO0FBQzlDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvZm9vdGVyLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9uYXZiYXIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlxuZnVuY3Rpb24gY3JlYXRlQ29udGFjdCgpe1xuICAgIGNvbnN0IGNvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWN0LmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QnKTtcblxuICAgIGNvbnN0IGgxQ29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgaDFDb250YWN0LmlubmVyVGV4dCA9ICdDT05UQUNUIFVTJztcbiAgICBjb250YWN0LmFwcGVuZENoaWxkKGgxQ29udGFjdCk7XG5cbiAgICBjb25zdCBsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaHInKTtcbiAgICBjb250YWN0LmFwcGVuZENoaWxkKGxpbmUpO1xuXG4gICAgY29uc3QgY29udGFjdEl0ZW1zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFjdEl0ZW1zLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3RJdGVtcycpO1xuXG4gICAgY29uc3QgbG9jYXRpb24gPSBjcmVhdGVJdGVtKCcuL2ltZy9sb2NhdGlvbi5qcGVnJywgJ0xvY2F0aW9uOicsICczNDQ3IEJpcmQgU3RyZWV0LCBEaXhvbiwgTmV3IE1leGljbycpO1xuICAgIGNvbnRhY3RJdGVtcy5hcHBlbmRDaGlsZChsb2NhdGlvbik7XG5cbiAgICBjb25zdCBob3VycyA9IGNyZWF0ZUl0ZW0oJy4vaW1nL2Nsb2NrLmpwZWcnLCAnT3BlbiBIb3VyczonLCAnTW9uZGF5IHRvIFNhdHVyZGF5IC0gMTE6MDAgdG8gMDA6MDAnKTtcbiAgICBjb250YWN0SXRlbXMuYXBwZW5kQ2hpbGQoaG91cnMpO1xuXG4gICAgY29uc3QgZW1haWwgPSBjcmVhdGVJdGVtKCcuL2ltZy9lbWFpbC5qcGVnJywgJ0VtYWlsOicsICdpbmZvQGFwb2xsb25pYS5jb20nKTtcbiAgICBjb250YWN0SXRlbXMuYXBwZW5kQ2hpbGQoZW1haWwpO1xuXG4gICAgY29uc3QgY2FsbCA9IGNyZWF0ZUl0ZW0oJy4vaW1nL3Bob25lLmpwZWcnLCAnQ2FsbDonLCAnKzEgMjAyIDU1NSAwMTc0Jyk7XG4gICAgY29udGFjdEl0ZW1zLmFwcGVuZENoaWxkKGNhbGwpO1xuXG4gICAgY29udGFjdC5hcHBlbmRDaGlsZChjb250YWN0SXRlbXMpO1xuXG4gICAgcmV0dXJuIGNvbnRhY3Q7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUl0ZW0oZmlsZSwgdGl0bGUsIGRlc2NyaXB0aW9uKXtcblxuICAgIGNvbnN0IGl0ZW1Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpdGVtQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2l0ZW1Db250YWluZXInKTtcblxuICAgIGNvbnN0IGljb25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpY29uQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2ljb25Db250YWluZXInKTtcblxuICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGltZy5zcmMgPSBmaWxlO1xuICAgIGljb25Db250YWluZXIuYXBwZW5kQ2hpbGQoaW1nKTtcblxuICAgIGl0ZW1Db250YWluZXIuYXBwZW5kQ2hpbGQoaWNvbkNvbnRhaW5lcik7XG5cbiAgICBjb25zdCB0ZXh0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGV4dENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0ZXh0Q29udGFpbmVyJyk7XG5cbiAgICBjb25zdCBoMUl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGgxSXRlbS5pbm5lclRleHQgPSB0aXRsZTtcbiAgICB0ZXh0Q29udGFpbmVyLmFwcGVuZENoaWxkKGgxSXRlbSk7XG5cbiAgICBjb25zdCBwSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBwSXRlbS5pbm5lclRleHQgPSBkZXNjcmlwdGlvbjtcbiAgICB0ZXh0Q29udGFpbmVyLmFwcGVuZENoaWxkKHBJdGVtKTtcblxuICAgIGl0ZW1Db250YWluZXIuYXBwZW5kQ2hpbGQodGV4dENvbnRhaW5lcik7XG5cbiAgICBcblxuICAgIHJldHVybiBpdGVtQ29udGFpbmVyO1xuXG59XG5cbmV4cG9ydCB7IGNyZWF0ZUNvbnRhY3QgfTsiLCJcbmZ1bmN0aW9uIGNyZWF0ZUZvb3Rlcigpe1xuICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicpO1xuICAgIFxuICAgIGNvbnN0IHBGb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcEZvb3Rlci5pbm5lclRleHQgPSAnwqkgMjAyMS5BcG9sbG9uaWEuQWxsIHJpZ2h0cyByZXNlcnZlZC4gRGVzaWduIGJ5IHNqb2ZyZW0nO1xuXG4gICAgZm9vdGVyLmFwcGVuZENoaWxkKHBGb290ZXIpO1xuXG4gICAgY29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBsaW5rLmhyZWYgPSAnaHR0cHM6Ly9naXRodWIuY29tL3Nqb2ZyZW0nO1xuXG4gICAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgaW1nLmNsYXNzTGlzdC5hZGQoJ2dpdGh1YicpO1xuICAgIGltZy5zcmMgPSAnaHR0cHM6Ly9jZG4taWNvbnMtcG5nLmZsYXRpY29uLmNvbS81MTIvMjUvMjUyMzEucG5nJztcbiAgICBsaW5rLmFwcGVuZENoaWxkKGltZyk7XG5cbiAgICBmb290ZXIuYXBwZW5kQ2hpbGQobGluayk7XG5cbiAgICByZXR1cm4gZm9vdGVyO1xufVxuXG5leHBvcnQgeyBjcmVhdGVGb290ZXIgfTsiLCJcbmZ1bmN0aW9uIGNyZWF0ZUhvbWUoKXtcbiAgICBjb25zdCBob21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaG9tZS5jbGFzc0xpc3QuYWRkKCdob21lJyk7XG5cbiAgICBjb25zdCBoMUhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGgxSG9tZS5pbm5lclRleHQgPSAnVHJlYXQgWW91cnNlbGYnO1xuXG4gICAgaG9tZS5hcHBlbmRDaGlsZChoMUhvbWUpO1xuXG4gICAgY29uc3QgbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hyJyk7XG5cbiAgICBob21lLmFwcGVuZENoaWxkKGxpbmUpO1xuXG4gICAgY29uc3QgcEhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcEhvbWUuaW5uZXJUZXh0ID0gJ0Fwb2xsb25pYSBJdGFsaWFuIHJlc3RhdXJhbnQgaGFzIGJlZW4gc2VydmluZyBhdXRoZW50aWMgSXRhbGlhbiBkaXNoZXMgaW4geW91ciBuZWlnaGJvcmhvb2Qgc2luY2UgMTk4OS4nO1xuXG4gICAgaG9tZS5hcHBlbmRDaGlsZChwSG9tZSk7XG5cbiAgICByZXR1cm4gaG9tZTtcbn1cblxuZXhwb3J0IHsgY3JlYXRlSG9tZSB9OyIsIlxuZnVuY3Rpb24gY3JlYXRlTWVudSgpe1xuICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtZW51LmNsYXNzTGlzdC5hZGQoJ21lbnUnKTtcblxuICAgIGNvbnN0IGgxTWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgaDFNZW51LmlubmVyVGV4dCA9ICdPVVIgTUVOVSc7XG4gICAgbWVudS5hcHBlbmRDaGlsZChoMU1lbnUpO1xuXG4gICAgY29uc3QgbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hyJyk7XG4gICAgbWVudS5hcHBlbmRDaGlsZChsaW5lKTtcblxuICAgIGNvbnN0IGRpc2hlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpc2hlcy5jbGFzc0xpc3QuYWRkKCdkaXNoZXMnKVxuXG4gICAgY29uc3QgbWFyZ2hlcml0YSA9IGNyZWF0ZU1lbnVJdGVtKCdQaXp6YSBNYXJnaGVyaXRhJywgJyQxNS4wMCcsICdNb3p6YXJlbGxhIGNoZWVzZSBhbmQgZnJlc2ggYmFzaWwuJyk7XG4gICAgZGlzaGVzLmFwcGVuZENoaWxkKG1hcmdoZXJpdGEpO1xuXG4gICAgZm9yKGxldCBpID0gMDsgaTw3OyBpKyspe1xuICAgICAgICBjb25zdCBtYXJnaGVyaXRhID0gY3JlYXRlTWVudUl0ZW0oJ1BpenphIE1hcmdoZXJpdGEnLCAnJDE1LjAwJywgJ01venphcmVsbGEgY2hlZXNlIGFuZCBmcmVzaCBiYXNpbC4nKTtcbiAgICAgICAgZGlzaGVzLmFwcGVuZENoaWxkKG1hcmdoZXJpdGEpO1xuICAgIH1cblxuICAgIG1lbnUuYXBwZW5kQ2hpbGQoZGlzaGVzKTtcblxuICAgIHJldHVybiBtZW51O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVNZW51SXRlbShuYW1lLCBwcmljZSwgZGVzY3JpcHRpb24pe1xuICAgIGNvbnN0IG1lbnVJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWVudUl0ZW0uY2xhc3NMaXN0LmFkZCgnbWVudUl0ZW0nKTtcblxuICAgIGNvbnN0IGl0ZW1UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGl0ZW1UaXRsZS5jbGFzc0xpc3QuYWRkKCdpdGVtVGl0bGUnKTtcblxuICAgIGNvbnN0IGgxTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgaDFOYW1lLmlubmVyVGV4dCA9IG5hbWU7XG4gICAgaXRlbVRpdGxlLmFwcGVuZENoaWxkKGgxTmFtZSk7XG5cbiAgICBjb25zdCBoMVByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICBoMVByaWNlLmlubmVyVGV4dCA9IHByaWNlO1xuICAgIGl0ZW1UaXRsZS5hcHBlbmRDaGlsZChoMVByaWNlKTtcblxuICAgIGNvbnN0IGl0ZW1EZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGl0ZW1EZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCdpdGVtRGVzY3JpcHRpb24nKTtcblxuICAgIGNvbnN0IHBJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHBJdGVtLmlubmVyVGV4dCA9IGRlc2NyaXB0aW9uO1xuICAgIGl0ZW1EZXNjcmlwdGlvbi5hcHBlbmRDaGlsZChwSXRlbSk7XG5cbiAgICBtZW51SXRlbS5hcHBlbmRDaGlsZChpdGVtVGl0bGUpO1xuICAgIG1lbnVJdGVtLmFwcGVuZENoaWxkKGl0ZW1EZXNjcmlwdGlvbik7XG5cbiAgICByZXR1cm4gbWVudUl0ZW07XG59XG5cbmV4cG9ydCB7IGNyZWF0ZU1lbnUgfTsiLCJcbmZ1bmN0aW9uIGNyZWF0ZU5hdmJhcigpe1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xuXG4gICAgY29uc3QgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGljb24uY2xhc3NMaXN0LmFkZCgnaWNvbicpO1xuXG4gICAgY29uc3QgaDFJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICBoMUljb24uaW5uZXJUZXh0ID0gJ0Fwb2xsb25pYSc7XG5cbiAgICBpY29uLmFwcGVuZENoaWxkKGgxSWNvbik7XG5cbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoaWNvbik7XG5cbiAgICBjb25zdCBuYXZJdGVtcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG5cbiAgICBjb25zdCBob21lSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7IFxuICAgIGhvbWVJdGVtLmNsYXNzTGlzdC5hZGQoJ2hvbWVCdG4nKTtcbiAgICBob21lSXRlbS5pbm5lclRleHQgPSAnSG9tZSc7XG4gICAgbmF2SXRlbXMuYXBwZW5kQ2hpbGQoaG9tZUl0ZW0pO1xuXG4gICAgY29uc3QgbWVudUl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpOyBcbiAgICBtZW51SXRlbS5jbGFzc0xpc3QuYWRkKCdtZW51QnRuJyk7XG4gICAgbWVudUl0ZW0uaW5uZXJUZXh0ID0gJ01lbnUnO1xuICAgIG5hdkl0ZW1zLmFwcGVuZENoaWxkKG1lbnVJdGVtKTtcblxuICAgIGNvbnN0IGNvbnRhY3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTsgXG4gICAgY29udGFjdEl0ZW0uY2xhc3NMaXN0LmFkZCgnY29udGFjdEJ0bicpO1xuICAgIGNvbnRhY3RJdGVtLmlubmVyVGV4dCA9ICdDb250YWN0JztcbiAgICBuYXZJdGVtcy5hcHBlbmRDaGlsZChjb250YWN0SXRlbSk7XG5cbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQobmF2SXRlbXMpO1xuXG4gICAgcmV0dXJuIGhlYWRlcjtcbn1cblxuZXhwb3J0IHsgY3JlYXRlTmF2YmFyIH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGNyZWF0ZU5hdmJhciB9IGZyb20gXCIuL25hdmJhclwiO1xuaW1wb3J0IHsgY3JlYXRlSG9tZSB9IGZyb20gXCIuL2hvbWVcIjtcbmltcG9ydCB7IGNyZWF0ZU1lbnUgfSBmcm9tIFwiLi9tZW51XCI7XG5pbXBvcnQgeyBjcmVhdGVDb250YWN0IH0gZnJvbSBcIi4vY29udGFjdFwiO1xuaW1wb3J0IHsgY3JlYXRlRm9vdGVyIH0gZnJvbSBcIi4vZm9vdGVyXCI7XG5cbmZ1bmN0aW9uIGNsZWFySFRNTCAoKXtcbiAgICBjb25zdCBob21lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhvbWUnKTtcbiAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUnKTtcbiAgICBjb25zdCBjb250YWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhY3QnKTtcbiAgICBpZihob21lKXtcbiAgICAgICAgaG9tZS5yZW1vdmUoKTtcbiAgICB9XG4gICAgZWxzZSBpZihtZW51KXtcbiAgICAgICAgbWVudS5yZW1vdmUoKTtcbiAgICB9XG4gICAgZWxzZXtcbiAgICAgICAgY29udGFjdC5yZW1vdmUoKTtcbiAgICB9XG59XG5cbmNvbnN0IGNvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuXG5jb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZU5hdmJhcigpKTtcbmNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlSG9tZSgpKTtcblxuY29uc3QgaG9tZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ob21lQnRuJyk7XG5jb25zdCBtZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnVCdG4nKTtcbmNvbnN0IGNvbnRhY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFjdEJ0bicpO1xuXG5ob21lLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNsZWFySFRNTCgpO1xuICAgIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlSG9tZSgpKTtcbn0pO1xubWVudS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjbGVhckhUTUwoKTtcbiAgICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZU1lbnUoKSk7XG59KTtcbmNvbnRhY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY2xlYXJIVE1MKCk7XG4gICAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVDb250YWN0KCkpO1xufSk7XG5cblxuXG5cblxuXG5cblxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=