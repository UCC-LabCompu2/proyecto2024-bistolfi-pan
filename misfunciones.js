/**
 * Función para calcular puntos y mostrar resultados
 */
function calcularpuntos(pageName, questions) {
    // Obtener las respuestas del usuario
    let respuesta1 = document.querySelector('input[name="' + questions[0].name + '"]:checked')?.value;
    let respuesta2 = document.querySelector('input[name="' + questions[1].name + '"]:checked')?.value;
    let respuesta3 = document.querySelector('input[name="' + questions[2].name + '"]:checked')?.value;

    // Inicializar la puntuación
    let puntos = 0;

    // Verificar las respuestas y sumar puntos
    puntos += (respuesta1 === questions[0].respcorrecta) ? 5 : 0;
    puntos += (respuesta2 === questions[1].respcorrecta) ? 5 : 0;
    puntos += (respuesta3 === questions[2].respcorrecta) ? 5 : 0;

    if (puntos === 15) {
        alert("¡CONGRATULATIONS! You have answered all the questions correctly!");
    } else {
        let Correctas = (puntos / 5);
        let Restantes = 3 - Correctas;
        alert("You have obtained " + puntos + " points. You have answered " + Correctas + " questions and you were missing " + Restantes + " to reach 15 points");
    }


    //Dar opción para volver a jugar o salir del juego
    let jugarDeNuevo = confirm("¿Would you like to play again?");
    if (jugarDeNuevo ) {
        calcularpuntos();
    } else {
       location.replace("index.html")
    }
}

/**
 * Llamadas a la función para cada página con sus respectivas preguntas y respuestas
 */

function readyaleatory() {
    calcularpuntos("Aleatory", [
        {name: "snowboarding", respcorrecta: "Snurfing"},
        {name: "running", respcorrecta: "True"},
        {name: "soccer", respcorrecta: "River Plate"}
    ]);
}

function readysnow() {
    calcularpuntos("Snowboard", [
        {name: "year", respcorrecta: "1998"},
        {name: "city", respcorrecta: "United States"},
        {name: "name", respcorrecta: "Sherman Poppen"}
    ]);
}

function readysoc() {
    calcularpuntos("Soccer", [
        {name: "many",respcorrecta : "3"},
        {name: "name", respcorrecta: "César Menotti"},
        {name: "team", respcorrecta: "Racing Club"}
    ]);
}

function readyrun() {
    calcularpuntos("Run", [
        {name: "pace", respcorrecta: "7:30 min per mile"},
        {name: "city", respcorrecta: "NYC"},
        {name: "potassium", respcorrecta: "Coconut Water"}
    ]);
}



/**
 * Función para activar o desactivar el botón "CONFIRM" según la validez de los campos
 */

window.onload = function () {

    document.getElementById("bot").disabled = true;
    document.getElementById("visible").style.display = "none";

}
function activarBoton() {

    const emailValue = document.getElementById("email").value;
    const userValue = document.getElementById("User").value;
    const passwordValue = document.getElementById("psw").value;

    const completado = emailValue !== '' && userValue !== '' && passwordValue !== '';

    if (completado) {
        document.getElementById("bot").disabled = false;
    }

}

    let Aceptar = () => {
        document.getElementById("visible").style.display = "block";

    }




/**
 *funcion global true or false
 */
let bandera;

/**
 * permite dibujar lapiz
 * @method dibujar
 */

function dibujar(event) {
    let canvas = document.getElementById("dibujar");
    let ctx = canvas.getContext("2d");

    let rect = canvas.getBoundingClientRect(); // Obtener el rectángulo del canvas
    let posX = event.clientX - rect.left; // Calcular la posición X relativa al canvas;
    let posY = event.clientY - rect.top; // Calcular la posición X relativa al canvas;


    canvas.onmousedown = function () {
        bandera = true
    };
    canvas.onmouseup = function () {
        bandera = false
    };

    if (bandera) {
        ctx.fillStyle = 'violet';
        ctx.fillRect(posX, posY,6, 6);
    }
}

/**
 * permite limpiar canvas
 * @method LimpiarCanvas
 */

function LimpiarCanvas() {
    let canvas = document.getElementById("dibujar");
    let ctx = canvas.getContext("2d");

    ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpiar el contenido del canvas
}

