let listaNumeroSorteado= [];
let numeroSecreto = generarUnNumero ();
let intentos = 1;

function asignarUnTexto (elemento, texto){
    let unElementoHTTML = document.querySelector (elemento);
unElementoHTTML.innerHTML = texto
}
function clickDelUsuario (){
    let numeroDelUsuario = parseInt(document.getElementById ('valorDelUsuario').value);
    console.log (intentos);
    console.log (numeroDelUsuario);
    console.log (typeof(numeroDelUsuario));
    console.log (numeroSecreto);
    console.log (typeof(numeroSecreto));
    console.log (numeroDelUsuario===numeroSecreto);
    if (numeroDelUsuario===numeroSecreto){
        asignarUnTexto('P', `Rifado pa, mataste al pollo en ${intentos} ${(intentos=== 1) ? 'intento' : 'intentos'}`);
    document.getElementById('reiniciar').removeAttribute('disabled')
    } else {
        if (numeroDelUsuario > numeroSecreto) {
            asignarUnTexto ('p', 'nel, menos we');
        } else {
            asignarUnTexto ('p', 'nel, más we');
        }
        intentos++;
        limpiarCajaIntento();

    }
    return;
}
function limpiarCajaIntento(){
    document.querySelector('#valorDelUsuario').value='';
}

function generarUnNumero() {
    let numeroGenerado = Math.floor (Math.random()*10)+1;
    if (listaNumeroSorteado.includes(numeroGenerado)){
        return generarUnNumero();
    } else {
        listaNumeroSorteado.push (numeroGenerado);
        return numeroGenerado;
    }
}
function parametrosIniciales (){
    asignarUnTexto ('p','ps elige uno del 1 al 10');
    asignarUnTexto ('h1', 'Adivina el número rascacasuelas');
    numeroSecreto = generarUnNumero ();
    intentos=1;

}
function reiniciarJuego(){
    limpiarCajaIntento();
    parametrosIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}


parametrosIniciales();