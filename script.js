let h3 = document.querySelector("h3");
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let body = document.getElementById("gradient");
let randomGradient = document.getElementById("randomGradient");

function setGradient() {
    // generar el gradient capturando los codigos de color
    body.style.background = 
    `linear-gradient(to right, 
        ${color1.value}, 
        ${color2.value})`;

    h3.textContent = body.style.background + ";";
    // Ingresamos en el h3 los valores de grandiente con body.style.background.
}
function gradientInitial(){

    color1.value = getColorRandom();
    color2.value = getColorRandom();  

    body.style.background = `linear-gradient(to right, 
        ${color1.value}, 
        ${color2.value})`;

      
    h3.textContent = body.style.background + ";";
}

function getColorRandom() {
    const hexadecimal = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let colorRandom = "#";
    let indexRandom = 0;

    for (let i = 0; i < 6; i++) {
        indexRandom = Math.floor( 
            Math.random() * hexadecimal.length
            );

        colorRandom = colorRandom.concat(
            hexadecimal[indexRandom]
            );
    }

    return colorRandom;
}

gradientInitial();
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
randomGradient.addEventListener("click", function(){
    gradientInitial();
});

/*
A continuación, encontrará los 3 archivos para el generador de fondo. Algunas cosas que puedes probar:

1. Escriba el código para que las entradas de color coincidan con el fondo generado en la carga de la primera página.

2. Muestre la propiedad de degradado lineal CSS inicial al cargar la página.

3. BONUS: agregue un botón aleatorio que genere dos números aleatorios para las entradas de color.

También puede ver diferentes comportamientos con el widget Color según el navegador que utilice. Recuerde, todos los navegadores se implementan de manera diferente. ¡Buena suerte!


PD: si tiene alguna pregunta, comuníquese con nuestra comunidad de estudiantes en el canal #js o #helpme en Discord (la Lección 2 proporciona el enlace si aún no se ha unido).
*/