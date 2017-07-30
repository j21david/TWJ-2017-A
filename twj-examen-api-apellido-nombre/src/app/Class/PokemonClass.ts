/**
 * Created by Jose on 17/6/2017.
 */
export class PokemonClass {

  constructor(public id?:number,
              public name?:string,
              public base_experience?:number,
              public height?:number,
              public is_default?:boolean,
              public order?:number,
              public weight?:number,
              public abilities?:object[],
              public forms?:object[],
              public game_indices?:object[],
              public held_items?:string[],
              public moves?:object[],
              public species?:object[],
              public stats?:object[],
              public types?:object[],
              public imagenURL?:string
            ){
  }

}
