
const random = () => {
    return fetch(`https://dog.ceo/api/breeds/image/random`)
        .then(response => {
            return response.json()
        }).catch(console.error);
}

const randomFromBreed = (breed) => {
    return fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
        .then(response => {
            return response.json()
        }).catch(console.error);
}

export { random, randomFromBreed }