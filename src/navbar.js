
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

export { createNavbar };
