//la cantidad de caracteres que se escribieron en una cadena


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

   console.log("-----------------------")

   //sustrae la cantidad de caracteres q elijas de una cadena de texto

   const ejercicio2 =(cadena,cantidad)=>{
     if(typeof cadena==="number"){
       console.log("Eso no es un Texto")
     }else if (typeof cadena=== "boolean"){
       console.log("Es un boolean ingrese un Texto")
     }else if(typeof cadena==="string"){
       console.log(cadena.substring(0,cantidad))
     }else{
       console.log("eso no es un caracter")
     }
   };
  
  ejercicio2(2)
  ejercicio2(true)
  ejercicio2()
  ejercicio2("Hola mundo",4)
  
  console.log("-----------------------")

  //Separa el caracter que uno quiera de  una cadena de texto en un array

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

console.log("-----------------------")

//repite el texto o cadena la cantidad de veces que uno quiera 


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

console.log("-----------------------")

//te devuelve la cadena ingresada escrita al revez
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

console.log("-----------------------")

//Buscar en una cadena de texto la palabra q se repite y te da como resultado la cantidad de veces que se repite

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

console.log("-----------------------")

//te dice si una palabra es palindroma, osea que se escribie y se lee igual del derecho y del revez

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

console.log("-----------------------")

//eliminar uno o varios caracteres del texto que deseen

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

console.log("-----------------------")

//numero aleatorio entre un numero y otro eligiendo parametro minimo y maximo

const ejercicio9=(min="number",max="number")=>{
  
  if(typeof min!=="number"){
    return console.log("Ingresa un numero par empezar")
  }if(typeof max !=="number"){
    return console.log("ingrese un numero para terminar")
  }else{
  console.log(Math.round(Math.random()*(max-min)+min))
  }  
}
ejercicio9("hola","hola")
ejercicio9(5,"hola")
ejercicio9(501,600)

console.log("-----------------------")



const ejercicio9b=(min="number",max="number")=>{
  switch (ejercicio9b) {
    case  min!=="number" :
     console.warn("ese no es un numero")
     break;
    case  max!=="number":
     console.warn("ese no es un numero")
     break; 
      default:console.log(Math.round(Math.random()*(max-min)+min))
     break;
  }
}
ejercicio9b()
ejercicio9b(5,"hola")
ejercicio9b(501,600)


console.log("-----------------------")


const ejercicio10=(numero=0)=>{
if (!numero) return console.warn("no ingresaste ningun numero")
if (typeof numero!=="number") return console.info("eso no es un numero")    
if (numero.toString().split("").reverse().join("")==numero) {
  return console.info(`el numero ${numero} ingresado es capicua`)
}else{
  console.info(`el numero ${numero} ingresado no es capicua`)
}  
}

ejercicio10(2235)

console.log("-----------------------")

const ejercicio11=(numero)=>{
  if (typeof numero !=="number") return console.info("el dato ingresado no es un numero")
  if (numero=== 0) return console.info("el numero 0 no puede ser factorial")
  if (Math.sign(numero)=== -1) return console.info("el numero factorial no puede ser negativo")
  
  let factorial = 1;
  for (let i = numero; i > 1; i--){
    factorial=factorial*i
  }
  return console.log(`el factorial del numero ${numero} es igual a ${factorial}`)
}

ejercicio11("")
ejercicio11()
ejercicio11(0)
ejercicio11(-2)
ejercicio11(7)

console.log("-----------------------")


const ejercicio12=(numero)=>{
  if (typeof numero !=="number") return console.info("el dato ingresado no es un numero")
  if (numero=== 0) return console.info("el numero 0 no puede ser primo")
  if (Math.sign(numero)=== -1) return console.info("el numero primo no puede ser negativo")

  let primo= false
  for (let i=2; i< numero;i++){
    if((numero % i)=== 0)
    primo=true
  }
  if (primo===true) return console.log(`el numero ${numero} no es primo`)
  else return console.log(`el numero ${numero} es primo`)
}

ejercicio12()
ejercicio12("")
ejercicio12(0)
ejercicio12(-78)
ejercicio12(159)
ejercicio12(650)

console.log("-----------------------")


const ejercicio13=(numero)=>{
if (typeof numero !=="number") return console.info("el dato ingresado no es un numero")

let dividir=2
if((numero % dividir)=== 0) return console.log(`el numero ${numero} es par`)
else return console.log(`el numero ${numero} es impar`)

}

ejercicio13("5")
ejercicio13(0)
ejercicio13(-58)
ejercicio13(99)

console.log("-----------------------")

const ejercicio14=(grados,unidad)=>{
   if (typeof grados !=="number") return console.info("el dato ingresado no es un numero")
   if(typeof unidad!=="string") return console.warn("no es una unidad")
   if(unidad!=="c"||"f") return console.warn("esa no es una unidad")
   
   

   if ( unidad === "c"){
     let gradosc= undefined
   gradosc=(grados*(9/5)+32)      
   let gradosf= gradosc
      return console.log(`los grados ${grados}ºC equivalen a ${gradosf}ºF`)
    }
   if(unidad ==="f"){
     let gradosf =undefined
     gradosf=((grados-32)*5/9)
     let gradosc= gradosf
     return console.log(`los grados ${grados}ºF equivalen a ${gradosc}ºC`)
   }

   

}
ejercicio14(32,"f")
ejercicio14(0,"c")
ejercicio14(40,"a")