
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

export { createMenu };