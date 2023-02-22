//import md5 from 'md5.js';
window.onload = init;

function init() {
	console.log("Page loaded")
}



// LocalStoarge
// Register Method
function addUserIntoLocalStorage(username, email, password) {

	// Almacenamos ahora los datos del usuario, los datos se pasan por los argumentos
	localStorage.setItem("username", username);
	localStorage.setItem("email", email);
	localStorage.setItem("password", password);

	return console.log("USER ADDED");
}


const rForm = document.getElementById('r-form'); // obtenemos el id del formulario de registro
try {
	/* Si el id del formulario existe, crearemos un evento de tipo submit, 
	es decir sera llamando al momento de enviar dicho formulario
	 para agregar los datos al localStorage
	*/
	if (rForm) {
		rForm.addEventListener('submit', (event) => {
			event.preventDefault(); // Prevenimos que la pagina se recargue

			// Obtenemos los valores de los inputs
			const user = document.getElementById('username').value;
			const email = document.getElementById('email').value;
			const password = document.getElementById('password').value;

			//const password = md5(document.getElementById('password').value);

			// Llamamos la funcion, que añade los datos al localStorage y le pasamos los datos que recibimos por input
			addUserIntoLocalStorage(user, email, password);

			window.location.href = 'index.html'; // Redirigimos al index
		});
	}
} catch (error) {
	console.log(error);
}


// Le pasamos dos parametros a dicha función para luego comprobar los datos almacenados
// con los que ingresara el usuario
function checkingLocalStorage(uEmail, uPassword) { // LoginMethod
	// Primero obtenemos los datos almacenado en el localStorage

	// Obtenemos los datos almacenados en el localStorage
	let email = localStorage.getItem("email");
	let password = localStorage.getItem("password");

	// Comprobamos los datos almacenados en el localStorage, con los actuales que esta ingresando el usuario
	// En los inputs del login form
	if ((email === uEmail && password === uPassword)) {
		console.log("USER MATCH");
		console.log(email);
		console.log(password)
		localStorage.setItem("isLogged", true);
		window.location.href = 'index.html';
	} else {
		console.log("DOESN'T EXIST THE USER")
	}
}

// Obtenemos el id del formulario, para comprobar que existan los datos en localStorage
const lForm = document.getElementById('l-form');
if (lForm) {
	lForm.addEventListener('submit', (event) => {
		event.preventDefault();

		// Obtenemos los valores del input del login
		let uEmail = document.getElementById('email').value;
		let uPassword = document.getElementById('password').value;

		// Llamamos a la función que hicimos para verificar si los datos ya existen y le pasamos los datos
		// que el usuario paso por los input, y se van a comparar en dicha función
		checkingLocalStorage(uEmail, uPassword);
	});
}

// Cerrar sesión del usuario
/* let btnOutSession = document.getElementById("logoutS");
btnOutSession.addEventListener("click", () => {

	localStorage.setItem("isLogged", false);
	return window.location.href = 'index.html';
}) */



// Method to change the user page
// Nav with js
const home = document.getElementById('thehome');
const notAccount = document.getElementById('newAccount');
const companies = document.getElementById('companiesP');
const login = document.getElementById('session-li')

const navigateTo = (url) => {
  window.location.href = url;
};

login.addEventListener('click', () => {
  navigateTo('login.html');
});

home.addEventListener('click', () => {
  navigateTo('index.html');
});

if (notAccount) {
  notAccount.addEventListener('click', () => {
    navigateTo('register.html');
    console.log("Clicked Navigation function")
  });
}

companies.addEventListener('click', () => {
  navigateTo('companies.html');
});
// End method js nav

// Metodo  para la pagina premium
document.addEventListener('DOMContentLoaded', function () {
	const PREMIUM = document.getElementById('premium');

	let isLogged = localStorage.getItem("isLogged");
	console.log(isLogged)
	if(PREMIUM) {
		PREMIUM.addEventListener('click', () => {
			if(isLogged === 'true') {
				console.log('USER LOGGED')
				window.location.href = 'characters.html';
			}else {
				return window.location.href = 'register.html';
			}
	
			console.log("Clicked PREMIUM");
		})
	}

});


// Ocultar login y registro.
function hideElementIfLogged() {
	if (localStorage.getItem('isLogged') === 'true') {
		const showElement = document.getElementById('logoutfrom')
	  	const elementToHide = document.getElementById('session-li');
	  	elementToHide.style.display = 'none';
		showElement.style.display = 'block';
	} else {
		const showElement = document.getElementById('logoutfrom')
		showElement.style.display = 'none';
	}
}
hideElementIfLogged();

// Cerrar sesión
const showElement = document.getElementById('logoutfrom')

showElement ? showElement.addEventListener('click', ()=> {
	localStorage.removeItem('isLogged');

	return window.location.href = 'index.html';
	// console.log('Sesión eliminada.')
}) : false;
