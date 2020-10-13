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
   ejercicio1("asi esta la cosa pais")

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

