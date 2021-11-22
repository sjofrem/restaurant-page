
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

export { createHome };