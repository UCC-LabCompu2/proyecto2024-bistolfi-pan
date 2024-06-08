/**
 * Verifica si una dirección de correo electrónico es válida.
 * @param {string} email -dirección de correo electrónico.
 * @returns {boolean} - Devuelve true si el correo es válido, de lo contrario, muestra un mensaje de error.
 */

const validarEmail = email => {
    if (email.includes('@') && email.includes('.')) {
        return true;
    } else {
        alert("Error: The email entered is not valid");
        return false;
    }
}

/**
 * Activa un botón si se han completado ciertos campos del formulario y el correo es válido.
 */

const activarBoton = () => {

    const emailValue = document.getElementById("email").value;
    const userValue = document.getElementById("User").value;
    const passwordValue = document.getElementById("psw").value;

    localStorage.setItem('email', emailValue);
    localStorage.setItem('User', userValue);


    const completado = emailValue !== '' && userValue !== '' && passwordValue !== '';

    if (completado && validarEmail(emailValue)) {
        alert("press enter to continue");
        document.getElementById("bot").disabled = false;
    }

}

/**
 * Muestra un elemento HTML si se cumple cierta condición.
 * @param {string} valor - El valor que activa la visualización del elemento.
 */

const Aceptar = (valor) => {
    if (valor === "mostrardiv") {
        document.getElementById("visible").style.display = 'block';
    }
}


/**
 * Asigna puntos basados en las respuestas dadas en la categoría "Aleatorio".
 * @param {string} valor - La respuesta dada por el usuario.
 */


let puntosAL = 0;
let contador = 0;


const puntosA = (valor) => {
    if (valor === "Snurfing" || valor === "True" || valor === "River Plate") {
        puntosAL += 5;
    } else {
        puntosAL += 0;
    }

    contador++;

    if (contador === 3) {
        alert("Presiona Enter para continuar");
        document.getElementById("ready").style.display = "block";
    }
}


/**
 * Muestra el resultado y opciones de juego nuevamente para la categoría "Aleatorio".
 */


const readyaleatory = () => {
    if (puntosAL === 15) {
        alert("¡CONGRATULATIONS! You have answered all the questions correctly!");
    } else {
        let Correctas = (puntosAL / 5);
        let Restantes = 3 - Correctas;
        alert("You have obtained " + puntosAL + " points. You have answered " + Correctas + " questions and you were missing " + Restantes + " to reach 15 points");
    }

    let jugarDeNuevo = confirm("¿Would you like to play again?");

    if (jugarDeNuevo) {
        location.reload();
    } else {
        let urlComp = "index.html";
        window.open(urlComp);
    }
}


/**
 * Asigna puntos basados en las respuestas dadas en la categoría "Running".
 * @param {string} valor - La respuesta dada por el usuario.
 */


let puntosRun = 0;
let cont = 0;

const puntosR = (valor) => {
    if (valor === "7:30 min per mile" || valor === "NYC" || valor === "Coconut Water") {
        puntosRun += 5;
    } else {
        puntosRun += 0;
    }

    cont++;

    if (cont === 3) {
        alert("Presiona Enter para continuar");
        document.getElementById("ready").style.display = "block";
    }
}

/**
 * Muestra el resultado y opciones de juego nuevamente para la categoría "Running".
 */


const readyrun = () => {
    if (puntosRun === 15) {
        alert("¡CONGRATULATIONS! You have answered all the questions correctly!");
    } else {
        let Correctas = (puntosRun / 5);
        let Restantes = 3 - Correctas;
        alert("You have obtained " + puntosRun + " points. You have answered " + Correctas + " questions and you were missing " + Restantes + " to reach 15 points");
    }

    let jugarDeNuevo = confirm("¿Would you like to play again?");

    if (jugarDeNuevo) {
        location.reload();
    } else {
        let urlComp = "index.html";
        window.open(urlComp);
    }
}


/**
 * Asigna puntos basados en las respuestas dadas en la categoría "Snowboard".
 * @param {string} valor - La respuesta dada por el usuario.
 */

let puntosSnow = 0;
let contad = 0;


const puntosS = (valor) => {
    if (valor === "1998" || valor === "United States" || valor === "Sherman Poppen") {
        puntosSnow += 5;
    } else {
        puntosSnow += 0;
    }

    contad++;

    if (contad === 3) {
        alert("Presiona Enter para continuar");
        document.getElementById("ready").style.display = "block";
    }
}

/**
 * Muestra el resultado y opciones de juego nuevamente para la categoría "Snowboard".
 */

const readysnow = () => {
    if (puntosSnow === 15) {
        alert("¡CONGRATULATIONS! You have answered all the questions correctly!");
    } else {
        let Correctas = (puntosSnow / 5);
        let Restantes = 3 - Correctas;
        alert("You have obtained " + puntosSnow + " points. You have answered " + Correctas + " questions and you were missing " + Restantes + " to reach 15 points");
    }

    let jugarDeNuevo = confirm("¿Would you like to play again?");

    if (jugarDeNuevo) {
        location.reload();
    } else {
        let urlComp = "index.html";
        window.open(urlComp);
    }
}


/**
 * Asigna puntos basados en las respuestas dadas en la categoría "Soccer".
 * @param {string} valor - La respuesta dada por el usuario.
 */


let puntosSoccer = 0;
let co = 0;

const puntosF = (valor) => {
    if (valor === "3" || valor === "César Menotti" || valor === "Racing Club") {
        puntosSoccer += 5;
    } else {
        puntosSoccer += 0;
    }

    co++;

    if (co === 3) {
        alert("Presiona Enter para continuar");
        document.getElementById("ready").style.display = "block";
    }
}

/**
 * Muestra el resultado y opciones de juego nuevamente para la categoría "Soccer".
 */

const readysoc = () => {
    if (puntosSoccer === 15) {
        alert("¡CONGRATULATIONS! You have answered all the questions correctly!");
    } else {
        let Correctas = (puntosSoccer / 5);
        let Restantes = 3 - Correctas;
        alert("You have obtained " + puntosSoccer + " points. You have answered " + Correctas + " questions and you were missing " + Restantes + " to reach 15 points");
    }

    let jugarDeNuevo = confirm("¿Would you like to play again?");

    if (jugarDeNuevo) {
        location.reload();
    } else {
        let urlComp = "index.html";
        window.open(urlComp);
    }
}


//variable global
let bandera;

/**
 * Dibuja en un lienzo y guarda el correo y el usuario previamente ingresados.
 * @param {object} event - El evento de dibujo.
 */


const dibujar = event => {

    const email = localStorage.getItem('email');
    const User = localStorage.getItem('User');

    let canvas = document.getElementById("dibujar");
    let ctx = canvas.getContext("2d");
    ctx.font = "18px weathering";
    ctx.fillText("Email: " + email, 30, 50);
    ctx.fillText("User: " + User, 30, 30);

    let rect = canvas.getBoundingClientRect();
    const posX = event.clientX - rect.left;
    const posY = event.clientY - rect.top;

    canvas.onmousedown = () => {
        bandera = true;
    };
    canvas.onmouseup = () => {
        bandera = false;
    };

    if (bandera) {
        ctx.fillStyle = 'violet';
        ctx.fillRect(posX, posY, 6, 6);
    }

}

/**
 * Limpia el contenido dibujado en el lienzo HTML.
 */


const LimpiarCanvas = () => {
    let canvas = document.getElementById("dibujar");
    let ctx = canvas.getContext("2d");

    ctx.clearRect(0, 0, canvas.width, canvas.height);
}