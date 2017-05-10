/**
 * Created by USRDEL on 9/5/17.
 */
var chao=`hiksa`

var hola= `
<h1>Hola</h1> ${chao}


<p>Hola amigos de youtube</p>


`


//FAT ARROW FUNCTIONS
var holaMundo=function(){console.log("HOla Mundo")}
holaMundo()

var holaMundo2=()=>{return "Hola mundo2"}
var holaMundo2=()=>"Hola mundo2"
var holaMundo3=(nombre)=>`Hola: ${nombre}`
holaMundo3(`Vera`)

var holaMundo3=nombre=>`Hola: ${nombre}`
holaMundo3(`Vera`)


// funciones 7 Object Iteral
function definirObjetoUsuario(nombre){

    return {
        nombre,
        saludar: function(){

            return "Hola"+this.nombre;
        },
        twittero:function(tweet){

            return this.nombre+"twiteo sobre: "+tweet;
        }

    }




}

// LET es el nuevo Var

let nuevaFuncion = (nombre, apellido)=>{

    let usuario = {
        nombre:nombre,
        apellido
    }

    let usuario2 = {
        nombre
    }
    console.log(usuario2.nombre)

};


nuevaFuncion(`jose`,`david`)



// FOR EACH
//OPERADORES

let arregloNumeros = [1,2,3,4,5,6];

let resultado = arregloNumeros.forEach((numero,indice)=>{
        //console.log(indice,numero);

    })



function forc(arreglo,funcion){

    for(let i=0;i<arreglo.length;i++){
        funcion(arreglo[i],i,arreglo)

    }


}


forc(arregloNumeros,(valor,indice)=>{
    console.log("Nuevo for",indice,valor)
})




// MAp
let arreglo = [8,6,9,10,4,2,7,8];

let resultado1 = arreglo.map((valor,indice)=>{

        return valor/5;

});


console.log(resultado1)






let arreglos=[{
    nombre:"Juan",
    fechaCreacion: new Date(),
    añoCreacion: new Date().getFullYear()
},
    {
        nombre:"Maria",
        fechaCreacion: new Date(),
        fechaCreacion: new Date(),
        añoCreacion: new Date().getFullYear()



    }];

