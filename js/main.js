/* 
$(document).ready(function(){
			$("#testimonial-slider").owlCarousel({
				items:1,
				itemsDesktop:[1000,1],
				itemsDesktopSmall:[979,1],
				itemsTablet:[768,1],
				pagination: true,
				autoPlay:false
			});
		});	 
*/


// LocalStoarge


// Register Method


function addUserIntoLocalStorage(username, email, password) {
	// Almacenamos ahora los datos del usuario

	localStorage.setItem("username", username);
	localStorage.setItem("email", email);
	localStorage.setItem("password", password);

	return console.log("USER ADDED");
}


const rForm = document.getElementById('r-form');

try {
	if(rForm) {
		rForm.addEventListener('submit', (event) => {
		  event.preventDefault(); // Prevenimos que la pagina se recargue
		  
		  const user = document.getElementById('username').value;
		  const email = document.getElementById('email').value;
		  const password = document.getElementById('password').value;
		
		  addUserIntoLocalStorage(user, email, password);
		   
		  window.location.href = 'index.html';
		});
	}
} catch (error) {
	console.log(error);
}





//LoginWithLocalStorage (e)
// Le pasamos dos parametros a dicha función para luego comprobar los datos almacenados
// con los que ingresara el usuario
function checkingLocalStorage(uEmail, uPassword) { // LoginMethod
	// Primero obtenemos los datos almacenado en el localStorage

	let email = localStorage.getItem("email");
	let password = localStorage.getItem("password");

	if((email === uEmail && password === uPassword)) {
		console.log("USER MATCH");
		console.log(email);
		console.log(password)
	}else {
		console.log("DOESN'T EXIST THE USER")
	}


}


// Obtenemos el id del formulario, para comprobar que existan los datos en localStorage
const lForm = document.getElementById('l-form');
if(lForm) {
	lForm.addEventListener('submit', (event) => {
		event.preventDefault();
	
		// Obtenemos los valores del input del login
		let uEmail = document.getElementById('email').value;
		let uPassword = document.getElementById('password').value;
	
		// Llamamos a la función que hicimos para verificar si los datos ya existen y le pasamos los datos
		// que el usuario paso por los input, y se van a comparar en dicha función
	
		checkingLocalStorage(uEmail, uPassword);
		window.location.href = 'index.html';
	});
}
