/**
 * Verifica si una dirección de correo electrónico es válida.
 * @method validarEmail
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
 * @method activarBoton
 */

const activarBoton = () => {

    const emailValue = document.getElementById("email").value;
    const userValue = document.getElementById("User").value;
    const passwordValue = document.getElementById("psw").value;

    localStorage.setItem('email', emailValue);
    localStorage.setItem('User', userValue);


    const completado = emailValue !== '' && userValue !== '' && passwordValue !== '';

    if (completado && validarEmail(emailValue)) {
        document.getElementById("bot").disabled = false;

        const boton = document.getElementById("bot");
        boton.addEventListener("click", function () {
            document.getElementById("visible").style.display = 'block';
        });
    }

}


/**
 * te direcciona a la página seleccionada
 * @method redirectToPage
 * @param {string} page -dirección de página.
 */
const redirectToPage = (page) => {
    window.location.href = `${page}.html`;
};

const PagRunning = () => redirectToPage("running");
const PagSoccer = () => redirectToPage("soccer");
const PagSnow = () => redirectToPage("snowboard");
const PagExclusive = () => redirectToPage("exclusive");
const PagAleatory = () => redirectToPage("aleatory");


/**
 * Suma puntos basados en las respuestas dadas en una categoría.
 * @method sumarPuntos
 * @param {string} category - La categoría de las respuestas.
 * @param {string} r1 - respuesta dada por el usuario.
 * @param {string} r2 - respuesta dada por el usuario.
 * @param {string} r3 - respuesta dada por el usuario.
 * @returns {number} - Puntos obtenidos.
 */

const sumarPuntos = (category, r1, r2, r3) => {
    const aleatory = {
        "resp1": "Snurfing",
        "resp2": "True",
        "resp3": "River Plate"
    };
    const running = {
        "resp1": "7:30",
        "resp2": "NYC",
        "resp3": "Coconut Water"
    };
    const soccer = {
        "resp1": "3",
        "resp2": "César Menotti",
        "resp3": "Racing Club"
    };
    const snowboard = {
        "resp1": "1998",
        "resp2": "United States",
        "resp3": "Sherman Poppen"
    };


    let puntos = 0;

    if (category === "aleatory") {
        puntos += aleatory.resp1 === r1 ? 5 : 0;
        puntos += aleatory.resp2 === r2 ? 5 : 0;
        puntos += aleatory.resp3 === r3 ? 5 : 0;
    }
    if (category === "running") {
        puntos += running.resp1 === r1 ? 5 : 0;
        puntos += running.resp2 === r2 ? 5 : 0;
        puntos += running.resp3 === r3 ? 5 : 0;
    }
    if (category === "soccer") {
        puntos += soccer.resp1 === r1 ? 5 : 0;
        puntos += soccer.resp2 === r2 ? 5 : 0;
        puntos += soccer.resp3 === r3 ? 5 : 0;
    }
    if (category === "snowboard") {
        puntos += snowboard.resp1 === r1 ? 5 : 0;
        puntos += snowboard.resp2 === r2 ? 5 : 0;
        puntos += snowboard.resp3 === r3 ? 5 : 0;
    }

    HabilitarReady(puntos);
};

const HabilitarReady = (puntos) => {
    const cantClickeados = document.querySelectorAll("input:checked").length;

    if (cantClickeados === 3) {
        const botonReady = document.getElementById('ready');
        botonReady.disabled = false;

        botonReady.addEventListener('click', function () {
            if (puntos === 15) {
                alert("¡Congratulations! You have won!");
                let urlComp = "index.html";
                window.open(urlComp);

            } else {
                alert("You lost. Try again!");
                location.reload();
            }
        });
    }
};


//variable global
let bandera;

/**
 * Dibuja en un lienzo y guarda el correo y el usuario previamente ingresados.
 * @method dibujar
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
 * @method LimpiarCanvas
 */


const LimpiarCanvas = () => {
    let canvas = document.getElementById("dibujar");
    let ctx = canvas.getContext("2d");

    ctx.clearRect(0, 0, canvas.width, canvas.height);
}