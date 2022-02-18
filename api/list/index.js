
const all = () => {
    return fetch("https://dog.ceo/api/breeds/list/all")
        .then(response => {
            return response.json();
        }).catch(console.error)
}


export { all }