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
