import { createNavbar } from "./navbar";
import { createHome } from "./home";
import { createMenu } from "./menu";
import { createContact } from "./contact";
import { createFooter } from "./footer";

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

contentContainer.appendChild(createNavbar());
contentContainer.appendChild(createHome());

const home = document.querySelector('.homeBtn');
const menu = document.querySelector('.menuBtn');
const contact = document.querySelector('.contactBtn');

home.addEventListener('click', () => {
    clearHTML();
    contentContainer.appendChild(createHome());
});
menu.addEventListener('click', () => {
    clearHTML();
    contentContainer.appendChild(createMenu());
});
contact.addEventListener('click', () => {
    clearHTML();
    contentContainer.appendChild(createContact());
});









