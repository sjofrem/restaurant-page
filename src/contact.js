
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

export { createContact };