function resultado(){
    var altura = document.getElementById("altura").value; // variable altura
    
    var edad = document.getElementById("edad").value; // variable edad

    if ( altura > 52 && edad > 10){   // la altura deber ser mas de 52 cm y la edad mas de 10 años
        console.log("¡Súbete, chico!"); // si cumple las 2 condiciones 
    } else {
        console.log("Lo siento, chico. Tal vez el próximo año"); // si no cumple las 2 condiciones o una sola 
    }
}


