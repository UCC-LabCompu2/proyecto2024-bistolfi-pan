/**
 * Función para calcular puntos y mostrar resultados
 * @param {string} pageName - El nombre de la página actual
 * @param {Array} questions - Array de objetos que contiene las preguntas y respuestas de la página
 */
function calculatePoints(pageName, questions) {
    // Obtener las respuestas del usuario
    let respuesta1 = document.querySelector('input[name="' + questions[0].name + '"]:checked')?.value;
    let respuesta2 = document.querySelector('input[name="' + questions[1].name + '"]:checked')?.value;
    let respuesta3 = document.querySelector('input[name="' + questions[2].name + '"]:checked')?.value;

    // Inicializar la puntuación
    let puntos = 0;

    // Verificar las respuestas y sumar puntos
    puntos += (respuesta1 === questions[0].correctAnswer) ? 5 : 0;
    puntos += (respuesta2 === questions[1].correctAnswer) ? 5 : 0;
    puntos += (respuesta3 === questions[2].correctAnswer) ? 5 : 0;

    if (puntos === 15) {
        alert("¡CONGRATULATIONS! You have answered all the questions correctly!");
    } else {
        let Correctas = (puntos / 5);
        let Restantes = 3 - Correctas;
        alert("You have obtained " + puntos + " points. You have answered " + Correctas + " questions and you were missing " + Restantes + " to reach 15 points");
    }

    // Dar opción para volver a jugar o salir del juego
    let jugarDeNuevo = confirm("¿Would you like to play again?");
    if (jugarDeNuevo) {
        location.reload();
    } else {
        window.location.href = "index.html";
    }
}

// Llamadas a la función para cada página con sus respectivas preguntas y respuestas
function readyaleatory() {
    calculatePoints("Aleatory", [
        { name: "snowboarding", correctAnswer: "Snurfing" },
        { name: "running", correctAnswer: "True" },
        { name: "soccer", correctAnswer: "River Plate" }
    ]);
}

function readysnow() {
    calculatePoints("Snowboard", [
        { name: "year", correctAnswer: "1998" },
        { name: "city", correctAnswer: "United States" },
        { name: "name", correctAnswer: "Sherman Poppen" }
    ]);
}

function readysoc() {
    calculatePoints("Soccer", [
        { name: "many", correctAnswer: "3" },
        { name: "name", correctAnswer: "César Menotti" },
        { name: "team", correctAnswer: "Racing Club" }
    ]);
}

function readyrun() {
    calculatePoints("Run", [
        { name: "pace", correctAnswer: "7:30 min per mile" },
        { name: "city", correctAnswer: "NYC" },
        { name: "potassium", correctAnswer: "Coconut Water" }
    ]);
}

