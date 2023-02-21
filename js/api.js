// Method for call the api about Jobs
// El login lo podemos manejar mejor, poniendo un valor booleano, en true/false
// dependiendo de si el usuario esta logeado. ok
// y crear una seccion arriba en los elementos, donde esta iniciar sesion
// que diga salir o cerrar sesion, y esta establecera en false, dicha sesion
import fetch from 'isomorphic-fetch';


const url = 'https://jsonplaceholder.typicode.com/users';
const url2 = 'https://rickandmortyapi.com/api/character'

fetch(url)
    .then(response => response.json())
    .then(data => showData(data))
    .catch(error => console.error(error, '****** ERRORRR :/'))
    .finally(console.log("Finished"))
;



const showData = (data) => {
    const charactersData = data.results;
    let paintDataInHtml = ''
    charactersData.map((cha, id) => {
        //paintDataInHtml += `${cha.id} ${cha.name} ${cha.status}`
        paintDataInHtml += `<li>${cha.id}</li> <li>${cha.name}</li> <li>${cha.status}</li>`
        
        console.log(cha.id);
        console.log(cha.status);
        console.log(cha.name);
        console.log("...........")
    })
    document.getElementById('allCharacters').innerHTML = paintDataInHtml;

}
