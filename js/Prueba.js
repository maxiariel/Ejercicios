const ejercicio1= (cadena)=>{
  
   if(typeof cadena === 'number'){
     console.log("Esto es un numero, por favor ingrese un texto")
   }else if (typeof cadena ==='boolean'){
    console.log("Esto es un boolean,por favor ingrese un texto")
   }else if(typeof cadena === "string"){
     console.log(`La cantidad de caracteres es ${cadena.length}.`)
   }else{
     console.log("No se ingreso ningun caracter")
   }
  }
  
   ejercicio1()
   ejercicio1(5)
   ejercicio1(false)
   ejercicio1("hola fernanda")

   const ejercicio2 =(cadena)=>{
     if(typeof cadena==="number"){
       console.log("Eso no es un Texto")
     }else if (typeof cadena=== "boolean"){
       console.log("Es un boolean ingrese un Texto")
     }else if(typeof cadena==="string"){
       console.log(cadena.substring(0,4))
     }else{
       console.log("eso no es un caracter")
     }
   };
  
  ejercicio2(2)
  ejercicio2(true)
  ejercicio2()
  ejercicio2("Hola mundo")

const ejercicio3 = (texto,separar=null)=>{
   if(typeof texto==="number"){
       console.log("Eso no es un Texto")
     }else if (typeof texto=== "boolean"){
       console.log("Es un boolean ingrese un Texto")
     }else if(typeof texto==="string"){
       console.log(texto.split(separar))
     }else{
       console.log("eso no es un caracter")
     }
}
ejercicio3 ("vamos a ver si funciona asi"," ")

const ejercicio4 = (cadena="",repetir=undefined)=>{
  if (typeof cadena==="number"){
    console.log("Ingrese una cadena de texto")
  }else if(!cadena){
    console.log("no ha ingresado una cadena de texto ")  
  }else if (repetir===0){
    console.log("No se puede ingresar 0 veces")
  }else if(repetir===undefined){
    console.log("Ingrese una cantidad")
  }else {
    for(let i=1;i<=repetir;i++){
      console.log((i),cadena)
    }
  }
}
ejercicio4()
ejercicio4("hola mundo",)
ejercicio4("hola mundo",0)
ejercicio4("Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti voluptas necessitatibus quam minus recusandae, dignissimos veniam libero, dolore dolorum, beatae tenetur a illum ex quis architecto blanditiis rerum quisquam eveniet!",3)


const ejercicio5 =(cadena="")=>{
  if(typeof cadena==="number"){
   console.log("eso no es una cadena de texto")
  }else if(!cadena){
    console.log("ingrese una cadena de texto")
  }else{
    console.log(cadena.split("").reverse().join(""))
  }
  
}
ejercicio5("en reversa")

const ejercicio6=(cadena="",palabra="")=>{
  if (!cadena){
  console.log(" no ingresaste una cadena")
} if (!palabra){
  console.log(" no se ingreso palabra a buscar")
}
let texto=0;
let cantidadVeces=0;

  while(texto!==-1){
    texto=cadena.indexOf(palabra,texto)
    if(texto!==-1){
      texto++;
      cantidadVeces++;
    }
  }
  console.log(`En la cadena ingresa la palabra ${palabra} se repite ${cantidadVeces} veces.`);

}
ejercicio6("hola mundo hola pais hola ","hola")



const ejercicio7=(palabra="")=>{
  if (!palabra){
    return console.log("no ingresaste ninguna palabra")
  }
  if(palabra===palabra){
    palabra= palabra.toUpperCase()
  }
  if(palabra===palabra.split("").reverse().join("")){
  console.log(`La palabra ${palabra} es un palindromo`)
  }else{
    console.log(`La palabra ${palabra} NO es palindroma `)
  }
}

ejercicio7()
ejercicio7("MeNeM")
ejercicio7("hola")


const ejercicio8=(texto="",eliminar="")=>{
  if (!texto){
    return console.log("No se ha ingresado ningun texto")
  }
  if (!eliminar){
    return console.log("Por favor ingrese el caracter a eliminar")
  }else{
    console.log(texto.replace(new RegExp(eliminar,"ig"),""))
  }
}
ejercicio8();
ejercicio8("abc1,abc2,abc3,abc4 y abc5")
ejercicio8("abc1,abc2,abc3,abc4 y abc5","abc")