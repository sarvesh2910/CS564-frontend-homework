// url for the Thrones API
const url = 'https://thronesapi.com/api/v2/Characters';
const list = document.getElementById('list');

const createCharacterCard = (character) => {
    const card = document.createElement('div');
    card.classList.add('card', 'p-1', 'text-center');

    const image = document.createElement('img');
    image.src = character.imageUrl;
    image.alt = `${character.fullName}`;
    image.classList.add('characterImage');
    card.appendChild(image);

    const characterInfo = document.createElement('div');
    characterInfo.classList.add('characterInfo');
    card.appendChild(characterInfo);

    const name = document.createElement('h5');
    name.textContent = character.fullName;
    name.classList.add('fw-bold');
    characterInfo.appendChild(name);

    const title = document.createElement('p');
    title.textContent = character.title;
    title.classList.add('fw-bold');
    characterInfo.appendChild(title);

    list.appendChild(card);
};

const fetchData = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await fetch(url);
            const characters = await response.json();
            resolve(characters);
        } catch (error) {
            reject(error);
        }
    });
};

fetchData()
    .then((characters) => {
        characters.forEach((character) => createCharacterCard(character));
    })
    .catch((error) => {
        console.error('An error occurred:', error);
    })
