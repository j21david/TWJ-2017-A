import { Component, OnInit } from '@angular/core';
import {Http} from "@angular/http";
import 'rxjs/add/operator/map';
import {PokemonClass} from "../../../src/app/Class/PokemonClass";

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  pokemons: PokemonClass[] = [];

  constructor(private _http: Http) {
  }

  ngOnInit() {
  }

  cargarPokemons() {
    this._http
      .get("http://pokeapi.co/api/v2/pokemon/")
      //.map(response=>response.json()
      .subscribe(
        (response) => {
          console.log("Response:", response);

          console.log(response.json());

          let respuesta = response.json();

          console.log(respuesta.next);

          this.pokemons = respuesta.results;


          //Arreglo que tengo con un nuevo atributo imagen





          this.pokemons=this.pokemons.map(

           (pokemon)=>{
           pokemon.imagenURL ="/assets/"+pokemon.name+".png";
           return pokemon;
           }

           );


        },
        (error) => {
          console.log("Error:", error);
        },
        () => {
          console.log("Finally");
        }
      )
  }

}

