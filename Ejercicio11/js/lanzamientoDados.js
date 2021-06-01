// ---------------- FUNCTIONS ---------------------
function generateRandomNumber(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return parseInt(Math.random() * (max-min) + min);
}

function pintarDado(resultado, alcanzado){
    if(alcanzado){
        document.getElementById("uno").classList.remove("one");
        document.getElementById("dos").classList.remove("two");
        document.getElementById("tres").classList.remove("three");
        document.getElementById("cuatro").classList.remove("four");
        document.getElementById("cinco").classList.remove("five");
        document.getElementById("seis").classList.remove("six");
    }
    switch(resultado){
        case 1:
            document.getElementById("uno").classList.add("one");
            break;
        case 2:
            document.getElementById("dos").classList.add("two");
            break;
        case 3:
            document.getElementById("tres").classList.add("three");
            break;
        case 4: 
            document.getElementById("cuatro").classList.add("four");
            break;
        case 5:
            document.getElementById("cinco").classList.add("five");
            break; 
        case 6: 
            document.getElementById("seis").classList.add("six");
            break;
        default:
            break; 
    }
}

function verificar_suma(x, target_suma){
    var contador = 0;
    for(var j=0; j<x; j++){
        if(valores[j] == target_suma)   contador++;
    }
    return contador;
}

// ---------------- VARIABLES ---------------------
               var btn_lanzar = document.getElementById("_btn-lanzar"),
                cont_lanzadas = 0,
    limite_alcanzado, iguales = false,
    primer_operando, segundo_operando, primera_suma, i, sumas_iguales_cont = 0,
                      valores = new Array(20);

// ---------------- EVENTOS -----------------------
btn_lanzar.addEventListener('click', function(){
    var result = generateRandomNumber(1,6);
    cont_lanzadas++;
    // Validamos si el número de lanzadas ha alcanzado el número máximo
    if(cont_lanzadas == 3){
        limite_alcanzado = true;
        cont_lanzadas = 1;          // reseteamos el contador
    }
    if(cont_lanzadas == 1)    primer_operando = result;
    if(cont_lanzadas == 2) {
        segundo_operando = result;
        primera_suma = primer_operando + segundo_operando;
        valores[i] = primera_suma;
        sumas_iguales_cont = verificar_suma(i, primera_suma);
        i++;
        console.log(sumas_iguales_cont);
        if(i == 20)     i =0;
    }   
    pintarDado(result, limite_alcanzado);
    if(limite_alcanzado === true)   limite_alcanzado = false;
});