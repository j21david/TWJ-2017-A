

// Comentarios


console.log('Hola mundo');


var jose ={

    nombre:"Jose",
    apellido:"Gonzalez",
    fechaNacimiento:new Date(),
    imprimir: function () {

        console.log(this.nombre,this.apellido)
    },

    año:function(){
        return this.fechaNacimiento.getFullYear()
    },

    diferenciaEdad:function(edadAComparar){

        return Math.abs(edadAComparar - this.fechaNacimiento.getFullYear())


    }



}

jose.imprimir()
console.log(jose.año())
console.log(jose.diferenciaEdad(2013))
