/**
 * Created by USRDEL on 3/5/17.
 */




// En javascript se define una variable con la palabra reservada <var>

var dos = 2;
var tres = 3
var quince = 15
var diezYSiete = 17;

console.log(dos)
console.log(tres)
console.log(quince)
console.log(dos)
console.log(dos)



// FLoat
var dosPuntoCinco = 2.5;

console.log(dosPuntoCinco)

var verdaderoFalso= true
var falso = false;
var nombre = 'Jose';
var negativo = -4;
var fechaNacimiento= new Date();

var cuatroString = '4';
cuatroString = 4;
cuatroString = true;
cuatroString = false;
cuatroString = new Date();
cuatroString = undefined;
cuatroString = null;

var variable;

console.log(variable)

// Saber el tipo de variable que es < typeof >
var numero2 = 2;
console.log(typeof numero2);


// Arreglos

var arreglo =[1,'jose',2.4,true, null , undefined,Date(), -2,{a:'b'}];

console.log(arreglo)





// Objetos JSON

var jose = {

    id:1,
    nombre:'jose',
    createdAt: new Date(),
    updatedAt: new Date(),
    casado: false,
    prestamos: false,
    hijos:null,
    altura:1.80,
    negativo:-1,
    mascota:{

        nombre: 'Lucas',
        fechaNacimiento: new Date()

    }

};
 //Concatenar objeto y un string

console.log(jose , "Hola");


jose.altura = {

    altura:1.8,
    ancho:23


}

console.log(jose.altura)

delete jose.altura;

console.log(jose.mascota.fechaNacimiento)



var nuevoObjeto = {

    papas : ['chola','chaucha'],
    cebollas : ['paiteña','perla']


}

console.log(nuevoObjeto.papas[1]);



var arregloDeObjetos =[

    {
        id:1,
        nombre: 'jose'

    },
    {
        id:2,
        nombre:'juan'
    }
    ]

console.log(arregloDeObjetos)
//splice( 'Delimita la posicion en que vamos a trabjar', 'numero de objetos a eliminarse')

arregloDeObjetos.splice(0,1)
console.log(arregloDeObjetos)

//Funcion para agregar elementos


arregloDeObjetos.splice(0,0,{id : 3 ,nombre: 'Carmen'})

console.log(arregloDeObjetos)









