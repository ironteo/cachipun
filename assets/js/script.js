/*function jugadaUsuario(seleccionUsuario) {
    var seleccionUsuario = parseInt(prompt('ingrese 1-.Piedra. 2.-Papel 3.-Tijera'));
    if (seleccionUsuario === 1) {
        var seleccionUsuario = 'Piedra';
        alert('selecciono Piedra');
    }
    if (seleccionUsuario === 2) {
        var seleccionUsuario = 'Papel';
        alert('Selecciono Papel');
    }
    if (seleccionUsuario === 3) {
        var seleccionUsuario = 'Tijera';
        alert('Selecciono Tijera');
    } else {
        // alert('La jugada ingresada no es valida');
        // jugadaUsuario();
    }
};

function jugadaMaquina(jugadaBot) {
    var jugadaBot = Math.floor(Math.random() * 3);
    if (jugadaBot === 0) {
        var jugadaBot = 'Piedra';
        alert('La maquina eligio Piedra');
    }
    if (jugadaBot === 1) {
        var jugadaBot = 'Papel';
        alert('La maquina eligio Papel');
    }
    if (jugadaBot === 2) {
        var jugadaBot = 'Tijera';
        alert('La maquina eligio Tijera')
    };
}

function juego() {
    jugadaUsuario();
    jugadaMaquina();
    if (seleccionUsuario === 'Piedra' && jugadaBot === 'Papel') {
        alert('gano el usuario');
    }
    if (seleccionUsuario === 'Tijera' && jugadaBot === 'Papel') {
        alert('gano el usuario');
    }
    if (jugadaBot === 'Piedra' && seleccionUsuario === 'Papel') {
        alert('gano la maquina');
    }
    if (jugadaBot === 'Piedra' && seleccionUsuario === 'Papel') {
        alert('gano la maquina');
    }
};

juego();

*/
var nombreUsuario = prompt('Ingrese su nombre');
var seleccionUsuario = parseInt(prompt(`${nombreUsuario} Selecciona una jugada \n 1-.Piedra. \n 2.-Papel \n 3.-Tijera`));
if (seleccionUsuario === 1) {
    var seleccionUsuario = 'Piedra';
    alert(`${nombreUsuario} haz seleccionado ${seleccionUsuario}`);
}
if (seleccionUsuario === 2) {
    var seleccionUsuario = 'Papel';
    alert(`${nombreUsuario} haz seleccionado ${seleccionUsuario}`);
}
if (seleccionUsuario === 3) {
    var seleccionUsuario = 'Tijera';
    alert(`${nombreUsuario} haz seleccionado ${seleccionUsuario}`);
} else {
    // alert('La jugada ingresada no es valida');
    // jugadaUsuario();
}

var jugadaBot = Math.floor(Math.random() * 3);
if (jugadaBot === 0) {
    var jugadaBot = 'Piedra';
    alert(`La maquina a seleccionado ${jugadaBot}`);
}
if (jugadaBot === 1) {
    var jugadaBot = 'Papel';
    alert(`La maquina a seleccionado ${jugadaBot}`);
}
if (jugadaBot === 2) {
    var jugadaBot = 'Tijera';
    alert(`La maquina a seleccionado ${jugadaBot}`);
};

if (seleccionUsuario === 'Tijera' && jugadaBot === 'Papel') {
    alert(`Felicitaciones ${nombreUsuario} haz ganado!`);
}
if (seleccionUsuario === 'Papel' && jugadaBot === 'Piedra') {
    alert(`Felicitaciones ${nombreUsuario} haz ganado!`);
}
if (seleccionUsuario === 'Piedra' && jugadaBot === 'Tijera') {
    alert(`Felicitaciones ${nombreUsuario} haz ganado!`);
}
if (jugadaBot === 'Tijera' && seleccionUsuario === 'Papel') {
    alert('Gano la maquina, suerte la proxima!');
}
if (jugadaBot === 'Papel' && seleccionUsuario === 'Piedra') {
    alert('Gano la maquina, suerte la proxima!');
}
if (jugadaBot === 'Piedra' && seleccionUsuario === 'Tijera') {
    alert('Gano la maquina, suerte la proxima!');
}
if (seleccionUsuario === jugadaBot) {
    alert('Es un empate');
}