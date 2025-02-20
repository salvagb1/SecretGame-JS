let numeroSecreto = 0;
let intetos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;
console.log(numeroSecreto);

function asignarTextoElemto(elemento, texto) {
    let elementoHtml = document.querySelector(elemento);
    elementoHtml.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroIngresado = parseInt(document.getElementById('valorUsuario').value);

    if (numeroIngresado === numeroSecreto) {
        asignarTextoElemto('p', `Acertaste, el numero en ${intetos} ${(intetos === 1) ? 'intento' : 'intentos'} `);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (numeroIngresado > numeroSecreto) {
            asignarTextoElemto('p', `El numero secreto es menor`);
        } else {
            asignarTextoElemto('p', `El numero secreto es mayor`);
        }
        intetos++;
        limpiarCaja();
    }

    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function generaraNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;
    //si el numero generado ya esta en la lista de numeros sorteados
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);

    //si ya sorteamos todos los numeros 
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemto('p', `Ya se sortearon todos los numeros posibles`);
    } else {
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            //generar un nuevo numero
            return generaraNumeroSecreto();

        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        } 
    }


}

function condicionesIniciales() {
    asignarTextoElemto('h1', 'Juego del numero secreto');
    asignarTextoElemto('p', `Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generaraNumeroSecreto();
    intetos = 1;
}

function reiniciarJuego() {
    //limpiar caja de texto
    limpiarCaja();
    //indicar mensaje de intervalos de numeros
    //generar un nuevo numero secreto
    //inicializar intentos
    condicionesIniciales();
    //habilitar boton de reiniciar
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');

}

condicionesIniciales();

// let nombre = 'Juan';

// function holaMundo(){
//     console.log(`Hola ${nombre}`);
//     return;
// }
// holaMundo();

// function dividir(num1, num2, num3){
//     suma = num1 + num2 + num3;
//     promedio = suma / 3;
//     console.log(promedio);

// }
// dividir(10, 20, 30);

// let numero2 = 5;

// function multiNumero(){
//     console.log(numero2 * 2);
//     return;
// }
// multiNumero();

// function mayor(n1, n2){
//     return n1 > n2 ? n1 : n2;
// }
// console.log(mayor(10,18));
