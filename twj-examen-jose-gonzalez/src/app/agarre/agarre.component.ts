import {Component, OnInit} from '@angular/core';
import {Http} from "@angular/http";
import 'rxjs/add/operator/map';
import {AgarreClass} from "../../../src/app/Clases/AgarreClass";




@Component({
  selector: 'app-agarre',
  templateUrl: './agarre.component.html',
  styleUrls: ['./agarre.component.css']
})
export class AgarreComponent implements OnInit {


  agarres:AgarreClass[]=[];
  nuevoAgarre:AgarreClass=new AgarreClass("");

  constructor(private _http:Http) { }

  ngOnInit() {
    console.log('NuevoUsuario: ',this.nuevoAgarre);

    this._http.get("htpp://localhost:1337/Agarre").subscribe(


      respuesta=>{let rJson:AgarreClass[]=respuesta.json();
        this.agarres=rJson;

        console.log("Usuarios:",this.agarres)},error=> {
        console.log("Error", error)
      }
    )

  }

  crearAgarre(){
    console.log(this.nuevoAgarre.Nombre);
    console.log(this.nuevoAgarre.DineroGastado);
    console.log(this.nuevoAgarre.Veces);
    /*
     let usuario = {
     nombre:this.nuevoUsuario.nombre
     };
     */

    this._http
      .post("http://localhost:1337/Agarre",this.nuevoAgarre)
      .subscribe(
        respuesta=>{
          let respuestaJson = respuesta.json();
          console.log('respuestaJson: ',respuestaJson);
          this.agarres.push(respuestaJson);
        },
        error=>{
          console.log("Error",error);
        }
      )
  }

}
