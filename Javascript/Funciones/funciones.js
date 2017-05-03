/**
 * Created by USRDEL on 3/5/17.
 */

// void

function holaMundo() {

    console.log('Hola Mundo');

}



holaMundo();


//El doble de un entero

function dobleEntero(numero) {

     return numero*2;



}

console.log(dobleEntero(2));

function multi(numero , numero2) {
    return numero * numero2;
}

console.log(multi(3,4))

var multiplicacion = multi;

console.log(multiplicacion(4,5))

// void

var hola = function () {
    console.log('hola')

}
hola()

console.log('Hola', hola)


function hasAlgo(algo){

    algo()


}

hasAlgo(function () { console.log('Hola')

})







