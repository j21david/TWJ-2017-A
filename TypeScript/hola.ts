/**
 * Created by USRDEL on 16/5/17.
 */

//tipos de datops en typeScript

let holaMundo=`

hola
cabezon


`
console.log(holaMundo)


let isDone:boolean=true;


let hex: number=5;

let novias:number=12;



let hola:string="wr'wrw'wr";


let frase="EL numero sdasd ${novias}"

let notas:number[]=[4,43,3,3,3,5,3,3,3,3]

let tupla:[string,number]=["asd",23]


let notSure: any=4;




// Objetos y nuevas variables
interface UsuarioLogin{

    nombre:string,
    apellido:string,
    direccion?:string
}

let usuario:UsuarioLogin ={
    nombre:"dasd",
    apellido:"dada"


};



/// Clases
//
//
//
//
class persona{

    nombre:string;
    apellido:string;
    fechaNacimiento:Date;


    constructor (nombre:string,apellido:string,fechaNacimiento?:Date){

        this.nombre=nombre;
        this.apellido=apellido;
        this.fechaNacimiento=new Date();

    }

    imprimirPersona():UsuarioLogin{

        console.log(this.nombre);
        console.log(this.apellido);
        console.log(this.fechaNacimiento);

        return {

            nombre:this.nombre,
            apellido:this.apellido

        }
    }


    private imprimirNombre(nombre:string):void{


        console.log(nombre)



}






}

let adrian:persona= new persona("jose","david",new Date);

adrian.imprimirPersona()



function Sumarnumeros(numero1:number, numero2:number):number{



    return numero1 + numero2;


}



let objeto={

    nombre:"jose",
    impirmirNombre:function(){

        console.log(this.nombre)

    }

}

