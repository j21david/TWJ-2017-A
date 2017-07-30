import { Component } from '@angular/core';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})




export class AppComponent {
  usuario:UsuarioInt = {
    nombre:"",
    apellido:"Gonzalez"
  };
  parrafo:string = "";

  url:string="https://angular.io";
  src:string="https://angular.io/resources/images/logos/angular/angular.png"




  constructor(){
    this.usuario.nombre = "Jose";
    this.parrafo = "Mi mama me mima";

    setTimeout(()=>{
      this.usuario.nombre = "Jose"

    },3000);
  }

  holaMundo(){
    console.log("Hola mundo");
  }



  saludar(nombre:string,
          apellido?:string):string{
    return `Hola ${nombre} ${apellido}`;
  }

  cambiarNombre():void{

    console.log()

  }


}




interface UsuarioInt{
  nombre:string,
  apellido:string
}
