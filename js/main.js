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
// Slider

window.addEventListener('load',function(){
	console.log("el cotenido ha cargado");

	var imagenes = [];

	imagenes[0]= "img/cowork.png";
	imagenes[1]= "img/office.jpg";
	imagenes[2]= "img/keepmotivated.jpg";

	var a = this.document.getElementById("slider");
	var indiceImagen = 0;
	function cambiarImagen(){
		a.src= imagenes[indiceImagen];

				if(indiceImagen<2){
					indiceImagen++;
					console.log("avanzó");
				}else{
					indiceImagen = 0;
					
					console.log("avanzó");
				}
			
	}

	function cambiarImagenPrev(){
		a.src=imagenes[indiceImagen];
		if (indiceImagen>0){
			indiceImagen--;
			console.log("retrocedio");
		}else{
			indiceImagen = 2;
			console.log("retrocedio")
		}
	}
		

		
	
	
	
	setInterval(cambiarImagen,5000);

	var btnnext = this.document.getElementById("next");
	btnnext.addEventListener('click',cambiarImagen);

	var btnprev = this.document.getElementById("prev");
	btnprev.addEventListener('click',cambiarImagenPrev);
		
			
		
	});

	
	
	
	

	 

     




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
	if(rForm) { // Si el id del formulario existe, crearemos un evento submit para agregar los datos al localStorage
		rForm.addEventListener('submit', (event) => {
		  event.preventDefault(); // Prevenimos que la pagina se recargue
		  
		  // Obtenemos los valores de los inputs
		  const user = document.getElementById('username').value;
		  const email = document.getElementById('email').value;
		  const password = document.getElementById('password').value;
		
		  // Llamamos la funcion, que añade los datos al localStorage y le pasamos los datos que recibimos por input
		  addUserIntoLocalStorage(user, email, password);
		   
		  window.location.href = 'index.html'; // Redirigimos al index
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

	// Obtenemos los datos almacenados en el localStorage
	let email = localStorage.getItem("email");
	let password = localStorage.getItem("password");

	// Comprobamos los datos almacenados en el localStorage, con los actuales que esta ingresando el usuario
	// En los inputs del login form
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
