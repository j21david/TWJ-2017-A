import {Component, OnInit} from '@angular/core';
import {Http} from "@angular/http";
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  nombre: string = "Adrian";

  planetas : PlanetaStarWars[] =[];

  usuarios:UsuarioClass[]=[];
  nuevoUsuario:UsuarioClass = new UsuarioClass("");

  //command + a  y luego command command+alt+l

  arregloUsuarios = [
    {
      nombre: "Adrian",
      apellido: "Eguez",
      conectado:true
    }, {
      nombre: "Mashi",
      apellido: "Correa",
      conectado:true
    }, {
      nombre: "Abdala",
      apellido: "Bucaram",
      conectado:false
    }, {
      nombre: "Juan Jose",
      apellido: "Flores",
      conectado:true
    }]

  constructor(private _http:Http) {
    //Inicia la clase
    //PERO EL COMPONENTE NO ESTA LISTO!!!!
  }

  ngOnInit() {
    //Esta listo el componente

    console.log('NuevoUsuario: ',this.nuevoUsuario)

    this._http.get("htpp://localhost:1337/Usuario").subscribe(


      respuesta=>{let rJson:UsuarioClass[]=respuesta.json();
      this.usuarios=rJson;

      console.log("Usuarios:",this.usuarios)},error=> {
        console.log("Error", error)
      }
    )

  }
  cambiarNombre(): void {
    console.log("Entro");

    this.nombre = "Rafico a Lenin";

  }

  cambiarOtroNombre() {
    this.nombre = "Lenin a Rafico";
  }

  cambiarNombreInput(nombreEtiqueta) {
    console.log(nombreEtiqueta.value);
    console.log(nombreEtiqueta.type);
    console.log(nombreEtiqueta.placeholder);


    this.nombre = nombreEtiqueta.value;

  }


  crearUsuario(){
    console.log("Entro a crear Usuario");
    /*
     let usuario = {
     nombre:this.nuevoUsuario.nombre
     };
     */

    this._http
      .post("http://localhost:1337/Usuario",this.nuevoUsuario)
      .subscribe(
        respuesta=>{
          let respuestaJson = respuesta.json();
          console.log('respuestaJson: ',respuestaJson);
          this.usuarios.push(respuestaJson);
        },
        error=>{
          console.log("Error",error);
        }
      )

  }




  eliminarUsuario(usuario:UsuarioClass,indice:number){

    console.log("Indice:",this.usuarios.indexOf(usuario));

    console.log("Indice con index: ",indice);

    this.usuarios.splice(indice,1);

    console.log("Entro a crear Usuario");
    /*
     let usuario = {
     nombre:this.nuevoUsuario.nombre
     };
     */

    this._http
      .post("http://localhost:1337/Usuario",this.nuevoUsuario)
      .subscribe(
        respuesta=>{
          let respuestaJson = respuesta.json();
          console.log('respuestaJson: ',respuestaJson);

        },
        error=>{
          console.log("Error",error);
        }
      )
  }

  cargarPlanetas(){
    this._http
      .get("http://swapi.co/api/planets")
      //.map(response=>response.json()
      .subscribe(
        (response)=>{
          console.log("Response:",response);

          console.log(response.json());

          let respuesta = response.json();

          console.log(respuesta.next);

          this.planetas = respuesta.results;
          //Arreglo que tengo con un nuevo atributo imagen

         this.planetas=this.planetas.map(
           (planeta)=>{
             planeta.imagenURL ="/assets/Images/"+planeta.name+".png";
             return planeta;
           }

         );


        },
        (error)=>{
          console.log("Error:",error);
        },
        ()=>{
          console.log("Finally");
        }

      )
  }

}


interface PlanetaStarWars{
  name:string,
  rotation_period: string,
  orbital_period: string,
  diameter: string,
  climate: string,
  gravity: string,
  terrain: string,
  surface_water: string,
  population: string,
  residents:string[],
  imagenURL:string,
  films: string[],
  created: string,
  edited: string,
  url:string
}



class UsuarioClass {
  //nombre:string;
  constructor(public nombre?:string,public  id?:number,public createdAd?:Date,public updateAd?:Date ){
  //this.nombre=nombre;
  }



}
