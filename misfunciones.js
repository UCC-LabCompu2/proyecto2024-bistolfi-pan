const calcularpuntos = (pageName, questions) => {
    let respuesta1 = document.querySelector('input[name="' + questions[0].name + '"]:checked')?.value;
    let respuesta2 = document.querySelector('input[name="' + questions[1].name + '"]:checked')?.value;
    let respuesta3 = document.querySelector('input[name="' + questions[2].name + '"]:checked')?.value;

    let puntos = 0;
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

    let jugarDeNuevo = confirm("¿Would you like to play again?");

    if (jugarDeNuevo) {
        location.reload();
    } else {
        window.location.pathname = "index.html";
    }
}

const readyaleatory = () => {
    calcularpuntos("Aleatory", [
        {name: "snowboarding", respcorrecta: "Snurfing"},
        {name: "running", respcorrecta: "True"},
        {name: "soccer", respcorrecta: "River Plate"}
    ]);
}

const readysnow = () => {
    calcularpuntos("Snowboard", [
        {name: "year", respcorrecta: "1998"},
        {name: "city", respcorrecta: "United States"},
        {name: "name", respcorrecta: "Sherman Poppen"}
    ]);
}

const readysoc = () => {
    calcularpuntos("Soccer", [
        {name: "many", respcorrecta: "3"},
        {name: "name", respcorrecta: "César Menotti"},
        {name: "team", respcorrecta: "Racing Club"}
    ]);
}

const readyrun = () => {
    calcularpuntos("Run", [
        {name: "pace", respcorrecta: "7:30 min per mile"},
        {name: "city", respcorrecta: "NYC"},
        {name: "potassium", respcorrecta: "Coconut Water"}
    ]);
}

window.onload = () => {
    document.getElementById("bot").disabled = true;
    document.getElementById("visible").style.display = "none";
}

const validarEmail = email => {
    if (email.includes('@') && email.includes('.')) {
        return true;
    } else {
        alert("Error: The email entered is not valid");
        return false;
    }
}

const activarBoton = () => {
    const emailValue = document.getElementById("email").value;
    const userValue = document.getElementById("User").value;
    const passwordValue = document.getElementById("psw").value;


    const completado = emailValue !== '' && userValue !== '' && passwordValue !== '';

    if (completado && validarEmail(emailValue)) {
        document.getElementById("bot").disabled = false;
    }
}

const Aceptar = () => {
    document.getElementById("visible").style.display = "block";
}

let bandera;

const dibujar = event => {
    let canvas = document.getElementById("dibujar");
    let ctx = canvas.getContext("2d");

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

const LimpiarCanvas = () => {
    let canvas = document.getElementById("dibujar");
    let ctx = canvas.getContext("2d");

    ctx.clearRect(0, 0, canvas.width, canvas.height);
}