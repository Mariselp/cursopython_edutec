/* x = 180
console.log(x)
function lecText() {
    let x =18 
    //console.log(x)
    if (true) {
        x = 71;
        console.log(x);

    }
    console.log(x)
}
lecText()




console.log(x)*/
/* var person = {

    firstName: "John",
  
    lastName: "Doe"
  
  };
  
  alert(person.firstName);
  console.log(person.firstName)

  var persona = {
    name: "John",
    age: 50
    };
    alert(persona.name + " is " +persona.age )

    var frutas = ["Manzana", "Plátano", "Naranja"];

for (i=0;i<3;i++) {

  console.log(frutas[i]);

} */
'use strict'

const grande    = document.querySelector('.grande')
const punto     = document.querySelectorAll('.punto')
console.log(punto)
// Cuando CLICK en punto
    // Saber la posición de ese punto
    // Aplicar un transform translateX al grande
    // QUITAR la clase activo de TODOS puntos
    // AÑADIR la clase activo al punto que hemos hecho CLICK

// Recorrer TODOS los punto
punto.forEach( ( cadaPunto,i )=> {
    // Asignamos un CLICK a cadaPunto
    punto[i].addEventListener('click',()=>{

        // Guardar la posición de ese PUNTO
        let posicion  = i
        // Calculando el espacio que debe DESPLAZARSE el GRANDE
        let operacion = posicion * -20

        // MOVEMOS el grand
        grande.style.transform = `translateX(${ operacion }%)`

        // Recorremos TODOS los punto
        punto.forEach( ( cadaPunto,i )=>{
            // Quitamos la clase ACTIVO a TODOS los punto
            punto[i].classList.remove('activo')
        })
        // Añadir la clase activo en el punto que hemos hecho CLICK
        punto[i].classList.add('activo')

    })
})



